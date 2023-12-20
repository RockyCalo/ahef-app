<?php

namespace App\Http\Controllers;

use App\Models\EnvironmentalHistory;
use Illuminate\Http\Request;

class EnvironmentalHistoryController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "safe_water" => 'nullable',
            "sanitary_toilet" => 'nullable',
            "satisfactory_waste_disposal" => 'nullable',
            "prolonged_exposure_to_biomass" => 'nullable',
            "exposure_to_tabacco" => 'nullable',

        ]);
        $environmentHistory = new EnvironmentalHistory($validate);
        $environmentHistory->save();
        return response()->json('Done');
    }

}
