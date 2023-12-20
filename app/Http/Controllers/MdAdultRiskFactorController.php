<?php

namespace App\Http\Controllers;

use App\Models\MdAdultRiskFactor;
use Illuminate\Http\Request;

class MdAdultRiskFactorController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "assist_tool" => 'nullable',
            "audit_tool" => 'nullable',
            "fagerstrom_test" => 'nullable',
            "disability_identification" => 'nullable',
            "lipid_profile" => 'nullable',
            "fbs" => 'nullable',
            "tuberculin_skin_test" => 'nullable',
            "xpert_mtb" => 'nullable',
            "hiv" => 'nullable',
            "hepatitis_b_and_c" => 'nullable',
            "liver_ultrasound" => 'nullable',
            "annual_low_dose" => 'nullable',
            "upper_gi_series" => 'nullable',
            "upper_endoscopy" => 'nullable',
            "ebv_dna" => 'nullable',


        ]);
        $mdAdultRisk = new MdAdultRiskFactor($validate);
        $mdAdultRisk->save();
        return response()->json('Done');
    }
}
