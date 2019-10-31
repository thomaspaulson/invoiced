<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model;

class ModelController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $models = Model::join('categories', 'categories.id', '=', 'models.category_id')
            ->select('models.*', 'categories.title  as category_title')
            ->orderBy('models.id', 'desc')
            ->get();
        return response()->json($models);
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
            'category_id' => 'required',            
        ]);

        $model = new Model([
          'title' => $request->get('title'),
          'category_id' => $request->get('category_id')
        ]);
        $model->save();


        return response()->json(['model' => $model,'status' => 1, 'message'=>'Model added.']);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $model = Model::find($id);
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
            'category_id' => 'required',                  
        ]);

        $model = Model::find($id);
        $model->title = $request->get('title');
        $model->category_id = $request->get('category_id');
        $model->save();

        return response()->json(['model' => $model, 'status' => 1, 'message'=>'Model updated.']);
    }

    public function show($id)
    {
        $model = Model::find($id);
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
      $model = Model::find($id);
      $model->delete();

      return response()->json(['status' => 1, 'message'=>'Model deleted.']);      
    }    

}
