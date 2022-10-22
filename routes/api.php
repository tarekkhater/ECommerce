<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\productController;
use App\Models\Client;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware(['auth:client'])->get('/client', function (Request $request) {
    return $request->user('client');
});

Route::middleware(['auth:admin'])->get('/admin', function (Request $request) {
    return $request->user("admin");
});



Route::get('products',[productController::class,'getProducts']);
Route::get('orders' , [productController::class, 'getOrders']);
Route::get('/clients',[Controller::class,'getClients']);
Route::get('/users',[Controller::class,'getUsers']);
