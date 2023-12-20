<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartOneRedFlags extends Model
{
    use HasFactory;

    protected $fillable =[
        'chest_pain',
        'difficulty_breathing',
        'seizure_convulsion',
        'unconscious',
        'not_oriented',
        'bluish_discoloration',
        'harmful_suicide',
        'acute_fracture',
        'sign_of_abuse',
        'severe_abdominal_pain',
        'persistent_vomiting',
        'persistent_diarrhea',
        'tolerate_fluids',
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
