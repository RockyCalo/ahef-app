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
        Schema::create('review_system_genito_urinaries', function (Blueprint $table) {
            $table->id();
            $table->string('none')->nullable();
            $table->string('difficulty_urinating')->nullable();
            $table->string('polyuria')->nullable();
            $table->string('nocturia')->nullable();
            $table->string('increased_urinary_frequency')->nullable();
            $table->string('bloody_urine')->nullable();
            $table->string('urinary_incontinence')->nullable();
            $table->string('decreased_stream')->nullable();
            $table->string('urinary_stones')->nullable();
            $table->string('vaginal_penile_discharge')->nullable();
            $table->string('vaginal_penile_bleeding')->nullable();
            $table->string('others_genitourinaty_review')->nullable();
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
        Schema::dropIfExists('review_system_genito_urinaries');
    }
};
