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
$existing_users = $course->users()->where('course_user.class_id', $class_id)->pluck('users.id')->toArray();
$new_users = User::where('class_id', $class_id)
    ->whereNotIn('id', $existing_users)
    ->get();
$user_ids = [];
foreach ($new_users as $user) {
    $user->courses()->attach($course->id, ['class_id' => $class_id]);
    $user_ids[] = $user->id;
}
if (count($user_ids) > 0) {
    return redirect()->route('courses.users.index', $course)
        ->with('success', 'New users added successfully');
} else {
    return back()->withErrors(['class_id' => 'All users are already enrolled in this course.'])
        ->withInput($request->all());
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
