<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamHead;
use Illuminate\Http\Request;

class PhysicalExamHeadController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "deformity" => 'nullable',
            "alopecia" => 'nullable',
            "lesion" => 'nullable',
            "mass" => 'nullable',
            "others_pe_head" => 'nullable',

        ]);
        $peHead = new PhysicalExamHead($validate);
        $peHead->save();
        return response()->json('Done');
    }
}
