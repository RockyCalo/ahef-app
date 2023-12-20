<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamEars;
use Illuminate\Http\Request;

class PhysicalExamEarsController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "deformity" => 'nullable',
            "discharge" => 'nullable',
            "lesion" => 'nullable',
            "mass" => 'nullable',
            "swelling" => 'nullable',
            "tenderness" => 'nullable',
            "others_pe_ears" => 'nullable',
            "otoscopic_ad" => 'nullable',
            "otoscopic_as" => 'nullable',

        ]);
        $peEars = new PhysicalExamEars($validate);
        $peEars->save();
        return response()->json('Done');
    }
}
