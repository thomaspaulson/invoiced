(function(window) {
    var App = window.App;
    var ButtonHandler = App.ButtonHandler;
    var buttonHandler = new ButtonHandler();

    var ADD_BTN_SELECTOR = '[data-create-record="form"]';
    buttonHandler.addBtnHandler(ADD_BTN_SELECTOR);    

    var EDIT_BTN_SELECTOR = '[data-edit-record="form"]';
    buttonHandler.editBtnHandler(EDIT_BTN_SELECTOR);

    var DELETE_BTN_SELECTOR = '[data-delete="record"]';
    buttonHandler.deleteBtnHandler(DELETE_BTN_SELECTOR);


  })(window)