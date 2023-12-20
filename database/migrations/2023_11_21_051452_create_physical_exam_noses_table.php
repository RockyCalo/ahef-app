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
        Schema::create('physical_exam_noses', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('asymmetry_deformity')->nullable();
            $table->string('discharge')->nullable();
            $table->string('tenderness')->nullable();
            $table->string('nasal_septum')->nullable();
            $table->string('lesion')->nullable();
            $table->string('masses')->nullable();
            $table->string('others_pe_nose')->nullable();
            // $table->foreignId('patient_children_id')->constrained('patient_children')->onDelete('cascade')->onUpdate('cascade');
            // $table->foreignId('patient_adolescents_id')->constrained('patient_adolescents')->onDelete('cascade')->onUpdate('cascade');
            // $table->foreignId('patient_adults_id')->constrained('patient_adults')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('physical_exam_noses');
    }
};
