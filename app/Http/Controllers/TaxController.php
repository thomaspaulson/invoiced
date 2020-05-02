<?php

namespace App\Http\Controllers;

use App\Tax;
use App\Http\Requests\TaxRequest;
use App\Traits\JsonResponseTrait;
use Illuminate\Http\Request;
use App\Transformers\TaxTransformer;

class TaxController extends Controller
{
    use JsonResponseTrait;
    
    protected $taxTransformer;

    public function __construct(TaxTransformer $taxTransformer)
    {
        $this->taxTransformer =  $taxTransformer;
        //exit('dd');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //        
        $taxes = Tax::all();
        return $this->respond([
            'taxes'=> $this->taxTransformer->transformCollection($taxes->toArray())
            ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaxRequest $request)
    {       
        $validated = $request->validated();
        $tax = Tax::create($validated);
        return $this->respond([
            'tax' => $this->taxTransformer->transform($tax),
            'message' => 'Tax created'
            ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tax  $tax
     * @return \Illuminate\Http\Response
     */
    public function show(Tax $tax)
    {
        return $this->respond([
            'tax'=> $this->taxTransformer->transform($tax)         
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tax  $tax
     * @return \Illuminate\Http\Response
     */
    public function update(TaxRequest $request, Tax $tax)
    {
        $validated = $request->validated();
        $tax = $tax->fill($validated);
        return $this->respond([
            'tax' => $tax,
            'message' => 'Tax updated'
            ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tax  $tax
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tax $tax)
    {
        //
        $tax->delete();
        return $this->respond(['message' => 'Tax deleted']);
    }
}
