<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EyesExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'abnormal_findings',
        'cotton_wool',
        'microaneurysim',
        'hemorrhages',
        'edema',
        'neovascularization',
        'arteriolar_constriction',
        'av_nicking',
        'exudates',
        'others_abnormal_findings',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
