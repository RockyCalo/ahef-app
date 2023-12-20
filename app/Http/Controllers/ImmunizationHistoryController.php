<?php

namespace App\Http\Controllers;

use App\Models\ImmunizationHistory;
use Illuminate\Http\Request;

class ImmunizationHistoryController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "bcg" => 'nullable',
            "hep_b" => 'nullable',
            "rotavirus" => 'nullable',
            "pentavalent_vaccine" => 'nullable',
            "inactive_polio_vaccine" => 'nullable',
            "oral_polio_vaccine" => 'nullable',
            "mmr_vaccine" => 'nullable',
            "pcv" => 'nullable',
            "pcv_thirteen" => 'nullable',
            "inactive_influenza" => 'nullable',
            "hepatitis_a" => 'nullable',
            "varicella" => 'nullable',
            "typhoid" => 'nullable',
            "japanese_encephalitis" => 'nullable',
            "meningococcal" => 'nullable',
            "mr_td" => 'nullable',
            "hpv" => 'nullable',
            "covid" => 'nullable',
            "others_Immunization" => 'nullable',

        ]);
        $immunizationHistory = new ImmunizationHistory($validate);
        $immunizationHistory->save();
        return response()->json('Done');
    }


}
