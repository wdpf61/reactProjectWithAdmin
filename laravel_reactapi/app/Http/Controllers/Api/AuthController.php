<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{


    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation Error',
                'errors'  => $validator->errors(),
            ], 422);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);  //Hash::make($value)
        $user = User::create($input);
        $success['token'] =  $user->createToken('api-token')->plainTextToken;
        $success['name'] =  $user->name;


        return response()->json([
            'success' => $success,
            'message' => 'User register successfully.',
            'name'  =>  $user->name,
        ], 200);
    }








    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('api-token')->plainTextToken;

        // $token = $user->createToken('mobile-app', ['read', 'create']);
        // $token = $user->createToken('admin-panel', ['read', 'create', 'update', 'delete', 'admin']);

        return response()->json([
            'token' => $token,
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out']);
    }
}
