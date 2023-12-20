<?php

namespace App\Http\Controllers;

use App\Models\NeuroMotorExam;
use Illuminate\Http\Request;

class NeuroMotorExamController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "normal_bulk_and_tone" => 'nullable',
            "no_involuntary_movements" => 'nullable',
            "5_5_rue_and_rle" => 'nullable',
            "5_5_lue_and_lle" => 'nullable',
            "no_pronator_drift" => 'nullable',


        ]);
        $neuroMotor = new NeuroMotorExam($validate);
        $neuroMotor->save();
        return response()->json('Done');
    }

}
