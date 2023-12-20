<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anthropometrics extends Model
{
    use HasFactory;

    protected $fillable =[
        'weight',
        'height',
        'bmi',
        'normal',
        'underweight',
        'overweight',
        'obese',
        // 'patient_adults_id',
        // 'patient_adolescents_id',
        // 'patient_children_id'
    ];

    public function patientchilds(){
        return $this->belongsTo(PatientChild::class, 'patient_children_id', 'id')->orderBy('age', 'desc');
    }

    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescents_id', 'id')->orderBy('age', 'desc');
    }

    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
