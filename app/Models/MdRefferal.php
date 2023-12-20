<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MdRefferal extends Model
{
    use HasFactory;
    protected $fillable = [
        'development_pedia',
        'dartc',
        'mhgap_trained',
        'sped',
        'vawc',
        'protection_center',
        'specialist_for',
        'immunization_schedule',
        'follow_up_on',
        'phd_name_signature',
        // 'phd_license',
        // 'phd_ptr_number',
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
