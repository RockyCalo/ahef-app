<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemCardiorespiratory;
use Illuminate\Http\Request;

class ReviewSystemCardiorespiratoryController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "cough" => 'nullable',
            "wheezing" => 'nullable',
            "cough_with_blood" => 'nullable',
            "palpitations" => 'nullable',
            "chest_pain" => 'nullable',
            "difficult_breathing" => 'nullable',
            "others_cardiorespiratories_review" => 'nullable',
        ]);
        $reviewCardio = new ReviewSystemCardiorespiratory($validate);
        $reviewCardio->save();
        return response()->json('Done');
    }
}
