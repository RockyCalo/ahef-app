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
        Schema::create('part_one_red_flags', function (Blueprint $table) {
            $table->id();
            $table->string('chest_pain')->nullable();
            $table->string('difficulty_breathing')->nullable();
            $table->string('seizure_convulsion')->nullable();
            $table->string('unconscious')->nullable();
            $table->string('not_oriented')->nullable();
            $table->string('bluish_discoloration')->nullable();
            $table->string('harmful_suicide')->nullable();
            $table->string('acute_fracture')->nullable();
            $table->string('sign_of_abuse')->nullable();
            $table->string('severe_abdominal_pain')->nullable();
            $table->string('persistent_vomiting')->nullable();
            $table->string('persistent_diarrhea')->nullable();
            $table->string('tolerate_fluids')->nullable();
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
        Schema::dropIfExists('part_one_red_flags');
    }
};
