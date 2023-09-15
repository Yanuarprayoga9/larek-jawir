<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 0 ;$i<20;$i++){
            DB::table('news')->insert([
                'title' =>fake()->title(),
                'description' => fake()->paragraph(),
                'category' => fake()->sentence(),
                'author' => fake()->name(),
            ]);
        }
    }
}
