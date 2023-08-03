sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zju.orderapp.controller.Main", {
            onInit: function () {
                alert("onInit Called");
            },
            onExit: function () {
                alert("onExit Called");
            },
            onBeforeRendering: function () {
                alert("onBeforeRendering Called");
            },
            onAfterRendering: function () {
                alert("onAfterRendering Called");
            },
            onSearch: function () {
                alert("onSearch Called");
            },
            onSort: function () {
                alert("onSort Called");
                this.getView().destro();
            },
            onGroup: function () {
                alert("onGroup Called");
            }
        });
    });
