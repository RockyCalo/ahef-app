<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SexualHistory extends Model
{
    use HasFactory;
    protected $fillable = [
        'sexuality_active',
        'month_genital_contact',
        'anal_sex',
        'multiple_sex',
        'high_risk_partner',
        'partner_injected_drugs',
        'early_coitarche',
        'reproductive_health',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
