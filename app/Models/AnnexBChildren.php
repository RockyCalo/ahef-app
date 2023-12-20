<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnexBChildren extends Model
{
    use HasFactory;
    protected $fillable = [
        'visit',
        'gross_motor',
        'fine_motor',
        'language',
        'cognitive',
        'psychosocial',
        'patient_adults_id',
        'patient_adolescents_id',
        'patient_children_id'
    ];
    public function patientchildren(){
        return $this->belongsTo(PatientChild::class, 'patient_children_id', 'id');
    }
}
