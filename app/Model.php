<?php

namespace App;

use Illuminate\Database\Eloquent\Model as LModel;

class Model extends LModel
{
    //
    protected $fillable = [
        'title', 
        'category_id'
    ];    

}
