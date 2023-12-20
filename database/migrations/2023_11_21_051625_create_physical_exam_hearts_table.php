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
        Schema::create('physical_exam_hearts', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('precordial_bulge')->nullable();
            $table->string('dynamic_precordium')->nullable();
            $table->string('irregular_rhythm')->nullable();
            $table->string('irregular_rate')->nullable();
            $table->string('thrills_heaves')->nullable();
            $table->string('murmurs')->nullable();
            $table->string('displaced_pmi_apex_beat')->nullable();
            $table->string('others_physical_exam_heart')->nullable();
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
        Schema::dropIfExists('physical_exam_hearts');
    }
};
