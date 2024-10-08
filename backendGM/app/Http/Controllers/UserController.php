<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
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
       
        $ceds = User::select( 'nom','prenom','email','role','image')->get();
        return response()->json($ceds);
    
    }

    
    public function getUser()
    {
       return response()->json(User::all(),200);
   
    }



     public function show($id)
     {
         $ced = User::findOrFail($id);
 
         return response()->json($ced);
     }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $ced
     * @return \Illuminate\Http\Response
     */

    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ced  $ced
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
    
        return response()->json([
            'message' => 'Supprimer avec succès'
        ]);
    }

    public function search(Request $request)
    {
        $nom = $request->input('nom');

        $users = User::where('nom', 'LIKE', "%{$nom}%")
            ->get();

        return response()->json($users);
    }



    public function UpdateProfile(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        // Update the properties based on the request
        $user->telephone = $request->input('telephone');
        $user->structurerecherche_id = $request->input('StructureRecherche');

        $user->save();

        return response()->json([
            'message' => 'User updated successfully'
        ]);
    }

}
