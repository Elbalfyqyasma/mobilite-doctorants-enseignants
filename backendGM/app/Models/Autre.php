<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class Autre extends ProductionScientifique
{
    use HasFactory;

    protected $table = 'autres';

    protected $fillable = ['description','ProductionScientifiques_id'];

    public function productionScientifique(): BelongsTo
    {
        return $this->belongsTo(ProductionScientifique::class, 'ProductionScientifiques_id');
    }
    
   
}



?>