(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function ButtonHandler() {
        // Code will go here
    }

    ButtonHandler.prototype.redirectTo = function(selector){
        $( selector ).click(function() {
            window.location.href= this.dataset.redirectUrl;            
        });        
    }

    ButtonHandler.prototype.addBtnHandler = function(selector) {                        
        this.redirectTo(selector);
    }

    ButtonHandler.prototype.editBtnHandler = function(selector) {                
        // $( selector ).click(function() {
        //     window.location.href= this.dataset.redirectUrl;            
        // });        
        this.redirectTo(selector);        
    }

    ButtonHandler.prototype.deleteBtnHandler = function(selector) {       
        $( selector ).click(function() {
            if(confirm("Are you sure?")){
                $(this.form).submit();
            }
        });        
    }

    App.ButtonHandler = ButtonHandler;
    window.App = App;
})(window);