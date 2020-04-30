<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    private $fillable = [
        'name',
        'price',
        'taxable'
    ];

}
