<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class LeagueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $backend_url = env('BACKEND_URL');
        $items = [
            ['id' => 1, 'name' => 'Champions League', 'logo' => $backend_url.'logo/leagues/uefa.jpg'],
            ['id' => 2, 'name' => 'Fifa World Cup', 'logo' => $backend_url.'logo/leagues/fifa.jpg'],

        ];
        foreach($items as $item)
        {
            \App\Models\League::create($item);
        }
    }
}
