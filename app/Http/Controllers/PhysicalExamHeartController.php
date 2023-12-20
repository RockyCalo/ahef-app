<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamHeart;
use Illuminate\Http\Request;

class PhysicalExamHeartController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "precordial_bulge" => 'nullable',
            "dynamic_precordium" => 'nullable',
            "irregular_rhythm" => 'nullable',
            "irregular_rate" => 'nullable',
            "thrills_heaves" => 'nullable',
            "murmurs" => 'nullable',
            "displaced_pmi_apex_beat" => 'nullable',
            "others_physical_exam_heart" => 'nullable',

        ]);
        $peHeart = new PhysicalExamHeart($validate);
        $peHeart->save();
        return response()->json('Done');
    }

}
