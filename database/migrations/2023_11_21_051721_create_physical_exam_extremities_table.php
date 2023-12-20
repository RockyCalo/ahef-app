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
        Schema::create('physical_exam_extremities', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('varicosities')->nullable();
            $table->string('skin_changes')->nullable();
            $table->string('discoloration')->nullable();
            $table->string('redness')->nullable();
            $table->string('bruising')->nullable();
            $table->string('deforming')->nullable();
            $table->string('clubbing')->nullable();
            $table->string('mass')->nullable();
            $table->string('edema')->nullable();
            $table->string('swelling')->nullable();
            $table->string('tenderness')->nullable();
            $table->string('lesion')->nullable();
            $table->string('ulcer')->nullable();
            $table->string('unequal_pulses')->nullable();
            $table->string('crt_sec')->nullable();
            $table->string('fracture_sprain')->nullable();
            $table->string('others_physical_exam_extremities')->nullable();
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
        Schema::dropIfExists('physical_exam_extremities');
    }
};
