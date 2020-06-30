<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
	 * php artisan db:seed --class=ProductsTableSeeder
     * @return void
     */
    public function run()
    {
        factory(App\Product::class, 50)->create();
    }
}
