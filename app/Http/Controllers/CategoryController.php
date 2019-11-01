<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::orderBy('id', 'desc')
            ->where('status', 1)
            ->get();
        return response()->json($categories);
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
            'description' => 'nullable|max:250',            
        ]);

        $category = new Category([
          'title' => $request->get('title'),
          'description' => $request->get('description')
        ]);
        $category->save();


        return response()->json(['category' => $category,'status' => 1, 'message'=>'Category added.']);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category = Category::find($id);
        return response()->json($category);
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
            'description' => 'nullable|max:250',            
        ]);

        $category = Category::find($id);
        $category->title = $request->get('title');
        $category->description = $request->get('description');
        $category->save();

        return response()->json(['category' => $category, 'status' => 1, 'message'=>'Category updated.']);
    }

    public function show($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $category = Category::find($id);
      $category->status = 0;
      $category->save();

      //$category->delete();


      return response()->json(['status' => 1, 'message'=>'Category deleted.']);
    }    
}
