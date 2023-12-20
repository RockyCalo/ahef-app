<?php

namespace App\Http\Controllers;

use App\Models\PersonalHistoryDietaryIntake;
use Illuminate\Http\Request;

class PersonalHistoryDietaryIntakeController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "intake" => 'nullable',



        ]);
        $personalHistoryDietary = new PersonalHistoryDietaryIntake($validate);
        $personalHistoryDietary->save();
        return response()->json('Done');
    }
}
