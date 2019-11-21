<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductionUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('production_units', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 150);
            $table->string('location', 150);
            $table->string('cin', 150);            
            $table->string('contact_no', 150);
            $table->string('contact_person', 150);
            //$table->string('email', 150);
            $table->bigInteger('state_id')->nullable();
            $table->text('address')->nullable();                        
            //$table->bigInteger('parent_company_id')->nullable();
            //$table->string('gstn', 150);            
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('production_units');
    }
}
