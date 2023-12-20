<?php

namespace App\Http\Controllers;

use App\Models\DigitalRectalExam;
use Illuminate\Http\Request;

class DigitalRectalExamController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "prostate_exam_unremarkable" => 'nullable',
            "sphincter_tone" => 'nullable',
            "strictures" => 'nullable',
            "lesions" => 'nullable',
            "skin_tags" => 'nullable',
            "masses_nodules" => 'nullable',
            "tenderness" => 'nullable',
            "prolapse" => 'nullable',
            "discharge" => 'nullable',
            "blood_per_tactating_finger" => 'nullable',
            "prostate_findings" => 'nullable',
            "others_physical_digital_rectal" => 'nullable',


        ]);
        $peDegitalRectal = new DigitalRectalExam($validate);
        $peDegitalRectal->save();
        return response()->json('Done');
    }

}
