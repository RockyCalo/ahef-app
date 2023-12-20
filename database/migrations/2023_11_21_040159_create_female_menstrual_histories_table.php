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
        Schema::create('female_menstrual_histories', function (Blueprint $table) {
            $table->id();
            $table->string('minarch')->nullable();
            $table->string('mestrual_period')->nullable();
            $table->string('duration')->nullable();
            $table->string('cycle')->nullable();
            $table->string('flow')->nullable();
            $table->string('dysmenorrhea')->nullable();
            $table->string('contraceptive_use')->nullable();
            $table->string('cervical_cancer')->nullable();
            $table->string('cervical_cancer_findings')->nullable();
            $table->string('patient_been_pregnant')->nullable();
            $table->string('prenatal_checkups')->nullable();
            $table->string('prenatal_services')->nullable();
            $table->string('gravida')->nullable();
            $table->string('year')->nullable();
            $table->string('place_of_delivery')->nullable();
            $table->string('type_of_delivery')->nullable();
            $table->string('specify_complication')->nullable();
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
        Schema::dropIfExists('female_menstrual_histories');
    }
};
