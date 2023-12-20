<?php

namespace App\Http\Controllers;

use App\Models\MdAdolescentRiskFactor;
use Illuminate\Http\Request;

class MdAdolescentRiskFactorController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "assist_tool" => 'nullable',
            "audit_tool" => 'nullable',
            "sasq" => 'nullable',
            "e_hits" => 'nullable',
            "disability_identification" => 'nullable',
            "cbc_rcb" => 'nullable',
            "fbs" => 'nullable',
            "lipid_profile" => 'nullable',
            "hiv_rapid_test" => 'nullable',
            "hepatitis_b_and_c" => 'nullable',
            "syphilis_rpr" => 'nullable',
            "xpert_mtb_test" => 'nullable',



        ]);
        $adolescentRiskFactor = new MdAdolescentRiskFactor($validate);
        $adolescentRiskFactor->save();
        return response()->json('Done');
    }
}
