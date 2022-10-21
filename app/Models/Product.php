<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table="products";
    protected $fillable = [
        'name',
        'price',
        'category',
        'brand',
        'count_in_stock',
        'Reviews',
        'image',
        'description',
        "slug",
        "client_id"
    ];

    protected $hidden = ['created_at' , 'updated_at'];

    public function client(){
        return $this->belongsTo(related:"App\Models\Client" , foreignKey:"client_id");
    }
    public function order(){
        return $this->belongsTo(related:"App\Models\Order" , foreignKey:"product_id");
    }
}
