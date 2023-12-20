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
        Schema::create('immunization_histories', function (Blueprint $table) {
            $table->id();
            $table->string('bcg')->nullable();
            $table->string('hep_b')->nullable();
            $table->string('rotavirus')->nullable();
            $table->string('pentavalent_vaccine')->nullable();
            $table->string('inactive_polio_vaccine')->nullable();
            $table->string('oral_polio_vaccine')->nullable();
            $table->string('mmr_vaccine')->nullable();
            $table->string('pcv')->nullable();
            $table->string('pcv_thirteen')->nullable();
            $table->string('inactive_influenza')->nullable();
            $table->string('hepatitis_a')->nullable();
            $table->string('varicella')->nullable();
            $table->string('typhoid')->nullable();
            $table->string('japanese_encephalitis')->nullable();
            $table->string('meningococcal')->nullable();
            $table->string('mr_td')->nullable();
            $table->string('hpv')->nullable();
            $table->string('covid')->nullable();
            $table->string('others_immunization')->nullable();
            $table->string('others_immunization_date')->nullable();
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
        Schema::dropIfExists('immunization_histories');
    }
};
