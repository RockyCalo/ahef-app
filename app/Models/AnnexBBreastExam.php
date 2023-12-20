<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnexBBreastExam extends Model
{
    use HasFactory;
    protected $fillable = [
        'prepare',
        'size',
        'shape',
        'symmetry',
        'nipple_areolar',
        'skin_thickening',
        'contralateral',
        'previous_finding',
        'lay_supine',
        'wagon_wheel',
        'vertical_strip',
        'concentric_circle',
        'examining_hand',
        'begin_exam',
        'normal_side',
        'place_ipsilateral',
        'soft',
        'firm',
        'nodular',
        'fibrocrystic',
        'dense',
        'inframammary_ridge',
        'massess_size',
        'massess_shape',
        'massess_texture',
        'massess_mobility',
        'massess_delimitation',
        'massess_tenderness',
        'approximate_depth',
        'nipple_areolar',
        'palpate_number',
        'palpate_size',
        'palpate_texture',
        'palpate_mobility',
        'palpate_delimitation',
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
