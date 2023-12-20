<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReviewSystemGenitoUrinary extends Model
{
    use HasFactory;
    protected $fillable = [
        'none',
        'difficulty_urinating',
        'polyuria',
        'nocturia',
        'increased_urinary_frequency',
        'bloody_urine',
        'urinary_incontinence',
        'decreased_stream',
        'urinary_stones',
        'vaginal_penile_discharge',
        'vaginal_penile_bleeding',
        'others_genitourinaty_review',
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
