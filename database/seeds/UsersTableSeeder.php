<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(!DB::table('users')->count()) {
            DB::table('users')->insert([
                'name' => 'Rubco Admin',
                'email' =>'rubco@gmail.com',
                'username' => 'admin',
                'password' => bcrypt('admin'),
            ]);
        }
    }
}
