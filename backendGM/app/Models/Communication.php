<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Communication extends Model
{
    use HasFactory;
    
    protected $table = 'communications';
    protected $fillable = [
        'intituleC','description','dateM', 'lieuM','ProductionScientifiques_id'
    ];

    public function productionScientifique(): BelongsTo
    {
        return $this->belongsTo(ProductionScientifique::class, 'ProductionScientifiques_id');
    }
    

}
