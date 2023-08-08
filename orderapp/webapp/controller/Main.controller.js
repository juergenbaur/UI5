sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "zju/orderapp/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment",
	"sap/ui/model/Sorter",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Formatter, Filter, FilterOperator, Fragment, Sorter, UIComponent) {
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
                // 1. get current view
                var oView = this.getView();
    
                // 2. load the fragment file
                if (! this.byId("sortDialog")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "zju.orderapp.fragment.SortDialog",
                        controller: this
                    }).then(function (oDialog) {
                        // 3. Open dialog
                        // connet dialog to the root view of componet (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("sortDialog").open();
                }
    
            },
    
            onSortDialogConfirm: function (oEvent) {
                var oSortItem = oEvent.getParameter("sortItem");
                var sColumnPath = "SalesOrderID";
                var bDescending = oEvent.getParameter("sortDescending");
                var aSorters = [];
    
                if (oSortItem) {
                    sColumnPath = oSortItem.getKey();
                }
    
                aSorters.push(new Sorter(sColumnPath, bDescending));
    
                var oTable = this.byId("idOrdersTable");
                var oBinding = oTable.getBinding("items");
    
                oBinding.sort(aSorters);
            },
            onGroup: function () {
                // 1. get current view
                var oView = this.getView();
    
                // 2. load the fragment file
                if (!this.byId("groupDialog")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "zju.orderapp.fragment.GroupDialog",
                        controller: this
                    }).then(function (oDialog) {
                        // 3. Open dialog
                        // connet dialog to the root view of componet (models, lifecycle)
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("groupDialog").open();
                }
            },
            
            onGroupDialogConfirm: function (oEvent) {
                var oSortItem = oEvent.getParameter("groupItem");
                var sColumnPath = "SalesOrderID";
                var bDescending = oEvent.getParameter("groupDescending");
                var aSorters = [];
                var bGroupEnabled = false;
    
                if (oSortItem) {
                    sColumnPath = oSortItem.getKey();
                    bGroupEnabled = true;
                }
    
                aSorters.push(new Sorter(sColumnPath, bDescending, bGroupEnabled));
    
                var oTable = this.byId("idOrdersTable");
                var oBinding = oTable.getBinding("items");
    
                oBinding.sort(aSorters);
            },
            onPressItem: function(oEvent) {
                var oRouter = UIComponent.getRouterFor(this);
                var oItem = oEvent.getSource();
                
                oRouter.navTo("Details", {
                    SalesOrderID: oItem.getBindingContext().getObject().SalesOrderID
                });
                  
            }
        });
    });
