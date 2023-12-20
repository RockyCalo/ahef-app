<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemMosculoSkeletals;
use Illuminate\Http\Request;

class ReviewSystemMosculoSkeletalsController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "myalgia" => 'nullable',
            "stiffness" => 'nullable',
            "joint_pain" => 'nullable',
            "difficulty_in_motion" => 'nullable',
            "others_mosculo_review" => 'nullable',
           
        ]);
        $reviewMosculo = new ReviewSystemMosculoSkeletals($validate);
        $reviewMosculo->save();
        return response()->json('Done');
    }


}
