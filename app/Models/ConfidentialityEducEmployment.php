<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfidentialityEducEmployment extends Model
{
    use HasFactory;

    protected $fillable = [
        'guide_question_one',
        'guide_question_two',
        'guide_question_three',
        'red_flags_one',
        'red_flags_two',
        'red_flags_three',
        'red_flags_four',
        'red_flags_five',
        'red_flags_six',
        'red_flags_seven',
        'red_flags_eight',
        'red_flags_nine',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];

    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }
}
