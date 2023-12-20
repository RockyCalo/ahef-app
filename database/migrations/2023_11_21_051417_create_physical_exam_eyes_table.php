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
        Schema::create('physical_exam_eyes', function (Blueprint $table) {
            $table->id();
            $table->string('unremarkable')->nullable();
            $table->string('icteric_sclera')->nullable();
            $table->string('red_eye')->nullable();
            $table->string('white_pupillary')->nullable();
            $table->string('ror')->nullable();
            $table->string('exophthalmos')->nullable();
            $table->string('strabismus')->nullable();
            $table->string('discharge')->nullable();
            $table->string('xanthelasma')->nullable();
            $table->string('xanthoma')->nullable();
            $table->string('chalazion')->nullable();
            $table->string('sty')->nullable();
            $table->string('ectropion')->nullable();
            $table->string('ptosis')->nullable();
            $table->string('others_pe_eyes')->nullable();
            $table->string('visual_od')->nullable();
            $table->string('visual_os')->nullable();
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
        Schema::dropIfExists('physical_exam_eyes');
    }
};
