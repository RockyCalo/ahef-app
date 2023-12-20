<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PatientCategory;

class PatientCategoryController extends Controller
{
    //
    public function index()
    {
        // $patient_categories = PatientCategory::all();
        return view('forms.category.index');
    }

    public function enroll()
    {
        return view('forms.category.enroll');
    }

    public function store(Request $request)
    {
        PatientCategory::create([
            'age_category' => $request->age_category,
            'category_slug' => Str::slug($request->age_category)
        ]);
    }
}
