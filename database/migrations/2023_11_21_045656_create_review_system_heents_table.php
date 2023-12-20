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
        Schema::create('review_system_heents', function (Blueprint $table) {
            $table->id();
            $table->string('none')->nullable();
            $table->string('blurring_of_vision')->nullable();
            $table->string('floater')->nullable();
            $table->string('tearing_eye_discharge')->nullable();
            $table->string('eye_redness')->nullable();
            $table->string('eye_itchiness')->nullable();
            $table->string('hearing_changes')->nullable();
            $table->string('nose_bleed')->nullable();
            $table->string('nasal_discharge')->nullable();
            $table->string('ear_discharge')->nullable();
            $table->string('toothache')->nullable();
            $table->string('gum_bleeding')->nullable();
            $table->string('sore_throat')->nullable();
            $table->string('difficulty_swallowing')->nullable();
            $table->string('hoarseness')->nullable();
            $table->string('polydipsia')->nullable();
            $table->string('others_heent_review')->nullable();
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
        Schema::dropIfExists('review_system_heents');
    }
};
