<?php

namespace App\Http\Controllers;

use App\Product;
use App\Http\Requests\ProductRequest;
use App\Traits\JsonResponseTrait;
use Illuminate\Http\Request;
use App\Transformers\ProductTransformer;

class ProductController extends Controller
{
    use JsonResponseTrait;
    
    protected $productTransformer;

    
    public function __construct(ProductTransformer $productTransformer)
    {
        $this->productTransformer =  $productTransformer;        
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //        
        $products = Product::paginate(); //return $products->toArray();
        return $this->respond([
            'products'=> $this->productTransformer->transformCollection($products->items()),
            'meta'=> $this->productTransformer->metaData($products)
            ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Requests\ProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $validated = $request->validated();
        $product = Product::create($validated);
        return $this->respond([
            'product' => $this->productTransformer->transform($product),
            'message' => 'Product created'
            ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return $this->respond([
            'product'=> $this->productTransformer->transform($product)         
            ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Requests\ProductRequest  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Product $product)
    {        
        $validated = $request->validated();
        $product = $product->fill($validated);
        $product->save();
        return $this->respond([
            'product' => $product,
            'message' => 'Tax updated'
            ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {

        $product->delete();
        return $this->respond(['message' => 'Product deleted']);
        
    }
}
