<?php

use App\Http\Controllers\Api\OrderController;
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


Route::get("order", [OrderController::class,"index"]);
Route::get("order/orderInvoice/{id}", [OrderController::class,"invoice"]);
Route::get("customer", [OrderController::class,"orderData"]);
Route::post("order/react_order_save", [OrderController::class,"react_order_save"]);
