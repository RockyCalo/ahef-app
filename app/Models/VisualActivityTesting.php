<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisualActivityTesting extends Model
{
    use HasFactory;
    protected $fillable = [
        'OD',
        'OS',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];

    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
