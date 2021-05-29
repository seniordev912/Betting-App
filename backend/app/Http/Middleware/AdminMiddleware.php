<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Support\Facades\Auth as Admin;

class AdminMiddleware
{
    /**
     * The authentication guard factory instance.
     *
     * @var \Illuminate\Contracts\Auth\Factory
     */
    protected $auth;

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Auth\Factory  $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ($this->auth->guard($guard)->guest()) {
            return response()->json([
                'code' => UNAUTHENTICATED_CODE,
                'message' => SERVER_ERROR_MESSAGE
            ]);
        }
        $admin = Admin::user();
        if ($admin->id_role !== 1) {
            return response()->json([
                'code' => UNAUTHENTICATED_CODE,
                'message' => SERVER_ERROR_MESSAGE
            ]);
        }
        return $next($request);
    }
}
