<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewSystemHeent extends Model
{
    use HasFactory;
    protected $fillable = [
        'none',
        'blurring_of_vision',
        'floater',
        'tearing_eye_discharge',
        'eye_redness',
        'eye_itchiness',
        'hearing_changes',
        'nose_bleed',
        'nasal_discharge',
        'ear_discharge',
        'toothache',
        'gum_bleeding',
        'sore_throat',
        'difficulty_swallowing',
        'hoarseness',
        'polydipsia',
        'others_heent_review',
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
