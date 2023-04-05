<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;

class CourseController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Course/Index', [
            'courses' => Course::all(),
        ]);
    }

    public function edit(Course $course)
    {
        return Inertia::render('Admin/Course/Edit', [
            'course' => $course,
            'modules' => $course->modules,
            'users' => $course->users
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Course/Create');
        
    }

    public function store(StoreCourseRequest $request)
    {
        Course::create($request->all());

        return Redirect::route('admin.course.index');
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:500',
            'image' => 'required|file|max:1024', // Add validation for the image file
            'file' => 'required|file|max:1024', // Add validation for the uploaded file
        ]);
    
        $course = new Course();
        $course->title = $request->title;
        $course->description = $request->description;
    
        // Handle the image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/courses'), $filename);
            $course->image_path = 'images/courses/' . $filename;
        }
    
        // Handle the file upload
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('files/courses'), $filename);
            $course->file_path = 'files/courses/' . $filename;
        }
    
        $course->user_id = auth()->user()->id;
        $course->save();
    
        return response()->json([
            'message' => 'Course created successfully!',
            'course' => $course
        ]);
    }

    public function update(UpdateCourseRequest $request, Course $course)
    {
        $course->update($request->all());

        return Redirect::route('admin.course.edit', $course);
    }

    public function destroy(Request $request, Course $course)
    {
        $course->delete();

        return Redirect::route('admin.course.index');
    }
    public function upload(Request $request, $id)
    {
        $course = Course::findOrFail($id);
    
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('files/courses'), $filename);
            $course->file_path = 'files/courses/' . $filename;
            $course->save();
        }
    
        return response()->json([
            'message' => 'File uploaded successfully',
            'file_path' => $course->file_path
        ]);
    }
    
    public function downloadFile($id)
{
    $course = Course::findOrFail($id);

    return response()->download(public_path($course->file_path));
}


}
