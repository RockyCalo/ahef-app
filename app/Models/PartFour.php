<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PartFour extends Model
{
    use HasFactory;
    protected $fillable = [
        'assessment',
        // 'patient_adults_id',
        // 'patient_adolescents_id',
        // 'patient_children_id'
    ];

    public function patient_info()
    {
        return $this->belongsTo(PatientInformation::class, 'patient_information_id', 'id');
    }

    public function patientadolescents()
    {
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }
}
