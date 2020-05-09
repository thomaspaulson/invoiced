<?php
namespace App\Transformers;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

abstract class Transformer {

    public function transformCollection($items){
        return \array_map([$this,'transform'], $items);
    }

    public function metaData(LengthAwarePaginator $paginator){
        return [
            'current_page' => $paginator->currentPage(),
            'last_page' => $paginator->lastPage(),
            'next_page_url' => $paginator->nextPageUrl(),
            'per_page' => $paginator->perPage(),
            'total' => $paginator->total(),
            'dd' => 'ddd'
        ];
    }

    public abstract function transform($item);
}