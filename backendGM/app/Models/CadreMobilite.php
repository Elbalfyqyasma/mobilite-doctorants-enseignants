<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CadreMobilite extends Model
{
    use HasFactory;

    protected $table = 'CadreMobilites';

    protected $fillable = [
        'description','libelleC'
    ];


    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}
?>