<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamChestLungs;
use Illuminate\Http\Request;

class PhysicalExamChestLungsController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "shape" => 'nullable',
            "asymmetry" => 'nullable',
            "abnormal_fremitus" => 'nullable',
            "retractions" => 'nullable',
            "abnormal_breath" => 'nullable',
            "others_physical_exam_chest" => 'nullable',





        ]);
        $peChest = new PhysicalExamChestLungs($validate);
        $peChest->save();
        return response()->json('Done');
    }
}
