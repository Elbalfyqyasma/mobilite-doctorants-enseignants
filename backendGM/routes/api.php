<?php

use App\Http\Controllers\CedController;

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers'
], function ($router) {
    // Authentication routes
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    // Password reset routes
// routes/api.php
Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
Route::post('resetPassword', 'ChangePasswordController@process');


    // Resource route for 'ceds' handled by CedController
    Route::post('addced', 'CedController@store');
    Route::get('getceds', 'CedController@getCeds'); // Updated route name to getCeds
    Route::delete('deleteced/{id}', 'CedController@destroy');
    Route::get('ced/{id}', 'CedController@show');
    Route::put('/ced/{ced}', 'CedController@update');
    Route::get('/ceds/search', 'CedController@search');

 
    // Resource route for 'users' handled by UserController
    Route::get('/users/search', 'UserController@search');
    Route::get('getusers', 'UserController@getUser');
    Route::get('user/{id}', 'UserController@show');
    Route::delete('deleteUser/{id}', 'UserController@destroy');
    Route::put('/ProfilUser/{id}', 'UserController@updateProfile');




    // Resource route for 'structures' handled by StructureRechercheController
    Route::post('addstructure', 'StructureRechercheController@store');
    Route::get('getstructures', 'StructureRechercheController@index'); // Updated route name to getstructures
    Route::delete('deletestructure/{id}', 'StructureRechercheController@destroy');
    Route::get('structure/{id}', 'StructureRechercheController@show');
    Route::put('/structure/{id}', 'StructureRechercheController@update');
    Route::get('/structures/search', 'StructureRechercheController@search');



      // Resource route for 'cadre-mobilite' handled by CadreMobiliteController
    Route::post('add-cadre-mobilite', 'CadreMobiliteController@store');
    Route::get('get-cadres-mobilite', 'CadreMobiliteController@index')->name('get-cadres-mobilite');
    Route::delete('delete-cadre-mobilite/{id}', 'CadreMobiliteController@destroy');
    Route::get('cadre-mobilite/{id}', 'CadreMobiliteController@show');
    Route::put('/cadre-mobilite/{id}', 'CadreMobiliteController@update');
    Route::get('/cadres-mobilite/search', 'CadreMobiliteController@search');

    Route::get('/structures/ced/{cedId}', 'StructureRechercheController@getStructureByCed');



    // Resource route for 'production-scientifiques' handled by ProductionScientifiqueController
Route::post('add-production-scientifique', 'ProductionScientifiqueController@store');
Route::get('get-production-scientifiques', 'ProductionScientifiqueController@index')->name('get-production-scientifiques');
Route::delete('delete-production-scientifique/{id}', 'ProductionScientifiqueController@destroy');
Route::get('production-scientifique/{id}', 'ProductionScientifiqueController@show');
Route::put('/production-scientifique/{id}', 'ProductionScientifiqueController@update');
Route::get('/production-scientifiques/search', 'ProductionScientifiqueController@searchByTitre');
Route::get('production-scientifiques/search-by-user', 'ProductionScientifiqueController@searchByUser');

   // Resource route for 'theses' handled by TheseController
   Route::post('addthese', 'TheseController@store');
   Route::get('getthese', 'TheseController@index');
   Route::delete('deleteThese/{id}', 'TheseController@destroy');
   Route::get('Theses/{id}', 'TheseController@show');
   Route::put('Theses/{id}', 'TheseController@update');



   Route::get('organismes', 'OrganismeAcceuilController@index');
   Route::post('organismes', 'OrganismeAcceuilController@store');
   Route::get('organismes/{organismeAcceuil}', 'OrganismeAcceuilController@show');
   Route::put('organismes/{organismeAcceuil}', 'OrganismeAcceuilController@update');
   Route::delete('organismes/{organismeAcceuil}', 'OrganismeAcceuilController@destroy');
   
   
   Route::get('projects', 'ProjetController@index');
   Route::post('projects', 'ProjetController@store');
   Route::get('projects/{project}', 'ProjetController@show');
   Route::put('projects/{project}', 'ProjetController@update');
   Route::delete('projects/{project}', 'ProjetController@destroy');
   

   Route::post('upload','ProjetController@upload');

});



?>