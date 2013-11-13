/* AstroDate
 *
 * home: https://github.com/Xotic750/astrodate
 *
 * Copyright (C) 2013  Graham Fairweather (a.k.a: Xotic750)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function (thisContext, privateUndefined) {
    'use strict';

    // Safari 2.x NFE bug fix
    // http://kangax.github.io/nfe/
    var tempSafariNFE;

    (function (name, definition) {
        /*global module, require, define */
        var bigNumberFunc = 'BigNumber',
            bigNumberString = bigNumberFunc.toLowerCase(),
            projectPaths,
            projectConfig;

        if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
            module.exports = definition(require(bigNumberString + '.js'));
        } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
            projectPaths = {};
            projectConfig = {};
            projectPaths[bigNumberString] = '//cdn.jsdelivr.net/bignumber.js/1.1.0/bignumber.min';
            projectConfig[bigNumberString] = {};
            require.config({
                paths: projectPaths,
                config: projectConfig
            });

            // "name" should be removed when finished with local testing
            define(name, [bigNumberString], definition);
        } else {
            thisContext[name] = definition(thisContext[bigNumberFunc]);
        }

        /*global */
    }('astrodate', (function () {
        // Unused variable for JScript NFE bug
        // http://kangax.github.io/nfe/
        var nfeDefinition;

        tempSafariNFE = function nfeDefinition(BigNumber) {
            BigNumber.config({
                DECIMAL_PLACES: 9,
                ROUNDING_MODE: 0,
                EXPONENTIAL_AT: [-7, 20],
                RANGE: [-1000000000, 1000000000],
                ERRORS: true
            });

            var VERSION = '0.5.1',
                //MAX_INTEGER = 9007199254740991,
                //MIN_INTEGER = -9007199254740991,
                UWORD32 = Math.pow(2, 32),
                MAX_UINT32 = UWORD32 - 1,
                languages = {},
                baseObject = {},
                defaultProperties,
                baseArray = [],
                baseString = '',
                toObjectString,
                baseNumber = 0,
                baseBoolean = true,
                fullKeys,
                dayKeys,
                monthKeys,
                protoName = '__proto__',
                invalidISOCharsRx = new RegExp('[^\\d\\-+WT Z:,\\.]'),
                replaceTokenRX = new RegExp('([^\\\']+)|(\\\'[^\\\']+\\\')', 'g'),
                toObject,
                //j2000 = [2000, 1, 1, 11, 58, 55, 816],
                extend,
                arrayIndexOf,
                objectDefineProperty,
                objectDefineProperties,
                objectFreeze,
                objectIsFrozen,
                hasProperty,
                objectHasOwnProperty,
                objectGetOwnPropertyDescriptor,
                arrayIsArray,
                objectInstanceOf,
                objectGetPrototypeOf,
                isPlainObject,
                objectKeys,
                stringTrim,
                stringRepeat,
                stringSplit,
                //stringStartsWith,
                //stringEndsWith,
                stringContains,
                toObjectFixIndexedAccess,
                //arrayUnshift,
                arrayForEach,
                arraySome,
                arrayMap,
                //arrayFilter,
                arrayReduce,
                objectIs,
                numberToInteger,
                numberIsNaN,
                numberIsFinite,
                mathSign,
                AstroDate,
                datePatterns,
                timePatterns,
                formatTypes,
                nameTypes,
                widthTypes,
                defaultLanguage,
                defaultLocale,
                calendarTypes,
                leapSeconds,
                supplemental;

            function toNumber(inputArg) {
                return +inputArg;
            }

            function strictEqual(a, b) {
                return a === b;
            }

            function lt(number, limit) {
                return number < limit;
            }

            function lte(number, limit) {
                return number <= limit;
            }

            function gt(number, limit) {
                return number > limit;
            }

            function gte(number, limit) {
                return number >= limit;
            }

            function mod(number1, number2) {
                return number1 % number2;
            }

            function clamp(number, min, max) {
                return Math.min(Math.max(number, min), max);
            }

            function inRange(number, min, max) {
                return gte(number, min) && lte(number, max);
            }

            function isUndefined(inputArg) {
                return strictEqual(typeof inputArg, 'undefined');
            }

            function isNull(inputArg) {
                return strictEqual(inputArg, null);
            }

            function isBoolean(inputArg) {
                return strictEqual(inputArg, true) || strictEqual(inputArg, false);
            }

            function isNumber(inputArg) {
                return strictEqual(typeof inputArg, 'number');
            }

            function isZero(inputArg) {
                return strictEqual(inputArg, 0);
            }

            function isString(inputArg) {
                return strictEqual(typeof inputArg, 'string');
            }

            function isEmptyString(inputArg) {
                return strictEqual(inputArg, '');
            }

            /*
            function isNumeric(inputArg) {
                var val = false,
                    string;

                if (isNumber(inputArg) || isString(inputArg)) {
                    string = inputArg.toString().replace(/^[+\-]?/, "");
                    if (!isNaN(parseFloat(string)) && isFinite(string)) {
                        val = true;
                    }
                }

                return val;
            }
            */

            function checkObjectCoercible(inputArg) {
                if (isUndefined(inputArg) || isNull(inputArg)) {
                    throw new TypeError('Cannot convert "' + inputArg + '" to object');
                }

                return inputArg;
            }

            toObject = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var CtrBoolean = baseBoolean.constructor,
                    CtrNumber = baseNumber.constructor,
                    CtrString = baseString.constructor,
                    nfeToObject;

                tempSafariNFE = function nfeToObject(inputArg) {
                    var object = checkObjectCoercible(inputArg);

                    if (isBoolean(object)) {
                        object = new CtrBoolean(object);
                    } else if (isNumber(object)) {
                        object = new CtrNumber(object);
                    } else if (isString(object)) {
                        object = new CtrString(object);
                    }

                    return object;
                };

                nfeToObject = null;

                return tempSafariNFE;
            }());

            // named anyToString instead of toString because of SpiderMonkey and Blackberry bug
            function anyToString(inputArg) {
                var val;

                if (isString(inputArg)) {
                    val = inputArg;
                } else if (isUndefined(inputArg)) {
                    val = 'undefined';
                } else {
                    val = String(inputArg);
                }

                return val;
            }

            toObjectString = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var toStringFN = baseObject.toString,
                    nfeToObjectString;

                try {
                    if (strictEqual(toStringFN.call(), '[object Undefined]') && strictEqual(toStringFN.call(null), '[object Null]')) {
                        tempSafariNFE = function nfeToObjectString(object) {
                            return toStringFN.call(object);
                        };
                    }
                } catch (exception) {
                    tempSafariNFE = null;
                }

                if (isNull(tempSafariNFE)) {
                    tempSafariNFE = function nfeToObjectString(object) {
                        var val;

                        if (isUndefined(object)) {
                            val = '[object Undefined]';
                        } else if (isNull(object)) {
                            val = '[object Null]';
                        } else {
                            val = toStringFN.call(object);
                        }

                        return val;
                    };
                }

                nfeToObjectString = null;

                return tempSafariNFE;
            }());

            function isRegExp(inputArg) {
                return strictEqual(toObjectString(inputArg), '[object RegExp]');
            }

            function isObject(inputArg) {
                return strictEqual(toObjectString(inputArg), '[object Object]');
            }

            function isFunction(inputArg) {
                return strictEqual(toObjectString(inputArg), '[object Function]');
            }

            function isTypeObject(inputArg) {
                return (!isNull(inputArg) && strictEqual(typeof inputArg, 'object')) || isRegExp(inputArg);
            }

            // named arrayIsArray instead of isArray because of SpiderMonkey and Blackberry bug
            arrayIsArray = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isArrayFN = baseArray.isArray,
                    nfeIsArray;

                if (isFunction(isArrayFN)) {
                    tempSafariNFE = isArrayFN;
                } else {
                    tempSafariNFE = function nfeIsArray(inputArg) {
                        return strictEqual(toObjectString(inputArg), '[object Array]');
                    };
                }

                nfeIsArray = null;

                return tempSafariNFE;
            }());

            function isEmptyArray(inputArg) {
                var val;

                if (arrayIsArray(inputArg) || (isTypeObject(inputArg) && !isFunction(inputArg) && hasProperty(inputArg, 'length'))) {
                    val = isZero(inputArg.length);
                } else {
                    val = null;
                }

                return val;
            }

            function arrayFirst(inputArg) {
                var val;

                if (!isEmptyArray(inputArg)) {
                    val = inputArg[0];
                }

                return val;
            }

            function arrayLast(inputArg) {
                var val;

                if (!isEmptyArray(inputArg)) {
                    val = inputArg[inputArg.length - 1];
                }

                return val;
            }

            function isDate(inputArg) {
                return strictEqual(toObjectString(inputArg), '[object Date]');
            }

            // named objectIs instead of objectIs because of SpiderMonkey and Blackberry bug
            objectIs = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isIsFn = baseObject.constructor.is,
                    nfeIs;

                if (isFunction(isIsFn)) {
                    tempSafariNFE = isIsFn;
                } else {
                    tempSafariNFE = function nfeIs(x, y) {
                        var val;

                        if (strictEqual(x, y)) {
                            if (isZero(x)) {
                                val = strictEqual(1 / x, 1 / y);
                            } else {
                                val = true;
                            }
                        } else {
                            val = !strictEqual(x, x) && !strictEqual(y, y);
                        }

                        return val;
                    };
                }

                nfeIs = null;

                return tempSafariNFE;
            }());

            // named numberIsNaN instead of isNaN because of SpiderMonkey and Blackberry bug
            numberIsNaN = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isNaNFN = baseNumber.constructor.isNaN,
                    nfeIsNaN;

                if (isFunction(isNaNFN)) {
                    tempSafariNFE = isNaNFN;
                } else {
                    tempSafariNFE = function nfeIsNaN(number) {
                        return objectIs(number, NaN);
                    };
                }

                nfeIsNaN = null;

                return tempSafariNFE;
            }());

            // named numberIsFinite instead of isFinite because of SpiderMonkey and Blackberry bug
            numberIsFinite = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var isFiniteFN = baseNumber.constructor.isFinite,
                    nfeIsFinite;

                if (isFunction(isFiniteFN)) {
                    tempSafariNFE = isFiniteFN;
                } else {
                    tempSafariNFE = function nfeIsFinite(number) {
                        return isNumber(number) && isFinite(number);
                    };
                }

                nfeIsFinite = null;

                return tempSafariNFE;
            }());

            // named mathSign instead of sign because of SpiderMonkey and Blackberry bug
            mathSign = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var signFN = Math.sign,
                    nfeSign;

                if (isFunction(signFN)) {
                    tempSafariNFE = signFN;
                } else {
                    tempSafariNFE = function nfeSign(value) {
                        var number = toNumber(value),
                            val;

                        if (isZero(number) || numberIsNaN(number)) {
                            val = number;
                        } else if (lt(number, 0)) {
                            val = -1;
                        } else {
                            val = 1;
                        }

                        return val;
                    };
                }

                nfeSign = null;

                return tempSafariNFE;
            }());

            // named numberToInteger instead of toInteger because of SpiderMonkey and Blackberry bug
            numberToInteger = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var toIntegerFN = Number.toInteger,
                    nfeToInteger;

                if (isFunction(toIntegerFN)) {
                    tempSafariNFE = toIntegerFN;
                } else {
                    tempSafariNFE = function nfeToInteger(inputArg) {
                        var number = toNumber(inputArg),
                            val;

                        if (numberIsNaN(number)) {
                            val = +0;
                        } else if (isZero(number) || !numberIsFinite(number)) {
                            val = number;
                        } else {
                            val = mathSign(number) * Math.floor(Math.abs(number));
                        }

                        return val;
                    };
                }

                nfeToInteger = null;

                return tempSafariNFE;
            }());

            /*
            function toInt32(inputArg) {
                var number = toNumber(inputArg),
                    int32bit,
                    val;

                if (isZero(number) || !numberIsFinite(number)) {
                    val = +0;
                } else {
                    int32bit = mod(mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
                    if (gt(int32bit, UWORD32)) {
                        val = int32bit - UWORD32;
                    } else {
                        val = int32bit;
                    }
                }

                return val;
            }
            */

            function toUint32(inputArg) {
                var number = toNumber(inputArg),
                    val;

                if (isZero(number) || !numberIsFinite(number)) {
                    val = +0;
                } else {
                    val = mod(mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
                }

                return val;
            }

            // named stringSplit instead of split because of SpiderMonkey and Blackberry bug
            stringSplit = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var splitFN = baseString.split,
                    compliantExecNpcg = isUndefined(/()??/.exec('')[1]),
                    nfeSplit;

                function replacer(separator, match, args) {
                    var length = args.length - 2,
                        index;

                    arrayFirst(match).replace(separator, function () {
                        for (index = 1; lt(index, length); index += 1) {
                            if (isUndefined(arguments[index])) {
                                match[index] = privateUndefined;
                            }
                        }
                    });
                }

                tempSafariNFE = function nfeSplit(str, separator, limit) {
                    var string = anyToString(checkObjectCoercible(str)),
                        output,
                        flags,
                        lastLastIndex,
                        separator2,
                        match,
                        lastIndex,
                        lastLength,
                        val;

                    if (isRegExp(separator)) {
                        flags = 'g';
                        if (separator.ignoreCase) {
                            flags += 'i';
                        }

                        if (separator.multiline) {
                            flags += 'm';
                        }

                        if (separator.extended) {
                            flags += 'x';
                        }

                        if (separator.sticky) {
                            flags += 'y';
                        }

                        separator = new RegExp(separator.source, flags);
                        if (!compliantExecNpcg) {
                            separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
                        }

                        if (isUndefined(limit)) {
                            limit = MAX_UINT32;
                        } else {
                            limit = toUint32(limit);
                        }

                        output = [];
                        flags = 'g';
                        lastLastIndex = 0;
                        match = separator.exec(string);
                        while (match) {
                            lastIndex = match.index + arrayFirst(match).length;
                            if (lastIndex > lastLastIndex) {
                                output.push(string.slice(lastLastIndex, match.index));
                                if (!compliantExecNpcg && gt(match.length, 1)) {
                                    replacer(separator2, match, arguments);
                                }

                                if (gt(match.length, 1) && lt(match.index, string.length)) {
                                    output = output.concat(match.slice(1));
                                }

                                lastLength = arrayFirst(match).length;
                                lastLastIndex = lastIndex;
                                if (gte(output.length, limit)) {
                                    break;
                                }
                            }

                            if (strictEqual(separator.lastIndex, match.index)) {
                                separator.lastIndex += 1;
                            }

                            match = separator.exec(string);
                        }

                        if (strictEqual(lastLastIndex, string.length)) {
                            if (lastLength || !separator.test('')) {
                                output.push('');
                            }
                        } else {
                            output.push(string.slice(lastLastIndex));
                        }

                        if (gt(output.length, limit)) {
                            return output.slice(0, limit);
                        }

                        val = output;
                    } else {
                        val = splitFN.call(str, separator, limit);
                    }

                    return val;
                };

                nfeSplit = null;

                return tempSafariNFE;
            }());

            function firstChar(inputArg) {
                return anyToString(checkObjectCoercible(inputArg)).charAt(0);
            }

            function firstCharIs(inputArg, character) {
                return strictEqual(firstChar(inputArg), firstChar(character));
            }

            function lastChar(inputArg) {
                var thisStr = anyToString(checkObjectCoercible(inputArg));

                return thisStr.charAt(thisStr.length - 1);
            }

            function lastCharIs(inputArg, character) {
                return strictEqual(lastChar(inputArg), firstChar(character));
            }

            function countCharacter(inputArg, character) {
                return clamp(stringSplit(anyToString(checkObjectCoercible(inputArg)), firstChar(character)).length - 1, 0, Number.POSITIVE_INFINITY);
            }

            function padLeadingChar(inputArg, character, size) {
                var string = anyToString(checkObjectCoercible(inputArg)),
                    singleChar = firstChar(character),
                    count = numberToInteger(size) - string.length;

                if (lt(count, 0) || strictEqual(count, Infinity)) {
                    count = 0;
                }

                return stringRepeat(singleChar, count) + string;
            }

            // named stringRepeat instead of repeat because of SpiderMonkey and Blackberry bug
            stringRepeat = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var repeatFN = baseString.constructor.repeat,
                    nfeRepeat;

                function rep(s, times) {
                    var half,
                        val;

                    if (lt(times, 1)) {
                        val = '';
                    } else if (mod(times, 2)) {
                        val = rep(s, times - 1) + s;
                    } else {
                        half = rep(s, times / 2);
                        val = half + half;
                    }

                    return val;
                }

                if (isFunction(repeatFN)) {
                    tempSafariNFE = function nfeRepeat(string, times) {
                        return repeatFN.call(string, times);
                    };
                } else {
                    tempSafariNFE = function nfeRepeat(string, count) {
                        var thisString = anyToString(checkObjectCoercible(string)),
                            times = numberToInteger(count);

                        if (lt(times, 0) || strictEqual(times, Infinity)) {
                            throw new RangeError();
                        }

                        return rep(thisString, times);
                    };
                }

                nfeRepeat = null;

                return tempSafariNFE;
            }());

            /*
            // named stringStartsWith instead of startsWith because of SpiderMonkey and Blackberry bug
            stringStartsWith = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var startsWithFN = baseString.constructor.startsWith,
                    nfeStartsWith;

                if (isFunction(startsWithFN)) {
                    tempSafariNFE = function nfeStartsWith(string, searchString, position) {
                        return startsWithFN.call(string, searchString, position);
                    };
                } else {
                    tempSafariNFE = function nfeStartsWith(string, searchString, position) {
                        var thisStr = anyToString(checkObjectCoercible(string)),
                            searchStr = anyToString(searchString),
                            thisLen = thisStr.length,
                            start = clamp(toInteger(position), 0, thisLen);

                        return strictEqual(thisStr.slice(start, start + thisLen), searchStr);
                    };
                }

                nfeStartsWith = null;

                return tempSafariNFE;
            }());
            */

            /*
            // named stringEndsWith instead of endsWith because of SpiderMonkey and Blackberry bug
            stringEndsWith = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var endsWithFN = baseString.constructor.endsWith,
                    nfeEndsWith;

                if (isFunction(endsWithFN)) {
                    tempSafariNFE = function nfeEndsWith(string, searchString, position) {
                        return endsWithFN.call(string, searchString, position);
                    };
                } else {
                    tempSafariNFE = function nfeEndsWith(string, searchString, position) {
                        var thisStr = anyToString(checkObjectCoercible(string)),
                            searchStr = anyToString(searchString),
                            thisLen = thisStr.length,
                            end,
                            start;

                        if (isUndefined(position)) {
                            position = thisLen;
                        } else {
                            position = toInteger(position);
                        }

                        end = clamp(position, 0, thisLen);
                        start = end - searchStr.length;

                        return gte(start, 0) && strictEqual(thisStr.slice(start, end), searchStr);
                    };
                }

                nfeEndsWith = null;

                return tempSafariNFE;
            }());
            */

            // named stringContains instead of contains because of SpiderMonkey and Blackberry bug
            stringContains = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var containsFN = baseString.constructor.contains,
                    nfeContains;

                if (isFunction(containsFN)) {
                    tempSafariNFE = function nfeContains(string, searchString, position) {
                        return containsFN.call(string, searchString, position);
                    };
                } else {
                    tempSafariNFE = function nfeContains(string, searchString, position) {
                        var thisStr = anyToString(checkObjectCoercible(string)),
                            searchStr = anyToString(searchString),
                            thisLen = thisStr.length;

                        if (isUndefined(position)) {
                            position = 0;
                        } else {
                            position = numberToInteger(position);
                        }

                        return !strictEqual(baseString.indexOf.call(thisStr, searchStr, clamp(position, 0, thisLen)), -1);
                    };
                }

                nfeContains = null;

                return tempSafariNFE;
            }());

            // named objectGetPrototypeOf instead of getPrototypeOf because of SpiderMonkey and Blackberry bug
            objectGetPrototypeOf = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var getPrototypeOfFN = baseObject.constructor.getPrototypeOf,
                    nfeGetPrototypeOf,
                    bocProto;

                if (isFunction(getPrototypeOfFN)) {
                    tempSafariNFE = getPrototypeOfFN;
                } else if (isNull(baseObject.constructor.prototype[protoName])) {
                    tempSafariNFE = function nfeGetPrototypeOf(object) {
                        return object[protoName];
                    };
                } else {
                    bocProto = baseObject.constructor.prototype;
                    tempSafariNFE = function nfeGetPrototypeOf(object) {
                        if (strictEqual(object, bocProto)) {
                            return null;
                        }

                        var ctrProto = object.constructor.prototype;

                        if (strictEqual(object, ctrProto)) {
                            return bocProto;
                        }

                        return ctrProto;
                    };
                }

                nfeGetPrototypeOf = null;

                return tempSafariNFE;
            }());

            hasProperty = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var nfeHasProperty;

                tempSafariNFE = function nfehasProperty(object, property) {
                    return property in object;
                };

                nfeHasProperty = null;

                return tempSafariNFE;
            }());

            function arrayContains(array, searchElement) {
                return !strictEqual(arrayIndexOf(array, searchElement), -1);
            }

            // http://ecma-international.org/ecma-262/5.1/#sec-15.2.4.5
            // Create our own local "hasOwnProperty" function: native -> shim -> sham
            // named objectHasOwnProperty instead of hasOwnProperty because of SpiderMonkey and Blackberry bug
            objectHasOwnProperty = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var hasOwnPropertyFN = baseObject.hasOwnProperty, // to combat old IE8- issues, min support IE6
                    propertyIsEnumerableFN = baseObject.propertyIsEnumerable,
                    hasDontEnumBug = true,
                    testObject = {
                        toString: null
                    },
                    nfeHasOwnProperty;

                // use nfeHasOwnProperty to save a var
                for (nfeHasOwnProperty in testObject) {
                    if (strictEqual(nfeHasOwnProperty, 'toString') && isNull(testObject[nfeHasOwnProperty])) {
                        hasDontEnumBug = false;
                    }
                }

                function checkDontEnums(object, property) {
                    return hasDontEnumBug && arrayContains(defaultProperties, property) && hasProperty(object, property) && !strictEqual(object[property], objectGetPrototypeOf(object)[property]);
                }

                if (isFunction(hasOwnPropertyFN)) {
                    tempSafariNFE = function nfeHasOwnProperty(object, property) {
                        return hasOwnPropertyFN.call(object, property) || checkDontEnums(object, property);
                    };
                } else if (isFunction(propertyIsEnumerableFN)) {
                    tempSafariNFE = function nfeHasOwnProperty(object, property) {
                        return propertyIsEnumerableFN.call(object, property) || checkDontEnums(object, property);
                    };
                } else {
                    tempSafariNFE = function nfeHasOwnProperty(object, property) {
                        return hasProperty(object, property) && isUndefined(objectGetPrototypeOf(object)[property]);
                    };
                }

                nfeHasOwnProperty = null;

                return tempSafariNFE;
            }());

            toObjectFixIndexedAccess = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var boxedString = baseObject.constructor('a'),
                    splitString = !strictEqual(boxedString[0], 'a') || !hasProperty(boxedString, 0),
                    nfeToObjectFixIndexedAccess;

                if (splitString) {
                    tempSafariNFE = function nfeToObjectFixIndexedAccess(inputArg) {
                        var object;

                        if (isString(inputArg)) {
                            object = stringSplit(inputArg, '');
                        } else {
                            object = toObject(inputArg);
                        }

                        return object;
                    };
                } else {
                    tempSafariNFE = toObject;
                }

                nfeToObjectFixIndexedAccess = null;

                return tempSafariNFE;
            }());

            // named arrayForEach instead of forEach because of SpiderMonkey and Blackberry bug
            arrayForEach = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var forEachFN = baseArray.forEach,
                    nfeForEach;

                if (isFunction(forEachFN)) {
                    tempSafariNFE = function nfeForEach(array, fn, thisArg) {
                        return forEachFN.call(array, fn, thisArg);
                    };
                } else {
                    tempSafariNFE = function nfeForEach(array, fn, thisArg) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            index;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + ' is not a function');
                        }

                        for (index = 0, length = toUint32(object.length); lt(index, length); index += 1) {
                            if (hasProperty(object, index)) {
                                fn.call(thisArg, object[index], index, object);
                            }
                        }
                    };
                }

                nfeForEach = null;

                return tempSafariNFE;
            }());

            // named arraySome instead of some because of SpiderMonkey and Blackberry bug
            arraySome = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var someFN = baseArray.some,
                    nfeSome;

                if (isFunction(someFN)) {
                    tempSafariNFE = function nfeSome(array, fn, thisArg) {
                        return someFN.call(array, fn, thisArg);
                    };
                } else {
                    tempSafariNFE = function nfeSome(array, fn, thisArg) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            index,
                            val;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + ' is not a function');
                        }

                        for (index = 0, length = toUint32(object.length), val = false; lt(index, length); index += 1) {
                            if (hasProperty(object, index) && fn.call(thisArg, object[index], index, object)) {
                                val = true;
                                break;
                            }
                        }

                        return val;
                    };
                }

                nfeSome = null;

                return tempSafariNFE;
            }());

            // named arrayMap instead of map because of SpiderMonkey and Blackberry bug
            arrayMap = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var mapFN = baseArray.map,
                    nfeMap;

                if (isFunction(mapFN)) {
                    tempSafariNFE = function nfeMap(array, fn, thisArg) {
                        return mapFN.call(array, fn, thisArg);
                    };
                } else {
                    tempSafariNFE = function nfeMap(array, fn, thisArg) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            index,
                            arr;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + ' is not a function');
                        }

                        for (index = 0, length = toUint32(object.length), arr = []; lt(index, length); index += 1) {
                            arr[index] = fn.call(thisArg, object[index], index, object);
                        }

                        return arr;
                    };
                }

                nfeMap = null;

                return tempSafariNFE;
            }());

            /*
            function returnElement(element) {
                return element;
            }
            */

            /*
            function argumentsToArray(args) {
                return arrayMap(args, returnElement);
            }
            */

            // named arrayUnshift instead of unshift because of SpiderMonkey and Blackberry bug
            /*
            arrayUnshift = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var unshiftFN = baseArray.unshift,
                    nfeUnshift;

                if (strictEqual(unshiftFN.call([], 0), 1)) {
                    tempSafariNFE = function nfeUnshift(array) {
                        return unshiftFN.apply(array, argumentsToArray(arguments).slice(1));
                    };
                } else {
                    tempSafariNFE = function nfeUnshift(array) {
                        unshiftFN.apply(array, argumentsToArray(arguments).slice(1));

                        return array.length;
                    };
                }

                nfeUnshift = null;

                return tempSafariNFE;
            }());
            */

            /*
            // named arrayFilter instead of filter because of SpiderMonkey and Blackberry bug
            arrayFilter = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var filterFN = baseArray.filter,
                    nfeFilter;

                if (isFunction(filterFN)) {
                    tempSafariNFE = function nfeFilter(array, fn, thisArg) {
                        return filterFN.call(array, fn, thisArg);
                    };
                } else {
                    tempSafariNFE = function nfeFilter(array, fn, thisArg) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            arr,
                            index,
                            element;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + " is not a function");
                        }

                        for (index = 0, length = toUint32(object.length), arr = []; lt(index, length); index += 1) {
                            element = object[index];
                            if (fn.call(thisArg, element, index, object)) {
                                arr[index] = element;
                            }
                        }

                        return arr;
                    };
                }

                nfeFilter = null;

                return tempSafariNFE;
            }());
            */

            // named arrayReduce instead of reduce because of SpiderMonkey and Blackberry bug
            arrayReduce = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var reduceFN = baseArray.reduce,
                    errString = 'Reduce of empty array with no initial value',
                    nfeReduce;

                if (isFunction(reduceFN)) {
                    tempSafariNFE = function nfeReduce(array, fn, initialValue) {
                        return reduceFN.call(array, fn, initialValue);
                    };
                } else {
                    tempSafariNFE = function nfeReduce(array, fn, initialValue) {
                        var object = toObjectFixIndexedAccess(array),
                            length,
                            k,
                            index,
                            accumulator,
                            kPresent;

                        if (!isFunction(fn)) {
                            throw new TypeError(fn + ' is not a function');
                        }

                        if (isZero(length) && lt(arguments.length, 3)) {
                            throw new TypeError(errString);
                        }

                        k = 0;
                        if (gt(arguments.length, 2)) {
                            accumulator = initialValue;
                        } else {
                            for (k = 0, length = toUint32(object.length), kPresent = false; !kPresent && lt(k, length); k += 1) {
                                kPresent = hasProperty(object, k);
                                if (kPresent) {
                                    accumulator = object[k];
                                }
                            }

                            if (!kPresent) {
                                throw new TypeError(errString);
                            }
                        }

                        for (index = k; lt(index, length); index += 1) {
                            if (hasProperty(object, index)) {
                                accumulator = fn.call(privateUndefined, accumulator, object[index], index, object);
                            }
                        }

                        return accumulator;
                    };
                }

                nfeReduce = null;

                return tempSafariNFE;
            }());

            // named stringTrim instead of trim because of SpiderMonkey and Blackberry bug
            stringTrim = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe/
                var trimFN = baseString.constructor.trim,
                    whiteSpacesList = [
                        0x0009, // Tab
                        0x000a, // Line Feed
                        0x000b, // Vertical Tab
                        0x000c, // Form Feed
                        0x000d, // Carriage Return
                        0x0020, // Space
                        0x0085, // Next line
                        0x00a0, // No-break space
                        0x1680, // Ogham space mark
                        0x180e, // Mongolian vowel separator
                        0x2000, // En quad
                        0x2001, // Em quad
                        0x2002, // En space
                        0x2003, // Em space
                        0x2004, // Three-per-em space
                        0x2005, // Four-per-em space
                        0x2006, // Six-per-em space
                        0x2007, // Figure space
                        0x2008, // Punctuation space
                        0x2009, // Thin space
                        0x200a, // Hair space
                        0x200b, // Zero width space
                        0x2028, // Line separator
                        0x2029, // Paragraph separator
                        0x202f, // Narrow no-break space
                        0x205f, // Medium mathematical space
                        0x3000, // Ideographic space
                        0xfeff // Byte Order Mark
                    ],
                    testString,
                    whiteSpacesString,
                    wsTrimRX,
                    nfeTrim,
                    nfeBuildTestString,
                    nfeBuildWhiteSpaceString;

                tempSafariNFE = function nfeBuildTestString(previous, element) {
                    return previous + String.fromCharCode(element);
                };

                testString = arrayReduce(whiteSpacesList, tempSafariNFE, '');
                if (isFunction(trimFN) && isZero(trimFN.call(testString).length)) {
                    tempSafariNFE = function nfeTrim(inputArg) {
                        return trimFN.call(inputArg);
                    };
                } else {
                    tempSafariNFE = function nfeBuildWhiteSpaceString(previous, element) {
                        return previous + '\\u' + padLeadingChar(element.toString(16), '0', 4);
                    };

                    whiteSpacesString = arrayReduce(whiteSpacesList, tempSafariNFE, '');
                    wsTrimRX = new RegExp('^[' + whiteSpacesString + ']+|[' + whiteSpacesString + ']+$', 'g');
                    tempSafariNFE = function nfeTrim(inputArg) {
                        return anyToString(checkObjectCoercible(inputArg)).replace(wsTrimRX, '');
                    };
                }

                nfeTrim = null;
                nfeBuildTestString = null;
                nfeBuildWhiteSpaceString = null;

                return tempSafariNFE;
            }());

            // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
            // Create our own local "indexOf" function: native -> polyfill
            // named arrayIndexOf instead of indexOf because of SpiderMonkey and Blackberry bug
            arrayIndexOf = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var indexOfFN = baseArray.indexOf,
                    nfeIndexOf;

                if (isFunction(indexOfFN) && strictEqual(indexOfFN.call([0, 1], 1, 2), 1)) {
                    tempSafariNFE = function nfeIndexOf(array, searchElement, fromIndex) {
                        return indexOfFN.call(array, searchElement, fromIndex);
                    };
                } else {
                    tempSafariNFE = function nfeIndexOf(array, searchElement, fromIndex) {
                        var object = toObjectFixIndexedAccess(array),
                            length = toUint32(object.length),
                            index,
                            start,
                            val;

                        if (isZero(length)) {
                            val = -1;
                        } else {
                            if (gt(arguments.length, 2)) {
                                fromIndex = numberToInteger(fromIndex);
                            } else {
                                fromIndex = 0;
                            }

                            if (gte(fromIndex, length)) {
                                val = -1;
                            } else {
                                if (gte(fromIndex, 0)) {
                                    start = fromIndex;
                                } else {
                                    start = length - Math.abs(fromIndex);
                                }

                                if (lt(start, 0)) {
                                    start = 0;
                                }

                                for (index = start, val = -1; lt(index, length); index += 1) {
                                    if (hasProperty(object, index) && strictEqual(searchElement, object[index])) {
                                        val = index;
                                        break;
                                    }
                                }
                            }
                        }

                        return val;
                    };
                }

                nfeIndexOf = null;

                return tempSafariNFE;
            }());

            // named objectKeys instead of keys because of SpiderMonkey and Blackberry bug
            objectKeys = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var keysFN = baseObject.keys,
                    nfeKeys;

                if (isFunction(keysFN)) {
                    tempSafariNFE = keysFN;
                } else {
                    tempSafariNFE = function nfeKeys(object) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.keys called on a non-object');
                        }

                        var props = [],
                            prop;

                        for (prop in object) {
                            if (objectHasOwnProperty(object, prop)) {
                                props.push(prop);
                            }
                        }

                        return props;
                    };
                }

                nfeKeys = null;

                return tempSafariNFE;
            }());

            // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
            // Create our own local "defineProperty" function: native -> sham
            // named objectDefineProperty instead of defineProperty because of SpiderMonkey and Blackberry bug
            objectDefineProperty = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var definePropertyFN = baseObject.constructor.defineProperty,
                    defineGetter = '__defineGetter__',
                    defineSetter = '__defineSetter__',
                    defineGetterFN,
                    defineSetterFN,
                    testObject,
                    nfeDefineProperty;

                if (isFunction(definePropertyFN)) {
                    try {
                        testObject = definePropertyFN({}, 'sentinel', {
                            value: null
                        });

                        if (!isNull(testObject.sentinel)) {
                            definePropertyFN = null;
                        }
                    } catch (exception) {
                        definePropertyFN = null;
                    }
                }

                if (isFunction(definePropertyFN)) {
                    tempSafariNFE = definePropertyFN;
                } else {
                    defineGetterFN = baseObject[defineGetter];
                    defineSetterFN = baseObject[defineSetter];
                    tempSafariNFE = function nfeDefineProperty(object, property, descriptor) {
                        var prototype;

                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.defineProperty called on non-object');
                        }

                        if (!isTypeObject(descriptor) && !isFunction(descriptor)) {
                            throw new TypeError('Property description must be an object');
                        }

                        if (objectHasOwnProperty(descriptor, 'value')) {
                            if (isNull(objectGetPrototypeOf(baseObject)[protoName])) {
                                prototype = object[protoName];
                                object[protoName] = objectGetPrototypeOf(baseObject);
                                delete object[property];
                                object[property] = descriptor.value;
                                object[protoName] = prototype;
                            } else {
                                object[property] = descriptor.value;
                            }
                        } else {
                            if (!isFunction(defineGetterFN) || !isFunction(defineSetterFN)) {
                                throw new TypeError('getters & setters can not be defined on this javascript engine');
                            }

                            if (isFunction(descriptor.get)) {
                                defineGetterFN.call(object, property, descriptor.get);
                            }

                            if (isFunction(descriptor.set)) {
                                defineSetterFN.call(object, property, descriptor.set);
                            }
                        }

                        return object;
                    };
                }

                nfeDefineProperty = null;

                return tempSafariNFE;
            }());

            // Create our own local "defineProperties" function: native -> sham
            // named objectDefineProperties instead of defineProperties because of SpiderMonkey and Blackberry bug
            objectDefineProperties = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var definePropertiesFN = baseObject.constructor.defineProperties,
                    nfeDefineProperties;

                if (isFunction(definePropertiesFN)) {
                    tempSafariNFE = definePropertiesFN;
                } else {
                    tempSafariNFE = function nfeDefineProperties(object, props) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.defineProperties called on non-object');
                        }

                        if (!isTypeObject(props) && !isFunction(props)) {
                            throw new TypeError('Property description must be an object');
                        }

                        arrayForEach(objectKeys(props), function (key) {
                            objectDefineProperty(object, key, props[key]);
                        });

                        return object;
                    };
                }

                nfeDefineProperties = null;

                return tempSafariNFE;
            }());

            // Create our own local "getOwnPropertyDescriptor" function: native -> sham
            // named objectGetOwnPropertyDescriptor instead of getOwnPropertyDescriptor because of SpiderMonkey and Blackberry bug
            objectGetOwnPropertyDescriptor = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var getOwnPropertyDescriptorFN = baseObject.constructor.getOwnPropertyDescriptor,
                    lookupGetter = '__lookupGetter__',
                    lookupSetter = '__lookupSetter__',
                    lookupGetterFN,
                    lookupSetterFN,
                    testObject,
                    nfeGetOwnPropertyDescriptor;

                if (isFunction(getOwnPropertyDescriptorFN)) {
                    try {
                        testObject = {
                            sentinel: null
                        };

                        if (!isNull(getOwnPropertyDescriptorFN(testObject, 'sentinel').value)) {
                            getOwnPropertyDescriptorFN = null;
                        }
                    } catch (exception) {
                        getOwnPropertyDescriptorFN = null;
                    }
                }

                if (isFunction(getOwnPropertyDescriptorFN)) {
                    tempSafariNFE = getOwnPropertyDescriptorFN;
                } else {
                    lookupGetterFN = baseObject[lookupGetter];
                    lookupSetterFN = baseObject[lookupSetter];
                    tempSafariNFE = function nfeGetOwnPropertyDescriptor(object, property) {
                        var descriptor,
                            prototype,
                            getter,
                            setter;

                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.getOwnPropertyDescriptor called on a non-object');
                        }

                        if (objectHasOwnProperty(object, property)) {
                            descriptor = {
                                enumerable: true,
                                configurable: true
                            };

                            if (isFunction(lookupGetterFN) && isFunction(lookupSetterFN)) {
                                prototype = object[protoName];
                                object[protoName] = objectGetPrototypeOf(baseObject);
                                getter = lookupGetterFN.call(object, property);
                                setter = lookupSetterFN.call(object, property);
                                object[protoName] = prototype;
                                if (isFunction(getter) || isFunction(setter)) {
                                    if (isFunction(getter)) {
                                        descriptor.get = getter;
                                    }

                                    if (isFunction(setter)) {
                                        descriptor.set = setter;
                                    }
                                }
                            } else {
                                descriptor.value = object[property];
                                descriptor.writable = true;
                            }
                        }

                        return descriptor;
                    };
                }

                nfeGetOwnPropertyDescriptor = null;

                return getOwnPropertyDescriptorFN;
            }());

            // Create our own local "freeze" function: native -> sham
            // named objectFreeze instead of freeze because of SpiderMonkey and Blackberry bug
            objectFreeze = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var freezeFN = baseObject.constructor.freeze,
                    nfeFreeze;

                if (isFunction(freezeFN)) {
                    tempSafariNFE = freezeFN;
                } else {
                    tempSafariNFE = function nfeFreeze(object) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.freeze called on non-object');
                        }

                        return object;
                    };
                }

                nfeFreeze = null;

                return tempSafariNFE;
            }());

            // detect a Rhino bug and patch it
            try {
                objectFreeze(function () {
                    return;
                });
            } catch (exception) {
                objectFreeze = (function (freezeObject) {
                    var nfeFreeze;

                    tempSafariNFE = function nfeFreeze(object) {
                        var val;

                        if (isFunction(object)) {
                            val = object;
                        } else {
                            val = freezeObject(object);
                        }

                        return val;
                    };

                    nfeFreeze = null;

                    return tempSafariNFE;
                }(objectFreeze));
            }

            // Create our own local "isFrozen" function: native -> sham
            // named objectIsFrozen instead of isFrozen because of SpiderMonkey and Blackberry bug
            objectIsFrozen = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var isFrozenFN = baseObject.constructor.isFrozen,
                    nfeIsFrozen;

                if (isFunction(isFrozenFN)) {
                    tempSafariNFE = isFrozenFN;
                } else {
                    tempSafariNFE = function nfeIsFrozen(object) {
                        if (!isTypeObject(object) && !isFunction(object)) {
                            throw new TypeError('Object.isFrozen called on non-object');
                        }

                        return false;
                    };
                }

                nfeIsFrozen = null;

                return tempSafariNFE;
            }());

            function deepFreeze(object) {
                objectFreeze(object);
                arrayForEach(objectKeys(object), function (propKey) {
                    var prop = object[propKey];

                    if ((isTypeObject(prop) || isFunction(prop)) && !objectIsFrozen(prop)) {
                        deepFreeze(prop);
                    }
                });
            }

            // named objectInstanceOf instead of instanceOf because of SpiderMonkey and Blackberry bug
            objectInstanceOf = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var isPrototypeOfFN = baseObject.constructor.prototype.isPrototypeOf,
                    nfeInstanceOf;

                if (isFunction(isPrototypeOfFN)) {
                    tempSafariNFE = function nfeInstanceOf(object, ctr) {
                        if (!isFunction(ctr)) {
                            throw new TypeError('Expecting a function in instanceOf check');
                        }

                        return isPrototypeOfFN.call(ctr.prototype, object);
                    };
                } else if (isFunction(objectGetPrototypeOf)) {
                    tempSafariNFE = function nfeInstanceOf(object, ctr) {
                        if (!isFunction(ctr)) {
                            throw new TypeError('Expecting a function in instanceOf check');
                        }

                        var val = false;

                        while (object) {
                            if (strictEqual(object, ctr.prototype)) {
                                val = true;
                                break;
                            }

                            object = objectGetPrototypeOf(object);
                        }

                        return val;
                    };
                }

                nfeInstanceOf = null;

                return tempSafariNFE;
            }());

            isPlainObject = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var baseObjectPrototype = objectGetPrototypeOf(baseObject),
                    nfeIsPlainObject;

                tempSafariNFE = function nfeIsPlainObject(object) {
                    return isObject(object) && strictEqual(objectGetPrototypeOf(object), baseObjectPrototype);
                };

                nfeIsPlainObject = null;

                return tempSafariNFE;
            }());

            extend = (function () {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var nfeExtend;

                tempSafariNFE = function nfeExtend(target, source) {
                    if (!isTypeObject(target) && !isFunction(target)) {
                        throw new TypeError('extend called on a non-object');
                    }

                    arrayForEach(objectKeys(source), function (key) {
                        objectDefineProperty(target, key, objectGetOwnPropertyDescriptor(source, key));
                    });

                    return target;
                };

                nfeExtend = null;

                return tempSafariNFE;
            }());

            function bnZero() {
                return new BigNumber(0);
            }

            function bnOne() {
                return new BigNumber(1);
            }

            objectDefineProperties(BigNumber.prototype, {
                trunc: {
                    value: function () {
                        return this.round(0, 1);
                    }
                },

                inRange: {
                    value: function (min, max) {
                        return this.gte(min) && this.lte(max);
                    }
                },

                modf: {
                    value: function () {
                        var bn = this;

                        if (bn.isFinite()) {
                            bn = bn.mod(bn.trunc());
                        } else {
                            bn = new BigNumber(NaN);
                        }

                        return bn;
                    }
                },

                difference: {
                    value: function (value) {
                        var diff;

                        if (this.gt(value)) {
                            diff = this.minus(value);
                        } else {
                            diff = this.neg().plus(value);
                        }

                        return diff;
                    }
                },

                factorial: {
                    value: (function () {
                        var factorialLookup = {};

                        return function (exponentialAt) {
                            var n,
                                config,
                                previousConfig,
                                i,
                                val;

                            if (this.lt(0) || !this.isFinite() || !this.modf().isZero()) {
                                val = new BigNumber(NaN);
                            } else {
                                if (!isNumber(exponentialAt) && !isString(exponentialAt) && (BigNumber.isBigNumber(exponentialAt) && (exponentialAt.lt(0) || !exponentialAt.isFinite()))) {
                                    exponentialAt = new BigNumber(BigNumber.config().EXPONENTIAL_AT[1]);
                                }

                                if (!BigNumber.isBigNumber(exponentialAt)) {
                                    exponentialAt = new BigNumber(exponentialAt);
                                }

                                n = this.toString();
                                if (!factorialLookup[n]) {
                                    config = new BigNumber.config();
                                    previousConfig = {};
                                    extend(previousConfig, config);

                                    BigNumber.config({
                                        DECIMAL_PLACES: 20,
                                        ROUNDING_MODE: 4,
                                        EXPONENTIAL_AT: [-7, parseInt(exponentialAt.toString(), 10)],
                                        RANGE: [-1000000000, 1000000000],
                                        ERRORS: true
                                    });

                                    factorialLookup[n] = bnOne();
                                    for (i = 2; lte(i, n); i += 1) {
                                        factorialLookup[n] = factorialLookup[n].times(i);
                                    }

                                    extend(config, previousConfig);
                                }

                                val = factorialLookup[n];
                            }

                            return val;
                        };
                    }())
                },

                toRadians: {
                    value: function (decimalPlacesOfPI) {
                        return this.times(BigNumber.pi(decimalPlacesOfPI).div(180));
                    }
                },

                padLeadingZero: {
                    value: function (size) {
                        return padLeadingChar(this.toString(), '0', size);
                    }
                }
            });

            objectDefineProperties(BigNumber, {
                isBigNumber: {
                    value: function (inputArg) {
                        return isObject(inputArg) && objectInstanceOf(inputArg, BigNumber);
                    }
                },

                trunc: {
                    value: function (number) {
                        return new BigNumber(number).trunc();
                    }
                },

                modf: {
                    value: function (number) {
                        return new BigNumber(number).modf();
                    }
                },

                difference: {
                    value: function (number1, number2) {
                        return new BigNumber(number1).difference(number2);
                    }
                },

                factorial: {
                    value: function (number, exponentialAt) {
                        return new BigNumber(number).factorial(exponentialAt);
                    }
                },

                pi: {
                    value: (function () {
                        var piLookup = {};

                        return function (decimalPlaces) {
                            if (!numberIsFinite(decimalPlaces) || lt(decimalPlaces, 0)) {
                                decimalPlaces = new BigNumber.config().DECIMAL_PLACES;
                            } else {
                                decimalPlaces = Math.floor(decimalPlaces);
                            }

                            var lookupProp = decimalPlaces.toString(),
                                config,
                                previousConfig,
                                k = 0,
                                sum,
                                ta,
                                tb,
                                divisor,
                                a,
                                b;

                            if (!piLookup[lookupProp]) {
                                config = new BigNumber.config();
                                previousConfig = {};
                                extend(previousConfig, config);

                                BigNumber.config({
                                    DECIMAL_PLACES: decimalPlaces,
                                    ROUNDING_MODE: 4,
                                    EXPONENTIAL_AT: [-7, 20],
                                    RANGE: [-1000000000, 1000000000],
                                    ERRORS: true
                                });

                                sum = bnZero();
                                a = ta = new BigNumber(16).div(5);
                                b = tb = new BigNumber(-4).div(239);
                                while (!a.equals(b)) {
                                    divisor = k * 2 + 1;
                                    a = ta.div(divisor);
                                    b = tb.div(divisor);
                                    sum = sum.plus(a).plus(b);
                                    ta = ta.neg().div(25);
                                    tb = tb.neg().div(57121);
                                    k += 1;
                                }

                                extend(config, previousConfig);
                                piLookup[lookupProp] = sum;
                            }

                            return piLookup[lookupProp];
                        };
                    }())
                },

                toRadians: {
                    value: function (number, decimalPlacesPI) {
                        return new BigNumber(number).toRadians(decimalPlacesPI);
                    }
                },

                normaliseAngle: {
                    value: function (angle) {
                        var newAngle = new BigNumber(angle);

                        while (newAngle.lt(-360)) {
                            newAngle = newAngle.plus(360);
                        }

                        while (newAngle.gt(360)) {
                            newAngle = newAngle.minus(360);
                        }

                        return newAngle;
                    }
                },

                toPositiveAngle: {
                    value: function (angle) {
                        var newAngle = new BigNumber.normaliseAngle(angle);

                        if (lt(newAngle, 0)) {
                            newAngle = newAngle.plus(360);
                        }

                        return newAngle;
                    }
                },

                sin: {
                    value: (function () {
                        var sineLookup = {};

                        return function (angle) {
                            var newAngle = new BigNumber.normaliseAngle(angle),
                                lookupProp = newAngle.toString(),
                                sum,
                                prev,
                                k,
                                fact,
                                i;

                            if (!sineLookup[lookupProp]) {
                                sum = newAngle;
                                prev = bnZero();
                                i = 1;
                                k = 3;
                                while (!sum.equals(prev)) {
                                    prev = sum;
                                    fact = new BigNumber.factorial(k);
                                    if (strictEqual(mod(mod(i, 2), 2), 1)) {
                                        sum = sum.minus(newAngle.pow(k).div(fact));
                                    } else {
                                        sum = sum.plus(newAngle.pow(k).div(fact));
                                    }

                                    i += 1;
                                    k += 2;
                                }

                                sineLookup[lookupProp] = sum;
                            }

                            return sineLookup[lookupProp];
                        };
                    }())
                }
            });

            /*
            function InvalidError(message) {
                //this.name = "InvalidError";
                this.message = message || "";
            }

            InvalidError.prototype = new Error();

            function NotImplimentedError(message) {
                //this.name = "NotImplementedError";
                this.message = message || "";
            }

            NotImplimentedError.prototype = new Error();
            */

            function isDateValid(dateObject) {
                return isDate(dateObject) && !numberIsNaN(dateObject.getTime());
            }

            function isGregorianLeapYear(struct) {
                return struct.year.mod(400).isZero() || (!struct.year.mod(100).isZero() && struct.year.mod(4).isZero());
            }

            function isJulianLeapYear(struct) {
                return struct.year.mod(4).equals(0);
            }

            function daysInGregorianMonth(struct) {
                var days;

                if (struct.month.eq(2)) {
                    days = new BigNumber(28);
                    if (isGregorianLeapYear(struct)) {
                        days = days.plus(1);
                    }
                } else {
                    days = struct.month.minus(1).mod(7).mod(2).neg().plus(31);
                }

                return days;
            }

            function daysInJulianMonth(struct) {
                var days = new BigNumber(28);

                if (struct.month.eq(2) && isJulianLeapYear(struct)) {
                    days = days.plus(1);
                }

                return days;
            }

            function daysInGregorianYear(struct) {
                var days = new BigNumber(365);

                if (isGregorianLeapYear(struct)) {
                    days = days.plus(1);
                }

                return days;
            }

            function daysInJulianYear(struct) {
                var days = new BigNumber(365);

                if (isJulianLeapYear(struct)) {
                    days = days.plus(1);
                }

                return days;
            }

            function inYearRange(year) {
                return year.isFinite();
            }

            function inMonthRange(month) {
                return month.inRange(1, 12);
            }

            function inDayRange(day, dim) {
                return day.inRange(1, dim);
            }

            function inHourRange(hour) {
                return hour.inRange(0, 24);
            }

            function inMinuteRange(minute, hour) {
                return (hour.equals(24) && minute.isZero()) || (!hour.equals(24) && minute.gte(0) && minute.lt(60));
            }

            function inSecondRange(second, struct) {
                var maxSecond = 60,
                    leapSecond;

                if (struct.year.gte(1961) && struct.hour.equals(23) && struct.minute.equals(59)) {
                    if (!isPlainObject(leapSeconds)) {
                        throw new Error('No leap second table!');
                    }

                    leapSecond = leapSeconds[struct.year.toString()];
                    if (isPlainObject(leapSecond)) {
                        leapSecond = leapSecond[struct.month.toString()];
                        if (isPlainObject(leapSecond)) {
                            leapSecond = toNumber(leapSecond[struct.day.toString()]);
                            if (numberIsFinite(leapSecond)) {
                                maxSecond += leapSecond;
                            }
                        }
                    }
                }

                return (struct.hour.equals(24) && second.isZero()) || (!struct.hour.equals(24) && second.gte(0) && second.lt(maxSecond));
            }

            function inMillisecondRange(millisecond, hour) {
                return (hour.equals(24) && millisecond.isZero()) || (!hour.equals(24) && millisecond.gte(0) && millisecond.lt(1000));
            }

            function inOffsetRange(offset) {
                return offset.inRange(-1440, 1440);
            }

            /*
            function inWeekRange(week, year) {
                return offset.inRange(1, 53);
            }

            function inWeekDayRange(weekDay) {
                return weekDay.inRange(1, 7);
            }
            */

            function isValid(struct, julian) {
                var valid = false;

                if (isPlainObject(struct)) {
                    valid = !arraySome(fullKeys, function (element) {
                        var bn = struct[element.full],
                            dim;

                        if (!BigNumber.isBigNumber(bn)) {
                            return true;
                        }

                        switch (element.full) {
                        case 'year':
                            if (!inYearRange(bn)) {
                                return true;
                            }

                            break;
                        case 'month':
                            if (!inMonthRange(bn)) {
                                return true;
                            }

                            break;
                        case 'day':
                            if (strictEqual(julian, true)) {
                                dim = daysInJulianMonth(struct);
                            } else {
                                dim = daysInGregorianMonth(struct);
                            }

                            if (!inDayRange(bn, dim)) {
                                return true;
                            }

                            break;
                        case 'hour':
                            if (!inHourRange(bn)) {
                                return true;
                            }

                            break;
                        case 'minute':
                            if (!inMinuteRange(bn, struct.hour)) {
                                return true;
                            }

                            break;
                        case 'second':
                            if (!inSecondRange(bn, struct)) {
                                return true;
                            }

                            break;
                        case 'millisecond':
                            if (!inMillisecondRange(bn, struct.hour)) {
                                return true;
                            }

                            break;
                        case 'offset':
                            if (!inOffsetRange(bn)) {
                                return true;
                            }

                            break;
                        /*
                        case 'week':
                            if (!inWeekRange(bn)) {
                                return true;
                            }

                            break;
                        case 'weekDay':
                            if (!inWeekDayRange(bn)) {
                                return true;
                            }

                            break;
                        */
                        default:
                            throw new Error(element.full);
                        }

                        return false;
                    });
                }

                return valid;
            }

            function dayOfGregorianYear(struct) {
                var k;

                if (isGregorianLeapYear(struct)) {
                    k = 1;
                } else {
                    k = 2;
                }

                return struct.month.times(275).div(9).floor().minus(struct.month.plus(9).div(12).floor().times(k)).plus(struct.day).minus(30);
            }

            function dayOfJulianYear(struct) {
                var dayOfYear = struct.month.times(28).plus(struct.day);

                if (struct.month.gte(2) && isJulianLeapYear(struct)) {
                    dayOfYear = dayOfYear.plus(1);
                }

                return dayOfYear;
            }

            function normaliseUnits(unitString) {
                var unit;

                if (isString(unitString)) {
                    unitString = stringTrim(unitString).toLowerCase();
                    if (gt(unitString.length, 2) && lastCharIs(unitString, 's')) {
                        unitString = unitString.slice(0, -1);
                    }

                    arraySome(fullKeys, function (element) {
                        var val;

                        if (strictEqual(unitString, element.alias) || strictEqual(unitString, element.full)) {
                            unit = element.full;
                            val = true;
                        } else {
                            val = false;
                        }

                        return val;
                    });
                }

                return unit;
            }

            function timeTo(struct, unit) {
                var value;

                switch (normaliseUnits(unit)) {
                case 'day':
                    value = struct.hour.div(24).plus(struct.minute.div(1440)).plus(struct.second.div(86400)).plus(struct.millisecond.div(86400000));
                    break;
                case 'hour':
                    value = struct.hour.plus(struct.minute.div(60)).plus(struct.second.div(3600)).plus(struct.millisecond.div(3600000));
                    break;
                case 'minute':
                    value = struct.hour.times(60).plus(struct.minute).plus(struct.second.div(60)).plus(struct.millisecond.div(60000));
                    break;
                case 'second':
                    value = struct.hour.times(3600).plus(struct.minute.times(60)).plus(struct.second).plus(struct.millisecond.div(1000));
                    break;
                case 'millisecond':
                    value = struct.hour.times(3600000).plus(struct.minute.times(60000)).plus(struct.second.times(1000)).plus(struct.millisecond);
                    break;
                default:
                    throw new Error(unit);
                }

                return value;
            }

            function gregorianToJd(struct) {
                var b = struct.year.minus(1),
                    c = b.times(365),
                    d = b.div(4).floor(),
                    e = b.div(100).floor().neg(),
                    f = b.div(400).floor(),
                    g = struct.month.times(367).minus(362).div(12).floor(),
                    h;

                if (struct.month.gt(2)) {
                    if (isGregorianLeapYear(struct)) {
                        h = -1;
                    } else {
                        h = -2;
                    }
                } else {
                    h = 0;
                }

                return new BigNumber(1721424.5).plus(c).plus(d).plus(e).plus(f).plus(g.plus(h).plus(struct.day).floor()).plus(timeTo(struct, 'day'));
            }

            /*
            function gregorianToJdn(struct) {
                return gregorianToJd(struct).trunc();
            }
            */

            /*
            function objectValues(inputArg) {
                return arrayMap(objectKeys(inputArg), function (key) {
                    return inputArg[key];
                });
            }
            */

            nameTypes = ['format', 'stand-alone'];
            deepFreeze(nameTypes);
            widthTypes = ['wide', 'abbreviated', 'narrow'];
            deepFreeze(widthTypes);

            function dayOfWeekNumber(struct) {
                var day = gregorianToJd(struct).plus(1.5).mod(7).floor();

                if (day.lt(0)) {
                    day = day.plus(7);
                }

                return day;
            }

            function weekDayNumber(struct) {
                var bnWeekDay = dayOfWeekNumber(struct);

                if (bnWeekDay.isZero()) {
                    bnWeekDay = new BigNumber(7);
                }

                return bnWeekDay;
            }

            function cldrDayKey(struct) {
                return dayKeys[toNumber(dayOfWeekNumber(struct))];
            }

            function fractionToTime(fraction, fractionIn, struct, julian) {
                var time = {},
                    totalMs,
                    days;

                fraction = new BigNumber(fraction);
                switch (fractionIn) {
                case 'year':
                    if (strictEqual(julian, true)) {
                        days = daysInJulianYear(struct);
                    } else {
                        days = daysInGregorianYear(struct);
                    }

                    totalMs = fraction.times(days.times(86400000));
                    break;
                case 'month':
                    if (strictEqual(julian, true)) {
                        days = daysInJulianMonth(struct);
                    } else {
                        days = daysInGregorianMonth(struct);
                    }

                    totalMs = fraction.times(days.times(86400000));
                    break;
                case 'day':
                    totalMs = fraction.times(86400000);
                    break;
                case 'hour':
                    totalMs = fraction.times(3600000);
                    break;
                case 'minute':
                    totalMs = fraction.times(60000);
                    break;
                case 'second':
                    totalMs = fraction.times(1000);
                    break;
                case 'millisecond':
                    totalMs = fraction;
                    break;
                default:
                    throw new Error(fractionIn);
                }

                time.hour = totalMs.div(3600000).floor();
                time.minute = totalMs.minus(time.hour.times(3600000)).div(60000).floor();
                time.second = totalMs.minus(time.hour.times(3600000)).minus(time.minute.times(60000)).div(1000).floor();
                time.millisecond = totalMs.minus(time.hour.times(3600000)).minus(time.minute.times(60000)).minus(time.second.times(1000)).floor();

                return time;
            }

            function getTime(struct) {
                return gregorianToJd(struct).minus(2440587.5).times(86400000).floor();
            }

            // DeltaT
            //http://eclipse.gsfc.nasa.gov/SEhelp/deltatpoly2004.html
            function deltaTime(struct, canonCorrection) {
                var y = struct.year.plus(struct.month.minus(0.5).div(12)),
                    u,
                    t,
                    r;

                if (struct.year.inRange(-500, 2150)) {
                    if (struct.year.lt(500)) {
                        u = y.div(100);
                        r = new BigNumber(10583.6).minus(u.times(1014.41)).plus(u.pow(2).times(33.78311)).minus(u.pow(3).times(5.952053)).minus(u.pow(4).times(0.1798452)).plus(u.pow(5).times(0.022174192)).plus(u.pow(6).times(0.0090316521));
                    } else if (struct.year.lt(1600)) {
                        u = y.minus(1000).div(100);
                        r = new BigNumber(1574.2).minus(u.times(556.01)).plus(u.pow(2).times(71.23472)).plus(u.pow(3).times(0.319781)).minus(u.pow(4).times(0.8503463)).minus(u.pow(5).times(0.005050998)).plus(u.pow(6).times(0.0083572073));
                    } else if (struct.year.lt(1700)) {
                        t = y.minus(1600);
                        r = new BigNumber(120).minus(t.times(0.9808)).minus(t.pow(2).times(0.01532)).plus(t.pow(3).div(7129));
                    } else if (struct.year.lt(1800)) {
                        t = y.minus(1700);
                        r = new BigNumber(8.83).plus(t.times(0.1603)).minus(t.pow(2).times(0.0059285)).plus(t.pow(3).times(0.00013336)).minus(t.pow(4).div(1174000));
                    } else if (struct.year.lt(1860)) {
                        t = y.minus(1800);
                        r = new BigNumber(13.72).minus(t.times(0.332447)).plus(t.pow(2).times(0.0068612)).plus(t.pow(3).times(0.0041116)).minus(t.pow(4).times(0.00037436)).plus(t.pow(5).times(0.0000121272)).minus(t.pow(6).times(0.0000001699)).plus(t.pow(7).times(0.000000000875));
                    } else if (struct.year.lt(1900)) {
                        t = y.minus(1860);
                        r = new BigNumber(7.62).plus(t.times(0.5737)).minus(t.pow(2).times(0.251754)).plus(t.pow(3).times(0.01680668)).minus(t.pow(4).times(0.0004473624)).plus(t.pow(5).div(233174));
                    } else if (struct.year.lt(1920)) {
                        t = y.minus(1900);
                        r = new BigNumber(-2.79).plus(t.times(1.494119)).minus(t.pow(2).times(0.0598939)).plus(t.pow(3).times(0.0061966)).minus(t.pow(4).times(0.000197));
                    } else if (struct.year.lt(1941)) {
                        t = y.minus(1920);
                        r = new BigNumber(21.20).plus(t.times(0.84493)).minus(t.pow(2).times(0.076100)).plus(t.pow(3).times(0.0020936));
                    } else if (struct.year.lt(1961)) {
                        t = y.minus(1950);
                        r = new BigNumber(29.07).plus(t.times(0.407)).minus(t.pow(2).div(233)).plus(t.pow(3).div(2547));
                    } else if (struct.year.lt(1986)) {
                        t = y.minus(1975);
                        r = new BigNumber(45.45).plus(t.times(1.067)).minus(t.pow(2).div(260)).minus(t.pow(3).div(718));
                    } else if (struct.year.lt(2005)) {
                        t = y.minus(2000);
                        r = new BigNumber(63.86).plus(t.times(0.3345)).minus(t.pow(2).times(0.060374)).plus(t.pow(3).times(0.0017275)).plus(t.pow(4).times(0.000651814)).plus(t.pow(5).times(0.00002373599));
                    } else if (struct.year.lt(2050)) {
                        t = y.minus(2000);
                        r = new BigNumber(62.92).plus(t.times(0.32217)).plus(t.pow(2).times(0.005589));
                    } else {
                        r = new BigNumber(-20).plus(y.minus(1820).div(100).pow(2).times(32)).minus(y.neg().plus(2150).times(0.5628));
                    }
                } else {
                    u = y.minus(1820).div(100);
                    r = u.pow(2).times(32).plus(-20);
                }

                if (canonCorrection && !struct.year.inRange(1955, 2004)) {
                    r.plus(y.minus(1955).pow(2).times(-0.000012932));
                }

                return r.times(1000).trunc();
            }

            function arrayToStruct(arr, julian) {
                var struct = {};

                if (arrayIsArray(arr)) {
                    arraySome(fullKeys, function (element, index) {
                        var value = arr[index],
                            bn,
                            dim;

                        if (isNumber(value) || isString(value) || BigNumber.isBigNumber(value)) {
                            bn = new BigNumber(value);
                        } else {
                            bn = new BigNumber(NaN);
                        }

                        switch (element.full) {
                        case 'year':
                            if (!inYearRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'month':
                            if (isUndefined(value)) {
                                bn = bnOne();
                            }

                            if (!inMonthRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'day':
                            if (strictEqual(julian, true)) {
                                dim = daysInJulianMonth(struct);
                            } else {
                                dim = daysInGregorianMonth(struct);
                            }

                            if (isUndefined(value)) {
                                bn = bnOne();
                            }

                            if (!inDayRange(bn, dim)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'hour':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inHourRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'minute':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inMinuteRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'second':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inSecondRange(bn, struct)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'millisecond':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inMillisecondRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'offset':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inOffsetRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        default:
                            throw new Error(element);
                        }

                        struct[element.full] = bn;

                        return false;
                    });
                }

                return struct;
            }

            function structToArray(struct) {
                var arr;

                if (isValid(struct)) {
                    arr = arrayMap(fullKeys, function (element) {
                        return struct[element.full];
                    });
                } else {
                    arr = [];
                }

                return arr;
            }

            function returnElementToString(element) {
                return element.toString();
            }

            function structToArrayOfString(struct) {
                return arrayMap(structToArray(struct), returnElementToString);
            }

            function objectToStruct(object, julian) {
                var struct = {};

                if (isPlainObject(object)) {
                    arraySome(fullKeys, function (element) {
                        var value = object[element.alias] || object[element.full] || object[element.full + 's'],
                            bn,
                            dim;

                        if (isNumber(value) || isString(value) || BigNumber.isBigNumber(value)) {
                            bn = new BigNumber(value);
                        } else {
                            bn = new BigNumber(NaN);
                        }

                        switch (element.full) {
                        case 'year':
                            if (!inYearRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'month':
                            if (isUndefined(value)) {
                                bn = bnOne();
                            }

                            if (!inMonthRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'day':
                            if (strictEqual(julian, true)) {
                                dim = daysInJulianMonth(struct);
                            } else {
                                dim = daysInGregorianMonth(struct);
                            }

                            if (isUndefined(value)) {
                                bn = bnOne();
                            }

                            if (!inDayRange(bn, dim)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'hour':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inHourRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'minute':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inMinuteRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'second':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inSecondRange(bn, struct)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'millisecond':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inMillisecondRange(bn, struct.hour)) {
                                struct = {};
                                return true;
                            }

                            break;
                        case 'offset':
                            if (isUndefined(value)) {
                                bn = bnZero();
                            }

                            if (!inOffsetRange(bn)) {
                                struct = {};
                                return true;
                            }

                            break;
                        default:
                            throw new Error(element);
                        }

                        struct[element.full] = bn;

                        return false;
                    });
                }

                return struct;
            }

            function structToObject(struct) {
                var newObject = {};

                if (isPlainObject(struct)) {
                    arrayForEach(objectKeys(struct), function (key) {
                        newObject[key] = struct[key].toString();
                    });
                }

                return newObject;
            }

            function dateToStruct(date) {
                var struct = {};

                if (isDateValid(date)) {
                    arrayForEach(fullKeys, function (element) {
                        var value = new BigNumber(date[element.local]());

                        if (strictEqual(element.full, 'month')) {
                            value = value.plus(1);
                        }

                        struct[element.full] = value;
                    });
                }

                return struct;
            }

            function julianToJd(struct) {
                var year = struct.year,
                    month,
                    a,
                    b,
                    jd;

                month = struct.month;
                if (month.lte(2)) {
                    year = year.minus(1);
                    month = month.plus(12);
                }

                a = year.plus(4716).times(365.25).floor();
                b = month.plus(1).times(30.6001).floor();
                jd = a.plus(b).plus(struct.day).minus(1524.5).plus(timeTo(struct, 'day'));

                return jd;
            }

            /*
            function julianToJdn(struct) {
                return julianToJd(struct).trunc();
            }
            */

            function jdToGregorian(julianDay) {
                var struct = {},
                    jd = new BigNumber(julianDay),
                    a,
                    b;

                if (jd.isFinite()) {
                    jd = jd.plus(0.5);
                    a = jd.plus(68569).floor();
                    b = a.times(4).div(146097).floor();
                    a = a.minus(b.times(146097).plus(3).div(4).floor());
                    struct.year = a.plus(1).times(4000).div(1461001).floor();
                    a = a.minus(struct.year.times(1461).div(4).floor()).plus(31);
                    struct.month = a.times(80).div(2447).floor();
                    struct.day = a.minus(struct.month.times(2447).div(80).floor());
                    a = struct.month.div(11).floor();
                    struct.month = struct.month.plus(2).minus(a.times(12));
                    struct.year = b.minus(49).times(100).plus(struct.year).plus(a).floor();
                    struct.offset = bnZero();
                    extend(struct, fractionToTime(jd.modf().abs(), 'day'));
                }

                return struct;
            }

            function jdToJulian(julianDay) {
                var struct = {},
                    jd = new BigNumber(julianDay),
                    a,
                    b,
                    c,
                    d,
                    e,
                    g;

                if (jd.isFinite()) {
                    jd = jd.plus(0.5);
                    a = jd.floor();
                    b = a.plus(1524);
                    c = b.minus(122.1).div(365.25).floor();
                    d = c.times(365.25).floor();
                    g = b.minus(d);
                    e = g.div(30.6001).floor();

                    struct.day = g.minus(e.times(30.6001).floor());
                    if (e.lt(14)) {
                        struct.month = e.minus(1);
                    } else {
                        struct.month = e.minus(13);
                    }

                    if (struct.month.gt(2)) {
                        struct.year = c.minus(4716);
                    } else {
                        struct.year = c.minus(4715);
                    }

                    struct.offset = bnZero();
                    extend(struct, fractionToTime(jd.modf().abs(), 'day'));
                }

                return struct;
            }

            function gregorianToMJD(struct) {
                return gregorianToJd(struct).minus(2400000.5);
            }

            function julianToMJD(struct) {
                return julianToJd(struct).minus(2400000.5);
            }

            /*
            function jdToMJD(jd) {
                return jd.minus(2400000.5);
            }
            */

            function gregorianToJulian(struct) {
                var newStruct;

                if (isValid(struct)) {
                    newStruct = jdToJulian(gregorianToJd(struct));
                } else {
                    newStruct = {};
                }

                return newStruct;
            }

            function julianToGregorian(struct) {
                var newStruct;

                if (isValid(struct)) {
                    newStruct = jdToGregorian(julianToJd(struct));
                } else {
                    newStruct = {};
                }

                return newStruct;
            }

            function gregorianEaster(struct) {
                var a = struct.year.mod(19),
                    b = struct.year.div(100).floor(),
                    c = struct.year.mod(100).floor(),
                    d = b.div(4),
                    e = b.mod(4),
                    f = b.plus(8).div(25).floor(),
                    g = b.minus(f).plus(1).div(3).floor(),
                    h = new BigNumber(19).times(a).plus(b).minus(d).minus(g).plus(15).mod(30),
                    i = c.div(4).floor(),
                    k = c.mod(4),
                    l = new BigNumber(32).plus(e.times(2)).plus(i.times(2)).minus(h).minus(k).mod(7),
                    m = a.plus(h.times(11)).plus(l.times(22)).div(451).floor(),
                    n = h.plus(l).minus(m.times(7)).plus(114);

                return new AstroDate([struct.year, n.div(31).floor(), n.mod(31).plus(1)]);
            }

            function julianEaster(struct) {
                var a = struct.year.mod(4),
                    b = struct.year.mod(7),
                    c = struct.year.mod(19),
                    d = c.times(19).plus(15).mod(30),
                    e = a.times(2).plus(b.times(4)).minus(d).plus(34).mod(7),
                    f = d.plus(e).plus(114);

                return new AstroDate([struct.year, f.div(31).floor().minus(1), f.mod(31).plus(1)]);
            }

            function toUT(struct) {
                return jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(60000)).div(86400000));
            }

            function toTT(struct) {
                var offset = struct.offset,
                    structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).div(86400000));

                structTT.offset = offset;

                return structTT;
            }

            function bnGetTimezoneOffset() {
                return new BigNumber(new Date().getTimezoneOffset());
            }

            function toLocal(struct) {
                var timezoneOffset = bnGetTimezoneOffset(),
                    structLocal = jdToGregorian(gregorianToJd(struct).times(86400000).plus(struct.offset.times(60000)).minus(bnGetTimezoneOffset().times(60000)).div(86400000));

                structLocal.offset = timezoneOffset;

                return structLocal;
            }

            /*
            function toTAI(struct) {
                var offset = struct.offset,
                    structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).minus(32184).div(86400000));

                structTT.offset = offset;

                return structTT;
            }

            function toGPS(struct) {
                  var offset = struct.offset,
                    structTT = jdToGregorian(gregorianToJd(struct).times(86400000).minus(deltaTime(struct)).minus(51184).div(86400000));

                structTT.offset = offset;

                return structTT;
            }
            */

            function toISOString(struct, userPadding) {
                var string,
                    index,
                    count,
                    padding,
                    last,
                    value,
                    key,
                    number;

                number = toNumber(userPadding);
                if (lt(number, 5) || !numberIsFinite(number)) {
                    number = 6;
                }

                index = 0;
                string = '';
                for (count = 0; lt(count, 3); count += 1) {
                    if (isUndefined(struct[fullKeys[count].full])) {
                        index = 3;
                        break;
                    }
                }

                for (last = fullKeys.length - 1; lt(index, last); index += 1) {
                    key = fullKeys[index].full;
                    value = struct[key];
                    if (strictEqual(key, 'year')) {
                        if (value.lt(0)) {
                            string += '-';
                            padding = number;
                        } else if (value.gte(10000)) {
                            string += '+';
                            padding = number;
                        } else {
                            padding = 4;
                        }
                    } else if (strictEqual(key, 'hour')) {
                        string += 'T';
                        padding = 2;
                    } else if (strictEqual(key, 'millisecond')) {
                        padding = 3;
                    } else {
                        padding = 2;
                    }

                    string += value.abs().padLeadingZero(padding);
                    if (lt(index, 2)) {
                        string += '-';
                    } else if (inRange(index, 3, 4)) {
                        string += ':';
                    } else if (strictEqual(key, 'second')) {
                        string += '.';
                    }
                }

                value = struct.offset;
                if (value.isZero()) {
                    string += 'Z';
                } else {
                    if (value.lte(0)) {
                        string += '+';
                    } else {
                        string += '-';
                    }

                    value = fractionToTime(value.abs(), 'minute');
                    string += value.hour.padLeadingZero(2);
                    string += ':';
                    string += value.minute.padLeadingZero(2);
                }

                return string;
            }

            function isoHasValidCharacterCounts(string) {
                var val;

                if (!inRange(countCharacter(string, ' ') + countCharacter(string, 'T'), 0, 1)) {
                    val = false;
                } else if (!inRange(countCharacter(string, 'W'), 0, 1)) {
                    val = false;
                } else if (!inRange(countCharacter(string, 'Z'), 0, 1)) {
                    val = false;
                } else if (!inRange(countCharacter(string, '.') + countCharacter(string, ','), 0, 1)) {
                    val = false;
                } else if (!inRange(countCharacter(string, '+'), 0, 2)) {
                    val = false;
                } else if (!inRange(countCharacter(string, '-'), 0, 4)) {
                    val = false;
                } else if (!inRange(countCharacter(string, ':'), 0, 4)) {
                    val = false;
                } else if (lt(string.replace(/\D/g, '').length, 2)) {
                    val = false;
                } else {
                    val = true;
                }

                return val;
            }

            function ordinalToCalendar(year, dayOfYear) {
                var struct = {
                        year: new BigNumber(year),
                        month: bnOne(),
                        day: bnOne(),
                        hour: bnZero(),
                        minute: bnZero(),
                        second: bnZero(),
                        millisecond: bnZero()
                    },
                    daysInYear = daysInGregorianYear(struct),
                    result;

                dayOfYear = new BigNumber(dayOfYear);
                if (dayOfYear.inRange(1, daysInYear)) {
                    struct = jdToGregorian(gregorianToJd(struct).plus(dayOfYear).minus(1));
                    result = {
                        sign: 1,
                        year: struct.year,
                        month: struct.month,
                        day: struct.day
                    };
                }

                return result;
            }

            function weekDateToCalendar(year, week, weekDay) {
                var struct = {
                        year: new BigNumber(year),
                        month: bnOne(),
                        day: new BigNumber(4),
                        hour: bnZero(),
                        minute: bnZero(),
                        second: bnZero(),
                        millisecond: bnZero()
                    },
                    weekDayJan4 = weekDayNumber(struct),
                    dayOfYear;

                dayOfYear = new BigNumber(7).times(week).plus(weekDay).minus(weekDayJan4.plus(3));
                if (dayOfYear.lt(1)) {
                    struct.year = struct.year.minus(1);
                    dayOfYear = daysInGregorianYear(struct).plus(dayOfYear);
                } else if (dayOfYear.gt(daysInGregorianYear(struct))) {
                    struct.year = struct.year.plus(1);
                    dayOfYear = dayOfYear.minus(daysInGregorianYear(struct));
                }

                return ordinalToCalendar(struct.year, dayOfYear);
            }

            function calendarToWeekDate(struct) {
                var weekDay = weekDayNumber(struct),
                    year = struct.year,
                    month = struct.month,
                    nearestThursday,
                    val;

                nearestThursday = struct.day.plus(4).minus(weekDay);
                if (struct.month.equals(12) && nearestThursday.gt(31)) {
                    val = {
                        year: year.plus(1),
                        week: bnOne(),
                        weekDay: weekDay
                    };
                } else {
                    if (struct.month.equals(1) && nearestThursday.lt(1)) {
                        year = struct.year.minus(1);
                        month = new BigNumber(12);
                        nearestThursday = nearestThursday.plus(31);
                    }

                    val = {
                        year: year,
                        week: dayOfGregorianYear({year: year, month: month, day: nearestThursday}).div(7).floor().plus(1),
                        weekDay: weekDay
                    };
                }

                return val;
            }

            function isNotNegativeZero(bn, sign) {
                return strictEqual(sign, '+') || !bn.isZero() || (bn.isZero() && !strictEqual(sign, '-'));
            }

            function hourMinuteToMinutes(minute, second) {
                return new BigNumber(minute).times(60).plus(second);
            }

            function hourFractionToTime(number) {
                return fractionToTime('0.' + number, 'hour');
            }

            function minuteFractionToTime(number) {
                return fractionToTime('0.' + number, 'minute');
            }

            function secondFractionToTime(number) {
                return fractionToTime('0.' + number, 'second');
            }

            function toSignMultipler(sign) {
                return sign + '1';
            }

            datePatterns = {
                basic: [{
                    regex: /^(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1] + '00'),
                            month: bnOne(),
                            day: bnOne()
                        };
                    }
                }, {
                    regex: /^(\d{4})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1]),
                            month: bnOne(),
                            day: bnOne()
                        };
                    }
                }, {
                    regex: /^(\d{4})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1]),
                            month: new BigNumber(rxResult[2]),
                            day: new BigNumber(rxResult[3])
                        };
                    }
                }, {
                    regex: /^(\d{4})(\d{3})$/,
                    func: function (rxResult) {
                        return ordinalToCalendar(rxResult[1], rxResult[2]);
                    }
                }, {
                    regex: /^(\d{4})W(\d{2})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(rxResult[1], rxResult[2], 1);
                    }
                }, {
                    regex: /^(\d{4})W(\d{2})([1-7]{1})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
                    }
                }],
                extended: [{ // need to add tests for -0
                    regex: /^([\-+]{1})(\d{5,})-(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])),
                            month: new BigNumber(rxResult[3]),
                            day: bnOne()
                        };
                    }
                },  {
                    regex: /^(\d{4})-(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1]),
                            month: new BigNumber(rxResult[2]),
                            day: bnOne()
                        };
                    }
                }, {
                    regex: /^(\d{4})-(\d{2})-(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[1]),
                            month: new BigNumber(rxResult[2]),
                            day: new BigNumber(rxResult[3])
                        };
                    }
                }, {
                    regex: /^([\-+]{1})(\d{5,})-(\d{2})-(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            year: new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])),
                            month: new BigNumber(rxResult[3]),
                            day: new BigNumber(rxResult[4])
                        };
                    }
                }, {
                    regex: /^(\d{4})-(\d{3})$/,
                    func: function (rxResult) {
                        return ordinalToCalendar(rxResult[1], rxResult[2]);
                    }
                }, {
                    regex: /^(\d{4})-W(\d{2})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(rxResult[1], rxResult[2], 1);
                    }
                }, {
                    regex: /^(\d{4})-W(\d{2})-([1-7]{1})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(rxResult[1], rxResult[2], rxResult[3]);
                    }
                }, {
                    regex: /^([\-+]{1})(\d{5,})-(\d{3})$/,
                    func: function (rxResult) {
                        return ordinalToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3]);
                    }
                }, {
                    regex: /^([\-+]{1})(\d{5,})-W(\d{2})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3], 1);
                    }
                }, {
                    regex: /^([\-+]{1})(\d{5,})-W(\d{2})-([1-7]{1})$/,
                    func: function (rxResult) {
                        return weekDateToCalendar(new BigNumber(rxResult[2]).times(toSignMultipler(rxResult[1])), rxResult[3], rxResult[4]);
                    }
                }]
            };

            deepFreeze(datePatterns);

            timePatterns = {
                basic: [{
                    regex: /^(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: bnZero(),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: new BigNumber(rxResult[3]),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: bnZero(),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2})(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: new BigNumber(rxResult[3]),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[2],
                            offset = hourMinuteToMinutes(rxResult[3], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: bnZero(),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: new BigNumber(rxResult[3]),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[2],
                            offset = hourMinuteToMinutes(rxResult[3], rxResult[4]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: bnZero(),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], rxResult[5]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], rxResult[6]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: new BigNumber(rxResult[3]),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = hourFractionToTime(rxResult[2]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = minuteFractionToTime(rxResult[3]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = secondFractionToTime(rxResult[4]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.second = new BigNumber(rxResult[3]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = hourFractionToTime(rxResult[2]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = minuteFractionToTime(rxResult[3]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[1]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = secondFractionToTime(rxResult[4]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.second = new BigNumber(rxResult[3]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = hourFractionToTime(rxResult[2]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = minuteFractionToTime(rxResult[3]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[5],
                            offset = hourMinuteToMinutes(rxResult[6], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = secondFractionToTime(rxResult[4]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.minute = new BigNumber(rxResult[3]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], rxResult[5]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = hourFractionToTime(rxResult[2]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], rxResult[6]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = minuteFractionToTime(rxResult[3]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})(\d{2})(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[5],
                            offset = hourMinuteToMinutes(rxResult[6], rxResult[7]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = secondFractionToTime(rxResult[4]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.minute = new BigNumber(rxResult[3]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }],
                extended: [{
                    regex: /^(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: bnZero(),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: new BigNumber(rxResult[3]),
                            millisecond: bnZero(),
                            offset: bnGetTimezoneOffset()
                        };
                    }
                }, {
                    regex: /^(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: bnZero(),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: bnZero(),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})Z$/,
                    func: function (rxResult) {
                        return {
                            hour: new BigNumber(rxResult[1]),
                            minute: new BigNumber(rxResult[2]),
                            second: new BigNumber(rxResult[3]),
                            millisecond: bnZero(),
                            offset: bnZero()
                        };
                    }
                }, {
                    regex: /^(\d{2}):([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[2],
                            offset = hourMinuteToMinutes(rxResult[3], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: bnZero(),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: new BigNumber(rxResult[3]),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[2],
                            offset = hourMinuteToMinutes(rxResult[3], rxResult[4]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: bnZero(),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], rxResult[5]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: bnZero(),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], rxResult[6]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = {
                                hour: new BigNumber(rxResult[1]),
                                minute: new BigNumber(rxResult[2]),
                                second: new BigNumber(rxResult[3]),
                                millisecond: bnZero(),
                                offset: offset.times(toSignMultipler(sign)).neg()
                            };
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = hourFractionToTime(rxResult[2]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = minuteFractionToTime(rxResult[3]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})[\.,]{1}(\d{1,})$/,
                    func: function (rxResult) {
                        var val = secondFractionToTime(rxResult[4]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.second = new BigNumber(rxResult[3]);
                        val.offset = bnGetTimezoneOffset();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = hourFractionToTime(rxResult[2]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = minuteFractionToTime(rxResult[3]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[1]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})[\.,]{1}(\d{1,})Z$/,
                    func: function (rxResult) {
                        var val = secondFractionToTime(rxResult[4]);

                        val.hour = new BigNumber(rxResult[1]);
                        val.minute = new BigNumber(rxResult[2]);
                        val.second = new BigNumber(rxResult[3]);
                        val.offset = bnZero();

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = hourFractionToTime(rxResult[2]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = minuteFractionToTime(rxResult[3]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[5],
                            offset = hourMinuteToMinutes(rxResult[6], 0),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = secondFractionToTime(rxResult[4]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.second = new BigNumber(rxResult[3]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[3],
                            offset = hourMinuteToMinutes(rxResult[4], rxResult[5]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = hourFractionToTime(rxResult[2]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[4],
                            offset = hourMinuteToMinutes(rxResult[5], rxResult[6]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = minuteFractionToTime(rxResult[3]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }, {
                    regex: /^(\d{2}):(\d{2}):(\d{2})[\.,]{1}(\d{1,})([\-+]{1})(\d{2}):(\d{2})$/,
                    func: function (rxResult) {
                        var sign = rxResult[5],
                            offset = hourMinuteToMinutes(rxResult[6], rxResult[7]),
                            val;

                        if (isNotNegativeZero(offset, sign)) {
                            val = secondFractionToTime(rxResult[4]);
                            val.hour = new BigNumber(rxResult[1]);
                            val.minute = new BigNumber(rxResult[2]);
                            val.second = new BigNumber(rxResult[3]);
                            val.offset = offset.times(toSignMultipler(sign)).neg();
                        }

                        return val;
                    }
                }]
            };

            deepFreeze(timePatterns);

            function isoSplitDateTime(string) {
                var dtObject = {
                        date: '',
                        time: ''
                    },
                    firstSplit = stringSplit(stringTrim(string), /[T ]/),
                    splitLength = firstSplit.length,
                    element;

                if (inRange(splitLength, 1, 2)) {
                    if (strictEqual(splitLength, 1)) {
                        element = arrayFirst(firstSplit);
                        // we make a best guess
                        if (strictEqual(element.slice(-4), '-') || firstCharIs(element, '+') || firstCharIs(element, '-') || strictEqual(element.length, 2) || gte(countCharacter(element, '-'), 2) || stringContains(element, 'W')) {
                            // only ordinal dates have a "-" at -4
                            // only dates begin with "+" or "-"
                            // dates and times can be only 2 digits but will default to date unless preceeded with " " or "T"
                            // only dates have 2 or more "-"
                            // only dates have a week number "W"
                            dtObject.date = element;
                            dtObject.time = '00';
                        } else if (lastCharIs(element, 'Z') || stringContains(element, ':') || stringContains(element, '.') || stringContains(element, ',') || stringContains(element, '+') || strictEqual(element.slice(-3), '-')) {
                            // only times end with a "Z"
                            // only times contain a ":" or a "." or a ","
                            // only times contain a "+" that is not at the beginning
                            // only times have a "-" at -3
                            dtObject.date = '00';
                            dtObject.time = element;
                        } else {
                            // otherwise we guess it is a date
                            dtObject.date = element;
                            dtObject.time = '00';
                        }
                    } else {
                        dtObject.date = arrayFirst(firstSplit) || '00';
                        dtObject.time = arrayLast(firstSplit);
                    }
                }

                return dtObject;
            }

            function isoParse(isoString) {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var dtObject = {
                        input: isoString
                    },
                    nfeSearchPatterns,
                    searchString;

                if (isString(isoString) && !isEmptyString(isoString) && !invalidISOCharsRx.test(isoString) && isoHasValidCharacterCounts(isoString)) {
                    tempSafariNFE = function nfeSearchPatterns(pattern) {
                        var rxResult = pattern.regex.exec(searchString),
                            val = false,
                            result;

                        if (!isNull(rxResult)) {
                            result = pattern.func(rxResult);
                            if (!isUndefined(result)) {
                                extend(dtObject, result);
                            }

                            val = true;
                        }

                        return val;
                    };

                    extend(dtObject, isoSplitDateTime(isoString));
                    searchString = dtObject.date;
                    if (!arraySome(datePatterns.basic, tempSafariNFE)) {
                        if (arraySome(datePatterns.extended, tempSafariNFE)) {
                            searchString = dtObject.time;
                            arraySome(timePatterns.extended, tempSafariNFE);
                        }
                    } else {
                        searchString = dtObject.time;
                        arraySome(timePatterns.basic, tempSafariNFE);
                    }
                }


                nfeSearchPatterns = null;

                return dtObject;
            }

            function getCorrectStruct(thisAstroDate, struct) {
                if (thisAstroDate.isTT()) {
                    struct = toTT(struct);
                }

                if (thisAstroDate.isUT()) {
                    struct = toUT(struct);
                } else if (thisAstroDate.isLocal()) {
                    struct = toLocal(struct);
                }

                return struct;
            }

            function cldrPadLeadingZero(strNum, size) {
                var firsrCharacter,
                    val;

                if (isString(strNum) && !isEmptyString(strNum)) {
                    if ((/^\d+$/).test(strNum) && new BigNumber(strNum).isFinite()) {
                        firsrCharacter = firstChar(strNum);
                        val = '';
                        if (strictEqual(firsrCharacter, '-')) {
                            strNum = strNum.slice(1);
                            size -= 1;
                            val = firsrCharacter;
                        }

                        val += padLeadingChar(strNum, '0', size);
                    } else {
                        val = strNum;
                    }
                }

                return val;
            }

            function escapeRegex(string) {
                return string.replace(/[\[\](){}?*+\^$\\.|]/g, '\\$&');
            }

            function wrapInChar(string, character) {
                return character + string + character;
            }

            function replaceToken(pattern, token, value) {
                if (!isString(token) || isEmptyString(token)) {
                    throw new Error();
                }

                var firstCharacter,
                    count,
                    copyMatch;

                if ((/^([|]?\S{1}\{\d+,{1}\d*\})+$/).test(token)) {
                    copyMatch = token;
                } else if ((/^\{\d{1}\}$/).test(token)) {
                    token = escapeRegex(token);
                    copyMatch = token;
                } else {
                    firstCharacter = firstChar(token);
                    count = token.length;
                    if (!strictEqual(count, countCharacter(token, firstCharacter))) {
                        throw new Error(token);
                    }

                    copyMatch = token + '(?!' + firstCharacter + ')';
                }

                function replacer($0) {
                    return $0.replace(new RegExp(token, 'g'), wrapInChar(cldrPadLeadingZero(value, $0.length), '\''));
                }

                function tokenReplacer($0, $1, $2) {
                    var val;

                    if ($0) {
                        if ($1) {
                            val = $1.replace(new RegExp(copyMatch, 'g'), replacer);
                        } else {
                            val = $2;
                        }
                    }

                    return val;
                }

                return pattern.replace(replaceTokenRX, tokenReplacer);
            }

            function strip(string, pattern) {
                return string.replace(new RegExp(escapeRegex(pattern), 'g'), '');
            }

            function stripSingleQuotes(string) {
                return strip(string, '\'');
            }

            formatTypes = ['full', 'long', 'medium', 'short'];
            deepFreeze(formatTypes);

            calendarTypes = {
                julian: {
                    abbreviated: 'OS',
                    wide: 'Julian',
                    narrow: 'O'
                },
                gregorian: {
                    abbreviated: 'NS',
                    wide: 'Gregorian',
                    narrow: 'N'
                }
            };

            deepFreeze(calendarTypes);

            function canonicalizeLocale(locale) {
                var val = [],
                    firstSplit,
                    firstSplitLength,
                    element,
                    elementLength,
                    script,
                    region;

                if (isString(locale) && (/^([a-z]{2,3}|[a-z]{2,3}[\-_][a-z]{2}|[a-z]{2,3}[\-_][a-z]{4}|[a-z]{2,3}[\-_][a-z]{4}[\-_][a-z]{2})$/i).test(locale)) {
                    firstSplit = locale.replace(/\-/g, '_').split('_');
                    firstSplitLength = firstSplit.length;
                    val.push(firstSplit[0].toLowerCase());
                    if (!strictEqual(firstSplitLength, 1)) {
                        element = firstSplit[1];
                        if (strictEqual(firstSplitLength, 2)) {
                            elementLength = element.length;
                            if (strictEqual(elementLength, 2)) {
                                region = element.toUpperCase();
                            } else {
                                script = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
                            }
                        } else {
                            script = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
                            region = firstSplit[2].toUpperCase();
                        }
                    }

                    if (!isUndefined(script) && !strictEqual(script, 'Zzzz')) {
                        val.push(script);
                    }

                    if (!isUndefined(region) && !strictEqual(region, 'ZZ')) {
                        val.push(region);
                    }
                }

                return val.join('_');
            }

            function lookupLocale(locale) {
                var canonicalizedLocale = canonicalizeLocale(locale),
                    likelySubtags,
                    lookup,
                    firstSplit,
                    lang,
                    script,
                    region,
                    length,
                    element,
                    elementLength;

                if (!isEmptyString(canonicalizedLocale)) {
                    likelySubtags = supplemental.likelySubtags;
                    lookup = likelySubtags[canonicalizedLocale];
                    if (isUndefined(lookup)) {
                        firstSplit = canonicalizedLocale.split('_');
                        length = firstSplit.length;
                        lang = arrayFirst(firstSplit);
                        if (strictEqual(length, 3)) {
                            region = arrayLast(firstSplit);
                            script = firstSplit[1];
                        } else if (strictEqual(length, 2)) {
                            element = arrayLast(firstSplit);
                            elementLength = element.length;
                            if (strictEqual(elementLength, 2)) {
                                region = element;
                            } else {
                                script = element;
                            }
                        }

                        if (isUndefined(lookup) && !isUndefined(region)) {
                            lookup = likelySubtags[lang + '_' + region];
                        }

                        if (isUndefined(lookup) && !isUndefined(script)) {
                            lookup = likelySubtags[lang + '_' + script];
                        }

                        if (isUndefined(lookup)) {
                            if (!isUndefined(languages[canonicalizedLocale])) {
                                lookup = canonicalizedLocale;
                            }
                        }

                        if (isUndefined(lookup)) {
                            lookup = likelySubtags[lang];
                        }

                        if (isUndefined(lookup) && !isUndefined(script)) {
                            lookup = likelySubtags['und_' + script];
                        }
                    }
                }

                if (isUndefined(lookup)) {
                    lookup = '';
                }

                return lookup;
            }

            function languageLoaded(locale) {
                var loaded,
                    lang;

                if (!isEmptyString(locale)) {
                    lang = locale.replace(/\-/g, '_');
                    if (!isUndefined(languages[lang])) {
                        loaded = lang;
                    } else {
                        lang = arrayFirst(lookupLocale(locale).split('_'));
                        if (!isUndefined(languages[lang])) {
                            loaded = lang;
                        }
                    }
                } else {
                    loaded = '';
                }

                return loaded;
            }

            function getRegion(locale) {
                return arrayLast(locale.split('_'));
            }

            function formatDate(struct, pattern, julian, lang, locale) {
                var gregorian = languages[lang].calendars.gregorian,
                    dateFormats = gregorian.dateFormats,
                    eras = gregorian.eras,
                    months = gregorian.months,
                    days = gregorian.days,
                    eraNum,
                    year,
                    sign,
                    month,
                    dayOfYear,
                    day,
                    temp,
                    weekDate,
                    week,
                    firstDay,
                    firstDayNumber,
                    todayNumber,
                    dayOfWeekLocaleNumber,
                    mjd;

                if (arrayContains(formatTypes, pattern)) {
                    /*
                    switch (pattern) {
                    case 'long':
                        calendarPattern = '\'(\'CCCC\')\'';
                        break;
                    case 'medium':
                        calendarPattern = '\'(\'C\')\'';
                        break;
                    case 'short':
                        calendarPattern = '\'(\'CCCCCC\')\'';
                        break;
                    default:
                        calendarPattern = '\'(\'CCCC\')\'';
                    }
                    */

                    pattern = dateFormats[pattern];

                }

                /*
                if (julian) {
                    calendarType = 'julian';
                } else {
                    calendarType = 'gregorian';
                }
                */

                /*
                pattern = replaceToken(pattern, 'CCCCC', calendarTypes[calendarType].narrow);
                pattern = replaceToken(pattern, 'CCCC', calendarTypes[calendarType].wide);
                pattern = replaceToken(pattern, 'C{1,3}', calendarTypes[calendarType].abbreviated);
                */

                if (struct.year.lt(1)) {
                    eraNum = 0;
                } else {
                    eraNum = 1;
                }

                pattern = replaceToken(pattern, 'GGGGG', eras.eraNarrow[eraNum.toString()]);
                pattern = replaceToken(pattern, 'GGGG', eras.eraNames[eraNum.toString()]);
                pattern = replaceToken(pattern, 'G{1,3}', eras.eraNames[eraNum.toString()]);

                year = struct.year.plus(eraNum - 1);
                if (year.lt(0)) {
                    sign = '-';
                } else {
                    sign = '';
                }

                year = year.abs().toString();
                temp = sign + year;
                pattern = replaceToken(pattern, 'y{3,}', temp);
                pattern = replaceToken(pattern, 'yy', sign + year.slice(-2));
                pattern = replaceToken(pattern, 'y', temp);
                pattern = replaceToken(pattern, 'U{1,}', temp);

                year = struct.year;
                if (year.lt(0)) {
                    sign = '-';
                } else {
                    sign = '';
                }

                year = year.toString();
                temp = sign + year;
                pattern = replaceToken(pattern, 'u{1,}', temp);

                weekDate = calendarToWeekDate(struct);
                year = weekDate.year.plus(eraNum - 1);
                if (year.lt(0)) {
                    sign = '-';
                } else {
                    sign = '';
                }

                year = year.toString();
                temp = sign + year;
                pattern = replaceToken(pattern, 'Y{1,}', year);
                week = weekDate.week.toString();
                pattern = replaceToken(pattern, 'w{1,2}', week);
                //pattern = replaceToken(pattern, 'W', value);

                /*
                pattern = replaceToken(pattern, 'Q{1,2}', value);
                pattern = replaceToken(pattern, 'QQQ', value);
                pattern = replaceToken(pattern, 'QQQQ', value);
                pattern = replaceToken(pattern, 'q{1,2}', value);
                pattern = replaceToken(pattern, 'qqq', value);
                pattern = replaceToken(pattern, 'qqqq', value);
                */

                month = struct.month.toString();
                pattern = replaceToken(pattern, 'MMMMM', months.format.narrow[month]);
                pattern = replaceToken(pattern, 'MMMM', months.format.wide[month]);
                pattern = replaceToken(pattern, 'MMM', months.format.abbreviated[month]);
                pattern = replaceToken(pattern, 'M{1,2}', month);
                pattern = replaceToken(pattern, 'LLLLL', months[arrayLast(nameTypes)].narrow[month]);
                pattern = replaceToken(pattern, 'LLLL', months[arrayLast(nameTypes)].wide[month]);
                pattern = replaceToken(pattern, 'LLL', months[arrayLast(nameTypes)].abbreviated[month]);
                pattern = replaceToken(pattern, 'L{1,2}', month);

                pattern = replaceToken(pattern, 'd{1,2}', struct.day.toString());
                if (julian) {
                    dayOfYear = dayOfJulianYear(gregorianToJulian(struct)).toString();
                } else {
                    dayOfYear = dayOfGregorianYear(struct).toString();
                }

                pattern = replaceToken(pattern, 'D{1,3}', dayOfYear);

                //pattern = replaceToken(pattern, 'F', value);
                if (julian) {
                    mjd = julianToMJD(toUT(struct));
                } else {
                    mjd = gregorianToMJD(toUT(struct));
                }

                pattern = replaceToken(pattern, 'g{1,}', mjd.toString());

                day = cldrDayKey(struct);
                temp = days.format[arrayLast(formatTypes)][day];
                pattern = replaceToken(pattern, 'EEEEEE', temp);
                pattern = replaceToken(pattern, 'eeeeee', temp);
                temp = days.format.narrow[day];
                pattern = replaceToken(pattern, 'EEEEE', temp);
                pattern = replaceToken(pattern, 'eeeee', temp);
                temp = days.format.wide[day];
                pattern = replaceToken(pattern, 'EEEE', temp);
                pattern = replaceToken(pattern, 'eeee', temp);
                temp = days.format.abbreviated[day];
                pattern = replaceToken(pattern, 'EEE', temp);
                pattern = replaceToken(pattern, 'eee', temp);

                pattern = replaceToken(pattern, 'E{1,2}', weekDate.weekDay.toString());

                firstDay = supplemental.weekData.firstDay[getRegion(locale)];
                firstDayNumber = arrayIndexOf(dayKeys, firstDay);
                todayNumber = arrayIndexOf(dayKeys, day);
                dayOfWeekLocaleNumber = (1 + (7 - firstDayNumber + todayNumber) % 7).toString();
                pattern = replaceToken(pattern, 'e{1,2}', dayOfWeekLocaleNumber);

                temp = days[arrayLast(nameTypes)][arrayLast(formatTypes)][day];
                pattern = replaceToken(pattern, 'cccccc', temp);
                pattern = replaceToken(pattern, 'ccccc', days[arrayLast(nameTypes)].narrow[day]);
                pattern = replaceToken(pattern, 'cccc', days[arrayLast(nameTypes)].wide[day]);
                pattern = replaceToken(pattern, 'ccc', days[arrayLast(nameTypes)].abbreviated[day]);
                pattern = replaceToken(pattern, 'c{1,2}', dayOfWeekLocaleNumber);

                return pattern;
            }

            function formatTime(struct, pattern, lang, locale) {
                var gregorian = languages[lang].calendars.gregorian,
                    timeFormats = gregorian.timeFormats,
                    dayPeriods = gregorian.dayPeriods,
                    timeZoneNames = languages[lang].timeZoneNames,
                    hourFormat = timeZoneNames.hourFormat,
                    gmtFormat = timeZoneNames.gmtFormat,
                    etc = timeZoneNames.zone.Etc,
                    dayPeriod,
                    hour,
                    offset,
                    offsetFormat,
                    zulu = '\'Z\'',
                    iso;

                if (arrayContains(formatTypes, pattern)) {
                    pattern = timeFormats[pattern];
                }

                if (struct.hour.inRange(12, 23)) {
                    dayPeriod = 'pm';
                } else {
                    dayPeriod = 'am';
                }

                pattern = replaceToken(pattern, 'a', dayPeriods.format.abbreviated[dayPeriod]);
                hour = struct.hour.plus(11).mod(12).plus(1);
                pattern = replaceToken(pattern, 'h{1,2}', hour.toString());

                pattern = replaceToken(pattern, 'H{1,2}', struct.hour.toString());
                pattern = replaceToken(pattern, 'K{1,2}', hour.minus(1).toString());
                // if hour is 24, needs to be handled in date too
                //temp = new AstroDate().julianDay(new AstroDate().julianDay());
                //pattern = replaceToken(pattern, 'k{1,2}', struct.hour.plus(1).toString());

                //pattern = replaceToken(pattern, 'j{1,2}', struct.hour.toString());
                pattern = replaceToken(pattern, 'm{1,2}', struct.minute.toString());
                pattern = replaceToken(pattern, 's{1,2}', struct.second.toString());
                pattern = replaceToken(pattern, 'S{1,}', struct.millisecond.toString());
                //pattern = replaceToken(pattern, 'A{1,}', value);

                offsetFormat = hourFormat.split(';');
                if (struct.offset.lte(0)) {
                    offsetFormat = arrayFirst(offsetFormat);
                } else {
                    offsetFormat = arrayLast(offsetFormat);
                }

                offset = fractionToTime(struct.offset.abs(), 'minute');
                offsetFormat = replaceToken(offsetFormat, 'H{1,2}', offset.hour.toString());
                offsetFormat = replaceToken(offsetFormat, 'm{1,2}', offset.minute.toString());
                pattern = replaceToken(pattern, 'ZZZZZ', offsetFormat);
                pattern = replaceToken(pattern, 'xxxxx', offsetFormat);
                pattern = replaceToken(pattern, 'xxx', offsetFormat);
                if (struct.offset.isZero()) {
                    iso = zulu;
                } else {
                    iso = offsetFormat;
                }

                pattern = replaceToken(pattern, 'XXXXX', iso);
                pattern = replaceToken(pattern, 'XXX', iso);

                gmtFormat = replaceToken(gmtFormat, '{0}', offsetFormat);
                pattern = replaceToken(pattern, 'OOOO', gmtFormat);
                pattern = replaceToken(pattern, 'zzzz', gmtFormat);
                pattern = replaceToken(pattern, 'ZZZZ', gmtFormat);
                pattern = replaceToken(pattern, 'vvvv', gmtFormat);
                pattern = replaceToken(pattern, 'v', gmtFormat);
                pattern = replaceToken(pattern, 'VVVV', gmtFormat);

                if (struct.offset.lte(0)) {
                    offsetFormat = '+HHMM';
                } else {
                    offsetFormat = '-HHMM';
                }

                offsetFormat = replaceToken(offsetFormat, 'H{1,2}', offset.hour.toString());
                offsetFormat = replaceToken(offsetFormat, 'm{1,2}', offset.minute.toString());

                pattern = replaceToken(pattern, 'Z{1,3}', offsetFormat);
                pattern = replaceToken(pattern, 'XXXX', iso);
                pattern = replaceToken(pattern, 'XX', iso);
                pattern = replaceToken(pattern, 'xxxx', offsetFormat);
                pattern = replaceToken(pattern, 'xx', offsetFormat);

                gmtFormat = replaceToken(gmtFormat, '{0}', offsetFormat);
                pattern = replaceToken(pattern, 'O', gmtFormat);
                pattern = replaceToken(pattern, 'z{1,3}', gmtFormat);

                pattern = replaceToken(pattern, 'V{2,3}', etc.Unknown.exemplarCity);
                pattern = replaceToken(pattern, 'V', etc.Unknown.exemplarCity.slice(0, 3).toLowerCase());

                return pattern;
            }

            AstroDate = function () {
                var args = arguments,
                    input = arguments,
                    argsLength = args.length,
                    isJulian = false,
                    isUT = false,
                    isTT = false,
                    isLocal = false,
                    error = null,
                    currentLanguage = defaultLanguage,
                    currentLocale = defaultLocale,
                    struct,
                    arg;

                objectDefineProperties(this, {
                    getter: {
                        value: function (key) {
                            var got;

                            if (isUndefined(key)) {
                                got = extend({}, struct);
                            } else if (isString(key)) {
                                switch (key) {
                                case 'struct':
                                    got = extend({}, struct);
                                    break;
                                case 'isJulian':
                                    got = isJulian;
                                    break;
                                case 'isUT':
                                    got = isUT;
                                    break;
                                case 'isTT':
                                    got = isTT;
                                    break;
                                case 'isLocal':
                                    got = isLocal;
                                    break;
                                case 'args':
                                    got = args;
                                    break;
                                case 'input':
                                    got = input;
                                    break;
                                case 'error':
                                    got = error;
                                    break;
                                case 'lang':
                                    got = currentLanguage;
                                    break;
                                case 'locale':
                                    got = currentLocale;
                                    break;
                                default:
                                    throw new SyntaxError(key);
                                }
                            } else {
                                throw new TypeError(key);
                            }

                            return got;
                        }
                    },

                    setter: {
                        value: function (key, value) {
                            var unit = normaliseUnits(key),
                                valid = false,
                                bn,
                                dim;

                            if (unit) {
                                bn = new BigNumber(value);
                                switch (unit) {
                                case 'year':
                                    valid = inYearRange(bn);
                                    break;
                                case 'month':
                                    valid = inMonthRange(bn);
                                    break;
                                case 'day':
                                    if (strictEqual(isJulian, true)) {
                                        dim = daysInJulianMonth(struct);
                                    } else {
                                        dim = daysInGregorianMonth(struct);
                                    }

                                    valid = inDayRange(bn, dim);
                                    break;
                                case 'hour':
                                    valid = inHourRange(bn);
                                    break;
                                case 'minute':
                                    valid = inMinuteRange(bn, struct.hour);
                                    break;
                                case 'second':
                                    valid = inSecondRange(bn, struct);
                                    break;
                                case 'millisecond':
                                    valid = inMillisecondRange(bn, struct.hour);
                                    break;
                                case 'offset':
                                    valid = inOffsetRange(bn);
                                    break;
                                default:
                                    throw new Error(unit);
                                }

                                if (valid) {
                                    struct[unit] = bn;
                                } else {
                                    struct = {};
                                }
                            } else if (arrayIsArray(key)) {
                                struct = arrayToStruct(key, false);
                            } else if (AstroDate.isAstroDate(key)) {
                                struct = key.getter();
                                isJulian = key.isJulian();
                            } else if (isDate(key)) {
                                struct = dateToStruct(key);
                            } else if (isString(key)) {
                                switch (key) {
                                case 'input':
                                    input = value;
                                    break;
                                case 'error':
                                    error = value;
                                    break;
                                case 'struct':
                                    if (isValid(value)) {
                                        struct = extend({}, value);
                                    } else {
                                        struct = {};
                                    }

                                    break;
                                case 'isJulian':
                                    isJulian = Boolean(value);
                                    break;
                                case 'isUT':
                                    isUT = Boolean(value);
                                    break;
                                case 'isTT':
                                    isTT = Boolean(value);
                                    break;
                                case 'isLocal':
                                    isLocal = Boolean(value);
                                    break;
                                case 'lang':
                                    if (isString(value) && !isEmptyString(value)) {
                                        currentLanguage = value;
                                    } else {
                                        currentLanguage = defaultLanguage;
                                        currentLocale = defaultLocale;
                                    }

                                    break;
                                case 'locale':
                                    if (isString(value) && !isEmptyString(value)) {
                                        currentLocale = lookupLocale(value);
                                    } else {
                                        currentLanguage = defaultLanguage;
                                        currentLocale = defaultLocale;
                                    }

                                    break;
                                default:
                                    struct = isoParse(key);
                                }
                            } else {
                                throw new SyntaxError(key);
                            }

                            return this;
                        }
                    }
                });

                switch (argsLength.toString()) {
                case '0':
                    struct = dateToStruct(new Date());
                    break;
                case '1':
                    arg = arrayFirst(args);
                    if (AstroDate.isAstroDate(arg)) {
                        isJulian = arg.getter('isJulian');
                        struct = extend({}, arg.getter());
                    } else if (arrayIsArray(arg)) {
                        struct = arrayToStruct(arg, false);
                    } else if (isDate(arg)) {
                        struct = dateToStruct(arg);
                    } else if (isNumber(arg)) {
                        struct = dateToStruct(new Date(arg));
                    } else if (isString(arg)) {
                        struct = isoParse(arg);
                    } else if (isPlainObject(arg)) {
                        struct = objectToStruct(arg);
                        if (!isValid(struct)) {
                            struct = {};
                        }
                    } else {
                        throw new TypeError(arg);
                    }

                    break;
                case '2':
                    arg = arrayFirst(args);
                    if (isString(arg)) {
                        arg = stringTrim(arg).toLowerCase();
                        switch (arg) {
                        case 'j':
                            arg = args[1];
                            if (arrayIsArray(arg)) {
                                struct = julianToGregorian(arrayToStruct(arg, true));
                            } else if (isPlainObject(arg)) {
                                struct = objectToStruct(arg, true);
                                if (isValid(struct, true)) {
                                    struct = julianToGregorian(struct);
                                } else {
                                    struct = {};
                                }
                            } else {
                                throw new TypeError(arg);
                            }

                            break;
                        case 'g':
                            arg = args[1];
                            if (arrayIsArray(arg)) {
                                struct = arrayToStruct(arg, false);
                            } else if (isPlainObject(arg)) {
                                struct = objectToStruct(arg);
                                if (!isValid(struct)) {
                                    struct = {};
                                }
                            } else {
                                throw new TypeError(arg);
                            }

                            break;
                        case 'jd':
                            arg = args[1];
                            this.julianDay(arg);
                            break;
                        default:
                            throw new SyntaxError(arg);
                        }
                    } else {
                        throw new TypeError(arg);
                    }

                    break;
                default:
                    throw new SyntaxError(argsLength);
                }

                if (!isValid(struct)) {
                    struct = {};
                }
            };

            objectDefineProperties(AstroDate.prototype, {
                julian: {
                    value: function () {
                        return this.setter('isJulian', true);
                    }
                },

                gregorian: {
                    value: function () {
                        return this.setter('isJulian', false);
                    }
                },

                local: {
                    value: function () {
                        this.setter('isLocal', true);
                        this.setter('isUT', false);

                        return this;
                    }
                },

                UT: {
                    value: function () {
                        this.setter('isLocal', false);
                        this.setter('isUT', true);

                        return this;
                    }
                },

                TT: {
                    value: function () {
                        return this.setter('isTT', true);
                    }
                },

                civil: {
                    value: function () {
                        return this.setter('isTT', false);
                    }
                },

                raw: {
                    value: function () {
                        this.setter('isLocal', false);
                        this.setter('isUT', false);
                        this.setter('isTT', false);

                        return this;
                    }
                },

                isJulian: {
                    value: function () {
                        return this.getter('isJulian');
                    }
                },

                isGregorian: {
                    value: function () {
                        return !this.getter('isJulian');
                    }
                },

                isUT: {
                    value: function () {
                        return this.getter('isUT');
                    }
                },

                isTT: {
                    value: function () {
                        return this.getter('isTT');
                    }
                },

                isCivil: {
                    value: function () {
                        return !this.getter('isTT');
                    }
                },

                isLocal: {
                    value: function () {
                        return this.getter('isLocal');
                    }
                },

                isRaw: {
                    value: function () {
                        return !this.getter('isUT') && !this.getter('isTT') && this.getter('isLocal');
                    }
                },

                currentLang: {
                    value: function () {
                        return this.getter('lang');
                    }
                },

                isWeekDay: {
                    value: function () {
                        var val;

                        if (this.isValid()) {
                            val = weekDayNumber(getCorrectStruct(this, this.getter())).inRange(1, 5);
                        }

                        return val;
                    }
                },

                isWeekend: {
                    value: function () {
                        var val;

                        if (this.isValid()) {
                            val = weekDayNumber(getCorrectStruct(this, this.getter())).inRange(6, 7);
                        }

                        return val;
                    }
                },

                zone: {
                    value: function () {
                        var val;

                        if (this.isValid()) {
                            val = getCorrectStruct(this, this.getter()).offset.toString();
                        }

                        return val;
                    }
                },

                isValid: {
                    value: function () {
                        return isValid(this.getter());
                    }
                },

                parse: {
                    value: function (isoString) {
                        var val;

                        if (isString(isoString)) {
                            val = this.setter('struct', isoParse(isoString));
                        } else {
                            throw new TypeError(isoString);
                        }

                        return val;
                    }
                },

                format: {
                    value: function (pattern) {
                        var struct,
                            string,
                            isJulian,
                            lang,
                            dateTimeFormats,
                            dateTimeFormat;

                        if (this.isValid()) {
                            lang = this.currentLang();
                            if (!isString(lang) || isEmptyString(lang) || !isPlainObject(languages[lang])) {
                                if (!isString(defaultLanguage) || isEmptyString(defaultLanguage) || !isPlainObject(languages[defaultLanguage])) {
                                    throw new Error('Language not loaded!');
                                }

                                lang = defaultLanguage;
                            }

                            isJulian = this.isJulian();
                            if (isJulian) {
                                struct = jdToJulian(this.julianDay());
                            } else {
                                struct = this.getter();
                            }

                            struct = getCorrectStruct(this, struct);
                            dateTimeFormats = languages[lang].calendars.gregorian.dateTimeFormats;
                            if (!isString(pattern) || isEmptyString(pattern)) {
                                pattern = arrayFirst(formatTypes);
                            }

                            if (arrayContains(objectKeys(dateTimeFormats), pattern)) {
                                dateTimeFormat = dateTimeFormats[pattern];
                                dateTimeFormat = replaceToken(dateTimeFormat, '{1}', formatDate(struct, pattern, isJulian, lang, this.locale()));
                                dateTimeFormat = replaceToken(dateTimeFormat, '{0}', formatTime(struct, pattern, lang, this.locale()));
                            } else {
                                dateTimeFormat = formatDate(struct, pattern, isJulian, lang, this.locale());
                                dateTimeFormat = formatTime(struct, dateTimeFormat, lang, this.locale());
                            }

                            string = stripSingleQuotes(dateTimeFormat);
                        } else {
                            string = 'Invalid Date';
                        }

                        return string;
                    }
                },

                toString: {
                    value: function (pattern) {
                        if (!isString(pattern) || isEmptyString(pattern) || !arrayContains(formatTypes, pattern)) {
                            pattern = arrayFirst(formatTypes);
                        }

                        return this.format(pattern);
                    }
                },

                toDateString: {
                    value: function (pattern) {
                        var struct,
                            string,
                            isJulian,
                            lang;

                        if (this.isValid()) {
                            lang = this.currentLang();
                            if (!isString(lang) || isEmptyString(lang) || !isPlainObject(languages[lang])) {
                                if (!isString(defaultLanguage) || isEmptyString(defaultLanguage) || !isPlainObject(languages[defaultLanguage])) {
                                    throw new Error('Language not loaded!');
                                }

                                lang = defaultLanguage;
                            }

                            isJulian = this.isJulian();
                            if (isJulian) {
                                struct = jdToJulian(this.julianDay());
                            } else {
                                struct = this.getter();
                            }

                            if (!isString(pattern) || isEmptyString(pattern) || !arrayContains(formatTypes, pattern)) {
                                pattern = arrayFirst(formatTypes);
                            }

                            string = stripSingleQuotes(formatDate(getCorrectStruct(this, struct), pattern, isJulian, lang, this.locale()));
                        } else {
                            string = 'Invalid Date';
                        }

                        return string;
                    }
                },

                toTimeString: {
                    value: function (pattern) {
                        var struct,
                            string,
                            isJulian,
                            lang;

                        if (this.isValid()) {
                            lang = this.currentLang();
                            if (!isString(lang) || isEmptyString(lang) || !isPlainObject(languages[lang])) {
                                if (!isString(defaultLanguage) || isEmptyString(defaultLanguage) || !isPlainObject(languages[defaultLanguage])) {
                                    throw new Error('Language not loaded!');
                                }

                                lang = defaultLanguage;
                            }

                            isJulian = this.isJulian();
                            if (isJulian) {
                                struct = jdToJulian(this.julianDay());
                            } else {
                                struct = this.getter();
                            }

                            if (!isString(pattern) || isEmptyString(pattern) || !arrayContains(formatTypes, pattern)) {
                                pattern = arrayFirst(formatTypes);
                            }

                            string = stripSingleQuotes(formatTime(getCorrectStruct(this, struct), pattern, lang, this.locale()));
                        } else {
                            string = 'Invalid Date';
                        }

                        return string;
                    }
                },

                toISOString: {
                    value: function (padding) {
                        var val;

                        if (this.isValid()) {
                            val = toISOString(getCorrectStruct(this, this.getter()), padding);
                        } else {
                            val = 'Invalid Date';
                        }

                        return val;
                    }
                },

                valueOf: {
                    value: function () {
                        var val;

                        if (this.isJulian()) {
                            val = this.julianDay();
                        } else {
                            val = this.getTime();
                        }

                        return val;
                    }
                },

                unix: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            if (this.isTT()) {
                                struct = toTT(this.getter());
                            } else {
                                struct = this.getter();
                            }

                            val = getTime(toUT(struct)).div(1000).trunc().toString();
                        }

                        return val;
                    }
                },

                object: {
                    value: function (dateObject) {
                        var struct,
                            val;

                        if (isUndefined(dateObject)) {
                            if (this.isValid()) {
                                struct = getCorrectStruct(this, this.getter());
                                if (this.isJulian()) {
                                    val = structToObject(gregorianToJulian(struct));
                                } else {
                                    val = structToObject(struct);
                                }
                            }
                        } else if (isPlainObject(dateObject)) {
                            val = this.setter('struct', objectToStruct(dateObject, this.isJulian()));
                        } else {
                            throw new TypeError(dateObject);
                        }

                        return val;
                    }
                },

                clone: {
                    value: function () {
                        return new AstroDate(this);
                    }
                },

                array: {
                    value: function (dateArray) {
                        var struct,
                            val;

                        if (isUndefined(dateArray)) {
                            if (this.isValid()) {
                                struct = getCorrectStruct(this, this.getter());
                                if (this.isJulian()) {
                                    val = structToArrayOfString(gregorianToJulian(struct));
                                } else {
                                    val = structToArrayOfString(struct);
                                }
                            }
                        } else if (arrayIsArray(dateArray)) {
                            val = this.setter('struct', arrayToStruct(dateArray, this.isJulian()));
                        } else {
                            throw new TypeError(dateArray);
                        }

                        return val;
                    }
                },

                date: {
                    value: function (date) {
                        var val;

                        if (isUndefined(date)) {
                            if (this.isValid()) {
                                val = new Date(parseInt(this.getTime(), 10));
                            } else {
                                val = new Date(NaN);
                            }
                        } else if (isDate(date)) {
                            val = this.setter(date);
                        } else {
                            throw new TypeError(date);
                        }

                        return val;
                    }
                },

                getTime: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            if (this.isTT()) {
                                struct = toTT(this.getter());
                            } else {
                                struct = this.getter();
                            }

                            val = getTime(toUT(struct)).toString();
                        }

                        return val;
                    }
                },

                deltaTime: {
                    value: function () {
                        var val;

                        if (this.isValid()) {
                            val = deltaTime(getCorrectStruct(this, this.getter())).toString();
                        }

                        return val;
                    }
                },

                timeTo: {
                    value: function (unit) {
                        var val;

                        if (this.isValid()) {
                            val = timeTo(getCorrectStruct(this, this.getter()), normaliseUnits(unit)).toString();
                        }

                        return val;
                    }
                },

                julianDay: {
                    value: function (julianDay) {
                        var struct,
                            val;

                        if (isUndefined(julianDay)) {
                            if (this.isValid()) {
                                if (this.isTT()) {
                                    struct = toTT(this.getter());
                                } else {
                                    struct = this.getter();
                                }

                                val = gregorianToJd(toUT(struct)).toString();
                            }
                        } else if (isNumber(julianDay) || isString(julianDay) || BigNumber.isBigNumber(julianDay)) {
                            val = this.setter('struct', jdToGregorian(julianDay));
                        } else {
                            throw new TypeError(julianDay);
                        }

                        return val;
                    }
                },

                easter: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = julianEaster(gregorianToJulian(struct));
                            } else {
                                val = gregorianEaster(struct);
                            }
                        }

                        return val;
                    }
                },

                isLeapYear: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = isJulianLeapYear(gregorianToJulian(struct));
                            } else {
                                val = isGregorianLeapYear(struct);
                            }
                        }

                        return val;
                    }
                },

                daysInYear: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = daysInJulianYear(gregorianToJulian(struct)).toString();
                            } else {
                                val = daysInGregorianYear(struct).toString();
                            }
                        }

                        return val;
                    }
                },

                daysInMonth: {
                    value: function () {
                        var struct,
                            val;

                        if (this.isValid()) {
                            struct = getCorrectStruct(this, this.getter());
                            if (this.isJulian()) {
                                val = daysInJulianMonth(gregorianToJulian(struct)).toString();
                            } else {
                                val = daysInGregorianMonth(struct).toString();
                            }
                        }

                        return val;
                    }
                },

                json: {
                    value: function (jsonString) {
                        var struct,
                            propArray,
                            val;

                        if (isUndefined(jsonString)) {
                            if (isFunction(JSON.stringify)) {
                                val = JSON.stringify(this.object());
                            } else {
                                struct = this.object();
                                propArray = arrayMap(objectKeys(struct), function (key) {
                                    return '"' + key + '":"' + struct[key] + '"';
                                });

                                val = '{' + propArray.join(',') + '}';
                            }
                        } else if (isString(jsonString)) {
                            if (isFunction(JSON.parse)) {
                                struct = objectToStruct(JSON.parse(jsonString), this.isJulian());
                            } else {
                                /*jslint evil: true */
                                struct = objectToStruct(new Function('return' + jsonString)(), this.isJulian());
                                /*jslint evil:   false */
                            }

                            if (!isValid(struct)) {
                                throw new SyntaxError(struct);
                            }

                            val = this.setter('struct', struct);
                        } else {
                            throw new TypeError(jsonString);
                        }

                        return val;
                    }
                },

                toJSON: {
                    value: function (padding) {
                        return this.toISOString(padding);
                    }
                },

                calendarToWeekDate: {
                    value: function () {
                        var val;

                        if (this.isValid()) {
                            val = structToObject(calendarToWeekDate(getCorrectStruct(this, this.getter())));
                        }

                        return val;
                    }
                },

                lang: {
                    value: function (id) {
                        var val,
                            lang;

                        if (isString(id) && !isEmptyString(id)) {
                            lang = id.replace(/\-/g, '_');
                            if (isPlainObject(languages[lang])) {
                                this.setter('lang', lang);
                                this.setter('locale', lookupLocale(lang));
                            }

                            val = this;
                        } else {
                            val = this.getter('lang');
                        }

                        return val;
                    }
                },

                locale: {
                    value: function (id) {
                        var lang,
                            val;

                        if (isString(id) && !isEmptyString(id)) {
                            lang = languageLoaded(id);
                            if (!isEmptyString(lang)) {
                                this.setter('lang', lang);
                                this.setter('locale', lookupLocale(id));
                            }

                            val = this;
                        } else {
                            val = this.getter('locale');
                        }

                        return val;
                    }
                }
            });

            objectDefineProperties(AstroDate, {
                version: {
                    value: VERSION
                },

                lang: {
                    value: function (id, object, freeze) {
                        var lang;

                        if (isString(id) && !isEmptyString(id)) {
                            lang = id.replace(/\-/g, '_');
                            if (isPlainObject(object)) {
                                languages[lang] = object;
                                if (!strictEqual(freeze, false)) {
                                    deepFreeze(languages[lang]);
                                }
                            }

                            if (isPlainObject(languages[lang])) {
                                defaultLanguage = lang;
                                defaultLocale = lookupLocale(lang);
                            }
                        }

                        return defaultLanguage;
                    }
                },

                langs: {
                    value: function () {
                        return objectKeys(languages);
                    }
                },

                locale: {
                    value: function (id) {
                        var lang;

                        if (isString(id) && !isEmptyString(id)) {
                            lang = languageLoaded(id);
                            if (!isEmptyString(lang)) {
                                defaultLanguage = lang;
                                defaultLocale = lookupLocale(id);
                            }
                        }

                        return defaultLocale;
                    }
                },

                leapSeconds: {
                    value: function (object, freeze) {
                        if (isPlainObject(object)) {
                            leapSeconds = object;
                            if (!strictEqual(freeze, false)) {
                                deepFreeze(leapSeconds);
                            }
                        }

                        return leapSeconds;
                    }
                },

                supplemental: {
                    value: function (object, freeze) {
                        if (isPlainObject(object)) {
                            supplemental = object;
                            if (!strictEqual(freeze, false)) {
                                deepFreeze(supplemental);
                            }
                        }

                        return supplemental;
                    }
                },

                BigNumber: {
                    value: BigNumber
                },

                normaliseUnits: {
                    value: function (unitString) {
                        return normaliseUnits(unitString);
                    }
                },

                isAstroDate: {
                    value: function (inputArg) {
                        return isObject(inputArg) && objectInstanceOf(inputArg, AstroDate);
                    }
                },

                now: {
                    value: function () {
                        return new AstroDate().getTime();
                    }
                },

                julianDay: {
                    value: function () {
                        return new AstroDate().julianDay();
                    }
                },

                unix: {
                    value: function () {
                        return new AstroDate().unix();
                    }
                }
            });

            defaultProperties = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ];

            deepFreeze(defaultProperties);

            fullKeys = [{
                full: 'year',
                alias: 'y',
                local: 'getFullYear'
            }, {
                full: 'month',
                alias: 'M',
                local: 'getMonth'
            }, {
                full: 'day',
                alias: 'd',
                local: 'getDate'
            }, {
                full: 'hour',
                alias: 'h',
                local: 'getHours'
            }, {
                full: 'minute',
                alias: 'm',
                local: 'getMinutes'
            }, {
                full: 'second',
                alias: 's',
                local: 'getSeconds'
            }, {
                full: 'millisecond',
                alias: 'ms',
                local: 'getMilliseconds'

            }, {
                full: 'offset',
                alias: 'z',
                local: 'getTimezoneOffset'
            }];

            /*
            , {
                full: 'week',
                alias: 'W',
                local: null
            }, {
                full: 'weekDay',
                alias: 'E',
                local: null
            }
            */

            deepFreeze(fullKeys);

            monthKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            deepFreeze(monthKeys);
            dayKeys = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
            deepFreeze(dayKeys);

            arrayForEach([BigNumber, BigNumber.prototype], function (element) {
                arrayForEach(objectKeys(element), function (key) {
                    objectDefineProperty(element, key, {
                        enumerable: false,
                        configurable: false,
                        writeable: false
                    });
                });
            });

            AstroDate.lang('root', {
                'durationUnit-type-ms': {
                    'durationUnitPattern': 'm:ss'
                },
                'durationUnit-type-hms': {
                    'durationUnitPattern': 'h:mm:ss'
                },
                'durationUnit-type-hm': {
                    'durationUnitPattern': 'h:mm'
                },
                'narrow': {
                    'mass-ounce': {
                        'unitPattern-count-other': '{0} oz'
                    },
                    'mass-kilogram': {
                        'unitPattern-count-other': '{0} kg'
                    },
                    'mass-gram': {
                        'unitPattern-count-other': '{0} g'
                    },
                    'length-yard': {
                        'unitPattern-count-other': '{0} yd'
                    },
                    'length-picometer': {
                        'unitPattern-count-other': '{0} pm'
                    },
                    'length-millimeter': {
                        'unitPattern-count-other': '{0} mm'
                    },
                    'length-mile': {
                        'unitPattern-count-other': '{0} mi'
                    },
                    'length-meter': {
                        'unitPattern-count-other': '{0} m'
                    },
                    'length-light-year': {
                        'unitPattern-count-other': '{0} ly'
                    },
                    'length-kilometer': {
                        'unitPattern-count-other': '{0} km'
                    },
                    'length-inch': {
                        'unitPattern-count-other': '{0} in'
                    },
                    'length-foot': {
                        'unitPattern-count-other': '{0} ft'
                    },
                    'length-centimeter': {
                        'unitPattern-count-other': '{0} cm'
                    },
                    'duration-year': {
                        'unitPattern-count-other': '{0} y'
                    },
                    'duration-week': {
                        'unitPattern-count-other': '{0} w'
                    },
                    'duration-month': {
                        'unitPattern-count-other': '{0} m'
                    },
                    'mass-pound': {
                        'unitPattern-count-other': '{0} lb'
                    },
                    'power-horsepower': {
                        'unitPattern-count-other': '{0} hp'
                    },
                    'power-kilowatt': {
                        'unitPattern-count-other': '{0} kW'
                    },
                    'power-watt': {
                        'unitPattern-count-other': '{0} W'
                    },
                    'pressure-hectopascal': {
                        'unitPattern-count-other': '{0} hPa'
                    },
                    'pressure-inch-hg': {
                        'unitPattern-count-other': '{0} inHg'
                    },
                    'pressure-millibar': {
                        'unitPattern-count-other': '{0} mbar'
                    },
                    'volume-liter': {
                        'unitPattern-count-other': '{0} l'
                    },
                    'volume-cubic-mile': {
                        'unitPattern-count-other': '{0} mi\u00B3'
                    },
                    'volume-cubic-kilometer': {
                        'unitPattern-count-other': '{0} km\u00B3'
                    },
                    'temperature-fahrenheit': {
                        'unitPattern-count-other': '{0}\u00B0F'
                    },
                    'temperature-celsius': {
                        'unitPattern-count-other': '{0}\u00B0C'
                    },
                    'speed-mile-per-hour': {
                        'unitPattern-count-other': '{0} mi/h'
                    },
                    'speed-meter-per-second': {
                        'unitPattern-count-other': '{0} m/s'
                    },
                    'speed-kilometer-per-hour': {
                        'unitPattern-count-other': '{0} km/h'
                    },
                    'duration-minute': {
                        'unitPattern-count-other': '{0} min'
                    },
                    'duration-millisecond': {
                        'unitPattern-count-other': '{0} ms'
                    },
                    'duration-hour': {
                        'unitPattern-count-other': '{0} h'
                    },
                    'duration-day': {
                        'unitPattern-count-other': '{0} d'
                    },
                    'area-square-mile': {
                        'unitPattern-count-other': '{0} mi\u00B2'
                    },
                    'area-square-meter': {
                        'unitPattern-count-other': '{0} m\u00B2'
                    },
                    'area-square-kilometer': {
                        'unitPattern-count-other': '{0} km\u00B2'
                    },
                    'per': {
                        'compoundUnitPattern': '{0}/{1}'
                    },
                    'acceleration-g-force': {
                        'unitPattern-count-other': '{0} G'
                    },
                    'angle-arc-minute': {
                        'unitPattern-count-other': '{0}\u2032'
                    },
                    'angle-arc-second': {
                        'unitPattern-count-other': '{0}\u2033'
                    },
                    'angle-degree': {
                        'unitPattern-count-other': '{0}\u00B0'
                    },
                    'area-acre': {
                        'unitPattern-count-other': '{0} ac'
                    },
                    'area-hectare': {
                        'unitPattern-count-other': '{0} ha'
                    },
                    'area-square-foot': {
                        'unitPattern-count-other': '{0} ft\u00B2'
                    },
                    'duration-second': {
                        'unitPattern-count-other': '{0} s'
                    }
                },
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                },
                                'narrow': {
                                    '8': '8',
                                    '7': '7',
                                    '6': '6',
                                    '5': '5',
                                    '12': '12',
                                    '11': '11',
                                    '10': '10',
                                    '9': '9',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '8': 'M08',
                                    '7': 'M07',
                                    '6': 'M06',
                                    '5': 'M05',
                                    '12': 'M12',
                                    '11': 'M11',
                                    '10': 'M10',
                                    '9': 'M09',
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'wide': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'W',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                },
                                'wide': {
                                    'sun': 'Sun',
                                    'mon': 'Mon',
                                    'tue': 'Tue',
                                    'wed': 'Wed',
                                    'thu': 'Thu',
                                    'fri': 'Fri',
                                    'sat': 'Sat'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'Q1',
                                    '2': 'Q2',
                                    '3': 'Q3',
                                    '4': 'Q4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'BCE',
                                '0-alt-variant': 'BCE',
                                '1': 'CE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y MMMM d, EEEE',
                            'long': 'y MMMM d',
                            'medium': 'y MMM d',
                            'short': 'y-MM-dd'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'Hms': 'HH:mm:ss',
                                'hms': 'h:mm:ss a',
                                'Hm': 'HH:mm',
                                'hm': 'h:mm a',
                                'H': 'HH',
                                'h': 'h a',
                                'GyMMMEd': 'G y MMM d, E',
                                'GyMMMd': 'G y MMM d',
                                'd': 'd',
                                'Ed': 'd, E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'G y MMM',
                                'yM': 'y-MM',
                                'yMd': 'y-MM-dd',
                                'yMEd': 'y-MM-dd, E',
                                'yMMM': 'y MMM',
                                'yMMMd': 'y MMM d',
                                'yMMMEd': 'y MMM d, E',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ',
                                'y': 'y',
                                'ms': 'mm:ss',
                                'MMMEd': 'MMM d, E',
                                'MMMd': 'MMM d',
                                'MMM': 'LLL',
                                'MEd': 'MM-dd, E',
                                'Md': 'MM-dd',
                                'M': 'L'
                            },
                            'appendItems': {
                                'Second': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Year': '{1} {0}',
                                'Week': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})'
                            },
                            'intervalFormats': {
                                'MMMEd': {
                                    'd': 'MMM d, E \u2013 MMM d, E',
                                    'M': 'MMM d, E \u2013 MMM d, E'
                                },
                                'MMMd': {
                                    'd': 'MMM d\u2013d',
                                    'M': 'MMM d \u2013 MMM d'
                                },
                                'MMM': {
                                    'M': 'LLL\u2013LLL'
                                },
                                'MEd': {
                                    'd': 'MM-dd, E \u2013 MM-dd, E',
                                    'M': 'MM-dd, E \u2013 MM-dd, E'
                                },
                                'Md': {
                                    'd': 'MM-dd \u2013 MM-dd',
                                    'M': 'MM-dd \u2013 MM-dd'
                                },
                                'M': {
                                    'M': 'MM\u2013MM'
                                },
                                'Hv': {
                                    'H': 'HH\u2013HH v'
                                },
                                'hv': {
                                    'a': 'h a \u2013 h a v',
                                    'h': 'h\u2013h a v'
                                },
                                'y': {
                                    'y': 'y\u2013y'
                                },
                                'yM': {
                                    'M': 'y-MM \u2013 y-MM',
                                    'y': 'y-MM \u2013 y-MM'
                                },
                                'yMd': {
                                    'd': 'y-MM-dd \u2013 y-MM-dd',
                                    'M': 'y-MM-dd \u2013 y-MM-dd',
                                    'y': 'y-MM-dd \u2013 y-MM-dd'
                                },
                                'yMEd': {
                                    'd': 'y-MM-dd, E \u2013 y-MM-dd, E',
                                    'M': 'y-MM-dd, E \u2013 y-MM-dd, E',
                                    'y': 'y-MM-dd, E \u2013 y-MM-dd, E'
                                },
                                'yMMM': {
                                    'M': 'y MMM\u2013MMM',
                                    'y': 'y MMM \u2013 y MMM'
                                },
                                'yMMMd': {
                                    'd': 'y MMM d\u2013d',
                                    'M': 'y MMM d \u2013 MMM d',
                                    'y': 'y MMM d \u2013 y MMM d'
                                },
                                'yMMMEd': {
                                    'd': 'y MMM d, E \u2013 MMM d, E',
                                    'M': 'y MMM d, E \u2013 MMM d, E',
                                    'y': 'y MMM d, E \u2013 y MMM d, E'
                                },
                                'yMMMM': {
                                    'M': 'y MMMM\u2013MMMM',
                                    'y': 'y MMMM \u2013 y MMMM'
                                },
                                'Hmv': {
                                    'H': 'HH:mm\u2013HH:mm v',
                                    'm': 'HH:mm\u2013HH:mm v'
                                },
                                'hmv': {
                                    'a': 'h:mm a \u2013 h:mm a v',
                                    'h': 'h:mm\u2013h:mm a v',
                                    'm': 'h:mm\u2013h:mm a v'
                                },
                                'Hm': {
                                    'H': 'HH:mm\u2013HH:mm',
                                    'm': 'HH:mm\u2013HH:mm'
                                },
                                'hm': {
                                    'a': 'h:mm a \u2013 h:mm a',
                                    'h': 'h:mm\u2013h:mm a',
                                    'm': 'h:mm\u2013h:mm a'
                                },
                                'H': {
                                    'H': 'HH\u2013HH'
                                },
                                'h': {
                                    'a': 'h a \u2013 h a',
                                    'h': 'h\u2013h a'
                                },
                                'd': {
                                    'd': 'd\u2013d'
                                },
                                'intervalFormatFallback': '{0} \u2013 {1}'
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})',
                    'zone': {
                        'Pacific': {
                            'Saipan': {
                                'exemplarCity': 'Saipan'
                            },
                            'Rarotonga': {
                                'exemplarCity': 'Rarotonga'
                            },
                            'Port_Moresby': {
                                'exemplarCity': 'Port Moresby'
                            },
                            'Ponape': {
                                'exemplarCity': 'Pohnpei'
                            },
                            'Pitcairn': {
                                'exemplarCity': 'Pitcairn'
                            },
                            'Palau': {
                                'exemplarCity': 'Palau'
                            },
                            'Auckland': {
                                'exemplarCity': 'Auckland'
                            },
                            'Apia': {
                                'exemplarCity': 'Apia'
                            },
                            'Funafuti': {
                                'exemplarCity': 'Funafuti'
                            },
                            'Galapagos': {
                                'exemplarCity': 'Galapagos'
                            },
                            'Gambier': {
                                'exemplarCity': 'Gambier'
                            },
                            'Guadalcanal': {
                                'exemplarCity': 'Guadalcanal'
                            },
                            'Guam': {
                                'exemplarCity': 'Guam'
                            },
                            'Honolulu': {
                                'exemplarCity': 'Honolulu'
                            },
                            'Wallis': {
                                'exemplarCity': 'Wallis'
                            },
                            'Wake': {
                                'exemplarCity': 'Wake'
                            },
                            'Truk': {
                                'exemplarCity': 'Chuuk'
                            },
                            'Tongatapu': {
                                'exemplarCity': 'Tongatapu'
                            },
                            'Tarawa': {
                                'exemplarCity': 'Tarawa'
                            },
                            'Tahiti': {
                                'exemplarCity': 'Tahiti'
                            },
                            'Kiritimati': {
                                'exemplarCity': 'Kiritimati'
                            },
                            'Johnston': {
                                'exemplarCity': 'Johnston'
                            },
                            'Chatham': {
                                'exemplarCity': 'Chatham'
                            },
                            'Easter': {
                                'exemplarCity': 'Easter'
                            },
                            'Efate': {
                                'exemplarCity': 'Efate'
                            },
                            'Enderbury': {
                                'exemplarCity': 'Enderbury'
                            },
                            'Fakaofo': {
                                'exemplarCity': 'Fakaofo'
                            },
                            'Fiji': {
                                'exemplarCity': 'Fiji'
                            },
                            'Kosrae': {
                                'exemplarCity': 'Kosrae'
                            },
                            'Kwajalein': {
                                'exemplarCity': 'Kwajalein'
                            },
                            'Majuro': {
                                'exemplarCity': 'Majuro'
                            },
                            'Marquesas': {
                                'exemplarCity': 'Marquesas'
                            },
                            'Midway': {
                                'exemplarCity': 'Midway'
                            },
                            'Nauru': {
                                'exemplarCity': 'Nauru'
                            },
                            'Niue': {
                                'exemplarCity': 'Niue'
                            },
                            'Norfolk': {
                                'exemplarCity': 'Norfolk'
                            },
                            'Noumea': {
                                'exemplarCity': 'Noumea'
                            },
                            'Pago_Pago': {
                                'exemplarCity': 'Pago Pago'
                            }
                        },
                        'Australia': {
                            'Lindeman': {
                                'exemplarCity': 'Lindeman'
                            },
                            'Hobart': {
                                'exemplarCity': 'Hobart'
                            },
                            'Eucla': {
                                'exemplarCity': 'Eucla'
                            },
                            'Darwin': {
                                'exemplarCity': 'Darwin'
                            },
                            'Sydney': {
                                'exemplarCity': 'Sydney'
                            },
                            'Perth': {
                                'exemplarCity': 'Perth'
                            },
                            'Melbourne': {
                                'exemplarCity': 'Melbourne'
                            },
                            'Lord_Howe': {
                                'exemplarCity': 'Lord Howe'
                            },
                            'Adelaide': {
                                'exemplarCity': 'Adelaide'
                            },
                            'Brisbane': {
                                'exemplarCity': 'Brisbane'
                            },
                            'Broken_Hill': {
                                'exemplarCity': 'Broken Hill'
                            },
                            'Currie': {
                                'exemplarCity': 'Currie'
                            }
                        },
                        'Indian': {
                            'Maldives': {
                                'exemplarCity': 'Maldives'
                            },
                            'Mahe': {
                                'exemplarCity': 'Mahe'
                            },
                            'Kerguelen': {
                                'exemplarCity': 'Kerguelen'
                            },
                            'Reunion': {
                                'exemplarCity': 'Reunion'
                            },
                            'Mayotte': {
                                'exemplarCity': 'Mayotte'
                            },
                            'Mauritius': {
                                'exemplarCity': 'Mauritius'
                            },
                            'Antananarivo': {
                                'exemplarCity': 'Antananarivo'
                            },
                            'Chagos': {
                                'exemplarCity': 'Chagos'
                            },
                            'Christmas': {
                                'exemplarCity': 'Christmas'
                            },
                            'Cocos': {
                                'exemplarCity': 'Cocos'
                            },
                            'Comoro': {
                                'exemplarCity': 'Comoro'
                            }
                        },
                        'Etc': {
                            'GMT-11': {
                                'exemplarCity': 'GMT-11'
                            },
                            'GMT-10': {
                                'exemplarCity': 'GMT-10'
                            },
                            'GMT-1': {
                                'exemplarCity': 'GMT-1'
                            },
                            'GMT9': {
                                'exemplarCity': 'GMT+9'
                            },
                            'GMT8': {
                                'exemplarCity': 'GMT+8'
                            },
                            'GMT7': {
                                'exemplarCity': 'GMT+7'
                            },
                            'GMT6': {
                                'exemplarCity': 'GMT+6'
                            },
                            'GMT5': {
                                'exemplarCity': 'GMT+5'
                            },
                            'GMT': {
                                'exemplarCity': 'GMT'
                            },
                            'GMT1': {
                                'exemplarCity': 'GMT+1'
                            },
                            'GMT10': {
                                'exemplarCity': 'GMT+10'
                            },
                            'GMT11': {
                                'exemplarCity': 'GMT+11'
                            },
                            'GMT-3': {
                                'exemplarCity': 'GMT-3'
                            },
                            'GMT-4': {
                                'exemplarCity': 'GMT-4'
                            },
                            'GMT-5': {
                                'exemplarCity': 'GMT-5'
                            },
                            'GMT-6': {
                                'exemplarCity': 'GMT-6'
                            },
                            'GMT-7': {
                                'exemplarCity': 'GMT-7'
                            },
                            'GMT-8': {
                                'exemplarCity': 'GMT-8'
                            },
                            'GMT-9': {
                                'exemplarCity': 'GMT-9'
                            },
                            'Unknown': {
                                'exemplarCity': 'Unknown'
                            },
                            'GMT-2': {
                                'exemplarCity': 'GMT-2'
                            },
                            'GMT-14': {
                                'exemplarCity': 'GMT-14'
                            },
                            'GMT-13': {
                                'exemplarCity': 'GMT-13'
                            },
                            'GMT-12': {
                                'exemplarCity': 'GMT-12'
                            },
                            'GMT4': {
                                'exemplarCity': 'GMT+4'
                            },
                            'GMT3': {
                                'exemplarCity': 'GMT+3'
                            },
                            'GMT2': {
                                'exemplarCity': 'GMT+2'
                            },
                            'GMT12': {
                                'exemplarCity': 'GMT+12'
                            }
                        },
                        'Antarctica': {
                            'Rothera': {
                                'exemplarCity': 'Rothera'
                            },
                            'Palmer': {
                                'exemplarCity': 'Palmer'
                            },
                            'McMurdo': {
                                'exemplarCity': 'McMurdo'
                            },
                            'Vostok': {
                                'exemplarCity': 'Vostok'
                            },
                            'Syowa': {
                                'exemplarCity': 'Syowa'
                            },
                            'South_Pole': {
                                'exemplarCity': 'South Pole'
                            },
                            'Casey': {
                                'exemplarCity': 'Casey'
                            },
                            'Davis': {
                                'exemplarCity': 'Davis'
                            },
                            'DumontDUrville': {
                                'exemplarCity': 'Dumont d\u2019Urville'
                            },
                            'Macquarie': {
                                'exemplarCity': 'Macquarie'
                            },
                            'Mawson': {
                                'exemplarCity': 'Mawson'
                            }
                        },
                        'Arctic': {
                            'Longyearbyen': {
                                'exemplarCity': 'Longyearbyen'
                            }
                        },
                        'America': {
                            'Toronto': {
                                'exemplarCity': 'Toronto'
                            },
                            'Tijuana': {
                                'exemplarCity': 'Tijuana'
                            },
                            'Thunder_Bay': {
                                'exemplarCity': 'Thunder Bay'
                            },
                            'Thule': {
                                'exemplarCity': 'Thule'
                            },
                            'Tegucigalpa': {
                                'exemplarCity': 'Tegucigalpa'
                            },
                            'Swift_Current': {
                                'exemplarCity': 'Swift Current'
                            },
                            'Chicago': {
                                'exemplarCity': 'Chicago'
                            },
                            'Cayman': {
                                'exemplarCity': 'Cayman'
                            },
                            'Cayenne': {
                                'exemplarCity': 'Cayenne'
                            },
                            'Catamarca': {
                                'exemplarCity': 'Catamarca'
                            },
                            'Caracas': {
                                'exemplarCity': 'Caracas'
                            },
                            'Cancun': {
                                'exemplarCity': 'Cancun'
                            },
                            'Campo_Grande': {
                                'exemplarCity': 'Campo Grande'
                            },
                            'Cambridge_Bay': {
                                'exemplarCity': 'Cambridge Bay'
                            },
                            'Buenos_Aires': {
                                'exemplarCity': 'Buenos Aires'
                            },
                            'Boise': {
                                'exemplarCity': 'Boise'
                            },
                            'Asuncion': {
                                'exemplarCity': 'Asuncion'
                            },
                            'Aruba': {
                                'exemplarCity': 'Aruba'
                            },
                            'Argentina': {
                                'Rio_Gallegos': {
                                    'exemplarCity': 'Rio Gallegos'
                                },
                                'San_Juan': {
                                    'exemplarCity': 'San Juan'
                                },
                                'Ushuaia': {
                                    'exemplarCity': 'Ushuaia'
                                },
                                'La_Rioja': {
                                    'exemplarCity': 'La Rioja'
                                },
                                'San_Luis': {
                                    'exemplarCity': 'San Luis'
                                },
                                'Salta': {
                                    'exemplarCity': 'Salta'
                                },
                                'Tucuman': {
                                    'exemplarCity': 'Tucuman'
                                }
                            },
                            'Araguaina': {
                                'exemplarCity': 'Araguaina'
                            },
                            'Antigua': {
                                'exemplarCity': 'Antigua'
                            },
                            'Anguilla': {
                                'exemplarCity': 'Anguilla'
                            },
                            'Anchorage': {
                                'exemplarCity': 'Anchorage'
                            },
                            'Adak': {
                                'exemplarCity': 'Adak'
                            },
                            'Bahia': {
                                'exemplarCity': 'Bahia'
                            },
                            'Bahia_Banderas': {
                                'exemplarCity': 'Bahia Banderas'
                            },
                            'Barbados': {
                                'exemplarCity': 'Barbados'
                            },
                            'Belem': {
                                'exemplarCity': 'Belem'
                            },
                            'Belize': {
                                'exemplarCity': 'Belize'
                            },
                            'Blanc-Sablon': {
                                'exemplarCity': 'Blanc-Sablon'
                            },
                            'Boa_Vista': {
                                'exemplarCity': 'Boa Vista'
                            },
                            'Bogota': {
                                'exemplarCity': 'Bogota'
                            },
                            'Curacao': {
                                'exemplarCity': 'Curacao'
                            },
                            'Danmarkshavn': {
                                'exemplarCity': 'Danmarkshavn'
                            },
                            'Dawson': {
                                'exemplarCity': 'Dawson'
                            },
                            'Dawson_Creek': {
                                'exemplarCity': 'Dawson Creek'
                            },
                            'Denver': {
                                'exemplarCity': 'Denver'
                            },
                            'Detroit': {
                                'exemplarCity': 'Detroit'
                            },
                            'Hermosillo': {
                                'exemplarCity': 'Hermosillo'
                            },
                            'Indiana': {
                                'Vincennes': {
                                    'exemplarCity': 'Vincennes, Indiana'
                                },
                                'Petersburg': {
                                    'exemplarCity': 'Petersburg, Indiana'
                                },
                                'Tell_City': {
                                    'exemplarCity': 'Tell City, Indiana'
                                },
                                'Knox': {
                                    'exemplarCity': 'Knox, Indiana'
                                },
                                'Winamac': {
                                    'exemplarCity': 'Winamac, Indiana'
                                },
                                'Marengo': {
                                    'exemplarCity': 'Marengo, Indiana'
                                },
                                'Vevay': {
                                    'exemplarCity': 'Vevay, Indiana'
                                }
                            },
                            'Indianapolis': {
                                'exemplarCity': 'Indianapolis'
                            },
                            'Inuvik': {
                                'exemplarCity': 'Inuvik'
                            },
                            'Iqaluit': {
                                'exemplarCity': 'Iqaluit'
                            },
                            'Jamaica': {
                                'exemplarCity': 'Jamaica'
                            },
                            'Jujuy': {
                                'exemplarCity': 'Jujuy'
                            },
                            'Juneau': {
                                'exemplarCity': 'Juneau'
                            },
                            'Yellowknife': {
                                'exemplarCity': 'Yellowknife'
                            },
                            'Yakutat': {
                                'exemplarCity': 'Yakutat'
                            },
                            'Winnipeg': {
                                'exemplarCity': 'Winnipeg'
                            },
                            'Whitehorse': {
                                'exemplarCity': 'Whitehorse'
                            },
                            'Vancouver': {
                                'exemplarCity': 'Vancouver'
                            },
                            'Tortola': {
                                'exemplarCity': 'Tortola'
                            },
                            'Kralendijk': {
                                'exemplarCity': 'Kralendijk'
                            },
                            'Kentucky': {
                                'Monticello': {
                                    'exemplarCity': 'Monticello, Kentucky'
                                }
                            },
                            'Havana': {
                                'exemplarCity': 'Havana'
                            },
                            'Halifax': {
                                'exemplarCity': 'Halifax'
                            },
                            'Guyana': {
                                'exemplarCity': 'Guyana'
                            },
                            'Guayaquil': {
                                'exemplarCity': 'Guayaquil'
                            },
                            'Guatemala': {
                                'exemplarCity': 'Guatemala'
                            },
                            'Guadeloupe': {
                                'exemplarCity': 'Guadeloupe'
                            },
                            'Grenada': {
                                'exemplarCity': 'Grenada'
                            },
                            'Grand_Turk': {
                                'exemplarCity': 'Grand Turk'
                            },
                            'Goose_Bay': {
                                'exemplarCity': 'Goose Bay'
                            },
                            'Godthab': {
                                'exemplarCity': 'Nuuk'
                            },
                            'Glace_Bay': {
                                'exemplarCity': 'Glace Bay'
                            },
                            'Fortaleza': {
                                'exemplarCity': 'Fortaleza'
                            },
                            'El_Salvador': {
                                'exemplarCity': 'El Salvador'
                            },
                            'Eirunepe': {
                                'exemplarCity': 'Eirunepe'
                            },
                            'Edmonton': {
                                'exemplarCity': 'Edmonton'
                            },
                            'Dominica': {
                                'exemplarCity': 'Dominica'
                            },
                            'Chihuahua': {
                                'exemplarCity': 'Chihuahua'
                            },
                            'Coral_Harbour': {
                                'exemplarCity': 'Atikokan'
                            },
                            'Cordoba': {
                                'exemplarCity': 'Cordoba'
                            },
                            'Costa_Rica': {
                                'exemplarCity': 'Costa Rica'
                            },
                            'Creston': {
                                'exemplarCity': 'Creston'
                            },
                            'Cuiaba': {
                                'exemplarCity': 'Cuiaba'
                            },
                            'La_Paz': {
                                'exemplarCity': 'La Paz'
                            },
                            'Lima': {
                                'exemplarCity': 'Lima'
                            },
                            'Los_Angeles': {
                                'exemplarCity': 'Los Angeles'
                            },
                            'Louisville': {
                                'exemplarCity': 'Louisville'
                            },
                            'Lower_Princes': {
                                'exemplarCity': 'Lower Prince\'s Quarter'
                            },
                            'Maceio': {
                                'exemplarCity': 'Maceio'
                            },
                            'Managua': {
                                'exemplarCity': 'Managua'
                            },
                            'Manaus': {
                                'exemplarCity': 'Manaus'
                            },
                            'Marigot': {
                                'exemplarCity': 'Marigot'
                            },
                            'Martinique': {
                                'exemplarCity': 'Martinique'
                            },
                            'Matamoros': {
                                'exemplarCity': 'Matamoros'
                            },
                            'Mazatlan': {
                                'exemplarCity': 'Mazatlan'
                            },
                            'Mendoza': {
                                'exemplarCity': 'Mendoza'
                            },
                            'Menominee': {
                                'exemplarCity': 'Menominee'
                            },
                            'Merida': {
                                'exemplarCity': 'Merida'
                            },
                            'Metlakatla': {
                                'exemplarCity': 'Metlakatla'
                            },
                            'Mexico_City': {
                                'exemplarCity': 'Mexico City'
                            },
                            'Miquelon': {
                                'exemplarCity': 'Miquelon'
                            },
                            'Moncton': {
                                'exemplarCity': 'Moncton'
                            },
                            'Monterrey': {
                                'exemplarCity': 'Monterrey'
                            },
                            'Montevideo': {
                                'exemplarCity': 'Montevideo'
                            },
                            'Montreal': {
                                'exemplarCity': 'Montreal'
                            },
                            'Montserrat': {
                                'exemplarCity': 'Montserrat'
                            },
                            'Nassau': {
                                'exemplarCity': 'Nassau'
                            },
                            'New_York': {
                                'exemplarCity': 'New York'
                            },
                            'Nipigon': {
                                'exemplarCity': 'Nipigon'
                            },
                            'Nome': {
                                'exemplarCity': 'Nome'
                            },
                            'Noronha': {
                                'exemplarCity': 'Noronha'
                            },
                            'North_Dakota': {
                                'Beulah': {
                                    'exemplarCity': 'Beulah, North Dakota'
                                },
                                'New_Salem': {
                                    'exemplarCity': 'New Salem, North Dakota'
                                },
                                'Center': {
                                    'exemplarCity': 'Center, North Dakota'
                                }
                            },
                            'Ojinaga': {
                                'exemplarCity': 'Ojinaga'
                            },
                            'Panama': {
                                'exemplarCity': 'Panama'
                            },
                            'Pangnirtung': {
                                'exemplarCity': 'Pangnirtung'
                            },
                            'Paramaribo': {
                                'exemplarCity': 'Paramaribo'
                            },
                            'Phoenix': {
                                'exemplarCity': 'Phoenix'
                            },
                            'Port-au-Prince': {
                                'exemplarCity': 'Port-au-Prince'
                            },
                            'Port_of_Spain': {
                                'exemplarCity': 'Port of Spain'
                            },
                            'Porto_Velho': {
                                'exemplarCity': 'Porto Velho'
                            },
                            'Puerto_Rico': {
                                'exemplarCity': 'Puerto Rico'
                            },
                            'Rainy_River': {
                                'exemplarCity': 'Rainy River'
                            },
                            'Rankin_Inlet': {
                                'exemplarCity': 'Rankin Inlet'
                            },
                            'Recife': {
                                'exemplarCity': 'Recife'
                            },
                            'Regina': {
                                'exemplarCity': 'Regina'
                            },
                            'Resolute': {
                                'exemplarCity': 'Resolute'
                            },
                            'Rio_Branco': {
                                'exemplarCity': 'Rio Branco'
                            },
                            'Santa_Isabel': {
                                'exemplarCity': 'Santa Isabel'
                            },
                            'Santarem': {
                                'exemplarCity': 'Santarem'
                            },
                            'Santiago': {
                                'exemplarCity': 'Santiago'
                            },
                            'Santo_Domingo': {
                                'exemplarCity': 'Santo Domingo'
                            },
                            'Sao_Paulo': {
                                'exemplarCity': 'Sao Paulo'
                            },
                            'Scoresbysund': {
                                'exemplarCity': 'Ittoqqortoormiit'
                            },
                            'Shiprock': {
                                'exemplarCity': 'Shiprock'
                            },
                            'Sitka': {
                                'exemplarCity': 'Sitka'
                            },
                            'St_Barthelemy': {
                                'exemplarCity': 'St. Barthelemy'
                            },
                            'St_Johns': {
                                'exemplarCity': 'St. John\u2019s'
                            },
                            'St_Kitts': {
                                'exemplarCity': 'St. Kitts'
                            },
                            'St_Lucia': {
                                'exemplarCity': 'St. Lucia'
                            },
                            'St_Thomas': {
                                'exemplarCity': 'St. Thomas'
                            },
                            'St_Vincent': {
                                'exemplarCity': 'St. Vincent'
                            }
                        },
                        'Atlantic': {
                            'South_Georgia': {
                                'exemplarCity': 'South Georgia'
                            },
                            'Reykjavik': {
                                'exemplarCity': 'Reykjavik'
                            },
                            'Stanley': {
                                'exemplarCity': 'Stanley'
                            },
                            'St_Helena': {
                                'exemplarCity': 'St. Helena'
                            },
                            'Azores': {
                                'exemplarCity': 'Azores'
                            },
                            'Bermuda': {
                                'exemplarCity': 'Bermuda'
                            },
                            'Canary': {
                                'exemplarCity': 'Canary'
                            },
                            'Cape_Verde': {
                                'exemplarCity': 'Cape Verde'
                            },
                            'Faeroe': {
                                'exemplarCity': 'Faroe'
                            },
                            'Madeira': {
                                'exemplarCity': 'Madeira'
                            }
                        },
                        'Europe': {
                            'Oslo': {
                                'exemplarCity': 'Oslo'
                            },
                            'Moscow': {
                                'exemplarCity': 'Moscow'
                            },
                            'Monaco': {
                                'exemplarCity': 'Monaco'
                            },
                            'Minsk': {
                                'exemplarCity': 'Minsk'
                            },
                            'Mariehamn': {
                                'exemplarCity': 'Mariehamn'
                            },
                            'Malta': {
                                'exemplarCity': 'Malta'
                            },
                            'Madrid': {
                                'exemplarCity': 'Madrid'
                            },
                            'Luxembourg': {
                                'exemplarCity': 'Luxembourg'
                            },
                            'London': {
                                'exemplarCity': 'London'
                            },
                            'Ljubljana': {
                                'exemplarCity': 'Ljubljana'
                            },
                            'Lisbon': {
                                'exemplarCity': 'Lisbon'
                            },
                            'Kiev': {
                                'exemplarCity': 'Kiev'
                            },
                            'Kaliningrad': {
                                'exemplarCity': 'Kaliningrad'
                            },
                            'Jersey': {
                                'exemplarCity': 'Jersey'
                            },
                            'Istanbul': {
                                'exemplarCity': 'Istanbul'
                            },
                            'Isle_of_Man': {
                                'exemplarCity': 'Isle of Man'
                            },
                            'Bucharest': {
                                'exemplarCity': 'Bucharest'
                            },
                            'Brussels': {
                                'exemplarCity': 'Brussels'
                            },
                            'Bratislava': {
                                'exemplarCity': 'Bratislava'
                            },
                            'Berlin': {
                                'exemplarCity': 'Berlin'
                            },
                            'Belgrade': {
                                'exemplarCity': 'Belgrade'
                            },
                            'Athens': {
                                'exemplarCity': 'Athens'
                            },
                            'Andorra': {
                                'exemplarCity': 'Andorra'
                            },
                            'Amsterdam': {
                                'exemplarCity': 'Amsterdam'
                            },
                            'Simferopol': {
                                'exemplarCity': 'Simferopol'
                            },
                            'Skopje': {
                                'exemplarCity': 'Skopje'
                            },
                            'Sofia': {
                                'exemplarCity': 'Sofia'
                            },
                            'Stockholm': {
                                'exemplarCity': 'Stockholm'
                            },
                            'Tallinn': {
                                'exemplarCity': 'Tallinn'
                            },
                            'Tirane': {
                                'exemplarCity': 'Tirane'
                            },
                            'Uzhgorod': {
                                'exemplarCity': 'Uzhgorod'
                            },
                            'Vaduz': {
                                'exemplarCity': 'Vaduz'
                            },
                            'Zurich': {
                                'exemplarCity': 'Zurich'
                            },
                            'Zaporozhye': {
                                'exemplarCity': 'Zaporozhye'
                            },
                            'Zagreb': {
                                'exemplarCity': 'Zagreb'
                            },
                            'Warsaw': {
                                'exemplarCity': 'Warsaw'
                            },
                            'Volgograd': {
                                'exemplarCity': 'Volgograd'
                            },
                            'Vilnius': {
                                'exemplarCity': 'Vilnius'
                            },
                            'Vienna': {
                                'exemplarCity': 'Vienna'
                            },
                            'Vatican': {
                                'exemplarCity': 'Vatican'
                            },
                            'Sarajevo': {
                                'exemplarCity': 'Sarajevo'
                            },
                            'San_Marino': {
                                'exemplarCity': 'San Marino'
                            },
                            'Samara': {
                                'exemplarCity': 'Samara'
                            },
                            'Rome': {
                                'exemplarCity': 'Rome'
                            },
                            'Riga': {
                                'exemplarCity': 'Riga'
                            },
                            'Prague': {
                                'exemplarCity': 'Prague'
                            },
                            'Podgorica': {
                                'exemplarCity': 'Podgorica'
                            },
                            'Paris': {
                                'exemplarCity': 'Paris'
                            },
                            'Helsinki': {
                                'exemplarCity': 'Helsinki'
                            },
                            'Guernsey': {
                                'exemplarCity': 'Guernsey'
                            },
                            'Gibraltar': {
                                'exemplarCity': 'Gibraltar'
                            },
                            'Dublin': {
                                'exemplarCity': 'Dublin'
                            },
                            'Copenhagen': {
                                'exemplarCity': 'Copenhagen'
                            },
                            'Chisinau': {
                                'exemplarCity': 'Chisinau'
                            },
                            'Busingen': {
                                'exemplarCity': 'Busingen'
                            },
                            'Budapest': {
                                'exemplarCity': 'Budapest'
                            }
                        },
                        'Africa': {
                            'Libreville': {
                                'exemplarCity': 'Libreville'
                            },
                            'Lagos': {
                                'exemplarCity': 'Lagos'
                            },
                            'Kinshasa': {
                                'exemplarCity': 'Kinshasa'
                            },
                            'Kigali': {
                                'exemplarCity': 'Kigali'
                            },
                            'Khartoum': {
                                'exemplarCity': 'Khartoum'
                            },
                            'Kampala': {
                                'exemplarCity': 'Kampala'
                            },
                            'Juba': {
                                'exemplarCity': 'Juba'
                            },
                            'Johannesburg': {
                                'exemplarCity': 'Johannesburg'
                            },
                            'Harare': {
                                'exemplarCity': 'Harare'
                            },
                            'Gaborone': {
                                'exemplarCity': 'Gaborone'
                            },
                            'Freetown': {
                                'exemplarCity': 'Freetown'
                            },
                            'El_Aaiun': {
                                'exemplarCity': 'El Aaiun'
                            },
                            'Douala': {
                                'exemplarCity': 'Douala'
                            },
                            'Djibouti': {
                                'exemplarCity': 'Djibouti'
                            },
                            'Dar_es_Salaam': {
                                'exemplarCity': 'Dar es Salaam'
                            },
                            'Dakar': {
                                'exemplarCity': 'Dakar'
                            },
                            'Banjul': {
                                'exemplarCity': 'Banjul'
                            },
                            'Bangui': {
                                'exemplarCity': 'Bangui'
                            },
                            'Bamako': {
                                'exemplarCity': 'Bamako'
                            },
                            'Asmera': {
                                'exemplarCity': 'Asmara'
                            },
                            'Malabo': {
                                'exemplarCity': 'Malabo'
                            },
                            'Maputo': {
                                'exemplarCity': 'Maputo'
                            },
                            'Maseru': {
                                'exemplarCity': 'Maseru'
                            },
                            'Mbabane': {
                                'exemplarCity': 'Mbabane'
                            },
                            'Mogadishu': {
                                'exemplarCity': 'Mogadishu'
                            },
                            'Monrovia': {
                                'exemplarCity': 'Monrovia'
                            },
                            'Nairobi': {
                                'exemplarCity': 'Nairobi'
                            },
                            'Ndjamena': {
                                'exemplarCity': 'Ndjamena'
                            },
                            'Windhoek': {
                                'exemplarCity': 'Windhoek'
                            },
                            'Tunis': {
                                'exemplarCity': 'Tunis'
                            },
                            'Tripoli': {
                                'exemplarCity': 'Tripoli'
                            },
                            'Sao_Tome': {
                                'exemplarCity': 'Sao Tome'
                            },
                            'Porto-Novo': {
                                'exemplarCity': 'Porto-Novo'
                            },
                            'Ouagadougou': {
                                'exemplarCity': 'Ouagadougou'
                            },
                            'Nouakchott': {
                                'exemplarCity': 'Nouakchott'
                            },
                            'Niamey': {
                                'exemplarCity': 'Niamey'
                            },
                            'Lusaka': {
                                'exemplarCity': 'Lusaka'
                            },
                            'Lubumbashi': {
                                'exemplarCity': 'Lubumbashi'
                            },
                            'Luanda': {
                                'exemplarCity': 'Luanda'
                            },
                            'Lome': {
                                'exemplarCity': 'Lome'
                            },
                            'Conakry': {
                                'exemplarCity': 'Conakry'
                            },
                            'Ceuta': {
                                'exemplarCity': 'Ceuta'
                            },
                            'Casablanca': {
                                'exemplarCity': 'Casablanca'
                            },
                            'Cairo': {
                                'exemplarCity': 'Cairo'
                            },
                            'Bujumbura': {
                                'exemplarCity': 'Bujumbura'
                            },
                            'Brazzaville': {
                                'exemplarCity': 'Brazzaville'
                            },
                            'Blantyre': {
                                'exemplarCity': 'Blantyre'
                            },
                            'Bissau': {
                                'exemplarCity': 'Bissau'
                            },
                            'Abidjan': {
                                'exemplarCity': 'Abidjan'
                            },
                            'Accra': {
                                'exemplarCity': 'Accra'
                            },
                            'Addis_Ababa': {
                                'exemplarCity': 'Addis Ababa'
                            },
                            'Algiers': {
                                'exemplarCity': 'Algiers'
                            }
                        },
                        'Asia': {
                            'Shanghai': {
                                'exemplarCity': 'Shanghai'
                            },
                            'Seoul': {
                                'exemplarCity': 'Seoul'
                            },
                            'Samarkand': {
                                'exemplarCity': 'Samarkand'
                            },
                            'Sakhalin': {
                                'exemplarCity': 'Sakhalin'
                            },
                            'Saigon': {
                                'exemplarCity': 'Ho Chi Minh'
                            },
                            'Riyadh': {
                                'exemplarCity': 'Riyadh'
                            },
                            'Rangoon': {
                                'exemplarCity': 'Rangoon'
                            },
                            'Qyzylorda': {
                                'exemplarCity': 'Qyzylorda'
                            },
                            'Qatar': {
                                'exemplarCity': 'Qatar'
                            },
                            'Pyongyang': {
                                'exemplarCity': 'Pyongyang'
                            },
                            'Pontianak': {
                                'exemplarCity': 'Pontianak'
                            },
                            'Phnom_Penh': {
                                'exemplarCity': 'Phnom Penh'
                            },
                            'Oral': {
                                'exemplarCity': 'Oral'
                            },
                            'Omsk': {
                                'exemplarCity': 'Omsk'
                            },
                            'Novosibirsk': {
                                'exemplarCity': 'Novosibirsk'
                            },
                            'Baghdad': {
                                'exemplarCity': 'Baghdad'
                            },
                            'Chongqing': {
                                'exemplarCity': 'Chongqing'
                            },
                            'Colombo': {
                                'exemplarCity': 'Colombo'
                            },
                            'Damascus': {
                                'exemplarCity': 'Damascus'
                            },
                            'Dhaka': {
                                'exemplarCity': 'Dhaka'
                            },
                            'Dili': {
                                'exemplarCity': 'Dili'
                            },
                            'Dubai': {
                                'exemplarCity': 'Dubai'
                            },
                            'Dushanbe': {
                                'exemplarCity': 'Dushanbe'
                            },
                            'Gaza': {
                                'exemplarCity': 'Gaza'
                            },
                            'Harbin': {
                                'exemplarCity': 'Harbin'
                            },
                            'Hebron': {
                                'exemplarCity': 'Hebron'
                            },
                            'Hong_Kong': {
                                'exemplarCity': 'Hong Kong'
                            },
                            'Hovd': {
                                'exemplarCity': 'Hovd'
                            },
                            'Irkutsk': {
                                'exemplarCity': 'Irkutsk'
                            },
                            'Jakarta': {
                                'exemplarCity': 'Jakarta'
                            },
                            'Jayapura': {
                                'exemplarCity': 'Jayapura'
                            },
                            'Ulaanbaatar': {
                                'exemplarCity': 'Ulaanbaatar'
                            },
                            'Urumqi': {
                                'exemplarCity': 'Urumqi'
                            },
                            'Ust-Nera': {
                                'exemplarCity': 'Ust-Nera'
                            },
                            'Vientiane': {
                                'exemplarCity': 'Vientiane'
                            },
                            'Vladivostok': {
                                'exemplarCity': 'Vladivostok'
                            },
                            'Yakutsk': {
                                'exemplarCity': 'Yakutsk'
                            },
                            'Yekaterinburg': {
                                'exemplarCity': 'Yekaterinburg'
                            },
                            'Yerevan': {
                                'exemplarCity': 'Yerevan'
                            },
                            'Tokyo': {
                                'exemplarCity': 'Tokyo'
                            },
                            'Thimphu': {
                                'exemplarCity': 'Thimphu'
                            },
                            'Tehran': {
                                'exemplarCity': 'Tehran'
                            },
                            'Tbilisi': {
                                'exemplarCity': 'Tbilisi'
                            },
                            'Tashkent': {
                                'exemplarCity': 'Tashkent'
                            },
                            'Taipei': {
                                'exemplarCity': 'Taipei'
                            },
                            'Singapore': {
                                'exemplarCity': 'Singapore'
                            },
                            'Jerusalem': {
                                'exemplarCity': 'Jerusalem'
                            },
                            'Ashgabat': {
                                'exemplarCity': 'Ashgabat'
                            },
                            'Aqtobe': {
                                'exemplarCity': 'Aqtobe'
                            },
                            'Aqtau': {
                                'exemplarCity': 'Aqtau'
                            },
                            'Anadyr': {
                                'exemplarCity': 'Anadyr'
                            },
                            'Amman': {
                                'exemplarCity': 'Amman'
                            },
                            'Almaty': {
                                'exemplarCity': 'Almaty'
                            },
                            'Aden': {
                                'exemplarCity': 'Aden'
                            },
                            'Bahrain': {
                                'exemplarCity': 'Bahrain'
                            },
                            'Baku': {
                                'exemplarCity': 'Baku'
                            },
                            'Bangkok': {
                                'exemplarCity': 'Bangkok'
                            },
                            'Beirut': {
                                'exemplarCity': 'Beirut'
                            },
                            'Bishkek': {
                                'exemplarCity': 'Bishkek'
                            },
                            'Brunei': {
                                'exemplarCity': 'Brunei'
                            },
                            'Calcutta': {
                                'exemplarCity': 'Kolkata'
                            },
                            'Choibalsan': {
                                'exemplarCity': 'Choibalsan'
                            },
                            'Kabul': {
                                'exemplarCity': 'Kabul'
                            },
                            'Kamchatka': {
                                'exemplarCity': 'Kamchatka'
                            },
                            'Karachi': {
                                'exemplarCity': 'Karachi'
                            },
                            'Kashgar': {
                                'exemplarCity': 'Kashgar'
                            },
                            'Katmandu': {
                                'exemplarCity': 'Kathmandu'
                            },
                            'Khandyga': {
                                'exemplarCity': 'Khandyga'
                            },
                            'Krasnoyarsk': {
                                'exemplarCity': 'Krasnoyarsk'
                            },
                            'Kuala_Lumpur': {
                                'exemplarCity': 'Kuala Lumpur'
                            },
                            'Kuching': {
                                'exemplarCity': 'Kuching'
                            },
                            'Kuwait': {
                                'exemplarCity': 'Kuwait'
                            },
                            'Macau': {
                                'exemplarCity': 'Macau'
                            },
                            'Magadan': {
                                'exemplarCity': 'Magadan'
                            },
                            'Makassar': {
                                'exemplarCity': 'Makassar'
                            },
                            'Manila': {
                                'exemplarCity': 'Manila'
                            },
                            'Muscat': {
                                'exemplarCity': 'Muscat'
                            },
                            'Nicosia': {
                                'exemplarCity': 'Nicosia'
                            },
                            'Novokuznetsk': {
                                'exemplarCity': 'Novokuznetsk'
                            }
                        }
                    }
                },
                'localeDisplayPattern': {
                    'localePattern': '{0} ({1})',
                    'localeSeparator': '{0}, {1}',
                    'localeKeyTypePattern': '{0}: {1}'
                },
                'keys': {
                    'calendar': 'calendar',
                    'collation': 'collation',
                    'currency': 'currency',
                    'numbers': 'numbers'
                },
                'types': {
                    'calendar': {
                        'japanese': 'japanese',
                        'iso8601': 'iso8601',
                        'coptic': 'coptic',
                        'dangi': 'dangi',
                        'ethiopic': 'ethiopic',
                        'ethiopic-amete-alem': 'ethiopic-amete-alem',
                        'gregorian': 'gregorian',
                        'hebrew': 'hebrew',
                        'persian': 'persian',
                        'roc': 'roc',
                        'chinese': 'chinese',
                        'buddhist': 'buddhist',
                        'indian': 'indian',
                        'islamic': 'islamic',
                        'islamic-civil': 'islamic-civil',
                        'islamic-rgsa': 'islamic-rgsa',
                        'islamic-tbla': 'islamic-tbla',
                        'islamic-umalqura': 'islamic-umalqura'
                    },
                    'collation': {
                        'phonebook': 'phonebook',
                        'gb2312han': 'gb2312han',
                        'eor': 'eor',
                        'ducet': 'ducet',
                        'dictionary': 'dictionary',
                        'big5han': 'big5han',
                        'traditional': 'traditional',
                        'zhuyin': 'zhuyin',
                        'unihan': 'unihan',
                        'stroke': 'stroke',
                        'searchjl': 'searchjl',
                        'search': 'search',
                        'reformed': 'reformed',
                        'pinyin': 'pinyin',
                        'standard': 'standard'
                    },
                    'numbers': {
                        'laoo': 'laoo',
                        'lanatham': 'lanatham',
                        'lana': 'lana',
                        'knda': 'knda',
                        'khmr': 'khmr',
                        'kali': 'kali',
                        'jpanfin': 'jpanfin',
                        'jpan': 'jpan',
                        'java': 'java',
                        'hebr': 'hebr',
                        'hantfin': 'hantfin',
                        'hant': 'hant',
                        'hansfin': 'hansfin',
                        'hans': 'hans',
                        'hanidec': 'hanidec',
                        'guru': 'guru',
                        'cakm': 'cakm',
                        'brah': 'brah',
                        'beng': 'beng',
                        'bali': 'bali',
                        'armnlow': 'armnlow',
                        'armn': 'armn',
                        'arabext': 'arabext',
                        'arab': 'arab',
                        'cham': 'cham',
                        'deva': 'deva',
                        'orya': 'orya',
                        'osma': 'osma',
                        'roman': 'roman',
                        'romanlow': 'romanlow',
                        'saur': 'saur',
                        'shrd': 'shrd',
                        'sora': 'sora',
                        'sund': 'sund',
                        'vaii': 'vaii',
                        'tibt': 'tibt',
                        'thai': 'thai',
                        'telu': 'telu',
                        'tamldec': 'tamldec',
                        'taml': 'taml',
                        'talu': 'talu',
                        'takr': 'takr',
                        'olck': 'olck',
                        'nkoo': 'nkoo',
                        'mymrshan': 'mymrshan',
                        'mymr': 'mymr',
                        'mtei': 'mtei',
                        'mong': 'mong',
                        'mlym': 'mlym',
                        'limb': 'limb',
                        'lepc': 'lepc',
                        'latn': 'latn',
                        'gujr': 'gujr',
                        'greklow': 'greklow',
                        'grek': 'grek',
                        'geor': 'geor',
                        'fullwide': 'fullwide',
                        'ethi': 'ethi'
                    }
                },
                'codePatterns': {
                    'language': '{0}',
                    'script': '{0}',
                    'territory': '{0}'
                },
                'long': {
                    'mass-ounce': {
                        'unitPattern-count-other': '{0} oz'
                    },
                    'mass-kilogram': {
                        'unitPattern-count-other': '{0} kg'
                    },
                    'mass-gram': {
                        'unitPattern-count-other': '{0} g'
                    },
                    'length-yard': {
                        'unitPattern-count-other': '{0} yd'
                    },
                    'length-picometer': {
                        'unitPattern-count-other': '{0} pm'
                    },
                    'length-millimeter': {
                        'unitPattern-count-other': '{0} mm'
                    },
                    'length-mile': {
                        'unitPattern-count-other': '{0} mi'
                    },
                    'length-meter': {
                        'unitPattern-count-other': '{0} m'
                    },
                    'length-light-year': {
                        'unitPattern-count-other': '{0} ly'
                    },
                    'length-kilometer': {
                        'unitPattern-count-other': '{0} km'
                    },
                    'length-inch': {
                        'unitPattern-count-other': '{0} in'
                    },
                    'length-foot': {
                        'unitPattern-count-other': '{0} ft'
                    },
                    'length-centimeter': {
                        'unitPattern-count-other': '{0} cm'
                    },
                    'duration-year': {
                        'unitPattern-count-other': '{0} y'
                    },
                    'duration-week': {
                        'unitPattern-count-other': '{0} w'
                    },
                    'duration-month': {
                        'unitPattern-count-other': '{0} m'
                    },
                    'mass-pound': {
                        'unitPattern-count-other': '{0} lb'
                    },
                    'power-horsepower': {
                        'unitPattern-count-other': '{0} hp'
                    },
                    'power-kilowatt': {
                        'unitPattern-count-other': '{0} kW'
                    },
                    'power-watt': {
                        'unitPattern-count-other': '{0} W'
                    },
                    'pressure-hectopascal': {
                        'unitPattern-count-other': '{0} hPa'
                    },
                    'pressure-inch-hg': {
                        'unitPattern-count-other': '{0} inHg'
                    },
                    'pressure-millibar': {
                        'unitPattern-count-other': '{0} mbar'
                    },
                    'volume-liter': {
                        'unitPattern-count-other': '{0} l'
                    },
                    'volume-cubic-mile': {
                        'unitPattern-count-other': '{0} mi\u00B3'
                    },
                    'volume-cubic-kilometer': {
                        'unitPattern-count-other': '{0} km\u00B3'
                    },
                    'temperature-fahrenheit': {
                        'unitPattern-count-other': '{0}\u00B0F'
                    },
                    'temperature-celsius': {
                        'unitPattern-count-other': '{0}\u00B0C'
                    },
                    'speed-mile-per-hour': {
                        'unitPattern-count-other': '{0} mi/h'
                    },
                    'speed-meter-per-second': {
                        'unitPattern-count-other': '{0} m/s'
                    },
                    'speed-kilometer-per-hour': {
                        'unitPattern-count-other': '{0} km/h'
                    },
                    'duration-minute': {
                        'unitPattern-count-other': '{0} min'
                    },
                    'duration-millisecond': {
                        'unitPattern-count-other': '{0} ms'
                    },
                    'duration-hour': {
                        'unitPattern-count-other': '{0} h'
                    },
                    'duration-day': {
                        'unitPattern-count-other': '{0} d'
                    },
                    'area-square-mile': {
                        'unitPattern-count-other': '{0} mi\u00B2'
                    },
                    'area-square-meter': {
                        'unitPattern-count-other': '{0} m\u00B2'
                    },
                    'area-square-kilometer': {
                        'unitPattern-count-other': '{0} km\u00B2'
                    },
                    'per': {
                        'compoundUnitPattern': '{0}/{1}'
                    },
                    'acceleration-g-force': {
                        'unitPattern-count-other': '{0} G'
                    },
                    'angle-arc-minute': {
                        'unitPattern-count-other': '{0}\u2032'
                    },
                    'angle-arc-second': {
                        'unitPattern-count-other': '{0}\u2033'
                    },
                    'angle-degree': {
                        'unitPattern-count-other': '{0}\u00B0'
                    },
                    'area-acre': {
                        'unitPattern-count-other': '{0} ac'
                    },
                    'area-hectare': {
                        'unitPattern-count-other': '{0} ha'
                    },
                    'area-square-foot': {
                        'unitPattern-count-other': '{0} ft\u00B2'
                    },
                    'duration-second': {
                        'unitPattern-count-other': '{0} s'
                    }
                },
                'short': {
                    'mass-ounce': {
                        'unitPattern-count-other': '{0} oz'
                    },
                    'mass-kilogram': {
                        'unitPattern-count-other': '{0} kg'
                    },
                    'mass-gram': {
                        'unitPattern-count-other': '{0} g'
                    },
                    'length-yard': {
                        'unitPattern-count-other': '{0} yd'
                    },
                    'length-picometer': {
                        'unitPattern-count-other': '{0} pm'
                    },
                    'length-millimeter': {
                        'unitPattern-count-other': '{0} mm'
                    },
                    'length-mile': {
                        'unitPattern-count-other': '{0} mi'
                    },
                    'length-meter': {
                        'unitPattern-count-other': '{0} m'
                    },
                    'length-light-year': {
                        'unitPattern-count-other': '{0} ly'
                    },
                    'length-kilometer': {
                        'unitPattern-count-other': '{0} km'
                    },
                    'length-inch': {
                        'unitPattern-count-other': '{0} in'
                    },
                    'length-foot': {
                        'unitPattern-count-other': '{0} ft'
                    },
                    'length-centimeter': {
                        'unitPattern-count-other': '{0} cm'
                    },
                    'duration-year': {
                        'unitPattern-count-other': '{0} y'
                    },
                    'duration-week': {
                        'unitPattern-count-other': '{0} w'
                    },
                    'duration-month': {
                        'unitPattern-count-other': '{0} m'
                    },
                    'mass-pound': {
                        'unitPattern-count-other': '{0} lb'
                    },
                    'power-horsepower': {
                        'unitPattern-count-other': '{0} hp'
                    },
                    'power-kilowatt': {
                        'unitPattern-count-other': '{0} kW'
                    },
                    'power-watt': {
                        'unitPattern-count-other': '{0} W'
                    },
                    'pressure-hectopascal': {
                        'unitPattern-count-other': '{0} hPa'
                    },
                    'pressure-inch-hg': {
                        'unitPattern-count-other': '{0} inHg'
                    },
                    'pressure-millibar': {
                        'unitPattern-count-other': '{0} mbar'
                    },
                    'volume-liter': {
                        'unitPattern-count-other': '{0} l'
                    },
                    'volume-cubic-mile': {
                        'unitPattern-count-other': '{0} mi\u00B3'
                    },
                    'volume-cubic-kilometer': {
                        'unitPattern-count-other': '{0} km\u00B3'
                    },
                    'temperature-fahrenheit': {
                        'unitPattern-count-other': '{0}\u00B0F'
                    },
                    'temperature-celsius': {
                        'unitPattern-count-other': '{0}\u00B0C'
                    },
                    'speed-mile-per-hour': {
                        'unitPattern-count-other': '{0} mi/h'
                    },
                    'speed-meter-per-second': {
                        'unitPattern-count-other': '{0} m/s'
                    },
                    'speed-kilometer-per-hour': {
                        'unitPattern-count-other': '{0} km/h'
                    },
                    'duration-minute': {
                        'unitPattern-count-other': '{0} min'
                    },
                    'duration-millisecond': {
                        'unitPattern-count-other': '{0} ms'
                    },
                    'duration-hour': {
                        'unitPattern-count-other': '{0} h'
                    },
                    'duration-day': {
                        'unitPattern-count-other': '{0} d'
                    },
                    'area-square-mile': {
                        'unitPattern-count-other': '{0} mi\u00B2'
                    },
                    'area-square-meter': {
                        'unitPattern-count-other': '{0} m\u00B2'
                    },
                    'area-square-kilometer': {
                        'unitPattern-count-other': '{0} km\u00B2'
                    },
                    'per': {
                        'compoundUnitPattern': '{0}/{1}'
                    },
                    'acceleration-g-force': {
                        'unitPattern-count-other': '{0} G'
                    },
                    'angle-arc-minute': {
                        'unitPattern-count-other': '{0}\u2032'
                    },
                    'angle-arc-second': {
                        'unitPattern-count-other': '{0}\u2033'
                    },
                    'angle-degree': {
                        'unitPattern-count-other': '{0}\u00B0'
                    },
                    'area-acre': {
                        'unitPattern-count-other': '{0} ac'
                    },
                    'area-hectare': {
                        'unitPattern-count-other': '{0} ha'
                    },
                    'area-square-foot': {
                        'unitPattern-count-other': '{0} ft\u00B2'
                    },
                    'duration-second': {
                        'unitPattern-count-other': '{0} s'
                    }
                }
            }, false);

            AstroDate.leapSeconds({
                '1972': {
                    '6': {
                        '30': 1
                    },
                    '12': {
                        '31': 1
                    }
                },
                '1973': {
                    '12': {
                        '31': 1
                    }
                },
                '1974': {
                    '12': {
                        '31': 1
                    }
                },
                '1975': {
                    '12': {
                        '31': 1
                    }
                },
                '1976': {
                    '12': {
                        '31': 1
                    }
                },
                '1977': {
                    '12': {
                        '31': 1
                    }
                },
                '1978': {
                    '12': {
                        '31': 1
                    }
                },
                '1979': {
                    '12': {
                        '31': 1
                    }
                },
                '1981': {
                    '6': {
                        '30': 1
                    }
                },
                '1982': {
                    '6': {
                        '30': 1
                    }
                },
                '1983': {
                    '6': {
                        '30': 1
                    }
                },
                '1985': {
                    '6': {
                        '30': 1
                    }
                },
                '1987': {
                    '12': {
                        '31': 1
                    }
                },
                '1989': {
                    '12': {
                        '31': 1
                    }
                },
                '1990': {
                    '12': {
                        '31': 1
                    }
                },
                '1992': {
                    '6': {
                        '30': 1
                    }
                },
                '1993': {
                    '6': {
                        '30': 1
                    }
                },
                '1994': {
                    '6': {
                        '30': 1
                    }
                },
                '1995': {
                    '12': {
                        '31': 1
                    }
                },
                '1997': {
                    '6': {
                        '30': 1
                    }
                },
                '1998': {
                    '12': {
                        '31': 1
                    }
                },
                '2005': {
                    '12': {
                        '31': 1
                    }
                },
                '2008': {
                    '12': {
                        '31': 1
                    }
                },
                '2012': {
                    '6': {
                        '30': 1
                    }
                },
                'total': {
                    '6': {
                        '30': 10
                    },
                    '12': {
                        '31': 15
                    },
                    'sum': 35
                }
            }, false);

            AstroDate.supplemental({
                'weekData': {
                    'minDays': {
                        'LT': '4',
                        'LI': '4',
                        'JE': '4',
                        'IT': '4',
                        'IS': '4',
                        'IM': '4',
                        'IE': '4',
                        'HU': '4',
                        'GU': '1',
                        'GR': '4',
                        'GP': '4',
                        'GI': '4',
                        'GG': '4',
                        'GF': '4',
                        'GB': '4',
                        'FR': '4',
                        'LU': '4',
                        'MC': '4',
                        'MQ': '4',
                        'NL': '4',
                        'NO': '4',
                        'PL': '4',
                        'PT': '4',
                        'RE': '4',
                        'VI': '1',
                        'VA': '4',
                        'US': '1',
                        'UM': '1',
                        'SM': '4',
                        'SK': '4',
                        'SJ': '4',
                        'SE': '4',
                        'FO': '4',
                        'FJ': '4',
                        'FI': '4',
                        'ES': '4',
                        'EE': '4',
                        'DK': '4',
                        'DE': '4',
                        'CZ': '4',
                        '001': '1',
                        'AD': '4',
                        'AN': '4',
                        'AT': '4',
                        'AX': '4',
                        'BE': '4',
                        'BG': '4',
                        'CH': '4'
                    },
                    'firstDay': {
                        'SK': 'mon',
                        'SI': 'mon',
                        'SG': 'sun',
                        'SE': 'mon',
                        'SD': 'sat',
                        'SA': 'sun',
                        'RU': 'mon',
                        'RS': 'mon',
                        'RO': 'mon',
                        'RE': 'mon',
                        'QA': 'sat',
                        'PY': 'sun',
                        'PT': 'mon',
                        'PR': 'sun',
                        'PL': 'mon',
                        'PK': 'sun',
                        'PH': 'sun',
                        'PE': 'sun',
                        'PA': 'sun',
                        'OM': 'sat',
                        'NZ': 'sun',
                        'NP': 'sun',
                        'NO': 'mon',
                        'NL': 'mon',
                        'AN': 'mon',
                        'AR': 'sun',
                        'AS': 'sun',
                        'AT': 'mon',
                        'AU': 'sun',
                        'AX': 'mon',
                        'AZ': 'mon',
                        'BA': 'mon',
                        'CN': 'sun',
                        'CO': 'sun',
                        'CR': 'mon',
                        'CY': 'mon',
                        'CZ': 'mon',
                        'DE': 'mon',
                        'DJ': 'sat',
                        'DK': 'mon',
                        'DM': 'sun',
                        'DO': 'sun',
                        'DZ': 'sat',
                        'EC': 'mon',
                        'EE': 'mon',
                        'EG': 'sat',
                        'ES': 'mon',
                        'ET': 'sun',
                        'FI': 'mon',
                        'FJ': 'mon',
                        'FO': 'mon',
                        'FR': 'mon',
                        'GB': 'mon',
                        'GE': 'mon',
                        'GF': 'mon',
                        'GP': 'mon',
                        'TT': 'sun',
                        'TW': 'sun',
                        'UA': 'mon',
                        'UM': 'sun',
                        'US': 'sun',
                        'UY': 'mon',
                        'UZ': 'mon',
                        'VA': 'mon',
                        'ZW': 'sun',
                        'ZA': 'sun',
                        'YE': 'sun',
                        'XK': 'mon',
                        'WS': 'sun',
                        'VN': 'mon',
                        'VI': 'sun',
                        'VE': 'sun',
                        'TR': 'mon',
                        'TN': 'sun',
                        'TM': 'mon',
                        'TJ': 'mon',
                        'TH': 'sun',
                        'SY': 'sat',
                        'SV': 'sun',
                        'SM': 'mon',
                        'ID': 'sun',
                        'HU': 'mon',
                        'HR': 'mon',
                        'HN': 'sun',
                        'HK': 'sun',
                        'GU': 'sun',
                        'GT': 'sun',
                        'GR': 'mon',
                        '001': 'mon',
                        'AD': 'mon',
                        'AE': 'sat',
                        'AF': 'sat',
                        'AG': 'sun',
                        'AI': 'mon',
                        'AL': 'mon',
                        'AM': 'mon',
                        'BD': 'fri',
                        'BE': 'mon',
                        'BG': 'mon',
                        'BH': 'sat',
                        'BM': 'mon',
                        'BN': 'mon',
                        'BR': 'sun',
                        'BS': 'sun',
                        'BT': 'sun',
                        'BW': 'sun',
                        'BY': 'sun',
                        'BZ': 'sun',
                        'CA': 'sun',
                        'CH': 'mon',
                        'CL': 'mon',
                        'CM': 'mon',
                        'IE': 'sun',
                        'IL': 'sun',
                        'IN': 'sun',
                        'IQ': 'sat',
                        'IR': 'sat',
                        'IS': 'mon',
                        'IT': 'mon',
                        'JM': 'sun',
                        'JO': 'sat',
                        'JP': 'sun',
                        'KE': 'sun',
                        'KG': 'mon',
                        'KH': 'sun',
                        'KR': 'sun',
                        'KW': 'sat',
                        'KZ': 'mon',
                        'LA': 'sun',
                        'LB': 'mon',
                        'LI': 'mon',
                        'LK': 'mon',
                        'LT': 'mon',
                        'LU': 'mon',
                        'LV': 'mon',
                        'LY': 'sat',
                        'MA': 'sat',
                        'MC': 'mon',
                        'MD': 'mon',
                        'ME': 'mon',
                        'MH': 'sun',
                        'MK': 'mon',
                        'MM': 'sun',
                        'MN': 'mon',
                        'MO': 'sun',
                        'MQ': 'mon',
                        'MT': 'sun',
                        'MV': 'fri',
                        'MX': 'sun',
                        'MY': 'mon',
                        'MZ': 'sun',
                        'NI': 'sun'
                    },
                    'firstDay-alt-variant': {
                        'GB': 'sun'
                    },
                    'weekendStart': {
                        'QA': 'fri',
                        'OM': 'thu',
                        'MA': 'fri',
                        'LY': 'fri',
                        'KW': 'fri',
                        'EG': 'fri',
                        'IL': 'fri',
                        'IN': 'sun',
                        'SA': 'fri',
                        'SD': 'fri',
                        'SY': 'fri',
                        'TN': 'fri',
                        'YE': 'fri',
                        'DZ': 'thu',
                        'BH': 'fri',
                        'AF': 'thu',
                        'AE': 'fri',
                        '001': 'sat',
                        'IQ': 'fri',
                        'IR': 'thu',
                        'JO': 'fri'
                    },
                    'weekendEnd': {
                        'SA': 'sat',
                        'QA': 'sat',
                        'OM': 'fri',
                        'MA': 'sat',
                        'DZ': 'fri',
                        'EG': 'sat',
                        'IL': 'sat',
                        'IQ': 'sat',
                        'SD': 'sat',
                        'SY': 'sat',
                        'TN': 'sat',
                        'YE': 'sat',
                        'BH': 'sat',
                        'AF': 'fri',
                        'AE': 'sat',
                        '001': 'sun',
                        'IR': 'fri',
                        'JO': 'sat',
                        'KW': 'sat',
                        'LY': 'sat'
                    }
                },
                'likelySubtags': {
                    'bfq': 'bfq_Taml_IN',
                    'bez': 'bez_Latn_TZ',
                    'bem': 'bem_Latn_ZM',
                    'be': 'be_Cyrl_BY',
                    'bbc': 'bbc_Latn_ID',
                    'bax': 'bax_Bamu_CM',
                    'bas': 'bas_Latn_CM',
                    'ban': 'ban_Latn_ID',
                    'bal': 'bal_Arab_PK',
                    'ba': 'ba_Cyrl_RU',
                    'az_RU': 'az_Cyrl_RU',
                    'az_IR': 'az_Arab_IR',
                    'az_Arab': 'az_Arab_IR',
                    'az': 'az_Latn_AZ',
                    'ay': 'ay_Latn_BO',
                    'alt': 'alt_Cyrl_RU',
                    'ak': 'ak_Latn_GH',
                    'agq': 'agq_Latn_CM',
                    'af': 'af_Latn_ZA',
                    'ady': 'ady_Cyrl_RU',
                    'ace': 'ace_Latn_ID',
                    'ab': 'ab_Cyrl_GE',
                    'aa': 'aa_Latn_ET',
                    'am': 'am_Ethi_ET',
                    'amo': 'amo_Latn_NG',
                    'ar': 'ar_Arab_EG',
                    'as': 'as_Beng_IN',
                    'asa': 'asa_Latn_TZ',
                    'ast': 'ast_Latn_ES',
                    'av': 'av_Cyrl_RU',
                    'awa': 'awa_Deva_IN',
                    'bfy': 'bfy_Deva_IN',
                    'bg': 'bg_Cyrl_BG',
                    'bhb': 'bhb_Deva_IN',
                    'bho': 'bho_Deva_IN',
                    'bi': 'bi_Latn_VU',
                    'bik': 'bik_Latn_PH',
                    'bin': 'bin_Latn_NG',
                    'bjj': 'bjj_Deva_IN',
                    'bku': 'bku_Latn_PH',
                    'bm': 'bm_Latn_ML',
                    'bn': 'bn_Beng_BD',
                    'bo': 'bo_Tibt_CN',
                    'bqv': 'bqv_Latn_CI',
                    'br': 'br_Latn_FR',
                    'bra': 'bra_Deva_IN',
                    'brx': 'brx_Deva_IN',
                    'bs': 'bs_Latn_BA',
                    'bss': 'bss_Latn_CM',
                    'btv': 'btv_Deva_PK',
                    'bua': 'bua_Cyrl_RU',
                    'buc': 'buc_Latn_YT',
                    'bug': 'bug_Latn_ID',
                    'bya': 'bya_Latn_ID',
                    'byn': 'byn_Ethi_ER',
                    'ca': 'ca_Latn_ES',
                    'cch': 'cch_Latn_NG',
                    'ccp': 'ccp_Beng_IN',
                    'ce': 'ce_Cyrl_RU',
                    'ceb': 'ceb_Latn_PH',
                    'cgg': 'cgg_Latn_UG',
                    'ch': 'ch_Latn_GU',
                    'chk': 'chk_Latn_FM',
                    'gv': 'gv_Latn_IM',
                    'gwi': 'gwi_Latn_CA',
                    'ha': 'ha_Latn_NG',
                    'ha_CM': 'ha_Arab_CM',
                    'ha_SD': 'ha_Arab_SD',
                    'haw': 'haw_Latn_US',
                    'he': 'he_Hebr_IL',
                    'hi': 'hi_Deva_IN',
                    'hil': 'hil_Latn_PH',
                    'hne': 'hne_Deva_IN',
                    'hnn': 'hnn_Latn_PH',
                    'ho': 'ho_Latn_PG',
                    'hoc': 'hoc_Deva_IN',
                    'hoj': 'hoj_Deva_IN',
                    'hr': 'hr_Latn_HR',
                    'ht': 'ht_Latn_HT',
                    'hu': 'hu_Latn_HU',
                    'hy': 'hy_Armn_AM',
                    'ia': 'ia_Latn_FR',
                    'ibb': 'ibb_Latn_NG',
                    'id': 'id_Latn_ID',
                    'ig': 'ig_Latn_NG',
                    'ii': 'ii_Yiii_CN',
                    'ik': 'ik_Latn_US',
                    'ilo': 'ilo_Latn_PH',
                    'in': 'in_Latn_ID',
                    'inh': 'inh_Cyrl_RU',
                    'is': 'is_Latn_IS',
                    'it': 'it_Latn_IT',
                    'iu': 'iu_Cans_CA',
                    'iw': 'iw_Hebr_IL',
                    'ja': 'ja_Jpan_JP',
                    'jgo': 'jgo_Latn_CM',
                    'ji': 'ji_Hebr_UA',
                    'jmc': 'jmc_Latn_TZ',
                    'jv': 'jv_Latn_ID',
                    'jw': 'jw_Latn_ID',
                    'ka': 'ka_Geor_GE',
                    'kaa': 'kaa_Cyrl_UZ',
                    'kab': 'kab_Latn_DZ',
                    'kaj': 'kaj_Latn_NG',
                    'kam': 'kam_Latn_KE',
                    'kbd': 'kbd_Cyrl_RU',
                    'kcg': 'kcg_Latn_NG',
                    'kde': 'kde_Latn_TZ',
                    'kdt': 'kdt_Thai_TH',
                    'kea': 'kea_Latn_CV',
                    'ken': 'ken_Latn_CM',
                    'kfo': 'kfo_Latn_CI',
                    'kfr': 'kfr_Deva_IN',
                    'kg': 'kg_Latn_CD',
                    'kha': 'kha_Latn_IN',
                    'khb': 'khb_Talu_CN',
                    'khq': 'khq_Latn_ML',
                    'kht': 'kht_Mymr_IN',
                    'ki': 'ki_Latn_KE',
                    'kj': 'kj_Latn_NA',
                    'kk': 'kk_Cyrl_KZ',
                    'kk_AF': 'kk_Arab_AF',
                    'kk_Arab': 'kk_Arab_CN',
                    'kk_CN': 'kk_Arab_CN',
                    'kk_IR': 'kk_Arab_IR',
                    'kk_MN': 'kk_Arab_MN',
                    'kkj': 'kkj_Latn_CM',
                    'kl': 'kl_Latn_GL',
                    'kln': 'kln_Latn_KE',
                    'km': 'km_Khmr_KH',
                    'kmb': 'kmb_Latn_AO',
                    'kn': 'kn_Knda_IN',
                    'ko': 'ko_Kore_KR',
                    'koi': 'koi_Cyrl_RU',
                    'kok': 'kok_Deva_IN',
                    'kos': 'kos_Latn_FM',
                    'kpe': 'kpe_Latn_LR',
                    'krc': 'krc_Cyrl_RU',
                    'kri': 'kri_Latn_SL',
                    'krl': 'krl_Latn_RU',
                    'kru': 'kru_Deva_IN',
                    'ks': 'ks_Arab_IN',
                    'ksb': 'ksb_Latn_TZ',
                    'ksf': 'ksf_Latn_CM',
                    'ksh': 'ksh_Latn_DE',
                    'ku': 'ku_Latn_TR',
                    'ku_Arab': 'ku_Arab_IQ',
                    'ku_LB': 'ku_Arab_LB',
                    'kum': 'kum_Cyrl_RU',
                    'kv': 'kv_Cyrl_RU',
                    'kw': 'kw_Latn_GB',
                    'ky': 'ky_Cyrl_KG',
                    'ky_Arab': 'ky_Arab_CN',
                    'ky_CN': 'ky_Arab_CN',
                    'ky_Latn': 'ky_Latn_TR',
                    'ky_TR': 'ky_Latn_TR',
                    'la': 'la_Latn_VA',
                    'lag': 'lag_Latn_TZ',
                    'lah': 'lah_Arab_PK',
                    'lb': 'lb_Latn_LU',
                    'lbe': 'lbe_Cyrl_RU',
                    'lcp': 'lcp_Thai_CN',
                    'lep': 'lep_Lepc_IN',
                    'lez': 'lez_Cyrl_RU',
                    'lg': 'lg_Latn_UG',
                    'li': 'li_Latn_NL',
                    'lif': 'lif_Deva_NP',
                    'lis': 'lis_Lisu_CN',
                    'lki': 'lki_Arab_IR',
                    'lkt': 'lkt_Latn_US',
                    'lmn': 'lmn_Telu_IN',
                    'ln': 'ln_Latn_CD',
                    'lo': 'lo_Laoo_LA',
                    'lol': 'lol_Latn_CD',
                    'lt': 'lt_Latn_LT',
                    'lu': 'lu_Latn_CD',
                    'lua': 'lua_Latn_CD',
                    'luo': 'luo_Latn_KE',
                    'luy': 'luy_Latn_KE',
                    'lv': 'lv_Latn_LV',
                    'lwl': 'lwl_Thai_TH',
                    'mad': 'mad_Latn_ID',
                    'mag': 'mag_Deva_IN',
                    'mai': 'mai_Deva_IN',
                    'mak': 'mak_Latn_ID',
                    'man': 'man_Latn_GM',
                    'man_GN': 'man_Nkoo_GN',
                    'man_Nkoo': 'man_Nkoo_GN',
                    'mas': 'mas_Latn_KE',
                    'mdf': 'mdf_Cyrl_RU',
                    'mdh': 'mdh_Latn_PH',
                    'und_Cyrl_MD': 'uk_Cyrl_MD',
                    'und_Cyrl_PL': 'be_Cyrl_PL',
                    'und_Cyrl_RO': 'bg_Cyrl_RO',
                    'und_Cyrl_SK': 'uk_Cyrl_SK',
                    'und_Cyrl_TR': 'kbd_Cyrl_TR',
                    'und_Cyrl_XK': 'sr_Cyrl_XK',
                    'und_CZ': 'cs_Latn_CZ',
                    'und_DE': 'de_Latn_DE',
                    'und_Deva': 'hi_Deva_IN',
                    'und_Deva_BT': 'ne_Deva_BT',
                    'und_Deva_MU': 'bho_Deva_MU',
                    'und_Deva_PK': 'btv_Deva_PK',
                    'und_DJ': 'aa_Latn_DJ',
                    'und_DK': 'da_Latn_DK',
                    'und_DO': 'es_Latn_DO',
                    'und_DZ': 'ar_Arab_DZ',
                    'und_EA': 'es_Latn_EA',
                    'und_EC': 'es_Latn_EC',
                    'und_EE': 'et_Latn_EE',
                    'und_EG': 'ar_Arab_EG',
                    'und_Egyp': 'egy_Egyp_EG',
                    'und_EH': 'ar_Arab_EH',
                    'und_ER': 'ti_Ethi_ER',
                    'und_ES': 'es_Latn_ES',
                    'und_ET': 'am_Ethi_ET',
                    'und_Ethi': 'am_Ethi_ET',
                    'und_FI': 'fi_Latn_FI',
                    'und_FM': 'chk_Latn_FM',
                    'und_FO': 'fo_Latn_FO',
                    'und_FR': 'fr_Latn_FR',
                    'und_GA': 'fr_Latn_GA',
                    'und_GE': 'ka_Geor_GE',
                    'und_Geor': 'ka_Geor_GE',
                    'und_GF': 'fr_Latn_GF',
                    'und_GH': 'ak_Latn_GH',
                    'und_GL': 'kl_Latn_GL',
                    'und_Glag': 'cu_Glag_BG',
                    'und_GN': 'fr_Latn_GN',
                    'und_Goth': 'got_Goth_UA',
                    'und_GP': 'fr_Latn_GP',
                    'und_GQ': 'es_Latn_GQ',
                    'und_GR': 'el_Grek_GR',
                    'und_Grek': 'el_Grek_GR',
                    'und_GS': 'und_Latn_GS',
                    'und_GT': 'es_Latn_GT',
                    'und_Gujr': 'gu_Gujr_IN',
                    'und_Guru': 'pa_Guru_IN',
                    'und_GW': 'pt_Latn_GW',
                    'und_Hang': 'ko_Hang_KR',
                    'und_Hani': 'zh_Hani_CN',
                    'und_Hano': 'hnn_Hano_PH',
                    'und_Hans': 'zh_Hans_CN',
                    'und_Hant': 'zh_Hant_TW',
                    'und_Hebr': 'he_Hebr_IL',
                    'und_Hebr_CA': 'yi_Hebr_CA',
                    'und_Hebr_GB': 'yi_Hebr_GB',
                    'und_Hebr_SE': 'yi_Hebr_SE',
                    'und_Hebr_UA': 'yi_Hebr_UA',
                    'und_Hebr_US': 'yi_Hebr_US',
                    'und_Hira': 'ja_Hira_JP',
                    'und_HK': 'zh_Hant_HK',
                    'und_HM': 'und_Latn_HM',
                    'und_HN': 'es_Latn_HN',
                    'und_HR': 'hr_Latn_HR',
                    'und_HT': 'ht_Latn_HT',
                    'und_QA': 'ar_Arab_QA',
                    'und_RE': 'fr_Latn_RE',
                    'und_Rjng': 'rej_Rjng_ID',
                    'und_RO': 'ro_Latn_RO',
                    'und_RS': 'sr_Cyrl_RS',
                    'und_RU': 'ru_Cyrl_RU',
                    'und_Runr': 'non_Runr_SE',
                    'und_RW': 'rw_Latn_RW',
                    'und_SA': 'ar_Arab_SA',
                    'und_Samr': 'smp_Samr_IL',
                    'und_Sarb': 'xsa_Sarb_YE',
                    'und_Saur': 'saz_Saur_IN',
                    'und_SC': 'fr_Latn_SC',
                    'und_SD': 'ar_Arab_SD',
                    'und_SE': 'sv_Latn_SE',
                    'und_Shaw': 'en_Shaw_GB',
                    'und_Shrd': 'sa_Shrd_IN',
                    'und_SI': 'sl_Latn_SI',
                    'und_Sinh': 'si_Sinh_LK',
                    'und_SJ': 'nb_Latn_SJ',
                    'und_SK': 'sk_Latn_SK',
                    'und_SM': 'it_Latn_SM',
                    'und_SN': 'fr_Latn_SN',
                    'und_SO': 'so_Latn_SO',
                    'und_Sora': 'srb_Sora_IN',
                    'und_SR': 'nl_Latn_SR',
                    'und_ST': 'pt_Latn_ST',
                    'und_Sund': 'su_Sund_ID',
                    'und_SV': 'es_Latn_SV',
                    'und_SY': 'ar_Arab_SY',
                    'und_Sylo': 'syl_Sylo_BD',
                    'und_Syrc': 'syr_Syrc_IQ',
                    'und_Tagb': 'tbw_Tagb_PH',
                    'und_Takr': 'doi_Takr_IN',
                    'und_Tale': 'tdd_Tale_CN',
                    'und_Talu': 'khb_Talu_CN',
                    'und_Taml': 'ta_Taml_IN',
                    'und_Tavt': 'blt_Tavt_VN',
                    'und_TD': 'fr_Latn_TD',
                    'und_Telu': 'te_Telu_IN',
                    'und_TF': 'fr_Latn_TF',
                    'und_Tfng': 'zgh_Tfng_MA',
                    'und_TG': 'fr_Latn_TG',
                    'und_Tglg': 'fil_Tglg_PH',
                    'und_TH': 'th_Thai_TH',
                    'und_Thaa': 'dv_Thaa_MV',
                    'und_Thai': 'th_Thai_TH',
                    'und_Thai_CN': 'lcp_Thai_CN',
                    'und_Thai_KH': 'kdt_Thai_KH',
                    'und_Thai_LA': 'kdt_Thai_LA',
                    'und_Tibt': 'bo_Tibt_CN',
                    'und_TJ': 'tg_Cyrl_TJ',
                    'und_TK': 'tkl_Latn_TK',
                    'und_TL': 'pt_Latn_TL',
                    'und_TM': 'tk_Latn_TM',
                    'und_TN': 'ar_Arab_TN',
                    'und_TO': 'to_Latn_TO',
                    'und_TR': 'tr_Latn_TR',
                    'und_TV': 'tvl_Latn_TV',
                    'und_TW': 'zh_Hant_TW',
                    'und_TZ': 'sw_Latn_TZ',
                    'und_UA': 'uk_Cyrl_UA',
                    'und_UG': 'sw_Latn_UG',
                    'und_Ugar': 'uga_Ugar_SY',
                    'war': 'war_Latn_PH',
                    'mdr': 'mdr_Latn_ID',
                    'men': 'men_Latn_SL',
                    'mer': 'mer_Latn_KE',
                    'mfe': 'mfe_Latn_MU',
                    'mg': 'mg_Latn_MG',
                    'mgh': 'mgh_Latn_MZ',
                    'mgo': 'mgo_Latn_CM',
                    'mh': 'mh_Latn_MH',
                    'mi': 'mi_Latn_NZ',
                    'min': 'min_Latn_ID',
                    'mk': 'mk_Cyrl_MK',
                    'ml': 'ml_Mlym_IN',
                    'mn': 'mn_Cyrl_MN',
                    'mn_CN': 'mn_Mong_CN',
                    'mn_Mong': 'mn_Mong_CN',
                    'mni': 'mni_Beng_IN',
                    'mnw': 'mnw_Mymr_MM',
                    'mo': 'mo_Latn_RO',
                    'mos': 'mos_Latn_BF',
                    'mr': 'mr_Deva_IN',
                    'ms': 'ms_Latn_MY',
                    'ms_CC': 'ms_Arab_CC',
                    'ms_ID': 'ms_Arab_ID',
                    'mt': 'mt_Latn_MT',
                    'mua': 'mua_Latn_CM',
                    'mwr': 'mwr_Deva_IN',
                    'my': 'my_Mymr_MM',
                    'myv': 'myv_Cyrl_RU',
                    'na': 'na_Latn_NR',
                    'nap': 'nap_Latn_IT',
                    'naq': 'naq_Latn_NA',
                    'nb': 'nb_Latn_NO',
                    'nd': 'nd_Latn_ZW',
                    'nds': 'nds_Latn_DE',
                    'ne': 'ne_Deva_NP',
                    'new': 'new_Deva_NP',
                    'ng': 'ng_Latn_NA',
                    'niu': 'niu_Latn_NU',
                    'nl': 'nl_Latn_NL',
                    'nmg': 'nmg_Latn_CM',
                    'nn': 'nn_Latn_NO',
                    'nnh': 'nnh_Latn_CM',
                    'no': 'no_Latn_NO',
                    'nod': 'nod_Lana_TH',
                    'nr': 'nr_Latn_ZA',
                    'nso': 'nso_Latn_ZA',
                    'nus': 'nus_Latn_SD',
                    'nv': 'nv_Latn_US',
                    'ny': 'ny_Latn_MW',
                    'nym': 'nym_Latn_TZ',
                    'nyn': 'nyn_Latn_UG',
                    'oc': 'oc_Latn_FR',
                    'om': 'om_Latn_ET',
                    'or': 'or_Orya_IN',
                    'os': 'os_Cyrl_GE',
                    'pa': 'pa_Guru_IN',
                    'pa_Arab': 'pa_Arab_PK',
                    'pa_PK': 'pa_Arab_PK',
                    'pag': 'pag_Latn_PH',
                    'pam': 'pam_Latn_PH',
                    'pap': 'pap_Latn_AW',
                    'pau': 'pau_Latn_PW',
                    'pl': 'pl_Latn_PL',
                    'pon': 'pon_Latn_FM',
                    'prd': 'prd_Arab_IR',
                    'ps': 'ps_Arab_AF',
                    'pt': 'pt_Latn_BR',
                    'qu': 'qu_Latn_PE',
                    'raj': 'raj_Latn_IN',
                    'rcf': 'rcf_Latn_RE',
                    'rej': 'rej_Latn_ID',
                    'rjs': 'rjs_Deva_NP',
                    'rkt': 'rkt_Beng_BD',
                    'rm': 'rm_Latn_CH',
                    'rn': 'rn_Latn_BI',
                    'ro': 'ro_Latn_RO',
                    'rof': 'rof_Latn_TZ',
                    'ru': 'ru_Cyrl_RU',
                    'rw': 'rw_Latn_RW',
                    'rwk': 'rwk_Latn_TZ',
                    'sa': 'sa_Deva_IN',
                    'saf': 'saf_Latn_GH',
                    'sah': 'sah_Cyrl_RU',
                    'saq': 'saq_Latn_KE',
                    'sas': 'sas_Latn_ID',
                    'sat': 'sat_Latn_IN',
                    'saz': 'saz_Saur_IN',
                    'sbp': 'sbp_Latn_TZ',
                    'scn': 'scn_Latn_IT',
                    'sco': 'sco_Latn_GB',
                    'sd': 'sd_Arab_PK',
                    'sd_Deva': 'sd_Deva_IN',
                    'sdh': 'sdh_Arab_IR',
                    'se': 'se_Latn_NO',
                    'seh': 'seh_Latn_MZ',
                    'ses': 'ses_Latn_ML',
                    'sg': 'sg_Latn_CF',
                    'shi': 'shi_Tfng_MA',
                    'shn': 'shn_Mymr_MM',
                    'si': 'si_Sinh_LK',
                    'sid': 'sid_Latn_ET',
                    'sk': 'sk_Latn_SK',
                    'sl': 'sl_Latn_SI',
                    'sm': 'sm_Latn_WS',
                    'sma': 'sma_Latn_SE',
                    'smj': 'smj_Latn_SE',
                    'smn': 'smn_Latn_FI',
                    'sms': 'sms_Latn_FI',
                    'sn': 'sn_Latn_ZW',
                    'snk': 'snk_Latn_ML',
                    'so': 'so_Latn_SO',
                    'sq': 'sq_Latn_AL',
                    'sr': 'sr_Cyrl_RS',
                    'sr_ME': 'sr_Latn_ME',
                    'sr_RO': 'sr_Latn_RO',
                    'sr_RU': 'sr_Latn_RU',
                    'sr_TR': 'sr_Latn_TR',
                    'srn': 'srn_Latn_SR',
                    'srr': 'srr_Latn_SN',
                    'ss': 'ss_Latn_ZA',
                    'ssy': 'ssy_Latn_ER',
                    'st': 'st_Latn_ZA',
                    'su': 'su_Latn_ID',
                    'suk': 'suk_Latn_TZ',
                    'sus': 'sus_Latn_GN',
                    'sv': 'sv_Latn_SE',
                    'sw': 'sw_Latn_TZ',
                    'swb': 'swb_Arab_YT',
                    'und_Arab_PK': 'ur_Arab_PK',
                    'und_Arab_TJ': 'fa_Arab_TJ',
                    'und_Arab_TR': 'zza_Arab_TR',
                    'und_Arab_YT': 'swb_Arab_YT',
                    'und_Armi': 'arc_Armi_IR',
                    'und_Armn': 'hy_Armn_AM',
                    'und_AS': 'sm_Latn_AS',
                    'und_AT': 'de_Latn_AT',
                    'und_Avst': 'ae_Avst_IR',
                    'und_AW': 'nl_Latn_AW',
                    'und_AX': 'sv_Latn_AX',
                    'und_AZ': 'az_Latn_AZ',
                    'und_BA': 'bs_Latn_BA',
                    'und_Bali': 'ban_Bali_ID',
                    'und_Bamu': 'bax_Bamu_CM',
                    'und_Batk': 'bbc_Batk_ID',
                    'und_BD': 'bn_Beng_BD',
                    'und_BE': 'nl_Latn_BE',
                    'und_Beng': 'bn_Beng_BD',
                    'und_BF': 'fr_Latn_BF',
                    'und_BG': 'bg_Cyrl_BG',
                    'und_BH': 'ar_Arab_BH',
                    'und_BI': 'rn_Latn_BI',
                    'und_BJ': 'fr_Latn_BJ',
                    'und_BL': 'fr_Latn_BL',
                    'und_BN': 'ms_Latn_BN',
                    'und_BO': 'es_Latn_BO',
                    'und_Bopo': 'zh_Bopo_TW',
                    'und_BQ': 'pap_Latn_BQ',
                    'und_BR': 'pt_Latn_BR',
                    'und_Brah': 'pra_Brah_IN',
                    'und_Brai': 'und_Brai_FR',
                    'und_CM': 'fr_Latn_CM',
                    'und_CN': 'zh_Hans_CN',
                    'und_CO': 'es_Latn_CO',
                    'und_Copt': 'cop_Copt_EG',
                    'und_CP': 'und_Latn_CP',
                    'und_Cprt': 'grc_Cprt_CY',
                    'und_CR': 'es_Latn_CR',
                    'und_CU': 'es_Latn_CU',
                    'und_Cyrl_GR': 'mk_Cyrl_GR',
                    'und_Cyrl_GE': 'ab_Cyrl_GE',
                    'und_Cyrl_BA': 'sr_Cyrl_BA',
                    'und_Cyrl_AL': 'mk_Cyrl_AL',
                    'und_Cyrl': 'ru_Cyrl_RU',
                    'und_CY': 'el_Grek_CY',
                    'und_CW': 'pap_Latn_CW',
                    'und_CV': 'pt_Latn_CV',
                    'und_CL': 'es_Latn_CL',
                    'und_CI': 'fr_Latn_CI',
                    'und_Cher': 'chr_Cher_US',
                    'und_Cham': 'cjm_Cham_VN',
                    'und_CH': 'de_Latn_CH',
                    'und_CG': 'fr_Latn_CG',
                    'und_CF': 'fr_Latn_CF',
                    'und_CD': 'sw_Latn_CD',
                    'und_Cari': 'xcr_Cari_TR',
                    'und_Cans': 'cr_Cans_CA',
                    'und_Cakm': 'ccp_Cakm_BD',
                    'und_BY': 'be_Cyrl_BY',
                    'und_BV': 'und_Latn_BV',
                    'und_Buhd': 'bku_Buhd_PH',
                    'und_Bugi': 'bug_Bugi_ID',
                    'und_BT': 'dz_Tibt_BT',
                    'und_Arab_NG': 'ha_Arab_NG',
                    'und_Arab_MU': 'ur_Arab_MU',
                    'und_Arab_MN': 'kk_Arab_MN',
                    'und_Arab_KH': 'cja_Arab_KH',
                    'und_Arab_IN': 'ur_Arab_IN',
                    'und_Arab_ID': 'ms_Arab_ID',
                    'und_Arab_GB': 'ks_Arab_GB',
                    'und_Arab_CN': 'ug_Arab_CN',
                    'und_Arab_CC': 'ms_Arab_CC',
                    'und_Arab': 'ar_Arab_EG',
                    'und_AR': 'es_Latn_AR',
                    'und_AQ': 'und_Latn_AQ',
                    'und_AO': 'pt_Latn_AO',
                    'und_AM': 'hy_Armn_AM',
                    'und_AL': 'sq_Latn_AL',
                    'und_AF': 'fa_Arab_AF',
                    'und_AE': 'ar_Arab_AE',
                    'und_AD': 'ca_Latn_AD',
                    'und': 'en_Latn_US',
                    'umb': 'umb_Latn_AO',
                    'uli': 'uli_Latn_FM',
                    'uk': 'uk_Cyrl_UA',
                    'ug_MN': 'ug_Cyrl_MN',
                    'ug_KZ': 'ug_Cyrl_KZ',
                    'ug_Cyrl': 'ug_Cyrl_KZ',
                    'ug': 'ug_Arab_CN',
                    'udm': 'udm_Cyrl_RU',
                    'tzm': 'tzm_Latn_MA',
                    'tyv': 'tyv_Cyrl_RU',
                    'ty': 'ty_Latn_PF',
                    'twq': 'twq_Latn_NE',
                    'tvl': 'tvl_Latn_TV',
                    'tum': 'tum_Latn_MW',
                    'tts': 'tts_Thai_TH',
                    'tt': 'tt_Cyrl_RU',
                    'tsg': 'tsg_Latn_PH',
                    'ts': 'ts_Latn_ZA',
                    'trv': 'trv_Latn_TW',
                    'tr': 'tr_Latn_TR',
                    'tpi': 'tpi_Latn_PG',
                    'to': 'to_Latn_TO',
                    'tn': 'tn_Latn_ZA',
                    'tmh': 'tmh_Latn_NE',
                    'tl': 'tl_Latn_PH',
                    'tkl': 'tkl_Latn_TK',
                    'tk': 'tk_Latn_TM',
                    'tiv': 'tiv_Latn_NG',
                    'tig': 'tig_Ethi_ER',
                    'ti': 'ti_Ethi_ET',
                    'th': 'th_Thai_TH',
                    'tg_PK': 'tg_Arab_PK',
                    'tg_Arab': 'tg_Arab_PK',
                    'tg': 'tg_Cyrl_TJ',
                    'tet': 'tet_Latn_TL',
                    'teo': 'teo_Latn_UG',
                    'tem': 'tem_Latn_SL',
                    'te': 'te_Telu_IN',
                    'tdd': 'tdd_Tale_CN',
                    'tcy': 'tcy_Knda_IN',
                    'tbw': 'tbw_Latn_PH',
                    'ta': 'ta_Taml_IN',
                    'syr': 'syr_Syrc_IQ',
                    'syl': 'syl_Beng_BD',
                    'swc': 'swc_Latn_CD',
                    'guz': 'guz_Latn_KE',
                    'gu': 'gu_Gujr_IN',
                    'gsw': 'gsw_Latn_CH',
                    'grt': 'grt_Beng_IN',
                    'gor': 'gor_Latn_ID',
                    'gon': 'gon_Telu_IN',
                    'gn': 'gn_Latn_PY',
                    'gl': 'gl_Latn_ES',
                    'gil': 'gil_Latn_KI',
                    'gez': 'gez_Ethi_ET',
                    'gd': 'gd_Latn_GB',
                    'gcr': 'gcr_Latn_GF',
                    'gbm': 'gbm_Deva_IN',
                    'gag': 'gag_Latn_MD',
                    'gaa': 'gaa_Latn_GH',
                    'ga': 'ga_Latn_IE',
                    'fy': 'fy_Latn_NL',
                    'fur': 'fur_Latn_IT',
                    'fr': 'fr_Latn_FR',
                    'fon': 'fon_Latn_BJ',
                    'fo': 'fo_Latn_FO',
                    'fj': 'fj_Latn_FJ',
                    'fil': 'fil_Latn_PH',
                    'fi': 'fi_Latn_FI',
                    'ff': 'ff_Latn_SN',
                    'fan': 'fan_Latn_GQ',
                    'fa': 'fa_Arab_IR',
                    'ewo': 'ewo_Latn_CM',
                    'eu': 'eu_Latn_ES',
                    'et': 'et_Latn_EE',
                    'es': 'es_Latn_ES',
                    'eo': 'eo_Latn_001',
                    'en': 'en_Latn_US',
                    'el': 'el_Grek_GR',
                    'efi': 'efi_Latn_NG',
                    'ee': 'ee_Latn_GH',
                    'ebu': 'ebu_Latn_KE',
                    'dz': 'dz_Tibt_BT',
                    'dyu': 'dyu_Latn_BF',
                    'dyo': 'dyo_Latn_SN',
                    'dv': 'dv_Thaa_MV',
                    'dua': 'dua_Latn_CM',
                    'dsb': 'dsb_Latn_DE',
                    'doi': 'doi_Arab_IN',
                    'dje': 'dje_Latn_NE',
                    'dgr': 'dgr_Latn_CA',
                    'den': 'den_Latn_CA',
                    'de': 'de_Latn_DE',
                    'dav': 'dav_Latn_KE',
                    'dar': 'dar_Cyrl_RU',
                    'da': 'da_Latn_DK',
                    'cy': 'cy_Latn_GB',
                    'cv': 'cv_Cyrl_RU',
                    'csb': 'csb_Latn_PL',
                    'cs': 'cs_Latn_CZ',
                    'crk': 'crk_Cans_CA',
                    'cr': 'cr_Cans_CA',
                    'co': 'co_Latn_FR',
                    'ckb': 'ckb_Arab_IQ',
                    'cjm': 'cjm_Cham_VN',
                    'cja': 'cja_Arab_KH',
                    'chr': 'chr_Cher_US',
                    'chp': 'chp_Latn_CA',
                    'chm': 'chm_Cyrl_RU',
                    'bft': 'bft_Arab_PK',
                    'und_HU': 'hu_Latn_HU',
                    'und_IC': 'es_Latn_IC',
                    'und_ID': 'id_Latn_ID',
                    'und_IL': 'he_Hebr_IL',
                    'und_IN': 'hi_Deva_IN',
                    'und_IQ': 'ar_Arab_IQ',
                    'und_IR': 'fa_Arab_IR',
                    'und_IS': 'is_Latn_IS',
                    'und_IT': 'it_Latn_IT',
                    'und_Ital': 'ett_Ital_IT',
                    'und_Java': 'jv_Java_ID',
                    'und_JO': 'ar_Arab_JO',
                    'und_JP': 'ja_Jpan_JP',
                    'und_Jpan': 'ja_Jpan_JP',
                    'und_Kali': 'eky_Kali_MM',
                    'und_Kana': 'ja_Kana_JP',
                    'und_KG': 'ky_Cyrl_KG',
                    'und_KH': 'km_Khmr_KH',
                    'und_Khar': 'pra_Khar_PK',
                    'und_Khmr': 'km_Khmr_KH',
                    'und_KM': 'ar_Arab_KM',
                    'und_Knda': 'kn_Knda_IN',
                    'und_Kore': 'ko_Kore_KR',
                    'und_KP': 'ko_Kore_KP',
                    'und_KR': 'ko_Kore_KR',
                    'und_Kthi': 'bh_Kthi_IN',
                    'und_KW': 'ar_Arab_KW',
                    'und_KZ': 'ru_Cyrl_KZ',
                    'und_LA': 'lo_Laoo_LA',
                    'und_Lana': 'nod_Lana_TH',
                    'und_Laoo': 'lo_Laoo_LA',
                    'und_Latn_AF': 'tk_Latn_AF',
                    'und_Latn_AM': 'az_Latn_AM',
                    'und_Latn_BG': 'tr_Latn_BG',
                    'und_Latn_CN': 'za_Latn_CN',
                    'und_Latn_CY': 'tr_Latn_CY',
                    'und_Latn_DZ': 'fr_Latn_DZ',
                    'und_Latn_ET': 'en_Latn_ET',
                    'und_Latn_GE': 'ku_Latn_GE',
                    'und_Latn_GR': 'tr_Latn_GR',
                    'und_Latn_IL': 'ro_Latn_IL',
                    'und_Latn_IR': 'tk_Latn_IR',
                    'und_Latn_KM': 'fr_Latn_KM',
                    'und_Latn_KZ': 'de_Latn_KZ',
                    'und_Latn_LB': 'fr_Latn_LB',
                    'und_Latn_MA': 'fr_Latn_MA',
                    'und_Latn_MK': 'sq_Latn_MK',
                    'und_Latn_MO': 'pt_Latn_MO',
                    'und_Latn_MR': 'fr_Latn_MR',
                    'und_Latn_RU': 'krl_Latn_RU',
                    'und_Latn_SY': 'fr_Latn_SY',
                    'und_Latn_TN': 'fr_Latn_TN',
                    'und_Latn_TW': 'trv_Latn_TW',
                    'und_Latn_UA': 'pl_Latn_UA',
                    'und_LB': 'ar_Arab_LB',
                    'und_Lepc': 'lep_Lepc_IN',
                    'und_LI': 'de_Latn_LI',
                    'und_Limb': 'lif_Limb_IN',
                    'und_Linb': 'grc_Linb_GR',
                    'und_Lisu': 'lis_Lisu_CN',
                    'und_LK': 'si_Sinh_LK',
                    'und_LS': 'st_Latn_LS',
                    'und_LT': 'lt_Latn_LT',
                    'und_LU': 'fr_Latn_LU',
                    'und_LV': 'lv_Latn_LV',
                    'und_LY': 'ar_Arab_LY',
                    'und_Lyci': 'xlc_Lyci_TR',
                    'und_Lydi': 'xld_Lydi_TR',
                    'und_MA': 'ar_Arab_MA',
                    'und_Mand': 'myz_Mand_IR',
                    'und_MC': 'fr_Latn_MC',
                    'und_MD': 'ro_Latn_MD',
                    'und_ME': 'sr_Latn_ME',
                    'und_Merc': 'xmr_Merc_SD',
                    'und_Mero': 'xmr_Mero_SD',
                    'und_MF': 'fr_Latn_MF',
                    'und_MG': 'mg_Latn_MG',
                    'und_MK': 'mk_Cyrl_MK',
                    'und_ML': 'bm_Latn_ML',
                    'und_Mlym': 'ml_Mlym_IN',
                    'und_MM': 'my_Mymr_MM',
                    'und_MN': 'mn_Cyrl_MN',
                    'und_MO': 'zh_Hant_MO',
                    'und_Mong': 'mn_Mong_CN',
                    'und_MQ': 'fr_Latn_MQ',
                    'und_MR': 'ar_Arab_MR',
                    'und_MT': 'mt_Latn_MT',
                    'und_Mtei': 'mni_Mtei_IN',
                    'und_MU': 'mfe_Latn_MU',
                    'und_MV': 'dv_Thaa_MV',
                    'und_MX': 'es_Latn_MX',
                    'und_MY': 'ms_Latn_MY',
                    'und_Mymr': 'my_Mymr_MM',
                    'und_Mymr_IN': 'kht_Mymr_IN',
                    'und_Mymr_TH': 'mnw_Mymr_TH',
                    'und_MZ': 'pt_Latn_MZ',
                    'und_NA': 'af_Latn_NA',
                    'und_NC': 'fr_Latn_NC',
                    'und_NE': 'ha_Latn_NE',
                    'und_NI': 'es_Latn_NI',
                    'und_Nkoo': 'man_Nkoo_GN',
                    'und_NL': 'nl_Latn_NL',
                    'und_NO': 'nb_Latn_NO',
                    'und_NP': 'ne_Deva_NP',
                    'und_Ogam': 'sga_Ogam_IE',
                    'und_Olck': 'sat_Olck_IN',
                    'und_OM': 'ar_Arab_OM',
                    'und_Orkh': 'otk_Orkh_MN',
                    'und_Orya': 'or_Orya_IN',
                    'und_Osma': 'so_Osma_SO',
                    'und_PA': 'es_Latn_PA',
                    'und_PE': 'es_Latn_PE',
                    'und_PF': 'fr_Latn_PF',
                    'und_PG': 'tpi_Latn_PG',
                    'und_PH': 'fil_Latn_PH',
                    'und_Phag': 'lzh_Phag_CN',
                    'und_Phli': 'pal_Phli_IR',
                    'und_Phnx': 'phn_Phnx_LB',
                    'und_PK': 'ur_Arab_PK',
                    'und_PL': 'pl_Latn_PL',
                    'und_Plrd': 'hmd_Plrd_CN',
                    'und_PM': 'fr_Latn_PM',
                    'und_PR': 'es_Latn_PR',
                    'und_Prti': 'xpr_Prti_IR',
                    'und_PS': 'ar_Arab_PS',
                    'und_PT': 'pt_Latn_PT',
                    'und_PW': 'pau_Latn_PW',
                    'und_PY': 'gn_Latn_PY',
                    'und_UY': 'es_Latn_UY',
                    'und_UZ': 'uz_Latn_UZ',
                    'und_VA': 'la_Latn_VA',
                    'und_Vaii': 'vai_Vaii_LR',
                    'und_VE': 'es_Latn_VE',
                    'und_VN': 'vi_Latn_VN',
                    'und_VU': 'bi_Latn_VU',
                    'und_WF': 'fr_Latn_WF',
                    'und_WS': 'sm_Latn_WS',
                    'und_XK': 'sq_Latn_XK',
                    'und_Xpeo': 'peo_Xpeo_IR',
                    'und_Xsux': 'akk_Xsux_IQ',
                    'und_YE': 'ar_Arab_YE',
                    'und_Yiii': 'ii_Yiii_CN',
                    'und_YT': 'fr_Latn_YT',
                    'unr': 'unr_Beng_IN',
                    'unr_Deva': 'unr_Deva_NP',
                    'unr_NP': 'unr_Deva_NP',
                    'unx': 'unx_Beng_IN',
                    'ur': 'ur_Arab_PK',
                    'uz': 'uz_Latn_UZ',
                    'uz_AF': 'uz_Arab_AF',
                    'uz_Arab': 'uz_Arab_AF',
                    'uz_CN': 'uz_Cyrl_CN',
                    'vai': 'vai_Vaii_LR',
                    've': 've_Latn_ZA',
                    'vi': 'vi_Latn_VN',
                    'vo': 'vo_Latn_001',
                    'vun': 'vun_Latn_TZ',
                    'wa': 'wa_Latn_BE',
                    'wae': 'wae_Latn_CH',
                    'wal': 'wal_Ethi_ET',
                    'zh_GF': 'zh_Hant_GF',
                    'zh_Hant': 'zh_Hant_TW',
                    'zh_HK': 'zh_Hant_HK',
                    'zh_ID': 'zh_Hant_ID',
                    'zh_MO': 'zh_Hant_MO',
                    'zh_MY': 'zh_Hant_MY',
                    'zh_PA': 'zh_Hant_PA',
                    'zh_PF': 'zh_Hant_PF',
                    'zza': 'zza_Arab_TR',
                    'zu': 'zu_Latn_ZA',
                    'zh_VN': 'zh_Hant_VN',
                    'zh_US': 'zh_Hant_US',
                    'zh_TW': 'zh_Hant_TW',
                    'zh_TH': 'zh_Hant_TH',
                    'zh_SR': 'zh_Hant_SR',
                    'zh_PH': 'zh_Hant_PH',
                    'zh_GB': 'zh_Hant_GB',
                    'zh_BN': 'zh_Hant_BN',
                    'zh_AU': 'zh_Hant_AU',
                    'zh': 'zh_Hans_CN',
                    'zgh': 'zgh_Tfng_MA',
                    'za': 'za_Latn_CN',
                    'yo': 'yo_Latn_NG',
                    'yi': 'yi_Hebr_UA',
                    'yav': 'yav_Latn_CM',
                    'yap': 'yap_Latn_FM',
                    'yao': 'yao_Latn_MZ',
                    'xsr': 'xsr_Deva_NP',
                    'xog': 'xog_Latn_UG',
                    'xh': 'xh_Latn_ZA',
                    'wo': 'wo_Latn_SN'
                },
                'timeData': {
                    'PS': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'PR': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'PM': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'PK': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'PG': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'OM': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'NZ': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'NL': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'NG': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'NE': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'NC': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'NA': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'MZ': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'MY': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'MW': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'MR': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'MQ': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'MP': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'MO': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'ML': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'MH': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'ZA': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'ZM': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'ZW': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'VI': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'VG': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'VC': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'US': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'UM': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'TW': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'TT': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'TR': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'GL': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'GH': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'GF': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'GD': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'GA': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'FR': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'FM': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'FJ': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'FI': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'ET': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'ER': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'EH': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'EG': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'EE': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'DZ': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'DM': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'DK': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'DJ': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'DE': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'CZ': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'CY': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'RU': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'SA': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'SB': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'SD': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'SE': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'SG': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'SI': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'SJ': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'SY': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'ST': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'SS': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'SR': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'SO': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'SM': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'SL': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'SK': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'RO': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'RE': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'QA': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'PW': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'PT': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'AE': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'AD': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    '001': {
                        '_preferred': 'H',
                        '_allowed': 'H h'
                    },
                    'AT': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'AU': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'AW': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'AX': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'BB': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'BD': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'BE': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'BF': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'YT': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'YE': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'WS': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'WF': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'VU': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'TN': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'TG': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'TD': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'TC': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'SZ': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'IN': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'IL': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'HR': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'HK': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'GY': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'GW': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'GU': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'GR': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'GP': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'GN': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'GM': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'AG': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'AL': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'AM': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'AO': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'AS': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'BH': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'BJ': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'BL': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'BM': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'BN': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'BR': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'BS': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'BT': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'BW': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'CA': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'CD': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'CI': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'CN': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'CO': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'CP': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'CV': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'IQ': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'IS': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'IT': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'JM': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'JO': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'JP': {
                        '_preferred': 'H',
                        '_allowed': 'H K h'
                    },
                    'KH': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'KI': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'KN': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'KP': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'KR': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'KW': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'KY': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'LB': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'LC': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'LR': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'LS': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'LY': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'MA': {
                        '_preferred': 'h',
                        '_allowed': 'H h'
                    },
                    'MC': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'MD': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    },
                    'MF': {
                        '_preferred': 'H',
                        '_allowed': 'H'
                    }
                }
            });

            return AstroDate;
        };

        nfeDefinition = null;

        return tempSafariNFE;
    }())));

    tempSafariNFE = null;
}((function (thisContext) {
    'use strict';
    /*global window, global, self */

    // detect the global context of the environment
    if ('object' === typeof window && null !== window && window.window === window) {
        thisContext = window;
    } else if ('object' === typeof global && null !== global && global.global === global) {
        thisContext = global;
    } else if ('object' === typeof self && null !== self && self.self === self) {
        thisContext = self;
    }

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    /*global */
    return thisContext;
}(this)), (function () {
    'use strict';

    // return undefined for privateUndefined
    return;
}())));
