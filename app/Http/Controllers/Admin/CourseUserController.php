<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use App\Models\Classes;
use Inertia\Inertia;

class CourseUserController extends Controller
{
    public function store(Request $request, Course $course)
    {
        $class_id = $request->input('class_id');
        $users = User::where('class_id', $class_id)->get();
        $existingUsers = $course->users()->pluck('id')->toArray();
    
        $newUsers = [];
        foreach ($users as $user) {
            if (!in_array($user->id, $existingUsers)) {
                $newUsers[] = $user;
            }
        }
    
        if (count($newUsers) > 0) {
            $course->users()->saveMany($newUsers, ['class_id' => $class_id]);
            return redirect()->route('courses.users.index', $course)->with('success', 'Users added successfully');
        } else {
            return redirect()->route('courses.users.index', $course)->with('warning', 'All selected users are already in the course');
        }
    }
    
 
    public function index(Course $course)
    {
        $users = $course->users()->with('classes')->get();
    
        $classes = Classes::all();
    
        return Inertia::render('Admin/CourseUsers/Index', [
            'course' => $course,
            'users' => $users,
            'classes' => $classes
        ]);
    }


    public function destroy(Request $request, Course $course, User $user)
    {
        $course->removeUser($user);

        return back();
    }
    public function create(Course $course)
    {
        $classes = DB::table('classes')->pluck('name', 'id');
        return view('courses.users.create', compact('course', 'classes'));
    }
}
