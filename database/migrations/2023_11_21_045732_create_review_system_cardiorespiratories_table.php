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
        Schema::create('review_system_cardiorespiratories', function (Blueprint $table) {
            $table->id();
            $table->string('none')->nullable();
            $table->string('cough')->nullable();
            $table->string('wheezing')->nullable();
            $table->string('cough_with_blood')->nullable();
            $table->string('palpitations')->nullable();
            $table->string('chest_pain')->nullable();
            $table->string('difficult_breathing')->nullable();
            $table->string('others_cardiorespiratories_review')->nullable();
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
        Schema::dropIfExists('review_system_cardiorespiratories');
    }
};
