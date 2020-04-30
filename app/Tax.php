<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tax extends Model
{
    //
    private $fillable = [
        'title',
        'percent',
        'sort_order'
    ];
}
