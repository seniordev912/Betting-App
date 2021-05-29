<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\Email;
use Illuminate\Support\Facades\Auth;

class VerifyController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Reset Password with the email and password.
     *
     * @param  Request  $request
     * @return Response
     */
    public function reset_password(Request $request) {
        try {
            $token = $request->header('Authorization');
            $token = substr( $token, 7);
            if ($token == '') {
                return response()->json([
                    'code' => BAD_REQUEST_CODE,
                    'message' => NOT_EXIST_ACCOUNT_MESSAGE
                ]);
            }

            $password_input = $request->input('password');
            $users = User::where(['token' => $token])->get();

            if (count($users) == 0) {
                return response()->json([
                    'code' => BAD_REQUEST_CODE,
                    'message' => NOT_EXIST_ACCOUNT_MESSAGE
                ]);
            } else {
                $password = Hash::make($password_input);
                User::where(['token' => $token])->update(['is_valid' => true, 'password' => $password, 'token' => '']);
                return response()->json([
                    'code' => SUCCESS_CODE,
                    'message' => RESETPASSWORD_SUCCEED
                ]);
            }
        } catch (Exception $e) {
            return response()->json([
                'code' => SERVER_ERROR_CODE,
                'message' => SERVER_ERROR_MESSAGE
            ]);
        }

    }

    /**
     * Verify the registered account.
     *
     * @param  Request  $request
     * @return Response
     */
    public function verify(Request $request) {
        try {
            $token = $request->header('Authorization');
            $token = substr($token, 7);
            if ($token == '') {
                return response()->json([
                    'code' => BAD_REQUEST_CODE,
                    'message' => NOT_EXIST_ACCOUNT_MESSAGE
                ]);
            }
            $users = User::where(['token' => $token])->get();

            if (count($users) == 0) {
                return response()->json([
                    'code' => BAD_REQUEST_CODE,
                    'message' => NOT_EXIST_ACCOUNT_MESSAGE
                ]);
            } else {
                User::where(['token' => $token])->update(['is_valid' => true, 'token' => '']);
                return response()->json([
                    'code' => SUCCESS_CODE,
                    'message' => VERIFICATION_SUCCEED
                ]);
            }
        } catch (Exception $e) {
            return response()->json([
                'code' => SERVER_ERROR_CODE,
                'message' => SERVER_ERROR_MESSAGE
            ]);
        }

    }
}
