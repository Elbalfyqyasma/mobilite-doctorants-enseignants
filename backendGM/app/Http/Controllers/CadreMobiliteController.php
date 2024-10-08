<?php

namespace App\Http\Controllers;

use App\Models\CadreMobilite;
use Illuminate\Http\Request;             

class CadreMobiliteController extends Controller
{
    public function index()
    {
        $cadres = CadreMobilite::all();
        return response()->json($cadres);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'libelleC' => 'required',
            'description' => 'required',
        ]);

        $cadre = CadreMobilite::create($validatedData);
        return response($cadre, 201);
    }

    public function show($id)
    {
        $cadre = CadreMobilite::findOrFail($id);
        return response()->json($cadre);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'libelleC' => 'required',
            'description' => 'required',
        ]);

        $cadre = CadreMobilite::findOrFail($id);
        $cadre->fill($validatedData)->save();

        return response()->json([
            'message' => 'Modified successfully'
        ]);
    }

    public function destroy($id)
    {
        $cadre = CadreMobilite::findOrFail($id);
        $cadre->delete();

        return response()->json([
            'message' => 'Successfully deleted'
        ]);
    }

    public function search(Request $request)
    {
        $libelle = $request->input('libelle');

        $cadres = CadreMobilite::where('libelleC', 'LIKE', "%{$libelle}%")
            ->orWhere('description', 'LIKE', "%{$libelle}%")
            ->get();

        return response()->json($cadres);
    }
}
