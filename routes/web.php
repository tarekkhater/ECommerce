<?php

use App\Http\Controllers\adminController;
use App\Http\Controllers\clientController;
use App\Http\Controllers\productController;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';

//Routes for Users
Route::group(["middleware" => "auth:web"] , function(){
    Route::get('/updateViews/{id}' ,[productController::class,"UpdateViews"]);
    Route::get('order/{id}', [productController::class, 'deleteOrder']);; 
    Route::post('addOrder', [productController::class, 'addOrder']);
});


//Routes for Clients
Route::group(["middleware" => "auth:client"] , function(){
    Route::get('/createProduct' ,[productController::class,"show"]);
    Route::post('/createProduct' ,[productController::class,"create"])->name('createProduct');
    Route::post('client/logout',[clientController::class, 'clientLogout']);
});

Route::post('client/login', [clientController::class, 'clientLogin'])->name("client.login");
