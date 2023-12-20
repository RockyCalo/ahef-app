<?php

namespace App\Http\Controllers;

use App\Models\MedicalSurgicalHistory;
use Illuminate\Http\Request;

class MedicalSurgicalHistoryController extends Controller
{
    //


    public function store(Request $request)
    {
        $validate = $request->validate([
            "asthma" => 'nullable',
            "allergies" => 'nullable',
            "allergies_to_medicines" => 'nullable',
            "hearing_problem" => 'nullable',
            "vision_problem" => 'nullable',
            "heart_disease" => 'nullable',
            "mental_conditions" => 'nullable',
            "cancer" => 'nullable',
            "other_organ_disorder" => 'nullable',
            "previous_hospitalization" => 'nullable',
            "previous_surgeries" => 'nullable',
            "others_medical_history" => 'nullable',

        ]);
        $medicalsurgicalHistory = new MedicalSurgicalHistory($validate);
        $medicalsurgicalHistory->save();
        return response()->json('Done');
    }

}
