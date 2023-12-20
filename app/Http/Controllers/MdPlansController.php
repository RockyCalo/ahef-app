<?php

namespace App\Http\Controllers;

use App\Models\MdPlans;
use Illuminate\Http\Request;

class MdPlansController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "proper_nutrition" => 'nullable',
            "weight_management" => 'nullable',
            "physical_activity" => 'nullable',
            "sleeping_habit" => 'nullable',
            "personal_hygiene" => 'nullable',
            "selfcare_advice" => 'nullable',
            "injury_prevention" => 'nullable',
            "safe_sexual_practice" => 'nullable',
            "avoiding_harmful_use" => 'nullable',
            "routine_vaccination" => 'nullable',
            "appropriate_health" => 'nullable',
            "maintenance_medication" => 'nullable',

            "other_plans" => 'nullable',

            "annual_oral_screening" => 'nullable',
            "color_testing" => 'nullable',

            "disability_identification" => 'nullable',
            "cbc_rbc" => 'nullable',
            "fbs" => 'nullable',
            "ldl_hdl" => 'nullable',
            "hiv_rapid" => 'nullable',
            "chest_xray" => 'nullable',

            "developmental_pedia_assessment" => 'nullable',
            "mhgap_trained" => 'nullable',
            "sped" => 'nullable',
            "vawc" => 'nullable',
            "specialist_for" => 'nullable',
            "immunization_schedule" => 'nullable',
            "follow_up_on" => 'nullable',





        ]);
        $partFourPlans = new MdPlans($validate);
        $partFourPlans->save();
        return response()->json('Done');
    }


}
