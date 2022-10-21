<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\loginClient;



class clientController extends Controller
{
    public function clientLogin(loginClient $request){
        
        $request->authenticate();

        $request->session()->regenerate();

        return "Done";
    }

    public function clientLogout(Request $request)
    {
        Auth::guard('client')->logout();
        $request->session()->regenerateToken();
        return redirect('/login');
    }
}
