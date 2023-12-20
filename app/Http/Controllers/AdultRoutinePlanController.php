<?php

namespace App\Http\Controllers;

use App\Models\AdultRoutinePlan;
use Illuminate\Http\Request;

class AdultRoutinePlanController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "chest_x_ray" => 'nullable',
            "cvd_risk" => 'nullable',
            "caries_risk" => 'nullable',
            "crafft" => 'nullable',



        ]);
        $adultRoutine = new AdultRoutinePlan($validate);
        $adultRoutine->save();
        return response()->json('Done');
    }

}
