<?php

namespace App\Http\Controllers;

use App\Models\FemaleMenstrualHistory;
use Illuminate\Http\Request;

class FemaleMenstrualHistoryController extends Controller
{
    //
    public function store(Request $request)
    {
        $validate = $request->validate([
            "duration" => 'nullable',
            "cycle" => 'nullable',
            "flow" => 'nullable',
            "dysmenorrhea" => 'nullable',
            "contraceptive_use" => 'nullable',
            "cervical_cancer" => 'nullable',
            "patient_been_pregnant" => 'nullable',
            "prenatal_checkups" => 'nullable',
            "prenatal_services" => 'nullable',
            "gravida" => 'nullable',
            "year" => 'nullable',
            "place_of_delivery" => 'nullable',
            "type_of_delivery" => 'nullable',
            "specify_complication" => 'nullable',
        ]);
        $femaleMenstrual = new FemaleMenstrualHistory($validate);
        $femaleMenstrual->save();
        return response()->json('Done');
    }
}
