<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganismeAcceuil extends Model
{
    use HasFactory;


    protected $table = 'organisme_acceuils'; // Specify the table name if different from the model name

    protected $fillable = ['idO', 'intitule', 'pays', 'ville']; // Define the fillable attributes

    // Optional: Define any relationships with other models
}

?>