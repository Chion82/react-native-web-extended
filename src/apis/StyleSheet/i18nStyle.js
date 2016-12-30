import I18nManager from '../I18nManager';
import multiplyStyleLengthValue from '../../modules/multiplyStyleLengthValue';

const emptyObject = {};

/**
 * Map of property names to their BiDi equivalent.
 */
const PROPERTIES_TO_SWAP = {
  'borderTopLeftRadius': 'borderTopRightRadius',
  'borderTopRightRadius': 'borderTopLeftRadius',
  'borderBottomLeftRadius': 'borderBottomRightRadius',
  'borderBottomRightRadius': 'borderBottomLeftRadius',
  'borderLeftColor': 'borderRightColor',
  'borderLeftStyle': 'borderRightStyle',
  'borderLeftWidth': 'borderRightWidth',
  'borderRightColor': 'borderLeftColor',
  'borderRightWidth': 'borderLeftWidth',
  'borderRightStyle': 'borderLeftStyle',
  'left': 'right',
  'marginLeft': 'marginRight',
  'marginRight': 'marginLeft',
  'paddingLeft': 'paddingRight',
  'paddingRight': 'paddingLeft',
  'right': 'left'
};

const PROPERTIES_SWAP_LEFT_RIGHT = {
  'clear': true,
  'float': true,
  'textAlign': true
};

const PROPERTIES_SWAP_LTR_RTL = {
  'writingDirection': true
};

/**
 * Invert the sign of a numeric-like value
 */
const additiveInverse = (value: String | Number) => multiplyStyleLengthValue(value, -1);

/**
 * BiDi flip the given property.
 */
const flipProperty = (prop:String): String => {
  return PROPERTIES_TO_SWAP.hasOwnProperty(prop) ? PROPERTIES_TO_SWAP[prop] : prop;
};

/**
 * BiDi flip translateX
 */
const flipTransform = (transform: Object): Object => {
  const translateX = transform.translateX;
  if (translateX != null) {
    transform.translateX = additiveInverse(translateX);
  }
  return transform;
};

const swapLeftRight = (value:String): String => {
  return value === 'left' ? 'right' : value === 'right' ? 'left' : value;
};

const swapLtrRtl = (value:String): String => {
  return value === 'ltr' ? 'rtl' : value === 'rtl' ? 'ltr' : value;
};

const i18nStyle = (style = emptyObject) => {
  const newStyle = {};
  for (const prop in style) {
    if (!Object.prototype.hasOwnProperty.call(style, prop)) {
      continue;
    }

    const indexOfNoFlip = prop.indexOf('$noI18n');

    if (I18nManager.isRTL) {
      if (PROPERTIES_TO_SWAP[prop]) {
        const newProp = flipProperty(prop);
        newStyle[newProp] = style[prop];
      } else if (PROPERTIES_SWAP_LEFT_RIGHT[prop]) {
        newStyle[prop] = swapLeftRight(style[prop]);
      } else if (PROPERTIES_SWAP_LTR_RTL[prop]) {
        newStyle[prop] = swapLtrRtl(style[prop]);
      } else if (prop === 'textShadowOffset') {
        newStyle[prop] = style[prop];
        newStyle[prop].width = additiveInverse(style[prop].width);
      } else if (prop === 'transform') {
        newStyle[prop] = style[prop].map(flipTransform);
      } else if (indexOfNoFlip > -1) {
        const newProp = prop.substring(0, indexOfNoFlip);
        newStyle[newProp] = style[prop];
      } else {
        newStyle[prop] = style[prop];
      }
    } else {
      if (indexOfNoFlip > -1) {
        const newProp = prop.substring(0, indexOfNoFlip);
        newStyle[newProp] = style[prop];
      } else {
        newStyle[prop] = style[prop];
      }
    }
  }

  return newStyle;
};

module.exports = i18nStyle;
