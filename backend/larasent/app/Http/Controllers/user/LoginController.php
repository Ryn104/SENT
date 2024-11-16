<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request) {
        $validate = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);
    }
}
