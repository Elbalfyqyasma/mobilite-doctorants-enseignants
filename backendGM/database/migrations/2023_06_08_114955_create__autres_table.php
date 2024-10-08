<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Autres', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('ProductionScientifiques_id'); // Change the data type to unsigned integer
            $table->foreign('ProductionScientifiques_id')->references('id')->on('ProductionScientifiques')->onDelete('cascade');;

            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Autres');
    }


    
};
