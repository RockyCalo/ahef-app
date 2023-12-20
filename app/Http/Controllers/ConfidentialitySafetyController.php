<?php

namespace App\Http\Controllers;

use App\Models\ConfidentialitySafety;
use Illuminate\Http\Request;

class ConfidentialitySafetyController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "guide_question_one" => 'nullable',
            "guide_question_two" => 'nullable',
            "guide_question_three" => 'nullable',
            "red_flags_one" => 'nullable',
            "red_flags_two" => 'nullable',
            "red_flags_three" => 'nullable',
            "red_flags_four" => 'nullable',
            "red_flags_five" => 'nullable',
            "red_flags_six" => 'nullable',
            "red_flags_seven" => 'nullable',
            "red_flags_eight" => 'nullable',
            "red_flags_nine" => 'nullable',


        ]);
        $neuroConfidentialSafety = new ConfidentialitySafety($validate);
        $neuroConfidentialSafety->save();
        return response()->json('Done');
    }
}
