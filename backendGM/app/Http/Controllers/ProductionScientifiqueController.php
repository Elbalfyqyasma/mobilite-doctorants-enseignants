<?php
namespace App\Http\Controllers;

use App\Models\ProductionScientifique;
use App\Models\Autre;
use App\Models\Communication;
use App\Models\Article;
use Illuminate\Http\Request;

class ProductionScientifiqueController extends Controller
{
    /**
     * Store a new ProductionScientifique along with its related Autre, Communication, or Article.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


     public function show($id)
     {
         $productionScientifique = ProductionScientifique::with('autres', 'communications', 'articles')->findOrFail($id);
         
         return response()->json($productionScientifique);
     }


    public function store(Request $request)
    {
        $request->validate([
            'TitreP' => 'required',
            'user_id'=> 'required'
        ]);

        $productionScientifique = ProductionScientifique::create([
            'titreP' => $request->input('TitreP'),
            'user_id' => $request->input('user_id'),
        ]);

        // Check if the request includes Autre data
        if ($request->input('Type') === 'autre') {        
            $autre = new Autre([
                'ProductionScientifiques_id' => $productionScientifique->id,
                'description' => $request->input('descriptionA')
            ]);
        
            $autre->save();
        }
        
        elseif($request->input('Type')==='communication') {
            $communication = new  Communication([
                'intituleC' => $request['intituleC'],
                'description' => $request['descriptionC'],
                'dateM' => $request['dateM'],
                'lieuM' => $request['lieuM'],
                'ProductionScientifiques_id' => $productionScientifique->id,

            ]);

            // Associate the Communication with the ProductionScientifique
            $productionScientifique->communication()->save($communication);
        

        // Check if the request includes Article data
       }
       elseif ($request->input('Type')==='article') {
            $article = new Article([
                'datePub' => $request['dateP'],
                'numPage' => $request['numPage'],
                'titreR' => $request['titreR'],
                'volumeR' => $request['volumeR'],
                'ProductionScientifiques_id' => $productionScientifique->id,
            ]);

            // Associate the Article with the ProductionScientifique
            $productionScientifique->article()->save($article);
        }

        return response()->json([
            'message' => 'ProductionScientifique created successfully'
        ]);
    }
    
    // Other methods...






    public function update(Request $request, $id)
    {
        $request->validate([
            'titreP' => 'required',
        ]);
    
        $productionScientifique = ProductionScientifique::findOrFail($id);
        $productionScientifique->update([
            'titreP' => $request->input('titreP'),
        ]);
    
        // Update Autre if provided
        if ($request->has('autre')) {
            $autreData = $request->input('autre');
            if ($productionScientifique->autre) {
                $productionScientifique->autre->update([
                    'description' => $autreData['description'],
                ]);
            } else {
                $autre = $productionScientifique->autre()->create([
                    'description' => $autreData['description'],
                ]);
            }
        }
    
        // Update Communication if provided
        elseif ($request->has('communication')) {
            $communicationData = $request->input('communication');
            if ($productionScientifique->communication) {
                $productionScientifique->communication->update([
                    'intituleC' => $communicationData['intituleC'],
                    'description' => $communicationData['description'],
                    'dateM' => $communicationData['dateM'],
                    'lieuM' => $communicationData['lieuM'],
                ]);
            } else {
                $communication = $productionScientifique->communication()->create([
                    'intituleC' => $communicationData['intituleC'],
                    'description' => $communicationData['description'],
                    'dateM' => $communicationData['dateM'],
                    'lieuM' => $communicationData['lieuM'],
                ]);
            }
        }
    
        // Update Article if provided
        elseif ($request->has('article')) {
            $articleData = $request->input('article');
            if ($productionScientifique->article) {
                $productionScientifique->article->update([
                    'datePub' => $articleData['datePub'],
                    'numPage' => $articleData['numPage'],
                    'titreR' => $articleData['titreR'],
                    'volumeR' => $articleData['volumeR'],
                ]);
            } else {
                $article = $productionScientifique->article()->create([
                    'datePub' => $articleData['datePub'],
                    'numPage' => $articleData['numPage'],
                    'titreR' => $articleData['titreR'],
                    'volumeR' => $articleData['volumeR'],
                ]);
            }
        }
    
        return response()->json([
            'message' => 'ProductionScientifique updated successfully'
        ]);
    }
    



    public function searchByTitre(Request $request)
    {
        $titre = $request->input('titre');

        $productionScientifiques = ProductionScientifique::where('titreP', 'LIKE', "%{$titre}%")->get();

        return response()->json($productionScientifiques);
    }



    public function index()
{
    $productionScientifiques = ProductionScientifique::with('autres', 'communications', 'articles')->get();

    return response()->json($productionScientifiques);
}



public function searchByUser(Request $request)
{
    $userId = $request->input('user_id');

    $productionScientifiques = ProductionScientifique::whereHas('user', function ($query) use ($userId) {
        $query->where('id', $userId);
    })->get();

    return response()->json($productionScientifiques);
}



public function destroy($id)
{
    $productionScientifique = ProductionScientifique::findOrFail($id);

    // Delete related models
    if ($productionScientifique->autre) {
        $productionScientifique->autre->delete();
    }
    if ($productionScientifique->communication) {
        $productionScientifique->communication->delete();
    }
    if ($productionScientifique->article) {
        $productionScientifique->article->delete();
    }

    // Delete the ProductionScientifique
    $productionScientifique->delete();

    return response()->json([
        'message' => 'ProductionScientifique deleted successfully'
    ]);
}




}

?>