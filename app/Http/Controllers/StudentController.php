<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Container\Attributes\DB;
use Illuminate\Http\Request;


class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $students = DB::select('select * from students');
        $students = Student::all();

        $response = [
            'message' => 'Success Showing All Students Data',
            'data' => $students
        ];

        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = [
            'name' => $request->name,
            'nim' => $request->nim,
            'email' => $request->email,
            'majority' => $request->majority
           ];

           $students = Student::create($input);

           $response = [
            'message' => 'Successfully create new student',
            'data' => $students
           ];

           return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        // Validasi data input
        $request->validate([
            'name' => 'required|string|max:255',
            'nim' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'majority' => 'required|string|max:100'
        ]);

        // Mengambil hanya data yang valid dari request
        $input = $request->only(['name', 'nim', 'email', 'majority']);

        // Update data mahasiswa
        $student->update($input);

        // Response setelah update berhasil
        $response = [
            'message' => 'Successfully updated student data',
            'data' => $student
        ];

        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        // Hapus data mahasiswa
        $student->delete();

        // Response setelah penghapusan berhasil
        $response = [
            'message' => 'Successfully deleted student data'
        ];

        return response()->json($response, 200);
    }
}
