<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mews\Purifier\Facades\Purifier;

class Course extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function booted()
    {
        static::creating(function($course) {
            $course->content = Purifier::clean($course->content);
        });

        static::updating(function($course) {
            $course->content = Purifier::clean($course->content);
        });
    }

    public function modules()
    {
        return $this->hasMany(Module::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    public function addUser($class_id)
    {
        $users = User::where('class_id', $class_id)->get();
    
        foreach ($users as $user) {
            $this->users()->attach($user->id, ['class_id' => $class_id]);
        }
    }
    
    
    public function removeUser($user)
    {
        $this->users()->detach($user->id);
    }
}
