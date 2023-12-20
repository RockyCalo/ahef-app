<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemHeent;
use Illuminate\Http\Request;

class ReviewSystemHeentController extends Controller
{
    //


    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "blurring_of_vision" => 'nullable',
            "floater" => 'nullable',
            "tearing_eye_discharge" => 'nullable',
            "eye_redness" => 'nullable',
            "eye_itchiness" => 'nullable',
            "hearing_changes" => 'nullable',
            "nose_bleed" => 'nullable',
            "nasal_discharge" => 'nullable',
            "ear_discharge" => 'nullable',
            "toothache" => 'nullable',
            "gum_bleeding" => 'nullable',
            "sore_throat" => 'nullable',
            "difficulty_swallowing" => 'nullable',
            "hoarseness" => 'nullable',
            "polydipsia" => 'nullable',
            "others_heent_review" => 'nullable',
        ]);
        $reviewHeent = new ReviewSystemHeent($validate);
        $reviewHeent->save();
        return response()->json('Done');
    }

}
