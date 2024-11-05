<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil semua data siswa
        $students = Student::all();

        // Menghandle jika data kosong
        if ($students->isEmpty()) {
            $response = [
                'message' => 'No students found'
            ];
            return response()->json($response, 404);
        }

        // Jika data ditemukan, menyiapkan response sukses
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
        // Validasi input data mahasiswa yang akan disimpan
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'nim' => 'required|string|max:20|unique:students',
            'email' => 'required|email|max:255|unique:students',
            'majority' => 'required|string|max:100'
        ]);

        // Menghandle jika salah satu data tidak dikirim atau tidak valid
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Menyimpan data mahasiswa ke database
        $students = Student::create($request->all());

        // Menyiapkan response sukses setelah penyimpanan berhasil
        $response = [
            'message' => 'Successfully created new student',
            'data' => $students
        ];

        return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            // Mencari data mahasiswa berdasarkan ID, dan menghandle jika resource yang diminta tidak ada
            $student = Student::findOrFail($id);

            // Menyiapkan response sukses jika data mahasiswa ditemukan
            $response = [
                'message' => 'Successfully found student data',
                'data' => $student
            ];
            return response()->json($response, 200);
        } catch (ModelNotFoundException $e) {
            // Response error jika mahasiswa tidak ditemukan
            return response()->json(['message' => 'Student not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            // Mencari data mahasiswa berdasarkan ID, menghandle jika resource tidak ditemukan
            $student = Student::findOrFail($id);

            // Validasi input data mahasiswa yang akan diupdate
            $validator = Validator::make($request->all(), [
                'name' => 'sometimes|required|string|max:255',
                'nim' => 'sometimes|required|string|max:20',
                'email' => 'sometimes|required|email|max:255',
                'majority' => 'sometimes|required|string|max:100'
            ]);

            // Menghandle jika salah satu data yang dikirim tidak valid
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            // Melakukan update data mahasiswa hanya dengan data yang dikirim
            $student->update($request->only(['name', 'nim', 'email', 'majority']));

            // Menyiapkan response sukses setelah update berhasil
            $response = [
                'message' => 'Successfully updated student data',
                'data' => $student
            ];

            return response()->json($response, 200);
        } catch (ModelNotFoundException $e) {
            // Response error jika mahasiswa tidak ditemukan
            return response()->json(['message' => 'Student not found'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            // Mencari data mahasiswa berdasarkan ID, menghandle jika resource tidak ditemukan
            $student = Student::findOrFail($id);

            // Menghapus data mahasiswa dari database
            $student->delete();

            // Menyiapkan response sukses setelah penghapusan berhasil
            $response = [
                'message' => 'Successfully deleted student data'
            ];

            return response()->json($response, 200);
        } catch (ModelNotFoundException $e) {
            // Response error jika mahasiswa tidak ditemukan
            return response()->json(['message' => 'Student not found'], 404);
        }
    }
}
