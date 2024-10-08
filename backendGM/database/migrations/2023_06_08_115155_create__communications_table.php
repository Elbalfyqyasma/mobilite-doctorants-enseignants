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
        Schema::create('Communications', function (Blueprint $table) {
            $table->increments('id');
            $table->string('intituleC');
            $table->string('description');
            $table->date('dateM');
            $table->string('lieuM');
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
        Schema::dropIfExists('Comunications');
    }
};
