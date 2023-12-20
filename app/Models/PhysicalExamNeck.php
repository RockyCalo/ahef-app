<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalExamNeck extends Model
{
    use HasFactory;

    protected $fillable = [
        'unremarkable',
        'regidity',
        'deviated_trachea',
        'mass',
        'nodules',
        'tenderness',
        'bruit',
        'palpable_thyroid',
        'lymphadenopathies',
        'others_physical_exam_neck',
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
