<?php

namespace App\Http\Controllers;

use App\Models\Anthropometrics;
use Illuminate\Http\Request;

class AnthropometricsController extends Controller
{
    //



    public function store(Request $request)
    {
        $validate = $request->validate([
            "weight" => 'nullable',
            "height" => 'nullable',
            "bmi" => 'nullable',
            "normal" => 'nullable',
            "underweight" => 'nullable',
            "overweight" => 'nullable',
            "obese" => 'nullable',
        ]);
        $anthro = new Anthropometrics($validate);
        $anthro->save();
        return response()->json('Done');
    }

}
