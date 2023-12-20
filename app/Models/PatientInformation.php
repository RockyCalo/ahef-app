<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientInformation extends Model
{
    use HasFactory;
    protected $table = 'patient_information';

    protected $fillable =[
        'lastname',
        'firstname',
        'middlename',
        'suffix',
        'age',
        'gender',
        'birthday',
        'consult_date',
        'address',
        'religion',
        'civil_status',
        'blood_type',
        'patient_adolescents_id',
        'patient_children_id'

    ];

    public function patientchilds(){
        return $this->belongsTo(PatientChild::class, 'patient_children_id', 'id')->orderBy('age', 'desc');
    }

    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescents_id', 'id')->orderBy('age', 'desc');
    }

    public function patientadults(){
        return $this->belongsTo(PatientAdult::class, 'patient_adults_id', 'id')->orderBy('age', 'desc');
    }
}
