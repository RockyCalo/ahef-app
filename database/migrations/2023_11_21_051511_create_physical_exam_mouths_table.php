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
        Schema::create('physical_exam_mouths', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('asymmetry_deformity')->nullable();
            $table->string('deviation')->nullable();
            $table->string('erythema')->nullable();
            $table->string('dentition')->nullable();
            $table->string('discoloration')->nullable();
            $table->string('caries_or_cavities')->nullable();
            $table->string('lesions')->nullable();
            $table->string('patches')->nullable();
            $table->string('exudates')->nullable();
            $table->string('persistent_nodule_ulcer_sores')->nullable();
            $table->string('enlargement')->nullable();
            $table->string('masses')->nullable();
            $table->string('others_physical_exam_mouth')->nullable();
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
        Schema::dropIfExists('physical_exam_mouths');
    }
};
