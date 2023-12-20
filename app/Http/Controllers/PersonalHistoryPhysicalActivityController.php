<?php

namespace App\Http\Controllers;

use App\Models\PersonalHistoryPhysicalActivity;
use Illuminate\Http\Request;

class PersonalHistoryPhysicalActivityController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "moderate_intensity" => 'nullable',



        ]);
        $personalHistoryPhysicalAct = new PersonalHistoryPhysicalActivity($validate);
        $personalHistoryPhysicalAct->save();
        return response()->json('Done');
    }

}
