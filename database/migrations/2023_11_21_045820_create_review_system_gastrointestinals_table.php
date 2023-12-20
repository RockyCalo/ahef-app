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
        Schema::create('review_system_gastrointestinals', function (Blueprint $table) {
            $table->id();
            $table->string('none')->nullable();
            $table->string('abdominal_pain')->nullable();
            $table->string('abdominal_enlargement')->nullable();
            $table->string('nausea')->nullable();
            $table->string('vomiting')->nullable();
            $table->string('diarrhea')->nullable();
            $table->string('constipation')->nullable();
            $table->string('polyphagia')->nullable();
            $table->string('vomiting_blood')->nullable();
            $table->string('bloody_stool')->nullable();
            $table->string('melena')->nullable();
            $table->string('others_gastrointestinal_review')->nullable();
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
        Schema::dropIfExists('review_system_gastrointestinals');
    }
};
