<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemGenitoUrinary;
use Illuminate\Http\Request;

class ReviewSystemGenitoUrinaryController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "difficulty_urinating" => 'nullable',
            "polyuria" => 'nullable',
            "nocturia" => 'nullable',
            "increased_urinary_frequency" => 'nullable',
            "bloody_urine" => 'nullable',
            "urinary_incontinence" => 'nullable',
            "decreased_stream" => 'nullable',
            "urinary_stones" => 'nullable',
            "vaginal_penile_discharge" => 'nullable',
            "vaginal_penile_bleeding" => 'nullable',
            "others_genitourinaty_review" => 'nullable',
        ]);
        $reviewGenito = new ReviewSystemGenitoUrinary($validate);
        $reviewGenito->save();
        return response()->json('Done');
    }

}
