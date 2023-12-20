<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamMouth;
use Illuminate\Http\Request;

class PhysicalExamMouthController extends Controller
{
    //


    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "asymmetry_deformity" => 'nullable',
            "deviation" => 'nullable',
            "erythema" => 'nullable',
            "dentition" => 'nullable',
            "discoloration" => 'nullable',
            "caries_or_cavities" => 'nullable',
            "lesions" => 'nullable',
            "patches" => 'nullable',
            "exudates" => 'nullable',
            "persistent_nodule_ulcer_sores" => 'nullable',
            "enlargement" => 'nullable',
            "masses" => 'nullable',
            "others_physical_exam_mouth" => 'nullable',




        ]);
        $peMouth = new PhysicalExamMouth($validate);
        $peMouth->save();
        return response()->json('Done');
    }

}
