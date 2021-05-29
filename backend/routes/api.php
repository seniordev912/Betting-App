<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| apis Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
$router->group(['prefix' => 'leagues'], function () use ($router) {
    $router->get('/list', 'LeagueController@getList');
    $router->get('/matches', 'LeagueController@getMatchList');
    $router->get('/match', 'LeagueController@getMatch');
    $router->post('/bet', 'LeagueController@createBet');
    $router->post('/place_bet', 'LeagueController@placeBet');
    $router->get('/bet/list', 'LeagueController@getBetList');
});
