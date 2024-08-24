(function (React, ReactDOM) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : String(i);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeFunction(fn) {
    try {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    } catch (e) {
      return typeof fn === "function";
    }
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function onHeroTableClick(e, data) {
    var ev = new CustomEvent("row_select", {
      detail: data,
      bubbles: true
    });
    document.dispatchEvent(ev);
  }
  var HeroTable = function HeroTable(_ref) {
    var data = _ref.data;
    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("style", null, "\n          .superhero-table {\n            width: 100%;\n            border-collapse: collapse;\n          }\n\n          .superhero-table tr:hover {\n            background-color: blue;\n            opacity: 0.7;\n          }\n\n          .superhero-table tr:hover td {\n            color: white !important; /* Change the text color to white */\n          }\n\n          .superhero-table th,\n          .superhero-table td {\n            padding: 8px;\n            border: 1px solid #dddddd;\n            text-align: left;\n          }\n\n          .superhero-table th {\n            background-color: grey;\n            font-weight: bold;\n          }\n        "), /*#__PURE__*/React__default["default"].createElement("table", {
      className: "superhero-table"
    }, /*#__PURE__*/React__default["default"].createElement("thead", null, /*#__PURE__*/React__default["default"].createElement("tr", null, /*#__PURE__*/React__default["default"].createElement("th", null, "Superhero"), /*#__PURE__*/React__default["default"].createElement("th", null, "Publisher"), /*#__PURE__*/React__default["default"].createElement("th", null, "Alter Ego"), /*#__PURE__*/React__default["default"].createElement("th", null, "First Appearance"), /*#__PURE__*/React__default["default"].createElement("th", null, "Characters"))), /*#__PURE__*/React__default["default"].createElement("tbody", null, data.map(function (item, index) {
      return /*#__PURE__*/React__default["default"].createElement("tr", {
        key: index,
        onClick: function onClick(e) {
          return onHeroTableClick(e, item);
        }
      }, /*#__PURE__*/React__default["default"].createElement("td", null, item.superhero), /*#__PURE__*/React__default["default"].createElement("td", null, item.publisher), /*#__PURE__*/React__default["default"].createElement("td", null, item.alter_ego), /*#__PURE__*/React__default["default"].createElement("td", null, item.first_appearance), /*#__PURE__*/React__default["default"].createElement("td", null, item.characters));
    }))));
  };

  // import {getHeroes} from 'HeroService';

  var HeroList = function HeroList() {
    var _useState = React.useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      heroes = _useState2[0],
      setHeroes = _useState2[1];
    HeroService.getHeroes().then(function (data) {
      setHeroes(data);
    });

    // import("../../../Services/HeroService.js").then(async (heroService) => {

    //     let heroList= await heroService.getHeroes();
    //     console.log(heroList);
    //     setHeroes(heroList);
    // });

    return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("h1", null, "React Superhero Table"), Object.keys(heroes).length > 0 && /*#__PURE__*/React__default["default"].createElement(HeroTable, {
      data: heroes
    }), Object.keys(heroes).length === 0 && /*#__PURE__*/React__default["default"].createElement("h2", null, "Hero list loading..."));
  };

  var WebComponentWrapper = /*#__PURE__*/function (_HTMLElement) {
    _inherits(WebComponentWrapper, _HTMLElement);
    function WebComponentWrapper() {
      var _this;
      _classCallCheck(this, WebComponentWrapper);
      _this = _callSuper(this, WebComponentWrapper);
      _this.shadow = _this.attachShadow({
        mode: 'open'
      });
      return _this;
    }
    _createClass(WebComponentWrapper, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.renderReactComponent();
      }
    }, {
      key: "renderReactComponent",
      value: function renderReactComponent() {
        ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(HeroList, null), this.shadow);
      }
    }]);
    return WebComponentWrapper;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  customElements.define('react-web-component', WebComponentWrapper);

})(React, ReactDOM);
