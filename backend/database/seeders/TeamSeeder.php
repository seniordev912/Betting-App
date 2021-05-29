<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TeamSeeder extends Seeder
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
            ['id' => 1, 'name' => 'Barcelona', 'logo' => $backend_url.'logo/teams/Barcelona.png', 'is_club' => true],
            ['id' => 2, 'name' => 'Chelsea', 'logo' => $backend_url.'logo/teams/Chelsea.png', 'is_club' => true],
            ['id' => 3, 'name' => 'Juventus', 'logo' => $backend_url.'logo/teams/Juventus.png', 'is_club' => true],
            ['id' => 4, 'name' => 'Real Madrid', 'logo' => $backend_url.'logo/teams/RealMadrid.png', 'is_club' => true],
            ['id' => 5, 'name' => 'France', 'logo' => $backend_url.'logo/teams/France.png', 'is_club' => false],
            ['id' => 6, 'name' => 'Germany', 'logo' => $backend_url.'logo/teams/Germany.png', 'is_club' => false],
            ['id' => 7, 'name' => 'Italy', 'logo' => $backend_url.'logo/teams/Italy.png', 'is_club' => false],
            ['id' => 8, 'name' => 'Spain', 'logo' => $backend_url.'logo/teams/Spain.png', 'is_club' => false],

        ];
        foreach($items as $item)
        {
            \App\Models\Team::create($item);
        }
    }
}
