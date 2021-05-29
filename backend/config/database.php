<?php
return [
    'migrations' => 'migrations',
    'connections' => [
        'driver'    => env('DB_CONNECTION', 'mysql'),
        'host'      => env('DB_HOST', 'localhost'),
        'port'      => env('DB_PORT', 3306),
        'database'  => env('DB_DATABASE', 'forge'),
        'username'  => env('DB_USERNAME', 'forge'),
        'password'  => env('DB_PASSWORD', ''),
        'strict'    => env('DB_STRICT_MODE', false),
    ]
];
