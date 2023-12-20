<?php

namespace App\Http\Controllers;

use App\Models\NeuroMentalStatus;
use Illuminate\Http\Request;

class NeuroMentalStatusController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "awake_alert_with_regard" => 'nullable',
            "goal_directed_response" => 'nullable',
            "oriented_to_time_person_place" => 'nullable',
            "follow_commands" => 'nullable',
            "spontaneous_eye_opening" => 'nullable',
            "concentration_fund" => 'nullable',
            "remote_memory" => 'nullable',
            "no_left_right_disorientation" => 'nullable',
            "no_finger_agnosia" => 'nullable',
            "no_acalculia" => 'nullable',
            "no_agraphia" => 'nullable',
            "no_agraphesthesia" => 'nullable',
            "no_astereognosis" => 'nullable',
            "no_apraxia" => 'nullable',
            "no_neglect" => 'nullable',

        ]);
        $neuroMental = new NeuroMentalStatus($validate);
        $neuroMental->save();
        return response()->json('Done');
    }

}
