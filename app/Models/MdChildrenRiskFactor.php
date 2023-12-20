<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MdChildrenRiskFactor extends Model
{
    use HasFactory;
    protected $fillable = [
        'annual_oral_screening',
        'color_testing',
        'disability_identification',
        'cbc_rbc',
        'fbs',
        'ldl_hdl',
        'hiv_rapid',
        'chest_xray',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];
    public function patientchildren(){
        return $this->belongsTo(PatientChild::class, 'patient_children_id', 'id');
    }

}
