<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamExtremity;
use Illuminate\Http\Request;

class PhysicalExamExtremityController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "varicosities" => 'nullable',
            "skin_changes" => 'nullable',
            "discoloration" => 'nullable',
            "redness" => 'nullable',
            "bruising" => 'nullable',
            "deforming" => 'nullable',
            "clubbing" => 'nullable',
            "mass" => 'nullable',
            "edema" => 'nullable',
            "swelling" => 'nullable',
            "tenderness" => 'nullable',
            "lesion" => 'nullable',
            "ulcer" => 'nullable',
            "unequal_pulses" => 'nullable',
            "CRT_2sec" => 'nullable',
            "fracture_sprain" => 'nullable',
            "others_physical_exam_extremities" => 'nullable',

        ]);
        $peExtremity = new PhysicalExamExtremity($validate);
        $peExtremity->save();
        return response()->json('Done');
    }
}
