<?php

use App\Http\Controllers\adminController;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/dashboard', function () {
    return view('auth\Admin\dashboard');
})->name("admin.dashboard")->middleware('auth:admin');

Route::group(["middleware => guest:admin"], function(){
    Route::get('login',[adminController::class,'getLogin'])->name('adminPage.login');
    Route::post('login',[adminController::class,'login'])->name('admin.login');
    
});

Route::group(["middleware => auth:admin"], function(){
    Route::post('logout',[adminController::class,'logout']);
    Route::post('addClient',[adminController::class,"addClient"]);
});




