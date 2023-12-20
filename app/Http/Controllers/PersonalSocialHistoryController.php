<?php

namespace App\Http\Controllers;

use App\Models\PersonalSocialHistory;
use Illuminate\Http\Request;

class PersonalSocialHistoryController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "diet_balance" => 'nullable',
            "diet_with_supplement" => 'nullable',
            "deworming" => 'nullable',
            "oral_health" => 'nullable',
            "physical_activity" => 'nullable',
            "daily_screening_time" => 'nullable',
            "violence_and_injuries" => 'nullable',
            "bullying_and_harassment" => 'nullable',



        ]);
        $personalsocialHistory = new PersonalSocialHistory($validate);
        $personalsocialHistory->save();
        return response()->json('Done');
    }
}
