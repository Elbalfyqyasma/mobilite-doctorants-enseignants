<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
  
      
public function boot()
{
    // Fix for MySQL < 5.7.7 and MariaDB < 10.2.2
    Schema::defaultStringLength(191); //Update defaultStringLength
}
    
}
?>