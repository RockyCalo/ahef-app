<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdolescentRoutinePlan extends Model
{
    use HasFactory;
    protected $fillable = [
        'chest_x_ray',
        'biannual_phq',
        'caries_risk',
        'crafft',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'

    ];

    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }

}
