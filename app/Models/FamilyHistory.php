<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FamilyHistory extends Model
{

    use HasFactory;
    protected $fillable =[
        'hypertension',
        'stroke',
        'heart_disease',
        'high_cholesterol',
        'heart_pain',
        'diabetes',
        'kidney_disease',
        'liver_disease',
        'copd',
        'asthma',
        'mental_abuse_condition',
        'cancer',
        'others_family_history',
        'tuberculosis',
        'leprosy',
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
