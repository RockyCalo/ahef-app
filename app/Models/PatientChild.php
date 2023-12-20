<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientChild extends Model
{
    use HasFactory;
    protected $table = 'patient_children';

    protected $fillable =[
        'patient_information_id',
        'enrolled_in_school',
        'current_education',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];
    public function category_children(){
        return $this->belongsTo(PatientCategory::class, 'patient_categort_id', 'id');
    }

    public function patient_info(){
        return $this->hasOne(PatientInformation::class, 'patient_information_id', 'id');
    }
}
