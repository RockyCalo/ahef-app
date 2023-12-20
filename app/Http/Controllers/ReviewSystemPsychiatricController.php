<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemPsychiatric;
use Illuminate\Http\Request;

class ReviewSystemPsychiatricController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "problem_in_concentration" => 'nullable',
            "peers_of_carryingout" => 'nullable',
            "easily_distracted" => 'nullable',
            "excessive_overactivity" => 'nullable',
            "extreme_changes" => 'nullable',
            "extreme_mood_changes" => 'nullable',
            "excessive_fears" => 'nullable',
            "difficulty_in_social_interact" => 'nullable',
            "sleep_difficulties" => 'nullable',
            "hallucinations" => 'nullable',
            "disruptive" => 'nullable',
            "impulsivity" => 'nullable',
            "severe_tantrums" => 'nullable',
            "physical_aggression" => 'nullable',
            "suicidal_thoughts" => 'nullable',
            "others_psychiatric_review" => 'nullable',

        ]);
        $reviewPsychia = new ReviewSystemPsychiatric($validate);
        $reviewPsychia->save();
        return response()->json('Done');
    }
}
