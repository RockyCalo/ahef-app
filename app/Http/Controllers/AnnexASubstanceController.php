<?php

namespace App\Http\Controllers;

use App\Models\AnnexASubstance;
use Illuminate\Http\Request;

class AnnexASubstanceController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "substance_use" => 'nullable',
            "alcohol" => 'nullable',
            "smoking" => 'nullable',
            "mental_health" => 'nullable',
            "neuro_developmental" => 'nullable',
            "non_communicable" => 'nullable',
            "infections" => 'nullable',
            "cancers" => 'nullable',



        ]);
        $annexASbubstance = new AnnexASubstance($validate);
        $annexASbubstance->save();
        return response()->json('Done');
    }
}
