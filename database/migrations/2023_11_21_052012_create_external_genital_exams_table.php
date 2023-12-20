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
        Schema::create('external_genital_exams', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('nits_or_lice')->nullable();
            $table->string('abnormal_discharge')->nullable();
            $table->string('abnormal_bleeding')->nullable();
            $table->string('swelling')->nullable();
            $table->string('ecchymosis')->nullable();
            $table->string('excoriation')->nullable();
            $table->string('rashes')->nullable();
            $table->string('lesions')->nullable();
            $table->string('nodules')->nullable();
            $table->string('mass')->nullable();
            $table->string('others_physical_external_genital_exam')->nullable();
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
        Schema::dropIfExists('external_genital_exams');
    }
};
