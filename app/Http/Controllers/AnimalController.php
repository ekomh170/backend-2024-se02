<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // Property untuk menampung data hewan sementara
    private $animals = ['kucing', 'ayam', 'ikan'];

    public function index()
    {
        // Menampilkan seluruh data hewan (GET request)
        return response()->json($this->animals);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input, memastikan field 'animal' tidak kosong dan berupa string
        $request->validate([
            'animal' => 'required|string',
        ]);

        $newAnimal = $request->input('animal');
        array_push($this->animals, $newAnimal);

        return response()->json([
            'message' => 'Hewan berhasil ditambahkan',
            'data' => $this->animals
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Menampilkan hewan berdasarkan ID
        if (!isset($this->animals[$id])) {
            return response()->json(['error' => 'Hewan tidak ditemukan'], 404);
        }

        return response()->json([
            'data' => $this->animals[$id]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validasi input
        $request->validate([
            'animal' => 'required|string',
        ]);

        // Memastikan ID valid
        if (!isset($this->animals[$id])) {
            return response()->json(['error' => 'Hewan tidak ditemukan'], 404);
        }

        // Update hewan pada index $id
        $this->animals[$id] = $request->input('animal');

        return response()->json([
            'message' => 'Hewan berhasil diperbarui berdasarkan ID ' . $id,
            'data' => $this->animals
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Memastikan ID valid
        if (!isset($this->animals[$id])) {
            return response()->json(['error' => 'Hewan tidak ditemukan'], 404);
        }

        // Menghapus hewan berdasarkan ID dan re-index array
        unset($this->animals[$id]);
        $this->animals = array_values($this->animals); // Re-index array

        return response()->json([
            'message' => 'Hewan berhasil dihapus berdasarkan ID ' . $id,
            'data' => $this->animals
        ]);
    }
}
