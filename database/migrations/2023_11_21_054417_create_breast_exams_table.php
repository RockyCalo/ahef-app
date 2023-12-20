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
        Schema::create('breast_exams', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('asymmetry')->nullable();
            $table->string('nipple_retraction')->nullable();
            $table->string('mass_nodule')->nullable();
            $table->string('discharge')->nullable();
           // $table->foreignId('patient_adolescents_id')->constrained('patient_adolescents')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('breast_exams');
    }
};
