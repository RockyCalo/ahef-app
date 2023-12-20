<?php

namespace App\Http\Controllers;

use App\Models\NeuroCerebellar;
use Illuminate\Http\Request;

class NeuroCerebellarController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "no_dysmetria" => 'nullable',
            "no_dysdiadochokinesia" => 'nullable',
            "no_nystagmus" => 'nullable',
            "no_dystaxia" => 'nullable',
            "normal_gait" => 'nullable',




        ]);
        $neuroCerebellar = new NeuroCerebellar($validate);
        $neuroCerebellar->save();
        return response()->json('Done');
    }
}
