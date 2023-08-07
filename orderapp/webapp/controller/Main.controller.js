sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "zju/orderapp/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Formatter, Filter, FilterOperator) {
        "use strict";
        return Controller.extend("zju.orderapp.controller.Main", {
            formatter: Formatter,
            onInit: function () {
                // alert("onInit called!");

                /*                              //create a data object
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
               */
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
            onSearch: function (oEvent) {
                //          alert("onSearch Called");
                var oFilters = [];
                var sQuery = oEvent.getParameter("query");
                if (sQuery) {
                    oFilters.push(new Filter("CustomerName", FilterOperator.Contains, sQuery));
                }
                var oTable = this.byId("idOrdersTable");
                var oBinding = oTable.getBinding("items");
                oBinding.filter(oFilters);
            },
            onSort: function () {
                alert("onSort Called");
                this.getView().destro();
            },
            onGroup: function () {
                alert("onGroup Called");
            },
            // formatStatus
            formatStatus: function (sValue) {
                switch (sValue) {
                    case "C":
                        return ValueState.Success;
                    case "P":
                        return ValueState.Warning;
                    case "X":
                        return ValueState.Error;
                    default:
                        return ValueState.Information;
                }
            }
        });
    });
