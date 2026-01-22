<?php

use App\Http\Controllers\Api\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get("role", [RoleController::class,"index"]);
Route::post("role/save", [RoleController::class,"store"]);
Route::get("role/find/{id}", [RoleController::class,"show"]);
Route::put("role/update", [RoleController::class,"update"]);
Route::delete("role/delete", [RoleController::class,"destroy"]);
