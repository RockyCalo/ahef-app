<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamNose;
use Illuminate\Http\Request;

class PhysicalExamNoseController extends Controller
{
    //



    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "asymmetry_deformity" => 'nullable',
            "discharge" => 'nullable',
            "tenderness" => 'nullable',
            "nasal_septum" => 'nullable',
            "lesion" => 'nullable',
            "masses" => 'nullable',
            "others_pe_nose" => 'nullable',




        ]);
        $peNose = new PhysicalExamNose($validate);
        $peNose->save();
        return response()->json('Done');
    }


}
