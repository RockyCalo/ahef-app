<?php

namespace App\Http\Controllers;

use App\Models\PersonalHistoryDisability;
use Illuminate\Http\Request;

class PersonalHistoryDisabilityController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "seeing_hearing" => 'nullable',
            "walking_moving_around" => 'nullable',
            "communicating" => 'nullable',
            "caring" => 'nullable',
            "feelings_interfering" => 'nullable',




        ]);
        $personalHistoryDisability = new PersonalHistoryDisability($validate);
        $personalHistoryDisability->save();
        return response()->json('Done');
    }
}
