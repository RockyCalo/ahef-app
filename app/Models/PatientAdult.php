<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientAdult extends Model
{
    use HasFactory;
    protected $table = 'patient_adults';

    protected $fillable =[
        'patient_contact_number',
        'phic_register',
        'phic_number',
        'konsulta_provider',
        'employment_status',
        'occupation_if_applicable',
        'highest_educational',
        'pwd_id_number',
        'pantawid_pamilya',
        'ip_nonip',
        'ethnicity',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];

    public function category_adult(){
        return $this->belongsTo(PatientCategory::class, 'patient_categort_id', 'id');
    }

    public function patient_info(){
        return $this->hasOne(PatientInformation::class, 'patient_information_id', 'id');
    }
}
