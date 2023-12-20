<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NeuroMentalStatus extends Model
{
    use HasFactory;

    protected $fillable = [
        'awake_alert_with_regard',
        'goal_directed_response',
        'oriented_to_time_person_place',
        'follow_commands',
        'spontaneous_eye_opening',
        'concentration_fund',
        'remote_memory',
        'no_left_right_disorientation',
        'no_finger_agnosia',
        'no_acalculia',
        'no_agraphia',
        'no_agraphesthesia',
        'no_astereognosis',
        'no_apraxia',
        'no_neglect',
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
