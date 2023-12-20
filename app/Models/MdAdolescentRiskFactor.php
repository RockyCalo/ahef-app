<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MdAdolescentRiskFactor extends Model
{
    use HasFactory;

    protected $fillable = [
            'assist_tool',
            'audit_tool',
            'sasq',
            'e_hits',
            'disability_identification',
            'cbc_rcb',
            'fbs',
            'lipid_profile',
            'hiv_rapid_test',
            'hepatitis_b_and_c',
            'syphilis_rpr',
            'xpert_mtb_test',
            'patient_adolescents_id'
    ];
    
    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }


}
