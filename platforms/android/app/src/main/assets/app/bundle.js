require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.ts": "./app-root.ts",
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.ts": "./app.ts",
	"./categories/categories-page.ts": "./categories/categories-page.ts",
	"./categories/categories-page.xml": "./categories/categories-page.xml",
	"./categories/categories-view-model.ts": "./categories/categories-view-model.ts",
	"./home/home-page.ts": "./home/home-page.ts",
	"./home/home-page.xml": "./home/home-page.xml",
	"./home/home-view-model.ts": "./home/home-view-model.ts",
	"./observable-property-decorator.ts": "./observable-property-decorator.ts",
	"./photoDetail/detail-page-model.ts": "./photoDetail/detail-page-model.ts",
	"./photoDetail/detail-page.ts": "./photoDetail/detail-page.ts",
	"./photoDetail/detail-page.xml": "./photoDetail/detail-page.xml",
	"./photoList/list-page-model.ts": "./photoList/list-page-model.ts",
	"./photoList/list-page.ts": "./photoList/list-page.ts",
	"./photoList/list-page.xml": "./photoList/list-page.xml",
	"./search/search-page.ts": "./search/search-page.ts",
	"./search/search-page.xml": "./search/search-page.xml",
	"./search/search-view-model.ts": "./search/search-view-model.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.ts":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app-root.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<TabView iosIconRenderingMode=\"alwaysOriginal\">\r\n    <TabViewItem title=\"Featured\" iconSource=\"res://star.png\">\r\n        <Frame id=\"asdfasdf\" defaultPage=\"home/home-page\"></Frame>\r\n    </TabViewItem>\r\n    <TabViewItem title=\"Search\" iconSource=\"res://search.png\">\r\n        <Frame id=\"search\" defaultPage=\"search/search-page\"></Frame>\r\n    </TabViewItem>\r\n    <TabViewItem title=\"Categories\" iconSource=\"res://list.png\">\r\n        <Frame id=\"search\" defaultPage=\"categories/categories-page\"></Frame>\r\n    </TabViewItem>\r\n</TabView>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '-!../node_modules/css-loader/dist/cjs.js??ref--7!nativescript-theme-core/css/core.light.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), "");

// Module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nFor example, the following CSS rule changes the font size of all UI\ncomponents that have the btn class name.\n*/\n.btn {\n    font-size: 18;\n}\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n\n.home-panel{\n    vertical-align: center;\n    font-size: 30;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.action-bar {\n    background-color: white;\n}\n\n.actionBarLabel {\n    font-family: 'Nordica Plus', 'nordicaclassicltext';\n    font-size: 20;\n}\n\n.locationCountry {\n    color: white;\n    font-family: 'Nordica Plus', 'nordicaclassicltext';\n    font-size: 18;\n    text-transform: uppercase;\n    font-weight: bold;\n    background-color: black;\n}\n.bottom-navigation button {\n    width: 33.33%;\n    background-color:white;\n    border-color: transparent;\n    border-width: 1;\n    color:black;\n}\n\n.fab {\n    font-family: Font Awesome 5 Brands, fa-brands-400;\n    font-weight: 400; \n}\n\n.fas {\n    font-family: Font Awesome 5 Free, fa-solid-900;\n    font-weight: 900; \n}", ""]);

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-fontawesome/fontawesome.js");
/* harmony import */ var nativescript_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_fontawesome__WEBPACK_IMPORTED_MODULE_1__);

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        /*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/


nativescript_fontawesome__WEBPACK_IMPORTED_MODULE_1__["Fontawesome"].init();
tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["run"]({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.ts" });
    });
} 
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./categories/categories-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony import */ var _categories_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./categories/categories-view-model.ts");
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    page.bindingContext = new _categories_view_model__WEBPACK_IMPORTED_MODULE_0__["CategoriesViewModel"]();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./categories/categories-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./categories/categories-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./categories/categories-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\">\n    <ActionBar title=\"Categories\" class=\"action-bar\"></ActionBar>\n        <StackLayout>\n            <ListView style=\"height:5000px\" class=\"list-group\" items=\"{{ searchQueries }}\" itemTap=\"{{ onItemTap }}\">\n                <ListView.itemTemplate>\n                    <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n                        <Label text=\"{{ category }}\" class=\"list-group-item-heading\"\n                        verticalAlignment=\"center\" style=\"width: 60%\" />\n                    </FlexboxLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./categories/categories-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./categories/categories-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./categories/categories-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesViewModel", function() { return CategoriesViewModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__);


