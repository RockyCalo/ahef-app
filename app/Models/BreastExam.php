<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BreastExam extends Model
{
    use HasFactory;
protected $fillable = [
    'unremarkable',
    'asymmetry',
    'dimpling',
    'nipple_retraction',
    'mass_nodule',
        'discharge',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
];

    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescents_id', 'id')->orderBy('age', 'desc');
    }
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
