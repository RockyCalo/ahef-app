<?php

namespace App\Http\Controllers;

use App\Models\EyesExam;
use App\Models\PartFour;
use Illuminate\Http\Request;

class EyesExamController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "assessment" => 'nullable',




        ]);
        $partFour = new PartFour($validate);
        $partFour->save();
        return response()->json('Done');
    }
}
