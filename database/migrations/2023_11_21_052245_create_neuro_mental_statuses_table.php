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
        Schema::create('neuro_mental_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('awake_alert_with_regard')->nullable();
            $table->string('goal_directed_response')->nullable();
            $table->string('oriented_to_time_person_place')->nullable();
            $table->string('follow_commands')->nullable();
            $table->string('spontaneous_eye_opening')->nullable();
            $table->string('concentration_fund')->nullable();
            $table->string('remote_memory')->nullable();
            $table->string('no_left_right_disorientation')->nullable();
            $table->string('no_finger_agnosia')->nullable();
            $table->string('no_acalculia')->nullable();
            $table->string('no_agraphia')->nullable();
            $table->string('no_agraphesthesia')->nullable();
            $table->string('no_astereognosis')->nullable();
            $table->string('no_apraxia')->nullable();
            $table->string('no_neglect')->nullable();
          
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
        Schema::dropIfExists('neuro_mental_statuses');
    }
};
