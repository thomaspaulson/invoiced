(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler( selector) {
        // Code will go here
        this.formElement = $( selector );
    }

    FormHandler.prototype.submitHandler = function(){

        // form submit event
        this.formElement.on('submit',function(event){

            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function (item) {
              data[item.name] = item.value;
              console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            // this.reset();
            // this.elements[0].focus();            

        })

    }//submitHandler

    App.FormHandler = FormHandler;
    window.App = App;
})(window);