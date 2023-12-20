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
        Schema::create('neuro_cranial_nerves', function (Blueprint $table) {
            $table->id();
            $table->string('identify_test_substance')->nullable();
            $table->string('visual_acuity')->nullable();
            $table->string('visual_fields')->nullable();
            $table->string('brisk_and_reactive')->nullable();
            $table->string('primary_gaze_midline')->nullable();
            $table->string('full_eoms')->nullable();
            $table->string('corneal_blink_reflex')->nullable();
            $table->string('light_touch_pain_temp')->nullable();
            $table->string('temporalis_muscle_tone')->nullable();
            $table->string('no_facial_asymmetry')->nullable();
            $table->string('intact_gross_hearing')->nullable();
            $table->string('weber_midline')->nullable();
            $table->string('rinne_ac_bc_ad_as')->nullable();
            $table->string('gag_reflex')->nullable();
            $table->string('uvala_midline')->nullable();
            $table->string('equal_palatal_rise')->nullable();
            $table->string('without_difficulty_swallowing')->nullable();
            $table->string('shrug_scm_and_trapezius')->nullable();
            $table->string('tongue_midline')->nullable();
            $table->string('no_fasciculations')->nullable();
            $table->string('no_atrophy')->nullable();
            $table->text('with_abnormal_findings')->nullable();
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
        Schema::dropIfExists('neuro_cranial_nerves');
    }
};
