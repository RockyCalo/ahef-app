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
        Schema::create('md_children_risk_factors', function (Blueprint $table) {
            $table->id();
            $table->string('disability_identification')->nullable();
            $table->string('cbc_rbc')->nullable();
            $table->string('fbs')->nullable();
            $table->string('ldl_hdl')->nullable();
            $table->string('hiv_rapid')->nullable();
            $table->string('chest_xray')->nullable();
            //$table->foreignId('patient_children_id')->constrained('patient_children')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('md_children_risk_factors');
    }
};
