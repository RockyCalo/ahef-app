<?php

namespace App\Http\Controllers;

use App\Models\ExternalGenitalExam;
use Illuminate\Http\Request;

class ExternalGenitalExamController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "nits_or_lice" => 'nullable',
            "abnormal_discharge" => 'nullable',
            "abnormal_bleeding" => 'nullable',
            "swelling" => 'nullable',
            "ecchymosis" => 'nullable',
            "excoriation" => 'nullable',
            "rashes" => 'nullable',
            "lesions" => 'nullable',
            "nodules" => 'nullable',
            "mass" => 'nullable',
            "others_physical_external_genital_exam" => 'nullable',

        ]);
        $externalGenital = new ExternalGenitalExam($validate);
        $externalGenital->save();
        return response()->json('Done');
    }


}
