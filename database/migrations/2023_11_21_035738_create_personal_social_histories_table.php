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
        Schema::create('personal_social_histories', function (Blueprint $table) {
            $table->id();
            $table->string('diet_balance')->nullable();
            $table->string('diet_with_supplement')->nullable();
            $table->string('deworming')->nullable();
            $table->string('oral_health')->nullable();
            $table->string('physical_activity')->nullable();
            $table->string('daily_screening_time')->nullable();
            $table->string('violence_and_injuries')->nullable();
            $table->string('bullying_and_harassment')->nullable();
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
        Schema::dropIfExists('personal_social_histories');
    }
};
