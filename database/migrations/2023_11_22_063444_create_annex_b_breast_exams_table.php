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
        Schema::create('annex_b_breast_exams', function (Blueprint $table) {
            $table->id();
            $table->string('prepare')->nullable();
            $table->string('size')->nullable();
            $table->string('shape')->nullable();
            $table->string('symmetry')->nullable();
            $table->string('nipple_areolar')->nullable();
            $table->string('skin_thickening')->nullable();
            $table->string('contralateral')->nullable();
            $table->string('previous_finding')->nullable();
            $table->string('lay_supine')->nullable();
            $table->string('wagon_wheel')->nullable();
            $table->string('vertical_strip')->nullable();
            $table->string('concentric_circle')->nullable();
            $table->string('examining_hand')->nullable();
            $table->string('begin_exam')->nullable();
            $table->string('normal_side')->nullable();
            $table->string('place_ipsilateral')->nullable();
            $table->string('soft')->nullable();
            $table->string('firm')->nullable();
            $table->string('nodular')->nullable();
            $table->string('fibrocrystic')->nullable();
            $table->string('dense')->nullable();
            $table->string('inframammary_ridge')->nullable();
            $table->string('massess_size')->nullable();
            $table->string('massess_shape')->nullable();
            $table->string('massess_texture')->nullable();
            $table->string('massess_mobility')->nullable();
            $table->string('massess_delimitation')->nullable();
            $table->string('massess_tenderness')->nullable();
            $table->string('approximate_depth')->nullable();
            $table->string('palpate_number')->nullable();
            $table->string('palpate_size')->nullable();
            $table->string('palpate_texture')->nullable();
            $table->string('palpate_mobility')->nullable();
            $table->string('palpate_delimitation')->nullable();
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
        Schema::dropIfExists('annex_b_breast_exams');
    }
};
