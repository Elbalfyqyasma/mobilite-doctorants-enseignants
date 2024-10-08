<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StructureRecherche extends Model
{
    use HasFactory;

    protected $table = 'StructureRecherches';

    protected $fillable = [
        'intituleS',
        'acronyme',
        'directeur',
        'ced_id'
    ];

    public function ced() {
        return $this->belongsTo(Ced::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }




}

?>