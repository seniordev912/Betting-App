<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * validate Token.
     *
     * @param  Request  $request
     * @return Response
     */
    public function validateToken(Request $request) {
        return response()->json([
            'code' => SUCCESS_CODE,
            'message' => SUCCESS_MESSAGE,
        ]);
    }
}
