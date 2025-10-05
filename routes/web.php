<?php

use App\Http\Controllers\AdoptionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function() {
    return Inertia::render('about');
})->name('about');

Route::get('/adoption', [AdoptionController::class, 'index'])->name('adoption.index');
Route::get('/adoption/{pname}', [AdoptionController::class, 'show'])->name('adoption.show');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::post('/adoption', [AdoptionController::class, 'store'])->name('adoption.store');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
