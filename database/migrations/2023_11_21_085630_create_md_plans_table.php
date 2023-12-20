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
        Schema::create('md_plans', function (Blueprint $table) {
            $table->id();
            $table->string('proper_nutrition')->nullable();
            $table->string('weight_management')->nullable();
            $table->string('physical_activity')->nullable();
            $table->string('sleeping_habit')->nullable();
            $table->string('screen_time')->nullable();
            $table->string('personal_hygiene')->nullable();
            $table->string('selfcare_advice')->nullable();
            $table->string('injury_prevention')->nullable();
            $table->string('safe_sexual_practice')->nullable();
            $table->string('avoiding_harmful_use')->nullable();
            $table->string('routine_vaccination')->nullable();
            $table->string('appropriate_health')->nullable();
            $table->string('maintenance_medication')->nullable();

            $table->text('other_plans')->nullable();

            $table->string('annual_oral_screening')->nullable();
            $table->string('color_testing')->nullable();


            $table->string('assist_tool')->nullable();
            $table->string('audit_tool')->nullable();
            $table->string('fagerstrom_test')->nullable();
            $table->string('disability_identification')->nullable();
            $table->string('cbc_rbc')->nullable();
            $table->string('lipid_profile')->nullable();
            $table->string('fbs')->nullable();
            $table->string('tuberculin_skin_test')->nullable();
            $table->string('xpert_mtb')->nullable();
            $table->string('hiv')->nullable();
            $table->string('xray')->nullable();
            $table->string('hepatitis_b_and_c')->nullable();
            $table->string('liver_ultrasound')->nullable();
            $table->string('annual_low_dose')->nullable();
            $table->string('upper_gi_series')->nullable();
            $table->string('upper_endoscopy')->nullable();
            $table->string('ebv_dna')->nullable();


            $table->string('dartc')->nullable();
            $table->string('developmental_pedia_assessment')->nullable();
            $table->string('mhgap_trained')->nullable();
            $table->string('sped')->nullable();
            $table->string('vawc')->nullable();
            $table->string('protection_center')->nullable();
            $table->string('specialist_for')->nullable();
            $table->string('immunization_schedule')->nullable();
            $table->string('follow_up_on')->nullable();
            $table->string('phd_name_signature')->nullable();
            // $table->string('phd_license')->nullable();
            // $table->string('phd_ptr_number')->nullable();
            //$table->foreignId('patient_adults_id')->constrained('patient_adults')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('md_plans');
    }
};
