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
        Schema::create('developmental_milestones', function (Blueprint $table) {
            $table->id();
            $table->string('walks_straight')->nullable();
            $table->string('able_to_balance')->nullable();
            $table->string('build_staircase')->nullable();
            $table->string('copies_cross')->nullable();
            $table->string('proper_syntax_short')->nullable();
            $table->string('Knows_color_letter')->nullable();
            $table->string('play_pretend')->nullable();
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
        Schema::dropIfExists('developmental_milestones');
    }
};
