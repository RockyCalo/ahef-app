<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalHistorySmoking extends Model
{
    use HasFactory;
    protected $fillable = [
        'never_used',
        'secondhand_smoke',
        'former_tabacco',
        'current_tabacco',
        'vape_user',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];
    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
