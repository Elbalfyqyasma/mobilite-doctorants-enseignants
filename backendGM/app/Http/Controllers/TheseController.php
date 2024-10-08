<?php

namespace App\Http\Controllers;

use App\Models\These;
use Illuminate\Http\Request;

class TheseController extends Controller
{
    public function index()
    {
        $theses = These::all();
        return response()->json($theses);
    }
    public function store(Request $request)
    {
        $request->validate([
            'titreT' => 'required',
            'descriptionT' => 'required',
            'AnneeThesse' => 'required',
            'impactRegion' => 'required',
            'Encadrant' => 'required',
            'user_id' => 'required' // Assuming user_id is also required
        ]);
    
        $these = new These();
        $these->titreT = $request->input('titreT');
        $these->descriptionT = $request->input('descriptionT');
        $these->AnneeThesse = $request->input('AnneeThesse');
        $these->impactRegion = $request->input('impactRegion');
        $these->Encadrant = $request->input('Encadrant');
        $these->user_id = $request->input('user_id');
        $these->save();
    
        return response()->json($these, 201);
    }
    

    public function show($id)
    {
        $these = These::findOrFail($id);
        return response()->json($these);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'titreT' => 'required',
            'descriptionT' => 'required',
            'AnneeThesse' => 'required',
            'impactRegion' => 'required',
            'Encadrant' => 'required',
        ]);

        $these = These::findOrFail($id);
        $these->update($request->all());
        return response()->json($these, 200);
    }

    public function destroy($id)
    {
        $these = These::findOrFail($id);
        $these->delete();
        return response()->json(null, 204);
    }
}
