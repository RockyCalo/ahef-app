<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MdAgeSpecific extends Model
{
    use HasFactory;
    protected $fillable = [
        'hpv_testing',
        'cervical_cytology',
        'visual_inspection',
        'fasting_blood_sugar',
        'plasma_glocuse',
        'annual_fobt',
        'colonoscopy',
        'mammography',
        'biennial_clinical',
        'biennial_digital_rectal',
        'biennieal_prostate',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];

    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }

}
