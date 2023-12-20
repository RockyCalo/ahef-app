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
        Schema::create('physical_exam_skins', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('cyanosis')->nullable();
            $table->string('pallor')->nullable();
            $table->string('jaundice')->nullable();
            $table->string('dry')->nullable();
            $table->string('cold')->nullable();
            $table->string('wound')->nullable();
            $table->string('rash')->nullable();
            $table->string('petechiae')->nullable();
            $table->string('ecchymosis')->nullable();
            $table->string('acne')->nullable();
            $table->string('mass')->nullable();
            $table->string('suspecious_growth')->nullable();
            $table->string('othes_pe_skin')->nullable();
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
        Schema::dropIfExists('physical_exam_skins');
    }
};
