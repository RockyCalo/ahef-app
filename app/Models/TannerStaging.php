<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TannerStaging extends Model
{
    use HasFactory;
protected $fillable = [
    'pubic_hair_stage',
    'breast_stage',
    'genital_stage',
    'par_with_age',
        'delayed_puberty',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
];
    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }

}
