<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductionScientifique extends Model
{
    use HasFactory;

    protected $table = 'ProductionScientifiques';

    protected $fillable = [
        'titreP','user_id'
    ];

    public function productionScientifique(): BelongsTo
    {
        return $this->belongsTo(ProductionScientifique::class, 'productionscientifique_id');
    }
    
    public function article()
    {
        return $this->hasOne(Article::class, 'ProductionScientifiques_id');
    }
    
    public function communication()
    {
        return $this->hasOne(Communication::class, 'ProductionScientifiques_id');
    }
    public function autre()
    {
        return $this->hasOne(Autre::class, 'ProductionScientifiques_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }

    
}







