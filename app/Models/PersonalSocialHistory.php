<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalSocialHistory extends Model
{
    use HasFactory;
protected $fillable =[
    'diet_balance',
    'diet_with_supplement',
    'deworming',
    'oral_health',
    'physical_activity',
    'daily_screening_time',
    'violence_and_injuries',
    'bullying_and_harassment',
    // 'patient_adults_id',
    // 'patient_adolescents_id',
    // 'patient_children_id'
];

    public function patientchildren(){
        return $this->belongsTo(PatientChild::class, 'patient_children_id', 'id');
    }
    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
