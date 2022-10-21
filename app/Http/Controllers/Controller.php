<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    public function getClients(){
      $clients = Client::with('product')->get();
      $clients->makeVisible(['created_at']);
      return response()->json(["clients" => $clients]);
    }
    public function getUsers(){
        $users = User::with(relations:"order")->get();
        $users->makeVisible(['created_at']);
       return response()->json(["users"=>$users]);
    }
}
