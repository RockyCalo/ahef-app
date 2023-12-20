<?php

namespace App\Http\Controllers;

use App\Models\PersonalHistorySubstanceUse;
use Illuminate\Http\Request;

class PersonalHistorySubstanceUseController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "never_consumed" => 'nullable',
            "recreational_drugs_intake" => 'nullable',
            "recreational_drugs_user" => 'nullable',



        ]);
        $personalHistorySubstance = new PersonalHistorySubstanceUse($validate);
        $personalHistorySubstance->save();
        return response()->json('Done');
    }
}
