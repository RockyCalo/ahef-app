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
        Schema::create('digital_rectal_exams', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('prostate_exam_unremarkable')->nullable();
            $table->string('sphincter_tone')->nullable();
            $table->string('strictures')->nullable();
            $table->string('lesions')->nullable();
            $table->string('skin_tags')->nullable();
            $table->string('masses_nodules')->nullable();
            $table->string('tenderness')->nullable();
            $table->string('prolapse')->nullable();
            $table->string('discharge')->nullable();
            $table->string('blood_per_tactating_finger')->nullable();
            $table->string('prostate_findings')->nullable();
            $table->string('others_physical_digital_rectal')->nullable();
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
        Schema::dropIfExists('digital_rectal_exams');
    }
};
