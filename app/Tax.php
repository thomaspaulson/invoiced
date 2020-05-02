<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tax extends Model
{
    //
    protected $fillable = [
        'title',
        'percent',
        'sort_order'
    ];
}
