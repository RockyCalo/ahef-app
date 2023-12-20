<?php

namespace App\Http\Controllers;

use App\Models\AdolescentRoutinePlan;
use Illuminate\Http\Request;

class AdolescentRoutinePlanController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "chest_x_ray" => 'nullable',
            "biannual_phq" => 'nullable',
            "caries_risk" => 'nullable',
            "crafft" => 'nullable',



        ]);
        $adolescentRoutine = new AdolescentRoutinePlan($validate);
        $adolescentRoutine->save();
        return response()->json('Done');
    }
}
