<?php

namespace App\Http\Controllers;

use App\Models\Ced;
use Illuminate\Http\Request;

class CedController extends Controller
{
    // Existing methods...

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ced  $ced
     * @return \Illuminate\Http\Response
     */


     public function index()
     {
       
        $ceds = Ced::select('intitule', 'description')->get();
        return response()->json($ceds);
    
    }

    
    public function getCeds()
    {
       return response()->json(Ced::all(),200);
   
   }

     
     public function store(Request $request)
     {
         $validatedData = $request->validate([
            'intitule' => 'required',
            'description' => 'required',
        ]);
    
        $user = Ced::create($validatedData);
        return response( $validatedData,201);

     }



     public function show($id)
     {
         $ced = Ced::findOrFail($id);
 
         return response()->json($ced);
     }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ced  $ced
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $ced)
    {
        $validatedData = $request->validate([
            'intitule' => 'required',
            'description' => 'required',
        ]);
    
        $cedModel = Ced::findOrFail($ced);
        $cedModel->fill($validatedData)->save();
    
        return response()->json([
            'message' => 'Modified successfully'
        ]);
    }
    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ced  $ced
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ced = Ced::findOrFail($id);
        $ced->delete();
    
        return response()->json([
            'message' => 'Supprimer avec succès'
        ]);
    }

    public function search(Request $request)
    {
        $libelle = $request->input('libelle');

        $ceds = Ced::where('intitule', 'LIKE', "%{$libelle}%")
            ->orWhere('description', 'LIKE', "%{$libelle}%")
            ->get();

        return response()->json($ceds);
    }
    
}


?>