<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'intitule',
        'dateD',
        'dateF',
        'descriptionp',
        'invitation',
        'encadrant',
        'travaux',
        'resultatattendu',
        'cadre_mobilite_id',
        'organisme_acceuil_id',
        'user_id'

    ];

    public function cadreMobilite()
    {
        return $this->belongsTo(CadreMobilite::class);
    }


}
