sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("zju.orderapp.controller.Main", {
            onInit: function () {
			// alert("onInit called!");

			//create a data object
			var oData = {
			    "title": "My Orders",
			 	"SalesOrderSet": [{
					"SalesOrderID": "0001",
			 		"CustomerName": "Apple",
			 		"LifecycleStatusDescription": "Completed",
			 		"LifecycleStatus": "Success",
			 		"GrossAmount": "199",
			 		"CurrencyCode": "USD"
			 	}, {
			 		"SalesOrderID": "0002",
			 		"CustomerName": "Google",
					"LifecycleStatusDescription": "Completed",
					"LifecycleStatus": "Success",
		     		"GrossAmount": "277",
			 		"CurrencyCode": "USD"
			 	}, {
			 		"SalesOrderID": "0003",
			 		"CustomerName": "Amazon",
			 		"LifecycleStatusDescription": "Error",
			 		"LifecycleStatus": "Error",
			 		"GrossAmount": "599",
			 		"CurrencyCode": "USD"
			 	}]
			 };

			// JSON Model instance
			 var oModel = new JSONModel(oData);
			 oModel.setDefaultBindingMode("OneWay");

			// Assign the model to view
			 this.getView().setModel(oModel);
            },
            onExit: function () {
            //   alert("onExit Called");
            },
            onBeforeRendering: function () {
            //   alert("onBeforeRendering Called");
            },
            onAfterRendering: function () {
            //   alert("onAfterRendering Called");
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
