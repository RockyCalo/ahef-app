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
        Schema::create('md_age_specifics', function (Blueprint $table) {
            $table->id();
            $table->string('hpv_testing')->nullable();
            $table->string('cervical_cytology')->nullable();
            $table->string('visual_inspection')->nullable();
            $table->string('fasting_blood_sugar')->nullable();
            $table->string('plasma_glocuse')->nullable();
            $table->string('annual_fobt')->nullable();
            $table->string('colonoscopy')->nullable();
            $table->string('mammography')->nullable();
            $table->string('biennial_clinical')->nullable();
            $table->string('biennial_digital_rectal')->nullable();
            $table->string('biennieal_prostate')->nullable();
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
        Schema::dropIfExists('md_age_specifics');
    }
};
