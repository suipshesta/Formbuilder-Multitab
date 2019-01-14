'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Star rating class - show 5 stars with the ability to select a rating
 */

// configure the class for runtime loading
if (!window.fbControls) window.fbControls = [];
window.fbControls.push(function (controlClass) {
  /**
   * Star rating class
   */
  var controlNewBin = function (_controlClass) {
    _inherits(controlNewBin, _controlClass);

    function controlNewBin() {
      _classCallCheck(this, controlNewBin);

      return _possibleConstructorReturn(this, (controlNewBin.__proto__ || Object.getPrototypeOf(controlNewBin)).apply(this, arguments));
    }

    _createClass(controlNewBin, [{
      key: 'configure',


      /**
       * javascript & css to load
       */
      value: function configure() {
        this.js = '//cdnjs.cloudflare.com/ajax/libs/rateYo/2.2.0/jquery.rateyo.min.js';
        this.css = '//cdnjs.cloudflare.com/ajax/libs/rateYo/2.2.0/jquery.rateyo.min.css';
      }

      /**
       * build a text DOM element, supporting other jquery text form-control's
       * @return {Object} DOM Element to be injected into the form.
       */

    }, {
      key: 'build',
      value: function build() {
        return this.markup('span', null, { id: this.config.name });
      }

      /**
       * onRender callback
       */

    }, {
      key: 'onRender',
      value: function onRender() {
        var value = this.config.value || 3.6;
        $('#' + this.config.name).rateYo({ rating: value });
      }
    }], [{
      key: 'definition',


      /**
       * Class configuration - return the icons & label related to this control
       * @returndefinition object
       */
      get: function get() {
        return {
          icon: '🌟',
          i18n: {
            default: 'Star Rating'
          }
        };
      }
    }]);

    return controlNewBin;
  }(controlClass);

  // register this control for the following types & text subtypes


  controlClass.register('newBin', controlNewBin);
  return controlNewBin;
});