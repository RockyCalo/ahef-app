<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MdAdultRiskFactor extends Model
{
    use HasFactory;
    protected $fillable = [
        'assist_tool',
        'audit_tool',
        'fagerstrom_test',
        'disability_identification',
        'lipid_profile',
        'fbs',
        'tuberculin_skin_test',
        'xpert_mtb',
        'hiv',
        'hepatitis_b_and_c',
        'liver_ultrasound',
        'annual_low_dose',
        'upper_gi_series',
        'upper_endoscopy',
        'ebv_dna',
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
