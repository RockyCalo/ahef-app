<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhysicalExamEyes extends Model
{
    use HasFactory;

    protected $fillable = [
        'unremarkable',
        'icteric_sclera',
        'red_eye',
        'white_pupillary',
        'ror',
        'exophthalmos',
        'strabismus',
        'discharge',
        'xanthelasma',
        'xanthoma',
        'chalazion',
        'sty',
        'ectropion',
        'ptosis',
        'others_pe_eyes',
        'visual_od',
        'visual_os',
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
