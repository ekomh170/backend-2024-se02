<?php

// NIM : 0110223079
// Nama : Eko Muchamad Haryono 
// Prodi : Teknik Informatika
// Peminatan : Software Engineering
// Kelas : TI02
// Semester : 3
// Angkatan : 2023
// Mata Kuliah : Pemrograman Backend

# membuat class Animal
class Animal
{
    # property animals
    private $animals;

    # method constructor - mengisi data awal
    # parameter: data hewan (array)
    public function __construct($data)
    {
        $this->animals = $data;
    }

    # method index - menampilkan data animals
    public function index()
    {
        # gunakan foreach untuk menampilkan data animals (array)
        echo "Index - Menampilkan seluruh hewan <br>";
        foreach ($this->animals as $animal) {
            echo "- " . $animal . '<br>';
        }
        echo "<br>";
    }

    # method store - menambahkan hewan baru
    # parameter: hewan baru
    public function store($data)
    {
        # gunakan method array_push untuk menambahkan data baru
        array_push($this->animals, $data);
        echo "Store - Menambahkan hewan baru ($data) <br>";
        foreach ($this->animals as $animal) {
            echo "- " . $animal . '<br>';
        }
        echo "<br>";
    }

    # method update - mengupdate hewan
    # parameter: index dan hewan baru
    public function update($index, $data)
    {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $data;
            echo "Update - Mengupdate hewan <br>";
            foreach ($this->animals as $animal) {
                echo "- " . $animal . '<br>';
            }
            echo "<br>";
        } else {
            echo "Hewan pada index $index tidak ditemukan.<br>";
        }
    }

    # method delete - menghapus hewan
    # parameter: index
    public function destroy($index)
    {
        # gunakan method array_splice untuk menghapus data array
        if (isset($this->animals[$index])) {
            array_splice($this->animals, $index, 1);
            echo "Delete - Menghapus hewan <br>";
            foreach ($this->animals as $animal) {
                echo "- " . $animal . '<br>';
            }
            echo "<br>";
        } else {
            echo "Hewan pada index $index tidak ditemukan.<br>";
        }
    }
}

# membuat object
# kirimkan data hewan (array) ke constructor
$animal = new Animal(['Ayam', 'Ikan']);

# Menampilkan seluruh hewan
$animal->index();

# Menambahkan hewan baru
$animal->store('Burung');

# Mengupdate hewan
$animal->update(0, 'Kucing Anggora');

# Menghapus hewan
$animal->destroy(1);

// NIM : 0110223079
// Nama : Eko Muchamad Haryono 
// Prodi : Teknik Informatika
// Peminatan : Software Engineering
// Kelas : TI02
// Semester : 3
// Angkatan : 2023
// Mata Kuliah : Pemrograman Backend