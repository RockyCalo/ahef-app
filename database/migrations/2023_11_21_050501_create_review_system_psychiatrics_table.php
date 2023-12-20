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
        Schema::create('review_system_psychiatrics', function (Blueprint $table) {
            $table->id();
            $table->string('none')->nullable();
            $table->string('problem_in_concentration')->nullable();
            $table->string('peers_of_carryingout')->nullable();
            $table->string('easily_distracted')->nullable();
            $table->string('excessive_overactivity')->nullable();
            $table->string('extreme_changes')->nullable();
            $table->string('extreme_mood_changes')->nullable();
            $table->string('excessive_fears')->nullable();
            $table->string('difficulty_in_social_interact')->nullable();
            $table->string('sleep_difficulties')->nullable();
            $table->string('hallucinations')->nullable();
            $table->string('disruptive')->nullable();
            $table->string('impulsivity')->nullable();
            $table->string('severe_tantrums')->nullable();
            $table->string('physical_aggression')->nullable();
            $table->string('suicidal_thoughts')->nullable();
            $table->string('others_psychiatric_review')->nullable();
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
        Schema::dropIfExists('review_system_psychiatrics');
    }
};
