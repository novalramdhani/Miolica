<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()
                ->json([
                    'Laravel Framework' => app()->version(),
                    'PHP' => PHP_VERSION,
                    'environment' => config('app.env')
                ]);
});
