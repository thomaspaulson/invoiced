<?php

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

Route::resource('category', 'CategoryController');
Route::resource('model', 'ModelController');
Route::resource('billingunit', 'BillingUnitController');

Route::get('user', 'UserController@index');
