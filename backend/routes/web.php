<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'Laravel' => app()->version(),
        'Environment' => config('app.env')
    ]);
});
