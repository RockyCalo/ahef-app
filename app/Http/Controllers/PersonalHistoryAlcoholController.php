<?php

namespace App\Http\Controllers;

use App\Models\PersonalHistoryAlcohol;
use Illuminate\Http\Request;

class PersonalHistoryAlcoholController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "never_consumed" => 'nullable',
            "drinks_alcohol" => 'nullable',
            "binge_drinker" => 'nullable',
            "patient_adults_id" => 'nullable',



        ]);
        $personalHistoryAlcohol = new PersonalHistoryAlcohol($validate);
        $personalHistoryAlcohol->save();
        return response()->json('Done');
    }

}
