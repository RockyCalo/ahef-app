<?php

namespace App\Http\Controllers;

use App\Models\BreastExam;
use Illuminate\Http\Request;

class BreastExamController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "asymmetry" => 'nullable',
            "nipple_retraction" => 'nullable',
            "mass_nodule" => 'nullable',
            "discharge" => 'nullable',

        ]);
        $breastExam = new BreastExam($validate);
        $breastExam->save();
        return response()->json('Done');
    }
}
