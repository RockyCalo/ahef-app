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
        Schema::create('personal_history_alcohols', function (Blueprint $table) {
            $table->id();
            $table->string('never_consumed')->nullable();
            $table->string('drinks_alcohol')->nullable();
            $table->string('binge_drinker')->nullable();
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
        Schema::dropIfExists('personal_history_alcohols');
    }
};
