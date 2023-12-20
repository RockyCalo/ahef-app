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
        Schema::create('annex_b_childrens', function (Blueprint $table) {
            $table->id();
            $table->string('visit')->nullable();
            $table->string('gross_motor')->nullable();
            $table->string('fine_motor')->nullable();
            $table->string('language')->nullable();
            $table->string('cognitive')->nullable();
            $table->string('psychosocial')->nullable();
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
        Schema::dropIfExists('annex_b_childrens');
    }
};
