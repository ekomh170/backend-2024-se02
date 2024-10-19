<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // Property untuk menampung data hewan
    private $animals = ['kucing', 'ayam', 'ikan'];

    // Menampilkan seluruh data hewan (GET request)
    public function index()
    {
        return response()->json($this->animals);
    }

    // Menambahkan hewan baru (POST request)
    public function store(Request $request)
    {
        $newAnimal = $request->input('animal');
        array_push($this->animals, $newAnimal);
        return response()->json($this->animals);
    }

    // Memperbarui data hewan (PUT request)
    public function update(Request $request, $id)
    {
        $this->animals[$id] = $request->input('animal');
        return response()->json($this->animals);
    }

    // Menghapus data hewan (DELETE request)
    public function destroy($id)
    {
        unset($this->animals[$id]);
        // Re-index array after unset
        $this->animals = array_values($this->animals);
        return response()->json($this->animals);
    }
}
