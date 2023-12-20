<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NeuroCranialNerve extends Model
{
    use HasFactory;

    protected $fillable = [
        'identify_test_substance',
        'visual_acuity',
        'visual_fields',
        'brisk_and_reactive',
        'primary_gaze_midline',
        'full_eoms',
        'corneal_blink_reflex',
        'intact_v1-v3_light_touch_pain_temp',
        'temporalis_muscle_tone',
        'no_facial_asymmetry',
        'intact_gross_hearing',
        'weber_midline',
        'rinne_ac_bc_ad_as',
        'gag_reflex',
        'uvala_midline',
        'equal_palatal_rise',
        'without_difficulty_swallowing',
        'shrug_scm_and_trapezius',
        'tongue_midline',
        'no_fasciculations',
        'no_atrophy',
        'with_abnormal_findings',
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
