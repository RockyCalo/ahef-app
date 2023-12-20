<?php

namespace App\Http\Controllers;

use App\Models\NeuroDtrs;
use Illuminate\Http\Request;

class NeuroDtrsController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "brachioradialis" => 'nullable',
            "no_babinski_or_hoffman" => 'nullable',




        ]);
        $neuroDtrs = new NeuroDtrs($validate);
        $neuroDtrs->save();
        return response()->json('Done');
    }

}
