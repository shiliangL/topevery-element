/*
 * @Author: shiliangL
 * @Date: 2020-05-22 11:02:08
 * @LastEditTime: 2020-10-17 11:04:34
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /topevery-element/src/utils/types.js
 */
export function isString (obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}

export function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export function isBoolean (obj) {
  return Object.prototype.toString.call(obj) === '[object Boolean]'
}

export function isObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isHtmlElement (node) {
  return node && node.nodeType === Node.ELEMENT_NODE
}

export const isFunction = (functionToCheck) => {
  var getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

export const isUndefined = (val) => {
  // eslint-disable-next-line no-void
  return val === void 0
}

export const isDefined = (val) => {
  return val !== undefined && val !== null
}
