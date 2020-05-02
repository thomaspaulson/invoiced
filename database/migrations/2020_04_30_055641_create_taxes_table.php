<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('taxes', function (Blueprint $table) {
            $table->bigIncrements('id');            
            $table->char('title', 255);            
            $table->integer('sort_order')->default(0);	
            $table->timestamps();
            
        });

        Schema::create('product_tax', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('tax_id');            
            $table->integer('percent')->default(0);	   
            //$table->date('apply_from');                     
            $table->timestamps();

            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('tax_id')->references('id')->on('taxes');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_tax');
        Schema::dropIfExists('taxes');
    }
}
