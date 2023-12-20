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
        Schema::create('physical_exam_backs', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('deformity')->nullable();
            $table->string('scoliosis')->nullable();
            $table->string('kyphosis')->nullable();
            $table->string('lordosis')->nullable();
            $table->string('mass')->nullable();
            $table->string('lesions')->nullable();
            $table->string('limited_decreased_mobility_rom')->nullable();
            $table->string('others_physical_exam_back')->nullable();
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
        Schema::dropIfExists('physical_exam_backs');
    }
};
