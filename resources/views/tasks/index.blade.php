@extends('layouts.leftmain')

@section('scripts')
<script src="{{ asset('scripts/button/handler.js') }}" defer></script>
<script src="{{ asset('scripts/button/main.js') }}" defer></script>
@endsection

@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Tasks</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>          
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle" data-create-record="form" data-redirect-url="/task/create">
            <span data-feather="calendar"></span>
            Create
          </button>
        </div>
    </div>

    <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
              <td>
              <div class="btn-group mr-2">
                <button type="button" class="btn btn-sm btn-outline-secondary"  data-create-record="form">Edit</button>
                <form action="/test" method="POST"> 
                  <button type="button" class="btn btn-sm btn-outline-secondary"  data-delete="record" >Delete</button>
                </form>
              </div>          
              </td>
            </tr>
          </tbody>
        </table>
    </div>  
@endsection