var CategoriesViewModel = /** @class */ (function (_super) {
    __extends(CategoriesViewModel, _super);
    function CategoriesViewModel() {
        var _this = _super.call(this) || this;
        _this.searchQueries = [{ category: "Business" }, { category: "Wallpaper" }, { category: "Money" }, { category: "Summer" }, { category: "School" }, { category: "Office" }, { category: "Beach" }, { category: "Computer" }, { category: "Family" }, { category: "Technology" }, { category: "People" }, { category: "Love" }];
        return _this;
    }
    ;
    CategoriesViewModel.prototype.onItemTap = function (args) {
        var category = this.searchQueries[args.index].category.toString();
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["setString"]("search", category);
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_1__["setString"]("title", category);
        var listView = args.object;
        var page = listView.page;
        page.frame.navigate("photoList/list-page");
    };
    return CategoriesViewModel;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./categories/categories-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./categories/categories-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony import */ var _home_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./home/home-view-model.ts");
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    page.bindingContext = new _home_view_model__WEBPACK_IMPORTED_MODULE_0__["HomeViewModel"]();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\">\n<ActionBar title=\"Featured\" class=\"action-bar\"></ActionBar>\n        <GridLayout rows=\"*\" xmlns:lv=\"nativescript-ui-listview\" xmlns:f=\"nativescript-fresco\"\n            height=\"100%\">   \n            <ListView items=\"{{ locations }}\" id=\"ListView\" itemTap=\"{{ onItemTap }}\" style=\"height:100%\" separatorColor=\"transparent\">\n                <ListView.itemTemplate>\n                    <FlexboxLayout flexDirection=\"row\" rows=\"*\"\n                        columns=\"*\" backgroundImage=\"{{ imageSrc }}\" id=\"image\" border=\"10px\" style=\"background-repeat: no-repeat;\n                        background-position: center;\n                        background-size: cover;\">\n                        <StackLayout paddingTop=\"8\" paddingBottom=\"8\"\n                            verticalAlignment=\"bottom\" paddingLeft=\"16\"\n                            paddingRight=\"16\" height=\"200\">\n                            <Label text=\"{{ city }}\" class=\"locationCountry\" />\n                        </StackLayout>\n                    </FlexboxLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </GridLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./home/home-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeViewModel", function() { return HomeViewModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__);




var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.locations = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.urls = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.likes = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.views = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.type = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.favorites = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.tags = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.user = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.weburl = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.imgUrl = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        fetch("https://pixabay.com/api/?key=13010481-59d33f095f3fa3c3977d73128&pretty=true&page=3&per_page=200")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            r.hits.forEach(function (element) {
                var user = element["user"];
                var url = element["webformatURL"];
                _this.locations.push({ city: user, imageSrc: url });
                _this.urls.push(url);
                _this.user.push(user);
                _this.likes.push(new String(element["likes"]));
                _this.views.push(new String(element["views"]));
                _this.type.push(new String(element["type"]));
                _this.favorites.push(new String(element["favorites"]));
                _this.tags.push(new String(element["tags"]));
                _this.weburl.push(new String(element["pageURL"]));
                _this.imgUrl.push(new String(element["largeImageURL"]));
            });
        }).catch(function (err) {
            console.log(err);
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["alert"]("The Images couldn't get loaded, try to reload the Application");
        });
        return _this;
    }
    HomeViewModel.prototype.onItemTap = function (args) {
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("url", JSON.stringify(this.urls.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("likes", JSON.stringify(this.likes.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("views", JSON.stringify(this.views.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("type", JSON.stringify(this.type.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("favorites", JSON.stringify(this.favorites.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("tags", JSON.stringify(this.tags.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("user", JSON.stringify(this.user.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("webUrl", JSON.stringify(this.weburl.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("imgUrl", JSON.stringify(this.imgUrl.getItem(args.index)));
        var listView = args.object;
        var page = listView.page;
        page.frame.navigate("photoDetail/detail-page");
    };
    return HomeViewModel;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./observable-property-decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableProperty", function() { return ObservableProperty; });
function ObservableProperty() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this["_" + propertyKey];
            },
            set: function (value) {
                if (this["_" + propertyKey] === value) {
                    return;
                }
                this["_" + propertyKey] = value;
                this.notifyPropertyChange(propertyKey, value);
            },
            enumerable: true,
            configurable: true
        });
    };
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./observable-property-decorator.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./observable-property-decorator.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ }),

/***/ "./photoDetail/detail-page-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModel", function() { return DetailPageModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__);



var DetailPageModel = /** @class */ (function (_super) {
    __extends(DetailPageModel, _super);
    function DetailPageModel() {
        var _this = _super.call(this) || this;
        _this.imgResource = new tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        _this.imgResource = JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("url"));
        _this.allData = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_1__["ObservableArray"]({ name: "Likes", value: JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("likes")) }, { name: "Views:", value: JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("views")) }, { name: "Type:", value: JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("type")) }, { name: "Favorites:", value: JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("favorites")) }, { name: "Tags:", value: JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("tags")) }, { name: "User:", value: JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("user")) });
        return _this;
    }
    return DetailPageModel;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./photoDetail/detail-page-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./photoDetail/detail-page-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./photoDetail/detail-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openInBrowser", function() { return openInBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openGallery", function() { return openGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return saveImage; });
/* harmony import */ var _detail_page_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./photoDetail/detail-page-model.ts");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/utils/utils.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_photoviewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/nativescript-photoviewer/photoviewer.js");
/* harmony import */ var nativescript_photoviewer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_photoviewer__WEBPACK_IMPORTED_MODULE_4__);
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/





var photoViewer;
// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    photoViewer = new nativescript_photoviewer__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"]();
    var page = args.object;
    page.bindingContext = new _detail_page_model__WEBPACK_IMPORTED_MODULE_0__["DetailPageModel"]();
    PHPhotoLibrary.requestAuthorization(function (result) {
        if (result === PHAuthorizationStatus.Authorized) {
        }
        else {
            console.log("not authorized");
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_3__["alert"]({
                title: "Warning!",
                message: "To save the image, we need the permission to save it in your gallery. Please change them in the settings of your device.",
                okButtonText: "Ok"
            }).then(function () {
                console.log("Dialog closed!");
            });
        }
    });
}
function openInBrowser() {
    tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_1__["openUrl"](JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("webUrl")));
}
function openGallery(args, path) {
    var image1 = JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_2__["getString"]("imgUrl"));
    var myImages = [image1];
    photoViewer.showGallery(myImages);
}
function saveImage() {
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./photoDetail/detail-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./photoDetail/detail-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./photoDetail/detail-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\">\n    <ActionBar title=\"Detail\" class=\"action-bar\">\n        <NavigationButton text=\"Go Back\" android.systemIcon=\"ic_menu_back\" tap=\"onNavBtnTap\"/>\n    </ActionBar>\n    <StackLayout orientation=\"vertical\" backgroundColor=\"Black\">\n        <Image src=\"{{ imgResource }}\"\n            height=\"40%\" style=\"margin-bottom: 30px; margin-top: 30px;\" tap=\"openGallery\"/>\n            <Label text=\"Image from Pixabay.com\"  backgroundColor=\"Black\" style=\"color: white; width: 100%; text-align: center;\" margin=\"5\" fontSize=\"12\"/>\n            <StackLayout orientation=\"horizontal\" backgroundColor=\"white\">\n\t\t\t    <Button text=\"&#xf35d; Visit\" class=\"fas\" tap=\"openInBrowser\" style=\"text-align: center; width: 47%; border-radius: 80;\" backgroundColor=\"Black\" height=\"40\" margin=\"5\"/>\n                <Button text=\"&#xf03e; Preview\" class=\"fas\" tap=\"openGallery\" style=\"text-align: center; width: 47%; border-radius: 80;\" backgroundColor=\"Black\" height=\"40\" margin=\"5\"/>\n            </StackLayout>\n        <ListView class=\"list-group\" items=\"{{allData}}\" height=\"50%\">\n            <ListView.itemTemplate>\n                <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n                    <Label text=\"{{name}}\" class=\"list-group-item-heading\"\n                        verticalAlignment=\"center\" style=\"width: 30%\" />\n                    <Label text=\"{{ value }}\" class=\"list-group-item-heading\"\n                        verticalAlignment=\"center\" />\n                </FlexboxLayout>\n            </ListView.itemTemplate>\n        </ListView>\n    </StackLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./photoDetail/detail-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./photoDetail/detail-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./photoList/list-page-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModel", function() { return ListPageModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__);




var ListPageModel = /** @class */ (function (_super) {
    __extends(ListPageModel, _super);
    function ListPageModel() {
        var _this = _super.call(this) || this;
        _this.title = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["getString"]("title");
        _this.urls = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.likes = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.views = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.type = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.favorites = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.tags = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.user = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.weburl = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.imgUrl = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        _this.locations = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_2__["ObservableArray"]();
        var search = tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["getString"]("title").replace(" ", "+");
        _this.locations.splice(0);
        fetch("https://pixabay.com/api/?key=13010481-59d33f095f3fa3c3977d73128&pretty=true&q=" + search + "&per_page=200")
            .then(function (response) { return response.json(); })
            .then(function (r) {
            _this.locations.shift();
            r.hits.forEach(function (element) {
                var user = element["user"];
                var url = element["webformatURL"];
                _this.locations.push({ city: user, imageSrc: url });
                _this.urls.push(url);
                _this.user.push(user);
                _this.likes.push(new String(element["likes"]));
                _this.views.push(new String(element["views"]));
                _this.type.push(new String(element["type"]));
                _this.favorites.push(new String(element["favorites"]));
                _this.tags.push(new String(element["tags"]));
                _this.weburl.push(new String(element["pageURL"]));
                _this.imgUrl.push(new String(element["largeImageURL"]));
            });
            if (_this.locations.length < 3) {
                _this.locations.push({ city: "No images found - try again", imageSrc: "" });
            }
        }).catch(function (err) {
            console.log(err);
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_1__["alert"]("The Images couldn't get loaded, try to reload the Application");
        });
        return _this;
    }
    ListPageModel.prototype.onItemTap = function (args) {
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("url", JSON.stringify(this.urls.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("likes", JSON.stringify(this.likes.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("views", JSON.stringify(this.views.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("type", JSON.stringify(this.type.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("favorites", JSON.stringify(this.favorites.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("tags", JSON.stringify(this.tags.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("user", JSON.stringify(this.user.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("webUrl", JSON.stringify(this.weburl.getItem(args.index)));
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_3__["setString"]("imgUrl", JSON.stringify(this.imgUrl.getItem(args.index)));
        var listView = args.object;
        var page = listView.page;
        page.frame.navigate("photoDetail/detail-page");
    };
    return ListPageModel;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./photoList/list-page-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./photoList/list-page-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./photoList/list-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony import */ var _list_page_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./photoList/list-page-model.ts");
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    page.bindingContext = new _list_page_model__WEBPACK_IMPORTED_MODULE_0__["ListPageModel"]();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./photoList/list-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./photoList/list-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./photoList/list-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page navigatedTo=\"pageLoaded\" class=\"page\">\n<ActionBar title=\"{{ title }}\" class=\"action-bar\"></ActionBar>\n        <GridLayout rows=\"*\" xmlns:lv=\"nativescript-ui-listview\" xmlns:f=\"nativescript-fresco\"\n            height=\"100%\">   \n            <ListView items=\"{{ locations }}\" id=\"ListView\" itemTap=\"{{ onItemTap }}\" style=\"height:100%\" separatorColor=\"transparent\">\n                <ListView.itemTemplate>\n                    <FlexboxLayout flexDirection=\"row\" id=\"listItem\" rows=\"*\"\n                        columns=\"*\" backgroundImage=\"{{ imageSrc }}\" id=\"image\" border=\"10px\" style=\"background-repeat: no-repeat;\n                        background-position: center;\n                        background-size: cover;\"> \n                        <StackLayout paddingTop=\"8\" paddingBottom=\"8\"\n                            verticalAlignment=\"bottom\" paddingLeft=\"16\"\n                            paddingRight=\"16\" height=\"200\">\n                            <Label text=\"{{ city }}\" class=\"locationCountry\" />\n                        </StackLayout>\n                    </FlexboxLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </GridLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./photoList/list-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./photoList/list-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./search/search-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony import */ var _search_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./search/search-view-model.ts");
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

// Event handler for Page "pageLoaded" event attached in home-page.xml
function pageLoaded(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    page.bindingContext = new _search_view_model__WEBPACK_IMPORTED_MODULE_0__["SearchViewModel"]();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./search/search-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./search/search-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./search/search-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\" xmlns:lv=\"nativescript-ui-listview\">\n    <ActionBar title=\"Search\" class=\"action-bar\"></ActionBar>\n<StackLayout orientation=\"vertical\" height=\"100%\" backgroundColor=\"lightgray\">\n        <SearchBar hint=\"Locations, Countries and many more...\" text=\"{{ searchPhrase }}\" submit=\"{{ onSearchSubmit }}\" />\n        <Button text=\"Clear History\" tap=\"{{ removeItemFromList }}\" fontSize=\"15em\" style=\"color: red; background-color: white; text-align: right; padding: 10% 20%; padding-bottom: -2%\"/>\n        <ListView class=\"list-group\" items=\"{{ searchQueries }}\"\n            style=\"height:100%\" separatorColor=\"white\" itemTap=\"{{ onItemTap }}\">\n            <ListView.itemTemplate>\n                <FlexboxLayout flexDirection=\"row\" class=\"list-group-item\">\n                    <Label text=\"{{ query }}\" class=\"list-group-item-heading\"\n                        verticalAlignment=\"center\" style=\"padding-right: 50%; width: 80%; padding-top: 10%\" />\n                </FlexboxLayout>\n            </ListView.itemTemplate>\n        </ListView>\n    </StackLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./search/search-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./search/search-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./search/search-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchViewModel", function() { return SearchViewModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tns-core-modules/data/observable/observable.js");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _observable_property_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./observable-property-decorator.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/dialogs/dialogs.js");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/tns-core-modules/data/observable-array/observable-array.js");
/* harmony import */ var tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/tns-core-modules/application-settings/application-settings.js");
/* harmony import */ var tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__);





var SearchViewModel = /** @class */ (function (_super) {
    __extends(SearchViewModel, _super);
    function SearchViewModel() {
        var _this = _super.call(this) || this;
        _this.searchQueries = new tns_core_modules_data_observable_array_observable_array__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"]();
        _this.queryArray = ["Cars", "Events", "Rivers", "Mountains"];
        if (tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["hasKey"]("queries")) {
            _this.queryArray.splice(0);
            for (var _i = 0, _a = JSON.parse(tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["getString"]("queries")); _i < _a.length; _i++) {
                var element = _a[_i];
                _this.searchQueries.push({ query: element });
                _this.queryArray.push(element);
            }
        }
        else {
            for (var _b = 0, _c = _this.queryArray; _b < _c.length; _b++) {
                var element = _c[_b];
                _this.searchQueries.push({ query: element });
            }
            tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["setString"]("queries", JSON.stringify(_this.queryArray));
        }
        return _this;
    }
    SearchViewModel.prototype.onItemTap = function (args) {
        var listView = args.object;
        var page = listView.page;
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["setString"]("title", this.queryArray[args.index]);
        page.frame.navigate("photoList/list-page");
    };
    SearchViewModel.prototype.onSearchSubmit = function (args) {
        var searchBar = args.object;
        if (searchBar.text.length > 20) {
            tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_2__["alert"]({
                title: "Input too long",
                message: "No images for this topic.",
                okButtonText: "Ok"
            }).then(function () {
                console.log("Dialog closed!");
            });
            searchBar.text = "";
        }
        else {
            this.searchQueries.push({ query: searchBar.text });
            var page = searchBar.page;
            this.queryArray.push(searchBar.text);
            tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["setString"]("queries", JSON.stringify(this.queryArray));
            tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["setString"]("title", searchBar.text);
            page.frame.navigate("photoList/list-page");
        }
    };
    SearchViewModel.prototype.removeItemFromList = function (args) {
        this.searchQueries.splice(0);
        this.queryArray.splice(0);
        tns_core_modules_application_settings__WEBPACK_IMPORTED_MODULE_4__["setString"]("queries", JSON.stringify(this.queryArray));
    };
    __decorate([
        Object(_observable_property_decorator__WEBPACK_IMPORTED_MODULE_1__["ObservableProperty"])(),
        __metadata("design:type", String)
    ], SearchViewModel.prototype, "searchPhrase", void 0);
    return SearchViewModel;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./search/search-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./search/search-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1wYWdlLnRzIiwid2VicGFjazovLy8uL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9jYXRlZ29yaWVzL2NhdGVnb3JpZXMtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vcGhvdG9EZXRhaWwvZGV0YWlsLXBhZ2UtbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vcGhvdG9EZXRhaWwvZGV0YWlsLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGhvdG9EZXRhaWwvZGV0YWlsLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3Bob3RvTGlzdC9saXN0LXBhZ2UtbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vcGhvdG9MaXN0L2xpc3QtcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9waG90b0xpc3QvbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9zZWFyY2gvc2VhcmNoLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc2VhcmNoL3NlYXJjaC1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9zZWFyY2gvc2VhcmNoLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FB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QUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUN2QjthQUFJO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7WUFDdEQsSUFBTSxJQUFJLEdBQVMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1lBQ3BDLCtFQUFxQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRSwrRUFBcUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FBQztJQUNoRCxDQUFDO0lBdUJELDRDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLCtFQUFxQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBL0NxQjtRQUFyQix5RkFBa0IsRUFBRTs7eURBQXNCO0lBZ0QvQyxzQkFBQztDQUFBLENBekRvQywyRUFBVSxHQXlEOUM7QUF6RDJCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyBeXFxcXC5cXFxcL2FwcFxcXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnRzXCI6IFwiLi9hcHAtcm9vdC50c1wiLFxuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwLnRzXCIsXG5cdFwiLi9jYXRlZ29yaWVzL2NhdGVnb3JpZXMtcGFnZS50c1wiOiBcIi4vY2F0ZWdvcmllcy9jYXRlZ29yaWVzLXBhZ2UudHNcIixcblx0XCIuL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1wYWdlLnhtbFwiOiBcIi4vY2F0ZWdvcmllcy9jYXRlZ29yaWVzLXBhZ2UueG1sXCIsXG5cdFwiLi9jYXRlZ29yaWVzL2NhdGVnb3JpZXMtdmlldy1tb2RlbC50c1wiOiBcIi4vY2F0ZWdvcmllcy9jYXRlZ29yaWVzLXZpZXctbW9kZWwudHNcIixcblx0XCIuL2hvbWUvaG9tZS1wYWdlLnRzXCI6IFwiLi9ob21lL2hvbWUtcGFnZS50c1wiLFxuXHRcIi4vaG9tZS9ob21lLXBhZ2UueG1sXCI6IFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIixcblx0XCIuL2hvbWUvaG9tZS12aWV3LW1vZGVsLnRzXCI6IFwiLi9ob21lL2hvbWUtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IudHNcIjogXCIuL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzXCIsXG5cdFwiLi9waG90b0RldGFpbC9kZXRhaWwtcGFnZS1tb2RlbC50c1wiOiBcIi4vcGhvdG9EZXRhaWwvZGV0YWlsLXBhZ2UtbW9kZWwudHNcIixcblx0XCIuL3Bob3RvRGV0YWlsL2RldGFpbC1wYWdlLnRzXCI6IFwiLi9waG90b0RldGFpbC9kZXRhaWwtcGFnZS50c1wiLFxuXHRcIi4vcGhvdG9EZXRhaWwvZGV0YWlsLXBhZ2UueG1sXCI6IFwiLi9waG90b0RldGFpbC9kZXRhaWwtcGFnZS54bWxcIixcblx0XCIuL3Bob3RvTGlzdC9saXN0LXBhZ2UtbW9kZWwudHNcIjogXCIuL3Bob3RvTGlzdC9saXN0LXBhZ2UtbW9kZWwudHNcIixcblx0XCIuL3Bob3RvTGlzdC9saXN0LXBhZ2UudHNcIjogXCIuL3Bob3RvTGlzdC9saXN0LXBhZ2UudHNcIixcblx0XCIuL3Bob3RvTGlzdC9saXN0LXBhZ2UueG1sXCI6IFwiLi9waG90b0xpc3QvbGlzdC1wYWdlLnhtbFwiLFxuXHRcIi4vc2VhcmNoL3NlYXJjaC1wYWdlLnRzXCI6IFwiLi9zZWFyY2gvc2VhcmNoLXBhZ2UudHNcIixcblx0XCIuL3NlYXJjaC9zZWFyY2gtcGFnZS54bWxcIjogXCIuL3NlYXJjaC9zZWFyY2gtcGFnZS54bWxcIixcblx0XCIuL3NlYXJjaC9zZWFyY2gtdmlldy1tb2RlbC50c1wiOiBcIi4vc2VhcmNoL3NlYXJjaC12aWV3LW1vZGVsLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopXFxcXC4oeG1sfGNzc3xqc3woPzwhXFxcXC5kXFxcXC4pdHN8KD88IVxcXFxiX1tcXFxcdy1dKlxcXFwuKXNjc3MpJFwiOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxUYWJWaWV3IGlvc0ljb25SZW5kZXJpbmdNb2RlPVxcXCJhbHdheXNPcmlnaW5hbFxcXCI+XFxyXFxuICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cXFwiRmVhdHVyZWRcXFwiIGljb25Tb3VyY2U9XFxcInJlczovL3N0YXIucG5nXFxcIj5cXHJcXG4gICAgICAgIDxGcmFtZSBpZD1cXFwiYXNkZmFzZGZcXFwiIGRlZmF1bHRQYWdlPVxcXCJob21lL2hvbWUtcGFnZVxcXCI+PC9GcmFtZT5cXHJcXG4gICAgPC9UYWJWaWV3SXRlbT5cXHJcXG4gICAgPFRhYlZpZXdJdGVtIHRpdGxlPVxcXCJTZWFyY2hcXFwiIGljb25Tb3VyY2U9XFxcInJlczovL3NlYXJjaC5wbmdcXFwiPlxcclxcbiAgICAgICAgPEZyYW1lIGlkPVxcXCJzZWFyY2hcXFwiIGRlZmF1bHRQYWdlPVxcXCJzZWFyY2gvc2VhcmNoLXBhZ2VcXFwiPjwvRnJhbWU+XFxyXFxuICAgIDwvVGFiVmlld0l0ZW0+XFxyXFxuICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cXFwiQ2F0ZWdvcmllc1xcXCIgaWNvblNvdXJjZT1cXFwicmVzOi8vbGlzdC5wbmdcXFwiPlxcclxcbiAgICAgICAgPEZyYW1lIGlkPVxcXCJzZWFyY2hcXFwiIGRlZmF1bHRQYWdlPVxcXCJjYXRlZ29yaWVzL2NhdGVnb3JpZXMtcGFnZVxcXCI+PC9GcmFtZT5cXHJcXG4gICAgPC9UYWJWaWV3SXRlbT5cXHJcXG48L1RhYlZpZXc+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLXJvb3QueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vYXBwLXJvb3QueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03IW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgQ1NTIHJ1bGUgY2hhbmdlcyB0aGUgZm9udCBzaXplIG9mIGFsbCBVSVxcbmNvbXBvbmVudHMgdGhhdCBoYXZlIHRoZSBidG4gY2xhc3MgbmFtZS5cXG4qL1xcbi5idG4ge1xcbiAgICBmb250LXNpemU6IDE4O1xcbn1cXG5cXG4vKlxcbkluIG1hbnkgY2FzZXMgeW91IG1heSB3YW50IHRvIHVzZSB0aGUgTmF0aXZlU2NyaXB0IGNvcmUgdGhlbWUgaW5zdGVhZFxcbm9mIHdyaXRpbmcgeW91ciBvd24gQ1NTIHJ1bGVzLiBGb3IgYSBmdWxsIGxpc3Qgb2YgY2xhc3MgbmFtZXMgaW4gdGhlIHRoZW1lXFxucmVmZXIgdG8gaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS90aGVtZS5cXG4qL1xcblxcbi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWN0aW9uQmFyTGFiZWwge1xcbiAgICBmb250LWZhbWlseTogJ05vcmRpY2EgUGx1cycsICdub3JkaWNhY2xhc3NpY2x0ZXh0JztcXG4gICAgZm9udC1zaXplOiAyMDtcXG59XFxuXFxuLmxvY2F0aW9uQ291bnRyeSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3JkaWNhIFBsdXMnLCAnbm9yZGljYWNsYXNzaWNsdGV4dCc7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuLmJvdHRvbS1uYXZpZ2F0aW9uIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzMy4zMyU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgY29sb3I6YmxhY2s7XFxufVxcblxcbi5mYWIge1xcbiAgICBmb250LWZhbWlseTogRm9udCBBd2Vzb21lIDUgQnJhbmRzLCBmYS1icmFuZHMtNDAwO1xcbiAgICBmb250LXdlaWdodDogNDAwOyBcXG59XFxuXFxuLmZhcyB7XFxuICAgIGZvbnQtZmFtaWx5OiBGb250IEF3ZXNvbWUgNSBGcmVlLCBmYS1zb2xpZC05MDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7IFxcbn1cIiwgXCJcIl0pO1xuXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCIvKlxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLnRzIGZpbGUgaXMgdGhlIGVudHJ5IHBvaW50IHRvIHlvdXIgYXBwbGljYXRpb24uXG5Zb3UgY2FuIHVzZSB0aGlzIGZpbGUgdG8gcGVyZm9ybSBhcHAtbGV2ZWwgaW5pdGlhbGl6YXRpb24sIGJ1dCB0aGUgcHJpbWFyeVxucHVycG9zZSBvZiB0aGUgZmlsZSBpcyB0byBwYXNzIGNvbnRyb2wgdG8gdGhlIGFwcOKAmXMgZmlyc3QgbW9kdWxlLlxuKi9cblxuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgRm9udGF3ZXNvbWUgfSBmcm9tICduYXRpdmVzY3JpcHQtZm9udGF3ZXNvbWUnO1xuXG5Gb250YXdlc29tZS5pbml0KCk7XG5hcHAucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTtcblxuLypcbkRvIG5vdCBwbGFjZSBhbnkgY29kZSBhZnRlciB0aGUgYXBwbGljYXRpb24gaGFzIGJlZW4gc3RhcnRlZCBhcyBpdCB3aWxsIG5vdFxuYmUgZXhlY3V0ZWQgb24gaU9TLlxuKi9cbiIsIi8qXHJcbkluIE5hdGl2ZVNjcmlwdCwgYSBmaWxlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBhbiBYTUwgZmlsZSBpcyBrbm93biBhc1xyXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xyXG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cclxuKi9cclxuXHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IENhdGVnb3JpZXNWaWV3TW9kZWwgfSBmcm9tIFwiLi9jYXRlZ29yaWVzLXZpZXctbW9kZWxcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XHJcblxyXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwicGFnZUxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIGhvbWUtcGFnZS54bWxcclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICAvKlxyXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxyXG4gICAgdmlldyB0aGUgQVBJIHJlZmVyZW5jZSBvZiB0aGUgUGFnZSB0byBzZWUgd2hhdOKAmXMgYXZhaWxhYmxlIGF0XHJcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxyXG4gICAgKi9cclxuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IENhdGVnb3JpZXNWaWV3TW9kZWwoKTtcclxufVxyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiQ2F0ZWdvcmllc1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBzdHlsZT1cXFwiaGVpZ2h0OjUwMDBweFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiIGl0ZW1zPVxcXCJ7eyBzZWFyY2hRdWVyaWVzIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgY2F0ZWdvcnkgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0taGVhZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwid2lkdGg6IDYwJVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgc2VhcmNoUXVlcmllczoge2NhdGVnb3J5OiBzdHJpbmd9W10gPSBbe2NhdGVnb3J5OiBcIkJ1c2luZXNzXCJ9LCB7Y2F0ZWdvcnk6IFwiV2FsbHBhcGVyXCJ9LCB7Y2F0ZWdvcnk6IFwiTW9uZXlcIn0sIHtjYXRlZ29yeTogXCJTdW1tZXJcIn0sIHtjYXRlZ29yeTogXCJTY2hvb2xcIn0sIHtjYXRlZ29yeTogXCJPZmZpY2VcIn0sIHtjYXRlZ29yeTogXCJCZWFjaFwifSwge2NhdGVnb3J5OiBcIkNvbXB1dGVyXCJ9LCB7Y2F0ZWdvcnk6IFwiRmFtaWx5XCJ9LCB7Y2F0ZWdvcnk6IFwiVGVjaG5vbG9neVwifSwge2NhdGVnb3J5OiBcIlBlb3BsZVwifSwge2NhdGVnb3J5OiBcIkxvdmVcIn1dOyAgICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgfTtcbiAgICBcbiAgICBvbkl0ZW1UYXAoYXJncyk6IHZvaWR7XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5OnN0cmluZyA9IHRoaXMuc2VhcmNoUXVlcmllc1thcmdzLmluZGV4XS5jYXRlZ29yeS50b1N0cmluZygpO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJzZWFyY2hcIiwgY2F0ZWdvcnkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInRpdGxlXCIsIGNhdGVnb3J5KTtcbiAgICAgICAgbGV0IGxpc3RWaWV3Okxpc3RWaWV3ID0gPExpc3RWaWV3PmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBwYWdlOiBQYWdlID0gbGlzdFZpZXcucGFnZTtcbiAgICAgICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZShcInBob3RvTGlzdC9saXN0LXBhZ2VcIik7XG4gICAgfVxufSIsIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgSG9tZVZpZXdNb2RlbCB9IGZyb20gJy4vaG9tZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcInBhZ2VMb2FkZWRcIiBldmVudCBhdHRhY2hlZCBpbiBob21lLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhvbWVWaWV3TW9kZWwoKTtcbn1cblxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIiBjbGFzcz1cXFwicGFnZVxcXCI+XFxuPEFjdGlvbkJhciB0aXRsZT1cXFwiRmVhdHVyZWRcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj48L0FjdGlvbkJhcj5cXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIipcXFwiIHhtbG5zOmx2PVxcXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcXFwiIHhtbG5zOmY9XFxcIm5hdGl2ZXNjcmlwdC1mcmVzY29cXFwiXFxuICAgICAgICAgICAgaGVpZ2h0PVxcXCIxMDAlXFxcIj4gICBcXG4gICAgICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IGxvY2F0aW9ucyB9fVxcXCIgaWQ9XFxcIkxpc3RWaWV3XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MTAwJVxcXCIgc2VwYXJhdG9yQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcInJvd1xcXCIgcm93cz1cXFwiKlxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPVxcXCIqXFxcIiBiYWNrZ3JvdW5kSW1hZ2U9XFxcInt7IGltYWdlU3JjIH19XFxcIiBpZD1cXFwiaW1hZ2VcXFwiIGJvcmRlcj1cXFwiMTBweFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcGFkZGluZ1RvcD1cXFwiOFxcXCIgcGFkZGluZ0JvdHRvbT1cXFwiOFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgcGFkZGluZ0xlZnQ9XFxcIjE2XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9XFxcIjE2XFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjaXR5IH19XFxcIiBjbGFzcz1cXFwibG9jYXRpb25Db3VudHJ5XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2hvbWUvaG9tZS1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldy9saXN0LXZpZXcnO1xuXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIG9uSXRlbVRhcChhcmdzKTogdm9pZCB7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVybFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVybHMuZ2V0SXRlbShhcmdzLmluZGV4KSkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImxpa2VzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlrZXMuZ2V0SXRlbShhcmdzLmluZGV4KSkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInZpZXdzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudmlld3MuZ2V0SXRlbShhcmdzLmluZGV4KSkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInR5cGVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50eXBlLmdldEl0ZW0oYXJncy5pbmRleCkpKVxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJmYXZvcml0ZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5mYXZvcml0ZXMuZ2V0SXRlbShhcmdzLmluZGV4KSkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInRhZ3NcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50YWdzLmdldEl0ZW0oYXJncy5pbmRleCkpKVxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlci5nZXRJdGVtKGFyZ3MuaW5kZXgpKSlcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwid2ViVXJsXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMud2VidXJsLmdldEl0ZW0oYXJncy5pbmRleCkpKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiaW1nVXJsXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1nVXJsLmdldEl0ZW0oYXJncy5pbmRleCkpKTtcblxuICAgICAgICBsZXQgbGlzdFZpZXc6TGlzdFZpZXcgPSA8TGlzdFZpZXc+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBsaXN0Vmlldy5wYWdlO1xuXG4gICAgICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCJwaG90b0RldGFpbC9kZXRhaWwtcGFnZVwiKTtcbiAgICB9XG4gICAgXG4gICAgbG9jYXRpb25zID0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuXG4gICAgdXJscz0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgIGxpa2VzPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgdmlld3M9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICB0eXBlPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgZmF2b3JpdGVzPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgdGFncz0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgIHVzZXI9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICB3ZWJ1cmw9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICBpbWdVcmw9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcblxuICAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmV0Y2goXCJodHRwczovL3BpeGFiYXkuY29tL2FwaS8/a2V5PTEzMDEwNDgxLTU5ZDMzZjA5NWYzZmEzYzM5NzdkNzMxMjgmcHJldHR5PXRydWUmcGFnZT0zJnBlcl9wYWdlPTIwMFwiKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHIpID0+IHtcbiAgICAgICAgICAgICAgICByLmhpdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXI6IHN0cmluZyA9IGVsZW1lbnRbXCJ1c2VyXCJdXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmw6c3RyaW5nID0gZWxlbWVudFtcIndlYmZvcm1hdFVSTFwiXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbnMucHVzaCh7Y2l0eTogdXNlciwgaW1hZ2VTcmM6IHVybH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybHMucHVzaCh1cmwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5wdXNoKHVzZXIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlrZXMucHVzaChuZXcgU3RyaW5nKGVsZW1lbnRbXCJsaWtlc1wiXSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld3MucHVzaChuZXcgU3RyaW5nKGVsZW1lbnRbXCJ2aWV3c1wiXSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZS5wdXNoKG5ldyBTdHJpbmcoZWxlbWVudFtcInR5cGVcIl0pKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhdm9yaXRlcy5wdXNoKG5ldyBTdHJpbmcoZWxlbWVudFtcImZhdm9yaXRlc1wiXSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFncy5wdXNoKG5ldyBTdHJpbmcoZWxlbWVudFtcInRhZ3NcIl0pKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYnVybC5wdXNoKG5ldyBTdHJpbmcoZWxlbWVudFtcInBhZ2VVUkxcIl0pKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltZ1VybC5wdXNoKG5ldyBTdHJpbmcoZWxlbWVudFtcImxhcmdlSW1hZ2VVUkxcIl0pKVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoXCJUaGUgSW1hZ2VzIGNvdWxkbid0IGdldCBsb2FkZWQsIHRyeSB0byByZWxvYWQgdGhlIEFwcGxpY2F0aW9uXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxufSIsIi8qKlxuVGhpcyBmaWxlIGRlZmluZXMgYSBkZWNvcmF0b3IgeW91IGNhbiB1c2UgdG8gZW5hYmxlIHR3by13YXlcbmJpbmRpbmcgb24gdmlldy1tb2RlbCBwcm9wZXJ0aWVzLlxuXG5Gb3IgZXhhbXBsZTpcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5cbkBPYnNlcnZhYmxlUHJvcGVydHkoKSBteVByb3BlcnR5OiBib29sZWFuID0gdHJ1ZTtcblxuUmVhZCBtb3JlIGF0IGh0dHBzOi8vd3d3Lm5hdGl2ZXNjcmlwdC5vcmcvYmxvZy9uYXRpdmVzY3JpcHQtb2JzZXJ2YWJsZS1tYWdpYy1zdHJpbmctcHJvcGVydHktbmFtZS1iZS1nb25lXG4qKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBPYnNlcnZhYmxlUHJvcGVydHkoKSB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9ic2VydmFibGUsIHByb3BlcnR5S2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1tcIl9cIiArIHByb3BlcnR5S2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKHByb3BlcnR5S2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxQYWdlTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIGFsbERhdGE7XG5cbiAgICBpbWdSZXNvdXJjZSA9IG5ldyBPYnNlcnZhYmxlKClcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbWdSZXNvdXJjZSA9IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidXJsXCIpKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5hbGxEYXRhID0gbmV3IE9ic2VydmFibGVBcnJheSh7IG5hbWU6IFwiTGlrZXNcIiwgdmFsdWU6IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwibGlrZXNcIikpfSxcbiAgICAgICAgeyBuYW1lOiBcIlZpZXdzOlwiLCB2YWx1ZTogSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ2aWV3c1wiKSl9LFxuICAgICAgICB7IG5hbWU6IFwiVHlwZTpcIiwgdmFsdWU6IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidHlwZVwiKSkgfSxcbiAgICAgICAgeyBuYW1lOiBcIkZhdm9yaXRlczpcIiwgdmFsdWU6IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZmF2b3JpdGVzXCIpKSB9LFxuICAgICAgICB7IG5hbWU6IFwiVGFnczpcIiwgdmFsdWU6IEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidGFnc1wiKSkgfSxcbiAgICAgICAgeyBuYW1lOiBcIlVzZXI6XCIsIHZhbHVlOiBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZyhcInVzZXJcIikpIH0pO1xuICAgIH1cblxufSIsIi8qXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcbmEgY29kZS1iZWhpbmQgZmlsZS4gVGhlIGNvZGUtYmVoaW5kIGlzIGEgZ3JlYXQgcGxhY2UgdG8gcGxhY2UgeW91ciB2aWV3XG5sb2dpYywgYW5kIHRvIHNldCB1cCB5b3VyIHBhZ2XigJlzIGRhdGEgYmluZGluZy5cbiovXG5cbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBEZXRhaWxQYWdlTW9kZWwgfSBmcm9tIFwiLi9kZXRhaWwtcGFnZS1tb2RlbFwiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0ICogYXMgY2FtZXJhIGZyb20gXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCI7XG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldC9pbWFnZS1hc3NldFwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgaW9zLCBhbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbic7XG5kZWNsYXJlIHZhciBOU09iamVjdCxpbnRlcm9wLFVJSW1hZ2UsTlNFcnJvcixVSUltYWdlV3JpdGVUb1NhdmVkUGhvdG9zQWxidW0sUEhQaG90b0xpYnJhcnksIFVJQ29sb3IsIFBIQXV0aG9yaXphdGlvblN0YXR1czphbnlcbmltcG9ydCB7IFBob3RvVmlld2VyLCBQaG90b1ZpZXdlck9wdGlvbnMsIFBhbGV0dGVUeXBlLCBOWVRQaG90b0l0ZW0gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBob3Rvdmlld2VyXCI7XG52YXIgcGhvdG9WaWV3ZXI6IFBob3RvVmlld2VyOyBcblxuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBQYWdlIFwicGFnZUxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIGhvbWUtcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8qXG4gICAgVGhpcyBnZXRzIGEgcmVmZXJlbmNlIHRoaXMgcGFnZeKAmXMgPFBhZ2U+IFVJIGNvbXBvbmVudC4gWW91IGNhblxuICAgIHZpZXcgdGhlIEFQSSByZWZlcmVuY2Ugb2YgdGhlIFBhZ2UgdG8gc2VlIHdoYXTigJlzIGF2YWlsYWJsZSBhdFxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXG4gICAgKi9cbiAgIHBob3RvVmlld2VyID0gbmV3IFBob3RvVmlld2VyKCk7XG4gICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBEZXRhaWxQYWdlTW9kZWwoKTtcblxuICAgUEhQaG90b0xpYnJhcnkucmVxdWVzdEF1dGhvcml6YXRpb24oKHJlc3VsdCk9PiB7XG4gICAgaWYgKHJlc3VsdCA9PT0gUEhBdXRob3JpemF0aW9uU3RhdHVzLkF1dGhvcml6ZWQpe1xuICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBhdXRob3JpemVkXCIpXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiV2FybmluZyFcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVG8gc2F2ZSB0aGUgaW1hZ2UsIHdlIG5lZWQgdGhlIHBlcm1pc3Npb24gdG8gc2F2ZSBpdCBpbiB5b3VyIGdhbGxlcnkuIFBsZWFzZSBjaGFuZ2UgdGhlbSBpbiB0aGUgc2V0dGluZ3Mgb2YgeW91ciBkZXZpY2UuXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkluQnJvd3Nlcigpe1xuICAgIHV0aWxzLm9wZW5VcmwoSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJ3ZWJVcmxcIikpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkdhbGxlcnkoYXJnczogRXZlbnREYXRhLCBwYXRoKXtcbiAgICBsZXQgaW1hZ2UxID0gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJpbWdVcmxcIikpO1xuXG4gICAgbGV0IG15SW1hZ2VzID0gW2ltYWdlMV07XG5cblx0XG4gICAgcGhvdG9WaWV3ZXIuc2hvd0dhbGxlcnkobXlJbWFnZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUltYWdlKCl7XG4gICAgXG59XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiRGV0YWlsXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJHbyBCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJvbk5hdkJ0blRhcFxcXCIvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJCbGFja1xcXCI+XFxuICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ7eyBpbWdSZXNvdXJjZSB9fVxcXCJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjQwJVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206IDMwcHg7IG1hcmdpbi10b3A6IDMwcHg7XFxcIiB0YXA9XFxcIm9wZW5HYWxsZXJ5XFxcIi8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkltYWdlIGZyb20gUGl4YWJheS5jb21cXFwiICBiYWNrZ3JvdW5kQ29sb3I9XFxcIkJsYWNrXFxcIiBzdHlsZT1cXFwiY29sb3I6IHdoaXRlOyB3aWR0aDogMTAwJTsgdGV4dC1hbGlnbjogY2VudGVyO1xcXCIgbWFyZ2luPVxcXCI1XFxcIiBmb250U2l6ZT1cXFwiMTJcXFwiLz5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwid2hpdGVcXFwiPlxcblxcdFxcdFxcdCAgICA8QnV0dG9uIHRleHQ9XFxcIiYjeGYzNWQ7IFZpc2l0XFxcIiBjbGFzcz1cXFwiZmFzXFxcIiB0YXA9XFxcIm9wZW5JbkJyb3dzZXJcXFwiIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOiBjZW50ZXI7IHdpZHRoOiA0NyU7IGJvcmRlci1yYWRpdXM6IDgwO1xcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJCbGFja1xcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgbWFyZ2luPVxcXCI1XFxcIi8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiJiN4ZjAzZTsgUHJldmlld1xcXCIgY2xhc3M9XFxcImZhc1xcXCIgdGFwPVxcXCJvcGVuR2FsbGVyeVxcXCIgc3R5bGU9XFxcInRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDQ3JTsgYm9yZGVyLXJhZGl1czogODA7XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIkJsYWNrXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBtYXJnaW49XFxcIjVcXFwiLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPExpc3RWaWV3IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBpdGVtcz1cXFwie3thbGxEYXRhfX1cXFwiIGhlaWdodD1cXFwiNTAlXFxcIj5cXG4gICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7bmFtZX19XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAzMCVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdmFsdWUgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0taGVhZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICA8L1N0YWNrTGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9waG90b0RldGFpbC9kZXRhaWwtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9waG90b0RldGFpbC9kZXRhaWwtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcvbGlzdC12aWV3JztcblxuZXhwb3J0IGNsYXNzIExpc3RQYWdlTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIG9uSXRlbVRhcChhcmdzKTogdm9pZCB7XG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInVybFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVybHMuZ2V0SXRlbShhcmdzLmluZGV4KSkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcImxpa2VzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMubGlrZXMuZ2V0SXRlbShhcmdzLmluZGV4KSkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInZpZXdzXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudmlld3MuZ2V0SXRlbShhcmdzLmluZGV4KSkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInR5cGVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50eXBlLmdldEl0ZW0oYXJncy5pbmRleCkpKVxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJmYXZvcml0ZXNcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5mYXZvcml0ZXMuZ2V0SXRlbShhcmdzLmluZGV4KSkpXG4gICAgICAgIGFwcFNldHRpbmdzLnNldFN0cmluZyhcInRhZ3NcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy50YWdzLmdldEl0ZW0oYXJncy5pbmRleCkpKVxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMudXNlci5nZXRJdGVtKGFyZ3MuaW5kZXgpKSlcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwid2ViVXJsXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMud2VidXJsLmdldEl0ZW0oYXJncy5pbmRleCkpKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiaW1nVXJsXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaW1nVXJsLmdldEl0ZW0oYXJncy5pbmRleCkpKTtcbiAgICAgICAgbGV0IGxpc3RWaWV3Okxpc3RWaWV3ID0gPExpc3RWaWV3PmFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBwYWdlOiBQYWdlID0gbGlzdFZpZXcucGFnZTtcblxuICAgICAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKFwicGhvdG9EZXRhaWwvZGV0YWlsLXBhZ2VcIik7XG4gICAgfVxuXG4gICAgdGl0bGU6IHN0cmluZz0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwidGl0bGVcIik7XG5cbiAgICBsb2NhdGlvbnM7IFxuXG5cbiAgICB1cmxzPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgbGlrZXM9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICB2aWV3cz0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgIHR5cGU9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICBmYXZvcml0ZXM9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICB0YWdzPSBuZXcgT2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgdXNlcj0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgIHdlYnVybD0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgIGltZ1VybD0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9jYXRpb25zID0gbmV3IE9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICBsZXQgc2VhcmNoOnN0cmluZyA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInRpdGxlXCIpLnJlcGxhY2UoXCIgXCIsIFwiK1wiKTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMuc3BsaWNlKDApXG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT0xMzAxMDQ4MS01OWQzM2YwOTVmM2ZhM2MzOTc3ZDczMTI4JnByZXR0eT10cnVlJnE9XCIgKyBzZWFyY2ggK1wiJnBlcl9wYWdlPTIwMFwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25zLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgci5oaXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1c2VyOiBzdHJpbmcgPSBlbGVtZW50W1widXNlclwiXVxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsOnN0cmluZyA9IGVsZW1lbnRbXCJ3ZWJmb3JtYXRVUkxcIl07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25zLnB1c2goe2NpdHk6IHVzZXIsIGltYWdlU3JjOiB1cmx9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cmxzLnB1c2godXJsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIucHVzaCh1c2VyKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpa2VzLnB1c2gobmV3IFN0cmluZyhlbGVtZW50W1wibGlrZXNcIl0pKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXdzLnB1c2gobmV3IFN0cmluZyhlbGVtZW50W1widmlld3NcIl0pKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUucHVzaChuZXcgU3RyaW5nKGVsZW1lbnRbXCJ0eXBlXCJdKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYXZvcml0ZXMucHVzaChuZXcgU3RyaW5nKGVsZW1lbnRbXCJmYXZvcml0ZXNcIl0pKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhZ3MucHVzaChuZXcgU3RyaW5nKGVsZW1lbnRbXCJ0YWdzXCJdKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJ1cmwucHVzaChuZXcgU3RyaW5nKGVsZW1lbnRbXCJwYWdlVVJMXCJdKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWdVcmwucHVzaChuZXcgU3RyaW5nKGVsZW1lbnRbXCJsYXJnZUltYWdlVVJMXCJdKSlcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9jYXRpb25zLmxlbmd0aDwzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9ucy5wdXNoKHtjaXR5OiBcIk5vIGltYWdlcyBmb3VuZCAtIHRyeSBhZ2FpblwiLCBpbWFnZVNyYzogXCJcIn0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgZGlhbG9ncy5hbGVydChcIlRoZSBJbWFnZXMgY291bGRuJ3QgZ2V0IGxvYWRlZCwgdHJ5IHRvIHJlbG9hZCB0aGUgQXBwbGljYXRpb25cIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFxuICAgIH1cbn0iLCIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgTGlzdFBhZ2VNb2RlbCB9IGZyb20gXCIuL2xpc3QtcGFnZS1tb2RlbFwiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcInBhZ2VMb2FkZWRcIiBldmVudCBhdHRhY2hlZCBpbiBob21lLXBhZ2UueG1sXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvKlxuICAgIFRoaXMgZ2V0cyBhIHJlZmVyZW5jZSB0aGlzIHBhZ2XigJlzIDxQYWdlPiBVSSBjb21wb25lbnQuIFlvdSBjYW5cbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hcGktcmVmZXJlbmNlL2NsYXNzZXMvX3VpX3BhZ2VfLnBhZ2UuaHRtbFxuICAgICovXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IExpc3RQYWdlTW9kZWwoKTtcbn1cblxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgbmF2aWdhdGVkVG89XFxcInBhZ2VMb2FkZWRcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIj5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJ7eyB0aXRsZSB9fVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKlxcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCIgeG1sbnM6Zj1cXFwibmF0aXZlc2NyaXB0LWZyZXNjb1xcXCJcXG4gICAgICAgICAgICBoZWlnaHQ9XFxcIjEwMCVcXFwiPiAgIFxcbiAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgbG9jYXRpb25zIH19XFxcIiBpZD1cXFwiTGlzdFZpZXdcXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgc3R5bGU9XFxcImhlaWdodDoxMDAlXFxcIiBzZXBhcmF0b3JDb2xvcj1cXFwidHJhbnNwYXJlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cXFwicm93XFxcIiBpZD1cXFwibGlzdEl0ZW1cXFwiIHJvd3M9XFxcIipcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz1cXFwiKlxcXCIgYmFja2dyb3VuZEltYWdlPVxcXCJ7eyBpbWFnZVNyYyB9fVxcXCIgaWQ9XFxcImltYWdlXFxcIiBib3JkZXI9XFxcIjEwcHhcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcXCI+IFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBwYWRkaW5nVG9wPVxcXCI4XFxcIiBwYWRkaW5nQm90dG9tPVxcXCI4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBwYWRkaW5nTGVmdD1cXFwiMTZcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cXFwiMTZcXFwiIGhlaWdodD1cXFwiMjAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGNpdHkgfX1cXFwiIGNsYXNzPVxcXCJsb2NhdGlvbkNvdW50cnlcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleGJveExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vcGhvdG9MaXN0L2xpc3QtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9waG90b0xpc3QvbGlzdC1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCIvKlxyXG5JbiBOYXRpdmVTY3JpcHQsIGEgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgYW4gWE1MIGZpbGUgaXMga25vd24gYXNcclxuYSBjb2RlLWJlaGluZCBmaWxlLiBUaGUgY29kZS1iZWhpbmQgaXMgYSBncmVhdCBwbGFjZSB0byBwbGFjZSB5b3VyIHZpZXdcclxubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hWaWV3TW9kZWwgfSBmcm9tIFwiLi9zZWFyY2gtdmlldy1tb2RlbFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcclxuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIjtcclxuXHJcbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgXCJwYWdlTG9hZGVkXCIgZXZlbnQgYXR0YWNoZWQgaW4gaG9tZS1wYWdlLnhtbFxyXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIC8qXHJcbiAgICBUaGlzIGdldHMgYSByZWZlcmVuY2UgdGhpcyBwYWdl4oCZcyA8UGFnZT4gVUkgY29tcG9uZW50LiBZb3UgY2FuXHJcbiAgICB2aWV3IHRoZSBBUEkgcmVmZXJlbmNlIG9mIHRoZSBQYWdlIHRvIHNlZSB3aGF04oCZcyBhdmFpbGFibGUgYXRcclxuICAgIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FwaS1yZWZlcmVuY2UvY2xhc3Nlcy9fdWlfcGFnZV8ucGFnZS5odG1sXHJcbiAgICAqL1xyXG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgU2VhcmNoVmlld01vZGVsKCk7XHJcbn1cclxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2UgbG9hZGVkPVxcXCJwYWdlTG9hZGVkXFxcIiBjbGFzcz1cXFwicGFnZVxcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNlYXJjaFxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcbjxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJsaWdodGdyYXlcXFwiPlxcbiAgICAgICAgPFNlYXJjaEJhciBoaW50PVxcXCJMb2NhdGlvbnMsIENvdW50cmllcyBhbmQgbWFueSBtb3JlLi4uXFxcIiB0ZXh0PVxcXCJ7eyBzZWFyY2hQaHJhc2UgfX1cXFwiIHN1Ym1pdD1cXFwie3sgb25TZWFyY2hTdWJtaXQgfX1cXFwiIC8+XFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkNsZWFyIEhpc3RvcnlcXFwiIHRhcD1cXFwie3sgcmVtb3ZlSXRlbUZyb21MaXN0IH19XFxcIiBmb250U2l6ZT1cXFwiMTVlbVxcXCIgc3R5bGU9XFxcImNvbG9yOiByZWQ7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB0ZXh0LWFsaWduOiByaWdodDsgcGFkZGluZzogMTAlIDIwJTsgcGFkZGluZy1ib3R0b206IC0yJVxcXCIvPlxcbiAgICAgICAgPExpc3RWaWV3IGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIiBpdGVtcz1cXFwie3sgc2VhcmNoUXVlcmllcyB9fVxcXCJcXG4gICAgICAgICAgICBzdHlsZT1cXFwiaGVpZ2h0OjEwMCVcXFwiIHNlcGFyYXRvckNvbG9yPVxcXCJ3aGl0ZVxcXCIgaXRlbVRhcD1cXFwie3sgb25JdGVtVGFwIH19XFxcIj5cXG4gICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVxcXCJyb3dcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHF1ZXJ5IH19XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtLWhlYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcInBhZGRpbmctcmlnaHQ6IDUwJTsgd2lkdGg6IDgwJTsgcGFkZGluZy10b3A6IDEwJVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9GbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgPC9TdGFja0xheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vc2VhcmNoL3NlYXJjaC1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3NlYXJjaC9zZWFyY2gtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IHsgcmVxdWVzdCwgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3XCI7XG5pbXBvcnQgeyBkaXNwbGF5ZWRFdmVudCwgZXhpdEV2ZW50LCBsYXVuY2hFdmVudCwgbG93TWVtb3J5RXZlbnQsIFxuICAgIG9yaWVudGF0aW9uQ2hhbmdlZEV2ZW50LCByZXN1bWVFdmVudCwgc3VzcGVuZEV2ZW50LCB1bmNhdWdodEVycm9yRXZlbnQsIFxuICAgIEFwcGxpY2F0aW9uRXZlbnREYXRhLCBMYXVuY2hFdmVudERhdGEsIE9yaWVudGF0aW9uQ2hhbmdlZEV2ZW50RGF0YSwgVW5oYW5kbGVkRXJyb3JFdmVudERhdGEsXG4gICAgb24gYXMgYXBwbGljYXRpb25PbiwgcnVuIGFzIGFwcGxpY2F0aW9uUnVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuXG5leHBvcnQgY2xhc3MgU2VhcmNoVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBvbkl0ZW1UYXAoYXJncyk6IHZvaWQge1xuICAgICAgICBsZXQgbGlzdFZpZXc6TGlzdFZpZXcgPSA8TGlzdFZpZXc+YXJncy5vYmplY3Q7XG4gICAgICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBsaXN0Vmlldy5wYWdlO1xuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ0aXRsZVwiLCB0aGlzLnF1ZXJ5QXJyYXlbYXJncy5pbmRleF0pO1xuICAgICAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKFwicGhvdG9MaXN0L2xpc3QtcGFnZVwiKTtcbiAgICB9XG5cbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG5cbiAgICBvblNlYXJjaFN1Ym1pdChhcmdzKTogdm9pZCB7XG4gICAgICAgIGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmFyZ3Mub2JqZWN0O1xuICAgICAgICBpZihzZWFyY2hCYXIudGV4dC5sZW5ndGggPiAyMCl7XG4gICAgICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnB1dCB0b28gbG9uZ1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gaW1hZ2VzIGZvciB0aGlzIHRvcGljLlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWFyY2hCYXIudGV4dCA9IFwiXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hRdWVyaWVzLnB1c2goeyBxdWVyeTogc2VhcmNoQmFyLnRleHR9KTtcbiAgICAgICAgY29uc3QgcGFnZTogUGFnZSA9IHNlYXJjaEJhci5wYWdlO1xuICAgICAgICB0aGlzLnF1ZXJ5QXJyYXkucHVzaChzZWFyY2hCYXIudGV4dClcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwicXVlcmllc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5QXJyYXkpKVxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ0aXRsZVwiLCBzZWFyY2hCYXIudGV4dCk7XG4gICAgICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCJwaG90b0xpc3QvbGlzdC1wYWdlXCIpO31cbiAgICB9XG4gICAgXG4gICAgc2VhcmNoUXVlcmllcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTsgICAgXG4gICAgcXVlcnlBcnJheSA6IHN0cmluZ1tdID0gW1wiQ2Fyc1wiLCBcIkV2ZW50c1wiLCBcIlJpdmVyc1wiLCBcIk1vdW50YWluc1wiXTtcbiAgICAgICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICBpZihhcHBTZXR0aW5ncy5oYXNLZXkoXCJxdWVyaWVzXCIpKXtcbiAgICAgICAgICAgIHRoaXMucXVlcnlBcnJheS5zcGxpY2UoMCk7XG4gICAgICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2YgSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJxdWVyaWVzXCIpKSl7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hRdWVyaWVzLnB1c2goe3F1ZXJ5OiBlbGVtZW50fSk7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeUFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIHRoaXMucXVlcnlBcnJheSl7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFF1ZXJpZXMucHVzaCh7cXVlcnk6IGVsZW1lbnR9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwicXVlcmllc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5QXJyYXkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUl0ZW1Gcm9tTGlzdChhcmdzKXtcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyaWVzLnNwbGljZSgwKTtcbiAgICAgICAgdGhpcy5xdWVyeUFycmF5LnNwbGljZSgwKTtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwicXVlcmllc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnF1ZXJ5QXJyYXkpKSAgICAgXG4gICAgfSAgIFxufSJdLCJzb3VyY2VSb290IjoiIn0=