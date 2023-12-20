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
        Schema::create('annex_a_substances', function (Blueprint $table) {
            $table->id();
            $table->string('substance_use')->nullable();
            $table->string('alcohol')->nullable();
            $table->string('smoking')->nullable();
            $table->string('mental_health')->nullable();
            $table->string('neuro_developmental')->nullable();
            $table->string('non_communicable')->nullable();
            $table->string('infections')->nullable();
            $table->string('cancers')->nullable();
            // $table->foreignId('patient_childrens_id')->constrained('patient_children')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('annex_a_s');
    }
};
