<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        return response()->json($projects);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $project = new Project();
        $project->intitule = $request->input('intituleP');
        $project->dateD = $request->input('dateM');
        $project->dateF = $request->input('dateF');
        $project->descriptionp = $request->input('descriptionP');
        $project->invitation = $request->input('invitation');
        $project->encadrant = $request->input('encadrant');
        $project->travaux = $request->input('travaux');
        $project->resultatattendu = $request->input('resultatattendu');
        $project->cadre_mobilite_id = $request->input('cadre_mobilite_id');
        $project->organisme_acceuil_id = $request->input('organismeid');
        $project->user_id = $request->input('user_id');
    
        $project->save();
    
        return response()->json($project, 201);
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return response()->json($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $validatedData = $request->validate([
            'intitule' => 'required',
            'datep' => 'required',
            'descriptionp' => 'required',
            'invitation' => 'required',
            'encadrant' => 'required',
            'travaux' => 'required',
            'resultatattendu' => 'required',
            'cadre_mobilite_id' => 'required',
            'organisme_acceuil_id' => 'required',
            'user_id' => 'required',
        ]);

        $project->update($validatedData);

        return response()->json([
            'message' => 'Modified successfully',
            'data' => $project
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $project->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }


    public function upload(Request $request)
    {
        if ($request->hasFile('invitation')) {
            $path = $request->file('invitation')->store('uploads', 'public');
            return response()->json(['path' => $path], 200);
        }

        return response()->json(['message' => 'No file uploaded.'], 400);
    }
}
