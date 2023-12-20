<?php

namespace App\Http\Controllers;

use App\Models\SexualHistory;
use Illuminate\Http\Request;

class SexualHistoryController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "sexuality_active" => 'nullable',
            "month_genital_contact" => 'nullable',
            "anal_sex" => 'nullable',
            "multiple_sex" => 'nullable',
            "high_risk_partner" => 'nullable',
            "partner_injected_drugs" => 'nullable',
            "early_coitarche" => 'nullable',
            "reproductive_health" => 'nullable',




        ]);
        $sexualHistory = new SexualHistory($validate);
        $sexualHistory->save();
        return response()->json('Done');
    }
}
