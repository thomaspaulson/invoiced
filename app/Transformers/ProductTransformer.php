<?php
namespace App\Transformers;

class ProductTransformer extends Transformer
{
    
    public function transform($product){        
        return [            
            'id' => $product['id'],
            'name' => $product['name'],
            'price' => $product['price'],
            'taxable' => $product['taxable'],                               
        ];            
    }
    
}
