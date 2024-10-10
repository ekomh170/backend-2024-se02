<?php

# membuat fungsi
function hitungLuas($jari)
{
    $phi = 3.14;
    $luasLingkaran = $phi * $jari * $jari;
    return $luasLingkaran;
}

# memanggil fungsi
echo hitungLuas(7);
echo hitungLuas(9);
echo hitungLuas(13);
