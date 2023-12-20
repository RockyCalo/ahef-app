<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DevelopmentalMilestones extends Model
{
    use HasFactory;

    protected $fillable = [
        'walks_straight',
        'able_to_balance',
        'build_staircase',
        'copies_cross',
        'proper_syntax_short',
        'Knows_color_letter',
        'play_pretend',
        // 'patient_adults_id',
        // 'patient_adolescents_id',
        // 'patient_children_id'
    ];
    public function patientchildren(){
        return $this->belongsTo(PatientChild::class, 'patient_children_id', 'id');
    }
    public function patientadolescents(){
        return $this->belongsTo(PatientAdolescent::class, 'patient_adolescent_id', 'id');
    }
}
