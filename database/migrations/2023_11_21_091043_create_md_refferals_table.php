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
        Schema::create('md_refferals', function (Blueprint $table) {
            $table->id();
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
            $table->string('phd_license')->nullable();
            $table->string('phd_ptr_number')->nullable();
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
        Schema::dropIfExists('md_refferals');
    }
};
