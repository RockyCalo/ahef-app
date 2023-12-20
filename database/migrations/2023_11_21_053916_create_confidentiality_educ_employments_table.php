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
        Schema::create('confidentiality_educ_employments', function (Blueprint $table) {
            $table->id();
            $table->string('guide_question_one')->nullable();
            $table->string('guide_question_two')->nullable();
            $table->string('guide_question_three')->nullable();
            $table->string('red_flags_one')->nullable();
            $table->string('red_flags_two')->nullable();
            $table->string('red_flags_three')->nullable();
            $table->string('red_flags_four')->nullable();
            $table->string('red_flags_five')->nullable();
            $table->string('red_flags_six')->nullable();
            $table->string('red_flags_seven')->nullable();
            $table->string('red_flags_eight')->nullable();
            $table->string('red_flags_nine')->nullable();
           // $table->foreignId('patient_adolescents_id')->constrained('patient_adolescents')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('confidentiality_educ_employments');
    }
};
