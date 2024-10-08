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
        Schema::create('Articles', function (Blueprint $table) {
            $table->increments('id');
            $table->date('datePub');
            $table->integer('numPage');
            $table->string('titreR');
            $table->string('volumeR');
            $table->unsignedInteger('ProductionScientifiques_id'); // Change the data type to unsigned integer
            $table->foreign('ProductionScientifiques_id')->references('id')->on('ProductionScientifiques');
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
        Schema::dropIfExists('Articles');
    }
};
