<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalHistoryDisability extends Model
{
    use HasFactory;
    protected $fillable = [
        'seeing_hearing',
        'walking_moving_around',
        'communicating',
        'caring',
        'feelings_interfering',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
