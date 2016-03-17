'use strict'

/**
 * Creates a function returning a constant value
 *
 * @param {*} arg - The value to always return from constant function
 * @return {Function} - a function always returning arg
 */
module.exports = arg => () => arg
