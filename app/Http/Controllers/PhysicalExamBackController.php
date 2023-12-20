<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamBack;
use Illuminate\Http\Request;

class PhysicalExamBackController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "deformity" => 'nullable',
            "scoliosis" => 'nullable',
            "kyphosis" => 'nullable',
            "lordosis" => 'nullable',
            "mass" => 'nullable',
            "lesions" => 'nullable',
            "limited_decreased_mobility_rom" => 'nullable',
            "others_physical_exam_back" => 'nullable',


        ]);
        $peBack = new PhysicalExamBack($validate);
        $peBack->save();
        return response()->json('Done');
    }
}
