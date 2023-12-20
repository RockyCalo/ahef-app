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
        Schema::create('eyes_exams', function (Blueprint $table) {
            $table->id();
            $table->string('abnormal_findings')->nullable();
            $table->string('cotton_wool')->nullable();
            $table->string('microaneurysim')->nullable();
            $table->string('hemorrhages')->nullable();
            $table->string('edema')->nullable();
            $table->string('neovascularization')->nullable();
            $table->string('arteriolar_constriction')->nullable();
            $table->string('av_nicking')->nullable();
            $table->string('exudates')->nullable();
            $table->string('others_abnormal_findings')->nullable();
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
        Schema::dropIfExists('eyes_exams');
    }
};
