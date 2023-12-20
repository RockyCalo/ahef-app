<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParentInformation extends Model
{
    use HasFactory;
    protected $table = 'parent_information';

    protected $fillable =[
        'parent_lastname',
        'parent_firstname',
        'parent_middlename',
        'parent_suffix',
        'parent_age',
        'parent_gender',
        'parent_birthday',
        'parent_contact_number',
        'relationship_to_patient',
        'phic_register',
        'phic_number',
        'parent_employment_status',
        'konsulta_provider',
        'pantawid_pamilya',
        'parent_ip_nonip',
        'parent_ethnicity',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];


    public function patient_info(){
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }

    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }
}
