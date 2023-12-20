<?php

namespace App\Http\Controllers;

use App\Models\MdAgeSpecific;
use Illuminate\Http\Request;

class MdAgeSpecificController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "hpv_testing" => 'nullable',
            "cervical_cytology" => 'nullable',
            "visual_inspection" => 'nullable',
            "fasting_blood_sugar" => 'nullable',
            "plasma_glocuse" => 'nullable',
            "annual_fobt" => 'nullable',
            "colonoscopy" => 'nullable',
            "mammography" => 'nullable',
            "biennial_clinical" => 'nullable',
            "biennial_digital_rectal" => 'nullable',
            "biennieal_prostate" => 'nullable',
           

        ]);
        $mdAgeSpecific = new MdAgeSpecific($validate);
        $mdAgeSpecific->save();
        return response()->json('Done');
    }

}
