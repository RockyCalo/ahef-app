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
        Schema::create('physical_exam_abdomens', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('scars')->nullable();
            $table->string('discoloration')->nullable();
            $table->string('striae')->nullable();
            $table->string('mass')->nullable();
            $table->string('distended')->nullable();
            $table->string('visible_peristalsis_pulsation')->nullable();
            $table->string('fluid_wave')->nullable();
            $table->string('shifting_dullness')->nullable();
            $table->string('hypo_hyperactive_bowel_sound')->nullable();
            $table->string('tenderness_guarding')->nullable();
            $table->string('palpable_liver_edge')->nullable();
            $table->string('palpable_spleen')->nullable();
            $table->string('others_physical_exam_abdomen')->nullable();
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
        Schema::dropIfExists('physical_exam_abdomens');
    }
};
