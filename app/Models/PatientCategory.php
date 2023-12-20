<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PatientCategory extends Model
{
    use HasFactory;
    protected $table = 'patient_categories';

    protected $fillable = [
    'age_category',
    'category_slug'
    ];

    public function info_children(){
        return $this->hasMany(PatientChild::class, 'patient_children_id', 'id');
    }
    public function info_adolescents(){
        return $this->hasMany(PatientAdolescent::class, 'patient_adolescents_id', 'id');
    }
    public function info_adults(){
        return $this->hasMany(PatientAdult::class, 'patient_adults_id', 'id');
    }

}
