<?php

namespace App\Http\Controllers;


use App\Http\Requests\loginAdmin;
use App\Models\Client;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;

class adminController extends Controller
{
    public function getLogin(){
        return view('auth/Admin/login');
    }

    public function login(loginAdmin $request){
        
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::Admin);
    }

    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        $request->session()->regenerateToken();
        return redirect('/admin/login');
    }

    public function addClient(Request $request){
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:clients'],
            'password' => ['required',  Rules\Password::defaults()],
            'phone' => ['required'],
        ]);

        Client::create([
            "name" =>$request->name,
            "email" =>$request->email,
            "password"=>bcrypt($request->password),
            "phone" =>$request->phone,
            "address" =>$request->address,
            "shop_name"=>$request->shop_name,
        ]); 

        User::create([
            "name" =>$request->name,
            "email" =>$request->email,
            "password"=>bcrypt($request->password),
        ]);
        return "Done";
    }
   
}
