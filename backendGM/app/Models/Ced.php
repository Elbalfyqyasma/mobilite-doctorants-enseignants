<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Ced extends Model
{
    protected $table = 'ceds';

    protected $fillable = [
        'intitule', 'description'
    ];

    // Additional properties, methods, and relationships can be defined here


}
