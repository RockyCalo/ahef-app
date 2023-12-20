<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamNeck;
use Illuminate\Http\Request;

class PhysicalExamNeckController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "regidity" => 'nullable',
            "deviated_trachea" => 'nullable',
            "mass" => 'nullable',
            "nodules" => 'nullable',
            "tenderness" => 'nullable',
            "bruit" => 'nullable',
            "palpable_thyroid" => 'nullable',
            "lymphadenopathies" => 'nullable',
            "others_physical_exam_neck" => 'nullable',




        ]);
        $peNeck = new PhysicalExamNeck($validate);
        $peNeck->save();
        return response()->json('Done');
    }

}
