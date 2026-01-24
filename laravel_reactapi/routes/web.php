<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;


interface Acd{

}


class Abc implements Acd{
   function test(){
     echo "test is success";
   }
}


App::bind(Abc::class);
// dd(app());

Route::get('/', function () {
    app()->make(Abc::class)->test();
});



