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
        Schema::create('tanner_stagings', function (Blueprint $table) {
            $table->id();
            $table->string('pubic_hair_stage')->nullable();
            $table->string('breast_stage')->nullable();
            $table->string('genital_stage')->nullable();
            $table->string('par_with_age')->nullable();
            $table->string('delayed_puberty')->nullable();
            //$table->foreignId('patient_adolescents_id')->constrained('patient_adolescents')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('tanner_stagings');
    }
};
