<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClassesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('classes')->insert([
            ['id' => 1,  'created_at' => null, 'updated_at' => null],
            ['id' => 2, 'created_at' => null, 'updated_at' => null],
            ['id' => 3,  'created_at' => null, 'updated_at' => null],
            ['id' => 4,  'created_at' => null, 'updated_at' => null],
            
        ]);
    }
}

