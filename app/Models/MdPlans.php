<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MdPlans extends Model
{
    use HasFactory;
    protected $fillable = [
        'proper_nutrition',
        'weight_management',
        'physical_activity',
        'sleeping_habit',
        'screen_time',
        'personal_hygiene',
        'selfcare_advice',
        'injury_prevention',
        'safe_sexual_practice',
        'avoiding_harmful_use',
        'routine_vaccination',
        'appropriate_health',
        'maintenance_medication',
        'other_plans',
        'annual_oral_screening',
        'color_testing',
        'disability_identification',
        'cbc_rbc',
        'lipid_profile',
        'fbs',
        'hiv',
        'xray',
        'developmental_pedia_assessment',
        'mhgap_trained',
        'sped',
        'vawc',
        'specialist_for',
        'immunization_schedule',
        'follow_up_on',
        'phd_name_signature',
        // 'patient_adults_id',
        // 'patient_adolescents_id',
        // 'patient_children_id'
    ];

    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }


}
