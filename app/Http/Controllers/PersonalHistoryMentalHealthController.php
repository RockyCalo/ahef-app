<?php

namespace App\Http\Controllers;

use App\Models\PersonalHistoryMentalHealth;
use Illuminate\Http\Request;

class PersonalHistoryMentalHealthController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "intimate_partner" => 'nullable',
            "maltreatment" => 'nullable',
            "bullying" => 'nullable',
            "depression" => 'nullable',
            "anxiety" => 'nullable',
            "history_of_selfharm" => 'nullable',
            "suicide_attempt" => 'nullable',
            "others_mental_health" => 'nullable',



        ]);
        $personalHistoryMentalHealth = new PersonalHistoryMentalHealth($validate);
        $personalHistoryMentalHealth->save();
        return response()->json('Done');
    }
}
