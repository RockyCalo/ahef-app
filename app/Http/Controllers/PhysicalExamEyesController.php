<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamEyes;
use Illuminate\Http\Request;

class PhysicalExamEyesController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "icteric_sclera" => 'nullable',
            "red_eye" => 'nullable',
            "white_pupillary" => 'nullable',
            "ror" => 'nullable',
            "exophthalmos" => 'nullable',
            "strabismus" => 'nullable',
            "discharge" => 'nullable',
            "xanthelasma" => 'nullable',
            "xanthoma" => 'nullable',
            "chalazion" => 'nullable',
            "sty" => 'nullable',
            "ectropion" => 'nullable',
            "ptosis" => 'nullable',
            "others_pe_eyes" => 'nullable',
            "visual_od" => 'nullable',
            "visual_os" => 'nullable',



        ]);
        $peEyes = new PhysicalExamEyes($validate);
        $peEyes->save();
        return response()->json('Done');
    }


}
