<?php

namespace App\Http\Controllers;

use App\Models\FamilyHistory;
use App\Models\PersonalSocialHistory;
use Illuminate\Http\Request;

class FamilyHistoryController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "hypertension" => 'nullable',
            "stroke" => 'nullable',
            "heart_disease" => 'nullable',
            "high_cholesterol" => 'nullable',
            "heart_pain" => 'nullable',
            "diabetes" => 'nullable',
            "kidney_disease" => 'nullable',
            "liver_disease" => 'nullable',
            "copd" => 'nullable',
            "asthma" => 'nullable',
            "mental_abuse_condition" => 'nullable',
            "cancer" => 'nullable',
            "tuberculosis" => 'nullable',
            "leprosy" => 'nullable',
        ]);
        $familyHistory = new FamilyHistory($validate);
        $familyHistory->save();
        return response()->json('Done');
    }
}
