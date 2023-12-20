<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ImmunizationHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'bcg',
        'hep_b',
        'rotavirus',
        'pentavalent_vaccine',
        'inactive_polio_vaccine',
        'oral_polio_vaccine',
        'mmr_vaccine',
        'pcv',
        'pcv_thirteen',
        'inactive_influenza',
        'hepatitis_a',
        'varicella',
        'typhoid',
        'japanese_encephalitis',
        'meningococcal',
        'mr_td',
        'hpv',
        'covid',
        'others_Immunization',
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
