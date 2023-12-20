<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientAdolescent extends Model
{
    use HasFactory;
    protected $table = 'patient_adolescents';

    protected $fillable =[
        'employment_status',
        'occupation_if_applicable',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];


    public function category_adolescent(){
        return $this->belongsTo(PatientCategory::class, 'patient_categort_id', 'id');
    }

    public function patient_info(){

        return $this->hasOne(PatientInformation::class, 'patient_information_id', 'id');
    }

}
