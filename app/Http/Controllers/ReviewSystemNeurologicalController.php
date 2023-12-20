<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemNeurological;
use Illuminate\Http\Request;

class ReviewSystemNeurologicalController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "headache" => 'nullable',
            "numbness" => 'nullable',
            "seizures" => 'nullable',
            "fainting" => 'nullable',
            "difficulty_in_communicating" => 'nullable',

        ]);
        $reviewNeurological = new ReviewSystemNeurological($validate);
        $reviewNeurological->save();
        return response()->json('Done');
    }
}
