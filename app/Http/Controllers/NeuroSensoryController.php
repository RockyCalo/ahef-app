<?php

namespace App\Http\Controllers;

use App\Models\NeuroSensory;
use Illuminate\Http\Request;

class NeuroSensoryController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "denies_sensory_deficits" => 'nullable',
            "modalities_rue_and_rle" => 'nullable',
            "modalities_lue_and_lle" => 'nullable',



        ]);
        $neuroSensory = new NeuroSensory($validate);
        $neuroSensory->save();
        return response()->json('Done');
    }
}
