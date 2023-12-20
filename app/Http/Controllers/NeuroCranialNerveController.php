<?php

namespace App\Http\Controllers;

use App\Models\NeuroCranialNerve;
use Illuminate\Http\Request;

class NeuroCranialNerveController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "identify_test_substance" => 'nullable',
            "visual_acuity" => 'nullable',
            "visual_fields" => 'nullable',
            "brisk_and_reactive" => 'nullable',
            "primary_gaze_midline" => 'nullable',
            "full_eoms" => 'nullable',
            "corneal_blink_reflex" => 'nullable',
            "light_touch_pain_temp" => 'nullable',
            "temporalis_muscle_tone" => 'nullable',
            "no_facial_asymmetry" => 'nullable',
            "intact_gross_hearing" => 'nullable',
            "weber_midline" => 'nullable',
            "rinne_ac_bc_ad_as" => 'nullable',
            "gag_reflex" => 'nullable',
            "uvala_midline" => 'nullable',
            "equal_palatal_rise" => 'nullable',
            "without_difficulty_swallowing" => 'nullable',
            "shrug_scm_and_trapezius" => 'nullable',
            "tongue_midline" => 'nullable',
            "no_fasciculations" => 'nullable',
            "no_atrophy" => 'nullable',
            "with_abnormal_findings" => 'nullable',




        ]);
        $neuroCranial = new NeuroCranialNerve($validate);
        $neuroCranial->save();
        return response()->json('Done');
    }


}
