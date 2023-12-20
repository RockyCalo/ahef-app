<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MedicalSurgicalHistory extends Model
{
    use HasFactory;
    protected $fillable = [
        'asthma',
        'allergies',
        'allergies_to_medicines',
        'injuries_accident',
        'hearing_problem',
        'vision_problem',
        'heart_disease',
        'mental_conditions',
        'cancer',
        'other_organ_disorder',
        'previous_hospitalization',
        'previous_surgeries',
        'others_medical_history',
        // 'patient_adults_id',
        // 'patient_adolescents_id',
        // 'patient_children_id'
    ];
    public function patientchildren(){
        return $this->belongsTo(PatientChild::class, 'patient_children_id', 'id');
    }
    public function patient_adolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
