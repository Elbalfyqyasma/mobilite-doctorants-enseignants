<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class These extends Model
{
    use HasFactory;

    protected $table = 'theses';

    protected $fillable = [
        'titreT',
        'descriptionT',
        'AnneeThesse',
        'impactRegion',
        'Encadrant',
        'user_id'
    ];


    public function user()
{
  return $this->belongsTo(User::class,'user_id');}

}
