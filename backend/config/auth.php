<?php

return [
    'defaults' => [
        'guard' => 'auth',
        'passwords' => 'users',
    ],

    'guards' => [
        'auth' => [
            'driver' => 'jwt',
            'provider' => 'users',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => \App\Models\User::class
        ]
    ]
];
