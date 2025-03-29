/**
 * utils.js
 * @author: 甄灿华
 * @date: 2025-03-26
 * @description: 工具集
 */

export const isEqual = (a, b) => {
  if (typeof a === 'object' && typeof b === 'object') {
    if (a === null && b === null) {
      return true
    } else {
      return JSON.stringify(a) === JSON.stringify(b)
    }
  } else {
    return a === b
  }
}
