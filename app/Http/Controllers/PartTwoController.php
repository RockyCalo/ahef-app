<?php

namespace App\Http\Controllers;

use App\Models\PartTwo;
use Illuminate\Http\Request;

class PartTwoController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "reason_of_consult" => 'nullable',
            "health_problem" => 'nullable',
        ]);
        $partTwo = new PartTwo($validate);
        $partTwo->save();
        return response()->json('Done');
    }
}
