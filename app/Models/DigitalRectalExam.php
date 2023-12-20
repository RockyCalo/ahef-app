<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DigitalRectalExam extends Model
{
    use HasFactory;

    protected $fillable = [
        'unremarkable',
        'prostate_exam_unremarkable',
        'sphincter_tone',
        'strictures',
        'lesions',
        'skin_tags',
        'masses_nodules',
        'tenderness',
        'prolapse',
        'discharge',
        'blood_per_tactating_finger',
        'prostate_findings',
        'others_physical_digital_rectal',
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
