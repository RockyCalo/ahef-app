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
        Schema::create('medical_surgical_histories', function (Blueprint $table) {
            $table->id();
            $table->string('asthma')->nullable();
            $table->string('allergies')->nullable();
            $table->string('allergies_to_medicines')->nullable();
            $table->string('injury_accident')->nullable();
            $table->string('hearing_problem')->nullable();
            $table->string('vision_problem')->nullable();
            $table->string('heart_disease')->nullable();
            $table->string('mental_conditions')->nullable();
            $table->string('cancer')->nullable();
            $table->string('other_organ_disorder')->nullable();
            $table->string('previous_hospitalization')->nullable();
            $table->string('previous_surgeries')->nullable();
            $table->string('others_medical_history')->nullable();
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
        Schema::dropIfExists('medical_surgical_histories');
    }
};
