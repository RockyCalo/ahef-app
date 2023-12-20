<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalExamMouth extends Model
{
    use HasFactory;

    protected $fillable = [
        'unremarkable',
        'asymmetry_deformity',
        'deviation',
        'erythema',
        'dentition',
        'discoloration',
        'caries_or_cavities',
        'lesions',
        'patches',
        'exudates',
        'persistent_nodule_ulcer_sores',
        'enlargement',
        'masses',
        'others_physical_exam_mouth',
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
