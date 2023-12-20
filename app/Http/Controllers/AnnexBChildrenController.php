<?php

namespace App\Http\Controllers;

use App\Models\AnnexBChildren;
use Illuminate\Http\Request;

class AnnexBChildrenController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "visit" => 'nullable',
            "gross_motor" => 'nullable',
            "fine_motor" => 'nullable',
            "language" => 'nullable',
            "cognitive" => 'nullable',
            "psychosocial" => 'nullable',




        ]);
        $annexBChildren = new AnnexBChildren($validate);
        $annexBChildren->save();
        return response()->json('Done');
    }
}
