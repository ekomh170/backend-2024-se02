<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    //Menyatakan bahwa model ini berhubungan dengan tabel students di database.
    protected $table = "students";

    // mass assigntment field
    protected $fillable = ['id', 'name', 'nim', 'email', 'majority', 'created_at', 'updated_at'];
}
