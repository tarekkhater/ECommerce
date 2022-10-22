<?php

namespace App\Http\Controllers;

use App\Events\ReviewsEvent;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class productController extends Controller
{
    public function show(){
        return view('products/form');
    }
    
    public function create(Request $request){

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'price' => 'required',
            'count_in_stock' => 'required',
            
        ]);
     
        $file_path =$this->SaveImages('images/products',$request->image); 
        $slug = str_replace(" ","-",lcfirst($request->name));

            Product::create([
                "name" => $request -> name,
                "slug"=> $slug,
                "price" => $request -> price,
                "brand" => $request -> brand ,
                "category" => $request -> category,
                "count_in_stock" => $request -> count_in_stock,
                "description" => $request -> description,
                "Reviews" => 0,
                "client_id" => $request-> client_id,
                "image" => $file_path,
            ]);
        
       
        return 'Done';
    }

    public function addOrder(Request $request){
        Order::create([
            "user_id"=>$request->user_id,
            "product_id"=>$request->product_id,
            "quantity"=>$request->quantity,
        ]);
        return 'Done';
    }

    public function getOrders(){
        $orders = Order::with(relations:"product")->get();
        $orders->makeVisible(['created_at']);
        $products =[];
        foreach($orders as $order){
        array_push($products , $order->product);   
    }
    return response()->json(['orders'=>$orders]);
    }

    public function UpdateViews($id){
        $product = Product::find($id);
        event(new ReviewsEvent($product));
        return "Done";
    }

    public function getProducts(){
        $products = Product::select('id','name','price','category','count_in_stock','description','Reviews','image',"slug","client_id" )->get();
        return response()->json(["products" => $products]);
    }

    public function deleteOrder($id){
       $order =  Order::find($id);
       $order ->delete();
        return "Done";
    }

    protected  function SaveImages($folder,$image)
    {
        $file_extension = $image->getClientOriginalExtension();
        $file_name =time(). '.' . $file_extension;
        $image->move($folder , $file_name);
        return $file_name;
    }

}
