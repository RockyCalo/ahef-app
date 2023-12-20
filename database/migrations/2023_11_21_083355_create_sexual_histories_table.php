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
        Schema::create('sexual_histories', function (Blueprint $table) {
            $table->id();
            $table->string('sexuality_active')->nullable();
            $table->string('month_genital_contact')->nullable();
            $table->string('anal_sex')->nullable();
            $table->string('multiple_sex')->nullable();
            $table->string('high_risk_partner')->nullable();
            $table->string('partner_injected_drugs')->nullable();
            $table->string('early_coitarche')->nullable();
            $table->string('reproductive_health')->nullable();
            //$table->foreignId('patient_adults_id')->constrained('patient_adults')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('sexual_histories');
    }
};
