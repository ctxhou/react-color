'use strict';

// export { default as ChromePicker } from './components/chrome/Chrome'

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CompactPicker = undefined;

var _Compact = require('./components/compact/Compact');

Object.defineProperty(exports, 'CompactPicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Compact).default;
  }
});

var _Chrome = require('./components/chrome/Chrome');

var _Chrome2 = _interopRequireDefault(_Chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// export { default as MaterialPicker } from './components/material/Material'
// export { default as PhotoshopPicker } from './components/photoshop/Photoshop'
// export { default as SketchPicker } from './components/sketched/Sketch'
// export { default as SliderPicker } from './components/slider/Slider'
// export { default as SwatchesPicker } from './components/swatches/Swatches'
// export { default as CustomPicker } from './components/common/ColorWrap'

exports.default = _Chrome2.default;