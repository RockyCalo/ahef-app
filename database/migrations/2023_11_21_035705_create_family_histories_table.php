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
        Schema::create('family_histories', function (Blueprint $table) {
            $table->id();
            $table->string('hypertension')->nullable();
            $table->string('stroke')->nullable();
            $table->string('heart_disease')->nullable();
            $table->string('high_cholesterol')->nullable();
            $table->string('heart_pain')->nullable();
            $table->string('diabetes')->nullable();
            $table->string('kidney_disease')->nullable();
            $table->string('liver_disease')->nullable();
            $table->string('copd')->nullable();
            $table->string('asthma')->nullable();
            $table->string('mental_abuse_condition')->nullable();
            $table->string('cancer')->nullable();
            $table->string('tuberculosis')->nullable();
            $table->string('leprosy')->nullable();

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
        Schema::dropIfExists('family_histories');
    }
};
