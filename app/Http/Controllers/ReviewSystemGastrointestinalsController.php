<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemGastrointestinals;
use Illuminate\Http\Request;

class ReviewSystemGastrointestinalsController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "abdominal_pain" => 'nullable',
            "abdominal_enlargement" => 'nullable',
            "nausea" => 'nullable',
            "vomiting" => 'nullable',
            "diarrhea" => 'nullable',
            "constipation" => 'nullable',
            "polyphagia" => 'nullable',
            "vomiting_blood" => 'nullable',
            "bloody_stool" => 'nullable',
            "melena" => 'nullable',
            "others_gastrointestinal_review" => 'nullable',
        ]);
        $reviewGastro = new ReviewSystemGastrointestinals($validate);
        $reviewGastro->save();
        return response()->json('Done');
    }

}
