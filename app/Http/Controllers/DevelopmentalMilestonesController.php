<?php

namespace App\Http\Controllers;

use App\Models\DevelopmentalMilestones;
use Illuminate\Http\Request;

class DevelopmentalMilestonesController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "walks_straight" => 'nullable',
            "able_to_balance" => 'nullable',
            "build_staircase" => 'nullable',
            "copies_cross" => 'nullable',
            "proper_syntax_short" => 'nullable',
            "Knows_color_letter" => 'nullable',
            "play_pretend" => 'nullable',

        ]);
        $developmentMilestone = new DevelopmentalMilestones($validate);
        $developmentMilestone->save();
        return response()->json('Done');
    }

}
