<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FemaleMenstrualHistory extends Model
{
    use HasFactory;
    protected $fillable = [
        'minarche',
        'mentrual_period',
        'duration',
        'cycle',
        'flow',
        'dysmenorrhea',
        'contraceptive_use',
        'cervical_cancer',
        'patient_been_pregnant',
        'prenatal_checkups',
        'prenatal_services',
        'gravida',
        'year',
        'place_of_delivery',
        'type_of_delivery',
        'specify_complication',
        // 'patient_adults_id',
        // 'patient_adolescents_id',
        // 'patient_children_id'
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
