<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemGeneral;
use Illuminate\Http\Request;

class ReviewSystemGeneralController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "unintentiona_weight_loss" => 'nullable',
            "fever" => 'nullable',
            "fatigue" => 'nullable',
            "chills" => 'nullable',
            "bruisability" => 'nullable',
            "enlarged_lymph" => 'nullable',
            "others_general_review" => 'nullable',
        ]);
        $reviewGeneral = new ReviewSystemGeneral($validate);
        $reviewGeneral->save();
        return response()->json('Done');
    }
}
