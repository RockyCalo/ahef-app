<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalExamExtremity extends Model
{
    use HasFactory;

    protected $fillable = [
        'unremarkable',
        'varicosities',
        'skin_changes',
        'discoloration',
        'redness',
        'bruising',
        'deforming',
        'clubbing',
        'mass',
        'edema',
        'swelling',
        'tenderness',
        'lesion',
        'ulcer',
        'unequal_pulses',
        'CRT_2sec',
        'fracture_sprain',
        'others_physical_exam_extremities',
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
