<?php

namespace App\Http\Controllers;

use App\Models\GeneralSurveys;
use Illuminate\Http\Request;

class GeneralSurveysController extends Controller
{
    //



    public function store(Request $request)
    {
        $validate = $request->validate([
            "conscious" => 'nullable',
            "coherent" => 'nullable',
            "not_in_cardiorespiratory" => 'nullable',
            "blood_pressure" => 'nullable',
            "heart_rate" => 'nullable',
            "respiratory_rate" => 'nullable',
            "temperature" => 'nullable',
        ]);
        $generalSurvey = new GeneralSurveys($validate);
        $generalSurvey->save();
        return response()->json('Done');
    }


}
