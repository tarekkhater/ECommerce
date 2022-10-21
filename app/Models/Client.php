<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Client extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $table="clients";
    protected $fillable = [
        'name',
        'email',
        'password',
        "phone",
        "address",
        "shop_name",
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'created_at' ,
         'updated_at',
        'remember_token',
    ];
    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at'  => 'datetime:Y-m-d'
    ];

    public function product(){
        return $this->hasMany(related:"App\Models\Product" , foreignKey:"client_id");
    }
  
}

