<?php

use Illuminate\Database\Seeder;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(!DB::table('states')->count()) {
            DB::table('states')->insert([
                'name' => 'Kerala',
                'code' =>'KL',
                'gst_state_code' => '32'
            ]);
            DB::table('states')->insert([
                'name' => 'Tamil Nadu',
                'code' =>'TN',
                'gst_state_code' => '33'
            ]);
            DB::table('states')->insert([
                'name' => 'Karnataka',
                'code' =>'KA',
                'gst_state_code' => '29'
            ]);
        }
    }
}
