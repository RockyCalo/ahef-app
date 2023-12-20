<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalHistoryMentalHealth extends Model
{
    use HasFactory;
    protected $fillable = [
        'intimate_partner',
        'maltreatment',
        'bullying',
        'depression',
        'anxiety',
        'history_of_selfharm',
        'suicide_attempt',
        'others_mental_health',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
