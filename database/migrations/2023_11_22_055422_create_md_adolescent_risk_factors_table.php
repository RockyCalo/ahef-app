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
        Schema::create('md_adolescent_risk_factors', function (Blueprint $table) {
            $table->id();
            $table->string('assist_tool')->nullable();
            $table->string('audit_tool')->nullable();
            $table->string('sasq')->nullable();
            $table->string('e_hits')->nullable();
            $table->string('disability_identification')->nullable();
            $table->string('cbc_rcb')->nullable();
            $table->string('fbs')->nullable();
            $table->string('lipid_profile')->nullable();
            $table->string('hiv_rapid_test')->nullable();
            $table->string('hepatitis_b_and_c')->nullable();
            $table->string('syphilis_rpr')->nullable();
            $table->string('xpert_mtb_test')->nullable();
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
        Schema::dropIfExists('md_adolescent_risk_factors');
    }
};
