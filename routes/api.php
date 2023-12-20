<?php

use App\Http\Controllers\AnthropometricsController;
use App\Http\Controllers\DevelopmentalMilestonesController;
use App\Http\Controllers\EnvironmentalHistoryController;
use App\Http\Controllers\FamilyHistoryController;
use App\Http\Controllers\FemaleMenstrualHistoryController;
use App\Http\Controllers\GeneralSurveysController;
use App\Http\Controllers\ImmunizationHistoryController;
use App\Http\Controllers\MdPlansController;
use App\Http\Controllers\MedicalSurgicalHistoryController;
use App\Http\Controllers\PartFourController;
use App\Http\Controllers\PartOneRedFlagsController;
use App\Http\Controllers\PartTwoController;
use App\Http\Controllers\PersonalSocialHistoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/save_partone', [PartOneRedFlagsController::class, 'store']);
Route::post('/save_generalSurvey', [GeneralSurveysController::class, 'store']);
Route::post('/save_anthropometrics', [AnthropometricsController::class, 'store']);
Route::post('/save_parttwo', [PartTwoController::class, 'store']);
Route::post('/save_familyHistory', [FamilyHistoryController::class, 'store']);
Route::post('/save_PartFourplan', [MdPlansController::class, 'store']);
Route::post('/save_PartFour', [PartFourController::class, 'store']);
Route::post('/save_PartFourplan', [MdPlansController::class, 'store']);
Route::post('/save_developmentalMilestone', [DevelopmentalMilestonesController::class, 'store']);
Route::post('/save_environmentalHistory', [EnvironmentalHistoryController::class, 'store']);
Route::post('/save_femaleMenstrual', [FemaleMenstrualHistoryController::class, 'store']);
Route::post('/save_immunizationHistory', [ImmunizationHistoryController::class, 'store']);
Route::post('/save_medicalSurgical', [MedicalSurgicalHistoryController::class, 'store']);
Route::post('/save_personalSocial', [PersonalSocialHistoryController::class, 'store']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
