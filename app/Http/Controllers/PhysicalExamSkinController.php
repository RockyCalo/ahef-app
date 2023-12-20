<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamSkin;
use Illuminate\Http\Request;

class PhysicalExamSkinController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "cyanosis" => 'nullable',
            "pallor" => 'nullable',
            "jaundice" => 'nullable',
            "dry" => 'nullable',
            "cold" => 'nullable',
            "wound" => 'nullable',
            "rash" => 'nullable',
            "petechiae" => 'nullable',
            "ecchymosis" => 'nullable',
            "acne" => 'nullable',
            "mass" => 'nullable',
            "suspecious_growth" => 'nullable',
            "othes_pe_skin" => 'nullable',

        ]);
        $peSkin = new PhysicalExamSkin($validate);
        $peSkin->save();
        return response()->json('Done');
    }
}
