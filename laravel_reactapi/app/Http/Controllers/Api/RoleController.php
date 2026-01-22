<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::all();
        return response()->json(compact("roles"), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $role = new Role();
            $role->name = $request->role["name"];
            $role->save();
            return response()->json(["success" => "role has been saved successfully"], 200);
        } catch (\Throwable $th) {
            return response()->json(["error" => $th->getMessage()], 200);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $role= Role::find($id);
       return response()->json(compact("role"), 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        try {
            $role =  Role::find($request->role["id"]);
            $role->name = $request->role["name"];
            $role->save();
            return response()->json(["success" => "role has been updated successfully"], 200);
        } catch (\Throwable $th) {
            return response()->json(["error" => $th->getMessage()], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
          Role::find($request->id)->delete();
          return response()->json(["success" => "role has been deleted successfully"], 200);
    }
}
