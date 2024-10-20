<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // Property untuk menampung data hewan sementara
    private $animals = ['kucing', 'ayam', 'ikan'];

    // Menampilkan seluruh data hewan (GET request)
    public function index()
    {
        return response()->json($this->animals);
    }

    // Menambahkan hewan baru (POST request)
    public function store(Request $request)
    {
        // Validasi input, memastikan field 'animal' tidak kosong dan berupa string
        $request->validate([
            'animal' => 'required|string',
        ]);

        $newAnimal = $request->input('animal');
        array_push($this->animals, $newAnimal);

        return response()->json([
            'message' => 'Animal added successfully',
            'data' => $this->animals
        ]);
    }

    // Memperbarui data hewan berdasarkan ID (PUT request)
    public function update(Request $request, $id)
    {
        // Validasi input
        $request->validate([
            'animal' => 'required|string',
        ]);

        // Memastikan ID valid
        if (!isset($this->animals[$id])) {
            return response()->json(['error' => 'Animal not found'], 404);
        }

        // Update hewan pada index $id
        $this->animals[$id] = $request->input('animal');

        return response()->json([
            'message' => 'Animal updated successfully',
            'data' => $this->animals
        ]);
    }

    // Menghapus data hewan berdasarkan ID (DELETE request)
    public function destroy($id)
    {
        // Memastikan ID valid
        if (!isset($this->animals[$id])) {
            return response()->json(['error' => 'Animal not found'], 404);
        }

        // Menghapus hewan berdasarkan ID dan re-index array
        unset($this->animals[$id]);
        $this->animals = array_values($this->animals);

        return response()->json([
            'message' => 'Animal deleted successfully',
            'data' => $this->animals
        ]);
    }
}
