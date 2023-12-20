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
        Schema::create('patient_adults', function (Blueprint $table) {
            $table->id();
            $table->string('patient_contact_number');
            $table->string('phic_register');
            $table->string('phic_number');
            $table->string('konsulta_provider');
            $table->string('employment_status');
            $table->string('occupation_if_applicable');
            $table->string('highest_educational');
            $table->string('pwd_id_number');
            $table->string('pantawid_pamilya');
            $table->string('ip_nonip');
            $table->string('ethnicity');
            $table->foreignId('patient_category_id')->constrained('patient_categories')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('patient_adults');
    }
};
