<?php

namespace App\Http\Controllers;

use App\Models\PersonalHistorySmoking;
use Illuminate\Http\Request;

class PersonalHistorySmokingController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "never_used" => 'nullable',
            "secondhand_smoke" => 'nullable',
            "former_tabacco" => 'nullable',
            "current_tabacco" => 'nullable',
            "vape_user" => 'nullable',



        ]);
        $personalHistorySmoking = new PersonalHistorySmoking($validate);
        $personalHistorySmoking->save();
        return response()->json('Done');
    }
}
