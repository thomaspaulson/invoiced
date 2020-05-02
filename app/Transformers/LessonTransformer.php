<?php
namespace App\Transformers;
class LessonTransformer extends Transformer
{
    
    public function transform($lesson){        
        return [            
            'title' => $lesson['title'],
            'description' => $lesson['description'],                               
        ];            
    }
    
}
