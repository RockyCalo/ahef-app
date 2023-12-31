<?php

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

//  Route::get('/', function () {
//      return view('welcome');
//  });

//forms calling by group
 Route::prefix('forms')->group(function(){
    //controller group routing
Route::controller(App\Http\Controllers\PatientCategoryController::class)->group(function(){
Route::get('category', 'index');
Route::get('category/enroll', 'enroll');
Route::post('category', 'store');
});




 });
