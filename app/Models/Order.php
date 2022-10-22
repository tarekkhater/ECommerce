<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $table="orders";
    protected $fillable = [
        'quantity',
        'user_id',
        'product_id',
    ];

    protected $hidden = ['created_at' ,'updated_at'];
  
    protected $casts = [
        'created_at'  => 'datetime:Y-m-d'
       ,
  ];
    public function user(){
        return $this->belongsTo(related:"App\Models\User" , foreignKey:"user_id");
    }
    public function product(){
        return $this->belongsTo(related:"App\Models\Product" , foreignKey:"product_id");
    }
  
}
