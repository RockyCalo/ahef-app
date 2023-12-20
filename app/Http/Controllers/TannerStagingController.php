<?php

namespace App\Http\Controllers;

use App\Models\TannerStaging;
use Illuminate\Http\Request;

class TannerStagingController extends Controller
{
    //

    public function store(Request $request)
    {
        $validate = $request->validate([
            "pubic_hair_stage" => 'nullable',
            "breast_stage" => 'nullable',
            "genital_stage" => 'nullable',
            "par_with_age" => 'nullable',
            "delayed_puberty" => 'nullable',



        ]);
        $tannerStaging = new TannerStaging($validate);
        $tannerStaging->save();
        return response()->json('Done');
    }

}
