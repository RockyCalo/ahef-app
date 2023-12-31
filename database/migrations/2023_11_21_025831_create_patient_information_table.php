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
        Schema::create('patient_information', function (Blueprint $table) {
            $table->id();
            $table->string('lastname');
            $table->string('firstname');
            $table->string('middlename');
            $table->enum('suffix', [
                'jr',
                'sr',
                'II',
                'III',
                'IV',
                'none'
            ])->nullable();
            $table->integer('age');
            $table->enum('gender', [
                'male',
                'female',
                'others'
            ]);
            $table->date('birthday')->nullable();
            $table->date('consult_date')->nullable();
            $table->text('address');
            $table->string('religion');
            $table->string('civil_status');
            $table->string('blood_type')->nullable();
            $table->foreignId('patient_children_id')->constrained('patient_children')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('patient_adolescents_id')->constrained('patient_adolescents')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('patient_adults_id')->constrained('patient_adults')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('patient_information');
    }
};
