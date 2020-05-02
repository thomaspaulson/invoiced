<?php
namespace App\Transformers;

class TaxTransformer extends Transformer
{
    
    public function transform($tax){        
        return [            
			'id' => $tax['id'],
            'title' => $tax['title'],
            'sort_order' => $tax['sort_order'],                               
        ];            
    }
    
}
