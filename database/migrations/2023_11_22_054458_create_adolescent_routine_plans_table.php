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
        Schema::create('adolescent_routine_plans', function (Blueprint $table) {
            $table->id();
            $table->string('chest_x_ray')->nullable();
            $table->string('biannual_phq')->nullable();
            $table->string('caries_risk')->nullable();
            $table->string('crafft')->nullable();
          //  $table->foreignId('patient_adolescents_id')->constrained('patient_adolescents')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('adolescent_routine_plans');
    }
};
