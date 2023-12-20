<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalExamAbdomen extends Model
{
    use HasFactory;

    protected $fillable = [
        'unremarkable',
        'scars',
        'discoloration',
        'striae',
        'mass',
        'distended',
        'visible_peristalsis_pulsation',
        'fluid_wave',
        'shifting_dullness',
        'hypo_hyperactive_bowel_sound',
        'tenderness_guarding',
        'palpable_liver_edge',
        'palpable_spleen',
        'others_physical_exam_abdomen',
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
