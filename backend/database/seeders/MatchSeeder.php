<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MatchSeeder extends Seeder
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
            ['id' => 1, 'league_id' => 1, 'home_team_id' => 1, 'away_team_id' => 2, 'description' => 'Unknown', 'ranking' => 'High', 'place' => 'Spain'],
            ['id' => 2, 'league_id' => 1, 'home_team_id' => 3, 'away_team_id' => 4, 'description' => 'Unknown', 'ranking' => 'Moderate', 'place' => 'Italy'],
            ['id' => 3, 'league_id' => 2, 'home_team_id' => 5, 'away_team_id' => 6, 'description' => 'Unknown', 'ranking' => 'High', 'place' => 'Spain'],
            ['id' => 4, 'league_id' => 2, 'home_team_id' => 7, 'away_team_id' => 8, 'description' => 'Unknown', 'ranking' => 'Moderate', 'place' => 'Italy'],
        ];
        foreach($items as $item)
        {
            \App\Models\Match::create($item);
        }
    }
}
