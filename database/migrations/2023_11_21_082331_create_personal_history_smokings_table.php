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
        Schema::create('personal_history_smokings', function (Blueprint $table) {
            $table->id();
            $table->string('never_used')->nullable();
            $table->string('secondhand_smoke')->nullable();
            $table->string('former_tabacco')->nullable();
            $table->string('current_tabacco')->nullable();
            $table->string('vape_user')->nullable();
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
        Schema::dropIfExists('personal_history_smokings');
    }
};
