<?php

# membuat class Person
class Person
{
    # membuat property (variable)
    public $nama;
    public $alamat;
    public $jurusan;

    # membuat constructor
    public function __construct($nama, $alamat, $jurusan)
    {
        $this->nama = $nama;
        $this->alamat = $alamat;
        $this->jurusan = $jurusan;
    }
}

$edo = new Person('Eko Muchamad Haryono', 'Kabupaten Bogor', 'Teknik Informatika');
$ahmad = new Person('Raina Azzahra', 'Kota Bogor', 'Bisnis Digital');
