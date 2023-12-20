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
        Schema::create('personal_history_mental_healths', function (Blueprint $table) {
            $table->id();
            $table->string('intimate_partner')->nullable();
            $table->string('maltreatment')->nullable();
            $table->string('bullying')->nullable();
            $table->string('depression')->nullable();
            $table->string('anxiety')->nullable();
            $table->string('history_of_selfharm')->nullable();
            $table->string('suicide_attempt')->nullable();
            $table->string('others_mental_health')->nullable();
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
        Schema::dropIfExists('personal_history_mental_healths');
    }
};
