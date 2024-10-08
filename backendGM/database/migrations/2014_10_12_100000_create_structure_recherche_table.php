<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStructureRechercheTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('structurerecherches', function (Blueprint $table) {
            $table->id();
            $table->string('intituleS');
            $table->string('acronyme');
            $table->string('directeur');
            $table->unsignedBigInteger('ced_id')->nullable(); // Foreign key column
            $table->timestamps();

            $table->foreign('ced_id')->references('id')->on('ceds')->onDelete('cascade');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('structure_recherches');
    }
}
