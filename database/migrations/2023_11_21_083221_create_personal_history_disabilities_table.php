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
        Schema::create('personal_history_disabilities', function (Blueprint $table) {
            $table->id();
            $table->string('seeing_hearing')->nullable();
            $table->string('walking_moving_around')->nullable();
            $table->string('communicating')->nullable();
            $table->string('caring')->nullable();
            $table->string('feelings_interfering')->nullable();
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
        Schema::dropIfExists('personal_history_disabilities');
    }
};
