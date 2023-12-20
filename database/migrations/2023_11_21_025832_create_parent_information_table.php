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
        Schema::create('parent_information', function (Blueprint $table) {
            $table->id();
            $table->foreignId('patient_child_id')->constrained('patient_children')->onDelete('cascade')->onUpdate('cascade');
            $table->string('parent_lastname');
            $table->string('parent_firstname');
            $table->string('parent_middlename');
            $table->enum('parent_suffix', [
                'jr',
                'sr',
                'II',
                'III',
                'IV',
                'none'
            ])->nullable();
            $table->integer('parent_age');
            $table->enum('parent_gender', [
                'male',
                'female',
                'others'
            ]);
            $table->date('parent_birthday')->nullable();
            $table->integer('parent_contact_number');
            $table->text('relationship_to_patient')->nullable();
            $table->string('phic_register');
            $table->integer('phic_number')->nullable();
            $table->string('parent_employment_status')->nullable();
            $table->string('konsulta_provider');
            $table->string('pantawid_pamilya');
            $table->string('parent_ip_nonip');
            $table->string('parent_ethnicity');
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
        Schema::dropIfExists('parent_information');
    }
};
