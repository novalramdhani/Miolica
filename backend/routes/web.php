<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'Laravel' => app()->version(),
        'environment' => config('app.env')
    ]);
});
