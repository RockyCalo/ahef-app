<?php

namespace App\Http\Controllers;

use App\Models\AnnexBBreastExam;
use Illuminate\Http\Request;

class AnnexBBreastExamController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "prepare" => 'nullable',
            "size" => 'nullable',
            "shape" => 'nullable',
            "symmetry" => 'nullable',
            "nipple_areolar" => 'nullable',
            "skin_thickening" => 'nullable',
            "contralateral" => 'nullable',
            "previous_finding" => 'nullable',
            "lay_supine" => 'nullable',
            "wagon_wheel" => 'nullable',
            "vertical_strip" => 'nullable',
            "concentric_circle" => 'nullable',
            "examining_hand" => 'nullable',
            "begin_exam" => 'nullable',
            "normal_side" => 'nullable',
            "place_ipsilateral" => 'nullable',
            "soft" => 'nullable',
            "firm" => 'nullable',
            "nodular" => 'nullable',
            "fibrocrystic" => 'nullable',
            "dense" => 'nullable',
            "inframammary_ridge" => 'nullable',
            "massess_size" => 'nullable',
            "massess_shape" => 'nullable',
            "massess_texture" => 'nullable',
            "massess_mobility" => 'nullable',
            "massess_delimitation" => 'nullable',
            "massess_tenderness" => 'nullable',
            "approximate_depth" => 'nullable',
            "palpate_number" => 'nullable',
            "palpate_size" => 'nullable',
            "palpate_texture" => 'nullable',
            "palpate_mobility" => 'nullable',
            "palpate_delimitation" => 'nullable',





        ]);
        $annexBBreast = new AnnexBBreastExam($validate);
        $annexBBreast->save();
        return response()->json('Done');
    }
}
