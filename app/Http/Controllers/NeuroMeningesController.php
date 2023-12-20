<?php

namespace App\Http\Controllers;

use App\Models\NeuroMeninges;
use Illuminate\Http\Request;

class NeuroMeningesController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "no_brudzinski" => 'nullable',
            "no_kernigs" => 'nullable',




        ]);
        $neuroMeninges = new NeuroMeninges($validate);
        $neuroMeninges->save();
        return response()->json('Done');
    }


}
