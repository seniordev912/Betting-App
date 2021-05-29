<?php

namespace App\Http\Controllers;
use App\Models\Bet;
use App\Models\League;
use App\Models\Match;
use App\Models\PlacedList;
use Illuminate\Http\Request;

class LeagueController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    public function getList(Request $request) {
        try {
            $leagues = League::all();

            return response()->json([
                'code' => SUCCESS_CODE,
                'message' => SUCCESS_MESSAGE,
                'data' => [
                    'leagues' => $leagues
                ]
            ]);
        } catch (Exception $e) {
            return response()->json([
                'code' => SERVER_ERROR_CODE,
                'message' => FAILED_SEND_MESSAGE
            ]);
        }
    }

    public function getMatchList(Request $request) {
        try {
            $id = $request->id;
            $matches = Match::where('league_id', '=', $id)->get();
            foreach($matches as $match) {
                $match['home_team'] = $match->getHomeTeam()->first();
                $match['away_team'] = $match->getAwayTeam()->first();
            }

            return response()->json([
                'code' => SUCCESS_CODE,
                'message' => SUCCESS_MESSAGE,
                'data' => [
                    'matches' => $matches
                ]
            ]);
        } catch (Exception $e) {
            return response()->json([
                'code' => SERVER_ERROR_CODE,
                'message' => FAILED_SEND_MESSAGE
            ]);
        }
    }

    public function getMatch(Request $request) {
        try {
            $id = $request->id;

            $match = Match::where('id', '=', $id)->first();
            $match['home_team'] = $match->getHomeTeam()->first();
            $match['away_team'] = $match->getAwayTeam()->first();

            return response()->json([
                'code' => SUCCESS_CODE,
                'message' => SUCCESS_MESSAGE,
                'data' => [
                    'match' => $match
                ]
            ]);
        } catch (Exception $e) {
            return response()->json([
                'code' => SERVER_ERROR_CODE,
                'message' => FAILED_SEND_MESSAGE
            ]);
        }
    }

    public function createBet(Request $request) {
        try {
            $id = $request->id;
            $description = $request->description;
            $amount = $request->amount;
            $wallet_address = $request->wallet_address;

            $bet = new Bet();
            $bet->match_id = $id;
            $bet->question = $description;
            $bet->save();

            $place = new PlacedList();
            $place->bet_id = $bet->id;
            $place->amount = $amount;
            $place->wallet_address = $wallet_address;
            $place->save();

            return response()->json([
                'code' => SUCCESS_CODE,
                'message' => SUCCESS_MESSAGE,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'code' => SERVER_ERROR_CODE,
                'message' => FAILED_SEND_MESSAGE
            ]);
        }
    }

    public function placeBet(Request $request) {
        try {
            $id = $request->id;
            $amount = $request->amount;
            $wallet_address = $request->wallet_address;

            $place = new PlacedList();
            $place->bet_id = $id;
            $place->amount = $amount;
            $place->wallet_address = $wallet_address;
            $place->save();

            return response()->json([
                'code' => SUCCESS_CODE,
                'message' => SUCCESS_MESSAGE,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'code' => SERVER_ERROR_CODE,
                'message' => FAILED_SEND_MESSAGE
            ]);
        }
    }

    public function getBetList(Request $request) {
        try {
            $id = $request->id;

            $bets = Bet::where('match_id', '=', $id)->get();
            $match = Match::where('id', '=', $id)->first();
            $match['home_team'] = $match->getHomeTeam()->first();
            $match['away_team'] = $match->getAwayTeam()->first();
            return response()->json([
                'code' => SUCCESS_CODE,
                'message' => SUCCESS_MESSAGE,
                'data' => [
                    'bets' => $bets,
                    'match' => $match
                ]
            ]);
        } catch (Exception $e) {
            return response()->json([
                'code' => SERVER_ERROR_CODE,
                'message' => FAILED_SEND_MESSAGE
            ]);
        }
    }
}
