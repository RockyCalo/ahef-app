<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewSystemPsychiatric extends Model
{
    use HasFactory;

    protected $fillable = [
        'none',
        'problem_in_concentration',
        'peers_of_carryingout',
        'easily_distracted',
        'excessive_overactivity',
        'extreme_changes',
        'extreme_mood_changes',
        'excessive_fears',
        'difficulty_in_social_interact',
        'sleep_difficulties',
        'hallucinations',
        'disruptive',
        'impulsivity',
        'severe_tantrums',
        'physical_aggression',
        'suicidal_thoughts',
        'others_psychiatric_review',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
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
