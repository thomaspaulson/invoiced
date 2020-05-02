<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Invoice</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            @include('layouts.header')
            <div class="container-fluid">
                <div class="row">
                    @include('layouts.sidebar')
                    <main role="main" class="col-md-10 ml-sm-auto col-lg-10 px-4">
                        <router-view></router-view>
                    </main>
                </div>
            </div>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
