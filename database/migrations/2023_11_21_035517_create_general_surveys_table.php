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
        Schema::create('general_surveys', function (Blueprint $table) {
            $table->id();
            $table->string('conscious')->nullable();
            $table->string('coherent')->nullable();
            $table->string('not_in_cardiorespiratory')->nullable();
            $table->string('blood_pressure')->nullable();
            $table->string('heart_rate')->nullable();
            $table->string('respiratory_rate')->nullable();
            $table->string('temperature')->nullable();
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
        Schema::dropIfExists('general_surveys');
    }
};
