<?php

namespace App\Http\Controllers;

use App\Models\ReviewSystemSkin;
use Illuminate\Http\Request;

class ReviewSystemSkinController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "none" => 'nullable',
            "rash" => 'nullable',
            "itching" => 'nullable',
            "change_in_color" => 'nullable',
            "change_in_hair" => 'nullable',
            "dryness" => 'nullable',
            "others_skin_review" => 'nullable',
        ]);
        $reviewSkin = new ReviewSystemSkin($validate);
        $reviewSkin->save();
        return response()->json('Done');
    }
}
