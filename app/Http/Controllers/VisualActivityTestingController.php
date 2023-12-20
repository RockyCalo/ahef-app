<?php

namespace App\Http\Controllers;

use App\Models\VisualActivityTesting;
use Illuminate\Http\Request;

class VisualActivityTestingController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "OD" => 'nullable',
            "OS" => 'nullable',



        ]);
        $visualActivity = new VisualActivityTesting($validate);
        $visualActivity->save();
        return response()->json('Done');
    }
}
