<?php

namespace App\Http\Controllers;

use App\Models\OrganismeAcceuil;
use Illuminate\Http\Request;

class OrganismeAcceuilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $organismes = OrganismeAcceuil::all();
        return response()->json($organismes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'intitule' => 'required',
            'pays' => 'required',
            'ville' => 'required',
        ]);

        $organisme = OrganismeAcceuil::create($validatedData);
        return response()->json($organisme, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrganismeAcceuil  $organismeAcceuil
     * @return \Illuminate\Http\Response
     */
    public function show(OrganismeAcceuil $organismeAcceuil)
    {
        return response()->json($organismeAcceuil);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrganismeAcceuil  $organismeAcceuil
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrganismeAcceuil $organismeAcceuil)
    {
        $validatedData = $request->validate([
            'intitule' => 'required',
            'pays' => 'required',
            'ville' => 'required',
        ]);

        $organismeAcceuil->update($validatedData);

        return response()->json([
            'message' => 'Modified successfully',
            'data' => $organismeAcceuil
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrganismeAcceuil  $organismeAcceuil
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrganismeAcceuil $organismeAcceuil)
    {
        $organismeAcceuil->delete();

        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}
