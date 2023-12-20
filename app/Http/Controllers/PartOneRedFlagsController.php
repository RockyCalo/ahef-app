<?php

namespace App\Http\Controllers;

use App\Models\PartOneRedFlags;
use Illuminate\Http\Request;

class PartOneRedFlagsController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "chest_pain" => 'nullable',
            "difficulty_breathing" => 'nullable',
            "seizure_convulsion" => 'nullable',
            "unconscious" => 'nullable',
            "not_oriented" => 'nullable',
            "bluish_discoloration" => 'nullable',
            "harmful_suicide" => 'nullable',
            "acute_fracture" => 'nullable',
            "sign_of_abuse" => 'nullable',
            "severe_abdominal_pain" => 'nullable',
            "persistent_vomiting" => 'nullable',
            "persistent_diarrhea" => 'nullable',
            "tolerate_fluids" => 'nullable',
        ]);
        $redFlag = new PartOneRedFlags($validate);
        $redFlag->save();
        return response()->json('Done');
    }
}
