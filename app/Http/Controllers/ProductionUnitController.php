<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ProductionUnit;

class ProductionUnitController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $production_units = ProductionUnit::join('states', 'states.id', '=', 'production_units.state_id')
            ->where('production_units.status', 1)
            ->select('production_units.*', 'states.name')
            ->orderBy('production_units.id', 'desc')
            ->get();
        return response()->json($production_units);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required|max:150',            
            'state_id' => 'required',            
        ]);

        $model = new ProductionUnit([
          'title' => $request->get('title'),
          'state_id' => $request->get('state_id')
        ]);
        $model->save();


        return response()->json(['model' => $model,'status' => 1, 'message'=>'ProductionUnit added.']);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $model = ProductionUnit::find($id);
        return response()->json($model);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|max:150',            
            'state_id' => 'required',                  
        ]);

        $model = ProductionUnit::find($id);
        $model->title = $request->get('title');
        $model->state_id = $request->get('state_id');
        $model->save();

        return response()->json(['model' => $model, 'status' => 1, 'message'=>'ProductionUnit updated.']);
    }

    public function show($id)
    {
        $model = ProductionUnit::find($id);
        return response()->json($model);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $model = ProductionUnit::find($id);
      $model->status = 0;
      $model->save();

      //$model->delete();

      return response()->json(['status' => 1, 'message'=>'ProductionUnit deleted.']);      
    }    

}
