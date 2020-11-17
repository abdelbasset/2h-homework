(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\Projects\Angular\Text-fortil\2h-homework\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.openSideNav = false;
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Xm9H":
    /*!************************************!*\
      !*** ./src/app/backend.service.ts ***!
      \************************************/

    /*! exports provided: BackendService */

    /***/
    function Xm9H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackendService", function () {
        return BackendService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * This service acts as a mock back-end.
       * It has some intentional errors that you might have to fix.
       */


      function randomDelay() {
        return Math.random() * 4000;
      }

      var BackendService = /*#__PURE__*/function () {
        function BackendService() {
          var _this = this;

          _classCallCheck(this, BackendService);

          this.storedTickets = [{
            id: 0,
            completed: false,
            assigneeId: 111,
            description: 'Install a monitor arm'
          }, {
            id: 1,
            completed: false,
            assigneeId: 111,
            description: 'Move the desk to the new location'
          }, {
            id: 2,
            completed: true,
            assigneeId: 111,
            description: 'Test Move the desk to the new location'
          }];
          this.storedUsers = [{
            id: 111,
            name: 'Victor'
          }, {
            id: 123,
            name: 'Hugo'
          }, {
            id: 154,
            name: 'Max'
          }];
          this.lastId = 1;

          this.findUserById = function (id) {
            return _this.storedUsers.find(function (user) {
              return user.id === +id;
            });
          };

          this.findTicketById = function (id) {
            return _this.storedTickets.find(function (ticket) {
              return ticket.id === +id;
            });
          };
        }

        _createClass(BackendService, [{
          key: "tickets",
          value: function tickets() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.storedTickets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()));
          }
        }, {
          key: "ticket",
          value: function ticket(id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.findTicketById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()));
          }
        }, {
          key: "users",
          value: function users() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.storedUsers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()));
          }
        }, {
          key: "user",
          value: function user(id) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.findUserById(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()));
          }
        }, {
          key: "newTicket",
          value: function newTicket(payload) {
            var _this2 = this;

            var newTicket = {
              id: payload.lastId,
              completed: false,
              assigneeId: payload.user,
              description: payload.description
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(newTicket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (ticket) {
              return _this2.storedTickets.push(ticket);
            }));
          }
        }, {
          key: "assign",
          value: function assign(ticketId, userId) {
            var user = this.findUserById(+userId);
            var foundTicket = this.findTicketById(+ticketId);

            if (foundTicket && user) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(foundTicket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (ticket) {
                ticket.assigneeId = +userId;
              }));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error('ticket or user not found'));
          }
        }, {
          key: "complete",
          value: function complete(ticketId, completed) {
            var foundTicket = this.findTicketById(+ticketId);

            if (foundTicket) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(foundTicket).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(randomDelay()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (ticket) {
                ticket.completed = true;
              }));
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error('ticket not found'));
          }
        }]);

        return BackendService;
      }();

      BackendService.ɵfac = function BackendService_Factory(t) {
        return new (t || BackendService)();
      };

      BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BackendService,
        factory: BackendService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackendService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./backend.service */
      "Xm9H");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./material.module */
      "vvyD");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]],
            providers: [_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! core-js/es6/reflect */
      "VbrY");
      /* harmony import */


      var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! core-js/es7/reflect */
      "FZcq");
      /* harmony import */


      var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_2__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/

      /** ALL Firefox browsers require the following to support `@angular/animation`. **/
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ticketing-ticketing-module */
          "ticketing-ticketing-module").then(__webpack_require__.bind(null,
          /*! ./ticketing/ticketing.module */
          "9lfv")).then(function (m) {
            return m.TicketingModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vvyD":
    /*!************************************!*\
      !*** ./src/app/material.module.ts ***!
      \************************************/

    /*! exports provided: MaterialModule */

    /***/
    function vvyD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "7KAL");
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/tree */
      "y7ui");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tree */
      "OLiY");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"]], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"]],
          exports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"]],
            exports: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map