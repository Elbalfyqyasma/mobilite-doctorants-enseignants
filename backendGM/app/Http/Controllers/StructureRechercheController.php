<?php


namespace App\Http\Controllers;

use App\Models\StructureRecherche;
use Illuminate\Http\Request;

class StructureRechercheController extends Controller
{
    // Existing methods...

    public function index()
    {
        $structures = StructureRecherche::select('id', 'intituleS', 'acronyme', 'directeur', 'ced_id')->get();
        return response()->json($structures);
    }

    public function store(Request $request)
    {
          
        $validatedData = $request->validate([
            'intituleS' => 'required',
            'acronyme' => 'required',
            'directeur' => 'required',
            'ced_id' => 'required|exists:ceds,id' // Validation for ced_id existence
        ]);
    
        $structure = StructureRecherche::create($validatedData);
    
        // Attach the Ced record to the StructureRecherche
        $structure->ced()->associate($validatedData['ced_id']);
        $structure->save();
    
        return response($validatedData, 201);
    }
    

    public function show($id)
    {
        $structure = StructureRecherche::findOrFail($id);
        return response()->json($structure);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'intituleS' => 'required',
            'acronyme' => 'required',
            'directeur' => 'required',
            'ced_id' => 'required'
        ]);
    
        $structure = StructureRecherche::findOrFail($id);
        $structure->fill($validatedData)->save();
    
        return response()->json([
            'message' => 'Modified successfully'
        ]);
    }
    

    public function destroy($id)
    {
        $structure = StructureRecherche::findOrFail($id);
        $structure->delete();

        return response()->json([
            'message' => 'Supprimer avec succès'
        ]);
    }

    public function search(Request $request)
    {
        $intitule = $request->input('intitule');

        $structures = StructureRecherche::where('intituleS', 'LIKE', "%{$intitule}%")
            ->orWhere('acronyme', 'LIKE', "%{$intitule}%")
            ->get();

        return response()->json($structures);
    }

    public function getStructureByCdes($cdesId)
   {
    $structure = StructureRecherche::whereHas('cdes', function ($query) use ($cdesId) {
        $query->where('id', $cdesId);
    })->get();

    return response()->json($structure);
    }



    public function getStructureByCed($cedId)
{
    $structures = StructureRecherche::where('ced_id', $cedId)->get();
    return response()->json($structures);
}


}



