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
        Schema::create('md_adult_risk_factors', function (Blueprint $table) {
            $table->id();
            $table->string('assist_tool')->nullable();
            $table->string('audit_tool')->nullable();
            $table->string('fagerstrom_test')->nullable();
            $table->string('disability_identification')->nullable();
            $table->string('lipid_profile')->nullable();
            $table->string('fbs')->nullable();
            $table->string('tuberculin_skin_test')->nullable();
            $table->string('xpert_mtb')->nullable();
            $table->string('hiv')->nullable();
            $table->string('hepatitis_b_and_c')->nullable();
            $table->string('liver_ultrasound')->nullable();
            $table->string('annual_low_dose')->nullable();
            $table->string('upper_gi_series')->nullable();
            $table->string('upper_endoscopy')->nullable();
            $table->string('ebv_dna')->nullable();
            // $table->foreignId('patient_childrens_id')->constrained('patient_children')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('md_adult_risk_factors');
    }
};
