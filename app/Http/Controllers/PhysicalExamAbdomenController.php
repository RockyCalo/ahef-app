<?php

namespace App\Http\Controllers;

use App\Models\PhysicalExamAbdomen;
use Illuminate\Http\Request;

class PhysicalExamAbdomenController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "unremarkable" => 'nullable',
            "scars" => 'nullable',
            "discoloration" => 'nullable',
            "striae" => 'nullable',
            "mass" => 'nullable',
            "distended" => 'nullable',
            "visible_peristalsis_pulsation" => 'nullable',
            "fluid_wave" => 'nullable',
            "shifting_dullness" => 'nullable',
            "hypo_hyperactive_bowel_sound" => 'nullable',
            "tenderness_guarding" => 'nullable',
            "palpable_liver_edge" => 'nullable',
            "palpable_spleen" => 'nullable',
            "others_physical_exam_abdomen" => 'nullable',

        ]);
        $peAbdomen = new PhysicalExamAbdomen($validate);
        $peAbdomen->save();
        return response()->json('Done');
    }


}
