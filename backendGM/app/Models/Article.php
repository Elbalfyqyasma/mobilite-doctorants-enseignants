<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Article extends ProductionScientifique
{
    use HasFactory;
    protected $table = 'articles';

    protected $fillable = [
        'datePub',
        'numPage',
        'titreR',
        'volumeR',
        'ProductionScientifiques_id'
    ];

    public function productionScientifique(): BelongsTo
    {
        return $this->belongsTo(ProductionScientifique::class, 'ProductionScientifiques_id');
    }
}
