<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCadreMobiliteTable extends Migration
{
    public function up()
    {
        Schema::create('cadremobilites', function (Blueprint $table) {
            $table->increments('id');
            $table->string('libelleC');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('cadremobilites');
    }
}
