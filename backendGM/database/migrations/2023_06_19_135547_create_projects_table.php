<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('intitule');
            $table->date('dateD');
            $table->date('dateF');
            $table->text('descriptionp');
            $table->string('invitation');
            $table->string('encadrant');
            $table->text('travaux');
            $table->text('resultatattendu');
            $table->unsignedInteger('cadre_mobilite_id')->nullable(); // Change to unsignedInteger
            $table->unsignedBigInteger('organisme_acceuil_id')->nullable();
            $table->unsignedBigInteger('user_id'); // Add this foreign key column

            $table->timestamps();

            $table->foreign('cadre_mobilite_id')->references('id')->on('cadremobilites');
            $table->foreign('organisme_acceuil_id')->references('id')->on('organisme_acceuils')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); // Add this foreign key constraint


        });
    }

    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->dropForeign(['cadre_mobilite_id']);
            $table->dropForeign(['organisme_acceuil_id']);
            $table->dropForeign(['user_id']); // Drop the foreign key constraint

        });

        Schema::dropIfExists('projects');
    }
}
