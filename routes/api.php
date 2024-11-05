<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

// Mengelompokkan route StudentController dan user dengan middleware 'auth:sanctum'
Route::middleware('auth:sanctum')->group(function () {
    // Route untuk StudentController dengan autentikasi Sanctum

    // Menggunakan apiResource untuk StudentController
    // Route::apiResource('students', StudentController::class);
    Route::get('/students', [StudentController::class, 'index']);
    Route::post('/students', [StudentController::class, 'store']);
    Route::put('/students/{student}', [StudentController::class, 'update']);
    Route::delete('/students/{student}', [StudentController::class, 'destroy']);

    // Mengambil data user yang terautentikasi
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

// Route untuk AnimalController tanpa middleware auth:sanctum
// Route::apiResource('animals', AnimalController::class)->only(['index', 'store', 'update', 'destroy']);
Route::get('/animals', [AnimalController::class, 'index']);
Route::post('/animals', [AnimalController::class, 'store']);
Route::put('/animals/{id}', [AnimalController::class, 'update']);
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);
