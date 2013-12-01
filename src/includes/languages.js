/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ar}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('ar', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'يناير',
                                    '2': 'فبراير',
                                    '3': 'مارس',
                                    '4': 'أبريل',
                                    '5': 'مايو',
                                    '6': 'يونيو',
                                    '7': 'يوليو',
                                    '8': 'أغسطس',
                                    '9': 'سبتمبر',
                                    '10': 'أكتوبر',
                                    '11': 'نوفمبر',
                                    '12': 'ديسمبر'
                                },
                                'narrow': {
                                    '1': 'ي',
                                    '2': 'ف',
                                    '3': 'م',
                                    '4': 'أ',
                                    '5': 'و',
                                    '6': 'ن',
                                    '7': 'ل',
                                    '8': 'غ',
                                    '9': 'س',
                                    '10': 'ك',
                                    '11': 'ب',
                                    '12': 'د'
                                },
                                'wide': {
                                    '1': 'يناير',
                                    '2': 'فبراير',
                                    '3': 'مارس',
                                    '4': 'أبريل',
                                    '5': 'مايو',
                                    '6': 'يونيو',
                                    '7': 'يوليو',
                                    '8': 'أغسطس',
                                    '9': 'سبتمبر',
                                    '10': 'أكتوبر',
                                    '11': 'نوفمبر',
                                    '12': 'ديسمبر'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'يناير',
                                    '2': 'فبراير',
                                    '3': 'مارس',
                                    '4': 'أبريل',
                                    '5': 'مايو',
                                    '6': 'يونيو',
                                    '7': 'يوليو',
                                    '8': 'أغسطس',
                                    '9': 'سبتمبر',
                                    '10': 'أكتوبر',
                                    '11': 'نوفمبر',
                                    '12': 'ديسمبر'
                                },
                                'narrow': {
                                    '1': 'ي',
                                    '2': 'ف',
                                    '3': 'م',
                                    '4': 'أ',
                                    '5': 'و',
                                    '6': 'ن',
                                    '7': 'ل',
                                    '8': 'غ',
                                    '9': 'س',
                                    '10': 'ك',
                                    '11': 'ب',
                                    '12': 'د'
                                },
                                'wide': {
                                    '1': 'يناير',
                                    '2': 'فبراير',
                                    '3': 'مارس',
                                    '4': 'أبريل',
                                    '5': 'مايو',
                                    '6': 'يونيو',
                                    '7': 'يوليو',
                                    '8': 'أغسطس',
                                    '9': 'سبتمبر',
                                    '10': 'أكتوبر',
                                    '11': 'نوفمبر',
                                    '12': 'ديسمبر'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                },
                                'narrow': {
                                    'sun': 'ح',
                                    'mon': 'ن',
                                    'tue': 'ث',
                                    'wed': 'ر',
                                    'thu': 'خ',
                                    'fri': 'ج',
                                    'sat': 'س'
                                },
                                'short': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                },
                                'wide': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                },
                                'narrow': {
                                    'sun': 'ح',
                                    'mon': 'ن',
                                    'tue': 'ث',
                                    'wed': 'ر',
                                    'thu': 'خ',
                                    'fri': 'ج',
                                    'sat': 'س'
                                },
                                'short': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                },
                                'wide': {
                                    'sun': 'الأحد',
                                    'mon': 'الاثنين',
                                    'tue': 'الثلاثاء',
                                    'wed': 'الأربعاء',
                                    'thu': 'الخميس',
                                    'fri': 'الجمعة',
                                    'sat': 'السبت'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'الربع الأول',
                                    '2': 'الربع الثاني',
                                    '3': 'الربع الثالث',
                                    '4': 'الربع الرابع'
                                },
                                'narrow': {
                                    '1': '١',
                                    '2': '٢',
                                    '3': '٣',
                                    '4': '٤'
                                },
                                'wide': {
                                    '1': 'الربع الأول',
                                    '2': 'الربع الثاني',
                                    '3': 'الربع الثالث',
                                    '4': 'الربع الرابع'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'الربع الأول',
                                    '2': 'الربع الثاني',
                                    '3': 'الربع الثالث',
                                    '4': 'الربع الرابع'
                                },
                                'narrow': {
                                    '1': '١',
                                    '2': '٢',
                                    '3': '٣',
                                    '4': '٤'
                                },
                                'wide': {
                                    '1': 'الربع الأول',
                                    '2': 'الربع الثاني',
                                    '3': 'الربع الثالث',
                                    '4': 'الربع الرابع'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'ص',
                                    'pm': 'م'
                                },
                                'narrow': {
                                    'am': 'ص',
                                    'pm': 'م'
                                },
                                'wide': {
                                    'am': 'ص',
                                    'pm': 'م'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'ص',
                                    'pm': 'م'
                                },
                                'narrow': {
                                    'am': 'ص',
                                    'pm': 'م'
                                },
                                'wide': {
                                    'am': 'ص',
                                    'pm': 'م'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'قبل الميلاد',
                                '1': 'ميلادي',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'ق.م',
                                '1': 'م',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'ق.م',
                                '1': 'م',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE، d MMMM، y',
                            'long': 'd MMMM، y',
                            'medium': 'dd‏/MM‏/y',
                            'short': 'd‏/M‏/y'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E، d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM، y G',
                                'GyMMMEd': 'E، d MMM، y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/‏M',
                                'MEd': 'E، d/M',
                                'MMdd': 'dd‏/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E، d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E، d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M‏/y',
                                'yMd': 'd‏/M‏/y',
                                'yMEd': 'E، d/‏M/‏y',
                                'yMM': 'MM‏/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM، y',
                                'yMMMEd': 'E، d MMM، y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'M/d – M/d',
                                    'M': 'M/d – M/d'
                                },
                                'MEd': {
                                    'd': 'E، d/‏M –‏ E، d/‏M',
                                    'M': 'E، d/‏M – E، d/‏M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E، d – E، d MMM',
                                    'M': 'E، d MMM – E، d MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL–LLLL'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M‏/y – M‏/y',
                                    'y': 'M‏/y – M‏/y'
                                },
                                'yMd': {
                                    'd': 'd‏/M‏/y – d‏/M‏/y',
                                    'M': 'd‏/M‏/y – d‏/M‏/y',
                                    'y': 'd‏/M‏/y – d‏/M‏/y'
                                },
                                'yMEd': {
                                    'd': 'E، dd‏/MM‏/y – E، dd‏/MM‏/y',
                                    'M': 'E، d‏/M‏/y – E، d‏/M‏/y',
                                    'y': 'E، d‏/M‏/y – E، d‏/M‏/y'
                                },
                                'yMMM': {
                                    'M': 'MMM – MMM، y',
                                    'y': 'MMM، y – MMM، y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM، y',
                                    'M': 'd MMM – d MMM، y',
                                    'y': 'd MMM، y – d MMM، y'
                                },
                                'yMMMEd': {
                                    'd': 'E، d – E، d MMM، y',
                                    'M': 'E، d MMM – E، d MMM، y',
                                    'y': 'E، d MMM، y – E، d MMM، y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM – MMMM، y',
                                    'y': 'MMMM، y – MMMM، y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'جرينتش{0}',
                    'gmtZeroFormat': 'جرينتش',
                    'regionFormat': 'توقيت {0}',
                    'regionFormat-type-daylight': 'توقيت {0} الصيفي',
                    'regionFormat-type-standard': 'توقيت {0} الرسمي',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ca}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('ca', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'gen.',
                                    '2': 'feb.',
                                    '3': 'març',
                                    '4': 'abr.',
                                    '5': 'maig',
                                    '6': 'juny',
                                    '7': 'jul.',
                                    '8': 'ag.',
                                    '9': 'set.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'des.'
                                },
                                'narrow': {
                                    '1': 'GN',
                                    '2': 'FB',
                                    '3': 'MÇ',
                                    '4': 'AB',
                                    '5': 'MG',
                                    '6': 'JN',
                                    '7': 'JL',
                                    '8': 'AG',
                                    '9': 'ST',
                                    '10': 'OC',
                                    '11': 'NV',
                                    '12': 'DS'
                                },
                                'wide': {
                                    '1': 'gener',
                                    '2': 'febrer',
                                    '3': 'març',
                                    '4': 'abril',
                                    '5': 'maig',
                                    '6': 'juny',
                                    '7': 'juliol',
                                    '8': 'agost',
                                    '9': 'setembre',
                                    '10': 'octubre',
                                    '11': 'novembre',
                                    '12': 'desembre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'gen.',
                                    '2': 'feb.',
                                    '3': 'març',
                                    '4': 'abr.',
                                    '5': 'maig',
                                    '6': 'juny',
                                    '7': 'jul.',
                                    '8': 'ag.',
                                    '9': 'set.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'des.'
                                },
                                'narrow': {
                                    '1': 'GN',
                                    '2': 'FB',
                                    '3': 'MÇ',
                                    '4': 'AB',
                                    '5': 'MG',
                                    '6': 'JN',
                                    '7': 'JL',
                                    '8': 'AG',
                                    '9': 'ST',
                                    '10': 'OC',
                                    '11': 'NV',
                                    '12': 'DS'
                                },
                                'wide': {
                                    '1': 'gener',
                                    '2': 'febrer',
                                    '3': 'març',
                                    '4': 'abril',
                                    '5': 'maig',
                                    '6': 'juny',
                                    '7': 'juliol',
                                    '8': 'agost',
                                    '9': 'setembre',
                                    '10': 'octubre',
                                    '11': 'novembre',
                                    '12': 'desembre'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dg.',
                                    'mon': 'dl.',
                                    'tue': 'dt.',
                                    'wed': 'dc.',
                                    'thu': 'dj.',
                                    'fri': 'dv.',
                                    'sat': 'ds.'
                                },
                                'narrow': {
                                    'sun': 'dg',
                                    'mon': 'dl',
                                    'tue': 'dt',
                                    'wed': 'dc',
                                    'thu': 'dj',
                                    'fri': 'dv',
                                    'sat': 'ds'
                                },
                                'short': {
                                    'sun': 'dg.',
                                    'mon': 'dl.',
                                    'tue': 'dt.',
                                    'wed': 'dc.',
                                    'thu': 'dj.',
                                    'fri': 'dv.',
                                    'sat': 'ds.'
                                },
                                'wide': {
                                    'sun': 'diumenge',
                                    'mon': 'dilluns',
                                    'tue': 'dimarts',
                                    'wed': 'dimecres',
                                    'thu': 'dijous',
                                    'fri': 'divendres',
                                    'sat': 'dissabte'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dg.',
                                    'mon': 'dl.',
                                    'tue': 'dt.',
                                    'wed': 'dc.',
                                    'thu': 'dj.',
                                    'fri': 'dv.',
                                    'sat': 'ds.'
                                },
                                'narrow': {
                                    'sun': 'dg',
                                    'mon': 'dl',
                                    'tue': 'dt',
                                    'wed': 'dc',
                                    'thu': 'dj',
                                    'fri': 'dv',
                                    'sat': 'ds'
                                },
                                'short': {
                                    'sun': 'dg.',
                                    'mon': 'dl.',
                                    'tue': 'dm.',
                                    'wed': 'dc.',
                                    'thu': 'dj.',
                                    'fri': 'dv.',
                                    'sat': 'ds.'
                                },
                                'wide': {
                                    'sun': 'diumenge',
                                    'mon': 'dilluns',
                                    'tue': 'dimarts',
                                    'wed': 'dimecres',
                                    'thu': 'dijous',
                                    'fri': 'divendres',
                                    'sat': 'dissabte'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1T',
                                    '2': '2T',
                                    '3': '3T',
                                    '4': '4T'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1r trimestre',
                                    '2': '2n trimestre',
                                    '3': '3r trimestre',
                                    '4': '4t trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1T',
                                    '2': '2T',
                                    '3': '3T',
                                    '4': '4T'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1r trimestre',
                                    '2': '2n trimestre',
                                    '3': '3r trimestre',
                                    '4': '4t trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'abans de Crist',
                                '1': 'després de Crist',
                                '0-alt-variant': 'a. de la n. e.',
                                '1-alt-variant': 'de la n. e.'
                            },
                            'eraAbbr': {
                                '0': 'aC',
                                '1': 'dC',
                                '0-alt-variant': 'a. de la n. e.',
                                '1-alt-variant': 'de la n.e.'
                            },
                            'eraNarrow': {
                                '0': 'aC',
                                '1': 'dC',
                                '0-alt-variant': 'a. de la n. e.',
                                '1-alt-variant': 'de la n.e.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM \'de\' y',
                            'long': 'd MMMM \'de\' y',
                            'medium': 'dd/MM/y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'H.mm.ss zzzz',
                            'long': 'H.mm.ss z',
                            'medium': 'H.mm.ss',
                            'short': 'H.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E H:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM, y G',
                                'GyMMMM': 'LLLL \'de\' y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, d/M/y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM, y',
                                'yMMMM': 'LLLL \'de\' y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'hm': {
                                    'a': 'h.mm a -h.mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH.mm-HH.mm',
                                    'm': 'HH.mm-HH.mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH.mm-HH.mm v',
                                    'm': 'HH.mm-HH.mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'H-H v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM - E dd/MM',
                                    'M': 'E dd/MM - E dd/MM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E d - E d MMM',
                                    'M': 'E d MMM - E d MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E dd/MM/y - E dd/MM/y',
                                    'M': 'E dd/MM/y - E dd/MM/y',
                                    'y': 'E dd/MM/y - E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL \'de\' y',
                                    'y': 'LLL \'de\' y - LLL \'de\' y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM \'de\' y',
                                    'M': 'd MMM - d MMM \'de\' y',
                                    'y': 'd MMM \'de\' y - d MMM \'de\' y'
                                },
                                'yMMMEd': {
                                    'd': 'E d - E d MMM \'de\' y',
                                    'M': 'E d MMM - E d MMM \'de\' y',
                                    'y': 'E d MMM \'de\' y - E d MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL \'de\' y',
                                    'y': 'LLLL \'de\' y - LLLL \'de\' y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Hora de: {0}',
                    'regionFormat-type-daylight': 'Horari d\'estiu, {0}',
                    'regionFormat-type-standard': 'Hora estàndard, {0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language cs}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9298
 * timeZoneNames: 24r9298
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('cs', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'led',
                                    '2': 'úno',
                                    '3': 'bře',
                                    '4': 'dub',
                                    '5': 'kvě',
                                    '6': 'čvn',
                                    '7': 'čvc',
                                    '8': 'srp',
                                    '9': 'zář',
                                    '10': 'říj',
                                    '11': 'lis',
                                    '12': 'pro'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': 'ledna',
                                    '2': 'února',
                                    '3': 'března',
                                    '4': 'dubna',
                                    '5': 'května',
                                    '6': 'června',
                                    '7': 'července',
                                    '8': 'srpna',
                                    '9': 'září',
                                    '10': 'října',
                                    '11': 'listopadu',
                                    '12': 'prosince'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'led',
                                    '2': 'úno',
                                    '3': 'bře',
                                    '4': 'dub',
                                    '5': 'kvě',
                                    '6': 'čvn',
                                    '7': 'čvc',
                                    '8': 'srp',
                                    '9': 'zář',
                                    '10': 'říj',
                                    '11': 'lis',
                                    '12': 'pro'
                                },
                                'narrow': {
                                    '1': 'l',
                                    '2': 'ú',
                                    '3': 'b',
                                    '4': 'd',
                                    '5': 'k',
                                    '6': 'č',
                                    '7': 'č',
                                    '8': 's',
                                    '9': 'z',
                                    '10': 'ř',
                                    '11': 'l',
                                    '12': 'p'
                                },
                                'wide': {
                                    '1': 'leden',
                                    '2': 'únor',
                                    '3': 'březen',
                                    '4': 'duben',
                                    '5': 'květen',
                                    '6': 'červen',
                                    '7': 'červenec',
                                    '8': 'srpen',
                                    '9': 'září',
                                    '10': 'říjen',
                                    '11': 'listopad',
                                    '12': 'prosinec'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'út',
                                    'wed': 'st',
                                    'thu': 'čt',
                                    'fri': 'pá',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'Ú',
                                    'wed': 'S',
                                    'thu': 'Č',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'út',
                                    'wed': 'st',
                                    'thu': 'čt',
                                    'fri': 'pá',
                                    'sat': 'so'
                                },
                                'wide': {
                                    'sun': 'neděle',
                                    'mon': 'pondělí',
                                    'tue': 'úterý',
                                    'wed': 'středa',
                                    'thu': 'čtvrtek',
                                    'fri': 'pátek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'út',
                                    'wed': 'st',
                                    'thu': 'čt',
                                    'fri': 'pá',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'Ú',
                                    'wed': 'S',
                                    'thu': 'Č',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'út',
                                    'wed': 'st',
                                    'thu': 'čt',
                                    'fri': 'pá',
                                    'sat': 'so'
                                },
                                'wide': {
                                    'sun': 'neděle',
                                    'mon': 'pondělí',
                                    'tue': 'úterý',
                                    'wed': 'středa',
                                    'thu': 'čtvrtek',
                                    'fri': 'pátek',
                                    'sat': 'sobota'
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
                                    '1': '1. čtvrtletí',
                                    '2': '2. čtvrtletí',
                                    '3': '3. čtvrtletí',
                                    '4': '4. čtvrtletí'
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
                                    '1': '1. čtvrtletí',
                                    '2': '2. čtvrtletí',
                                    '3': '3. čtvrtletí',
                                    '4': '4. čtvrtletí'
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
                                '0': 'př. n. l.',
                                '1': 'n. l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'př. n. l.',
                                '1': 'n. l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'př.n.l.',
                                '1': 'n.l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd. M. y',
                            'short': 'dd.MM.yy'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd.',
                                'Ed': 'E d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E H:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLLL y G',
                                'GyMMMd': 'd. M. y G',
                                'GyMMMEd': 'E d. M. y G',
                                'GyMMMMd': 'd. MMMM y G',
                                'GyMMMMEd': 'E d. MMMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'd. M.',
                                'MEd': 'E d. M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. M.',
                                'MMMEd': 'E d. M.',
                                'MMMMd': 'd. MMMM',
                                'MMMMEd': 'E d. MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd. M. y',
                                'yMEd': 'E d. M. y',
                                'yMMM': 'LLLL y',
                                'yMMMd': 'd. M. y',
                                'yMMMEd': 'E d. M. y',
                                'yMMMM': 'LLLL y',
                                'yMMMMd': 'd. MMMM y',
                                'yMMMMEd': 'E d. MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd.–d.'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'H–H'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm–H:mm',
                                    'm': 'H:mm–H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm–H:mm v',
                                    'm': 'H:mm–H:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'd. M. – d. M.',
                                    'M': 'd. M. – d. M.'
                                },
                                'MEd': {
                                    'd': 'E d. M. – E d. M.',
                                    'M': 'E d. M. – E d. M.'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd.–d. M.',
                                    'M': 'd. M. – d. M.'
                                },
                                'MMMEd': {
                                    'd': 'E d. M. – E d. M.',
                                    'M': 'E d. M. – E d. M.'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M/y – M/y',
                                    'y': 'M/y – M/y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y – dd.MM.y',
                                    'M': 'dd.MM.y – dd.MM.y',
                                    'y': 'dd.MM.y – dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E dd.MM.y – E dd.MM.y',
                                    'M': 'E dd.MM.y – E dd.MM.y',
                                    'y': 'E dd.MM.y – E dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.–d. M. y',
                                    'M': 'd. M. – d. M. y',
                                    'y': 'd. M. y – d. M. y'
                                },
                                'yMMMEd': {
                                    'd': 'E d. M. – E d. M. y',
                                    'M': 'E d. M. – E d. M. y',
                                    'y': 'E d. M. y – E d. M. y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL–LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+H:mm;-H:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Časové pásmo {0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language da}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('da', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.',
                                    '5': 'maj',
                                    '6': 'jun.',
                                    '7': 'jul.',
                                    '8': 'aug.',
                                    '9': 'sep.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marts',
                                    '4': 'april',
                                    '5': 'maj',
                                    '6': 'juni',
                                    '7': 'juli',
                                    '8': 'august',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'maj',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marts',
                                    '4': 'april',
                                    '5': 'maj',
                                    '6': 'juni',
                                    '7': 'juli',
                                    '8': 'august',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'søn.',
                                    'mon': 'man.',
                                    'tue': 'tir.',
                                    'wed': 'ons.',
                                    'thu': 'tor.',
                                    'fri': 'fre.',
                                    'sat': 'lør.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'sø',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'lø'
                                },
                                'wide': {
                                    'sun': 'søndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'lørdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'søn',
                                    'mon': 'man',
                                    'tue': 'tir',
                                    'wed': 'ons',
                                    'thu': 'tor',
                                    'fri': 'fre',
                                    'sat': 'lør'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'sø',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'lø'
                                },
                                'wide': {
                                    'sun': 'søndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'lørdag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'middag',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'formiddag',
                                    'noon': 'middag',
                                    'pm': 'eftermiddag'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'før vesterlandsk tidsregning',
                                '1-alt-variant': 'vesterlandsk tidsregning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'f.v.t.',
                                '1-alt-variant': 'v.t.'
                            },
                            'eraNarrow': {
                                '0': 'fKr',
                                '1': 'eKr',
                                '0-alt-variant': 'fvt',
                                '1-alt-variant': 'vt'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE \'den\' d. MMMM y',
                            'long': 'd. MMM y',
                            'medium': 'dd/MM/y',
                            'short': 'dd/MM/yy'
                        },
                        'timeFormats': {
                            'full': 'HH.mm.ss zzzz',
                            'long': 'HH.mm.ss z',
                            'medium': 'HH.mm.ss',
                            'short': 'HH.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'kl.\' {0}',
                            'long': '{1} \'kl.\' {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd.',
                                'Ed': 'E \'d\'. d.',
                                'Ehm': 'E h.mm a',
                                'EHm': 'E HH.mm',
                                'Ehms': 'E h.mm.ss a',
                                'EHms': 'E HH.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h.mm a',
                                'Hm': 'HH.mm',
                                'hms': 'h.mm.ss a',
                                'Hms': 'HH.mm.ss',
                                'M': 'M',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMdd': 'dd/MM',
                                'MMM': 'MMM',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E d. MMM',
                                'MMMMEd': 'E d. MMMM',
                                'ms': 'mm.ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E d/M/y',
                                'yMM': 'MM/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd. MMM y',
                                'yMMMEd': 'E d. MMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd.–d.'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h.mm a – h.mm a',
                                    'h': 'h.mm–h.mm a',
                                    'm': 'h.mm–h.mm a'
                                },
                                'Hm': {
                                    'H': 'HH.mm–HH.mm',
                                    'm': 'HH.mm–HH.mm'
                                },
                                'hmv': {
                                    'a': 'h.mm a – h.mm a v',
                                    'h': 'h.mm–h.mm a v',
                                    'm': 'h.mm–h.mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH.mm–HH.mm v',
                                    'm': 'HH.mm–HH.mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'dd/MM – dd/MM',
                                    'M': 'dd/MM – dd/MM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM – E dd/MM',
                                    'M': 'E dd/MM – E dd/MM'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd.–d. MMM',
                                    'M': 'd. MMM – d. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E \'den\' d. – E \'den\' d. MMM',
                                    'M': 'E \'den\' d. MMM – E \'den\' d. MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM/y – MM/y',
                                    'y': 'MM/y – MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y – dd/MM/y',
                                    'M': 'dd/MM/y – dd/MM/y',
                                    'y': 'dd/MM/y – dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E dd/MM/y – E dd/MM/y',
                                    'M': 'E dd/MM/y – E dd/MM/y',
                                    'y': 'E dd/MM/y – E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.–d. MMM y',
                                    'M': 'd. MMM – d. MMM y',
                                    'y': 'd. MMM y – d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E \'den\' d. – E \'den\' d. MMM y',
                                    'M': 'E \'den\' d. MMM – E \'den\' d. MMM y',
                                    'y': 'E \'den\' d. MMM y – E \'den\' d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH.mm;-HH.mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Tidszone for {0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language de}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('de', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Jan.',
                                    '2': 'Feb.',
                                    '3': 'März',
                                    '4': 'Apr.',
                                    '5': 'Mai',
                                    '6': 'Juni',
                                    '7': 'Juli',
                                    '8': 'Aug.',
                                    '9': 'Sep.',
                                    '10': 'Okt.',
                                    '11': 'Nov.',
                                    '12': 'Dez.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Januar',
                                    '2': 'Februar',
                                    '3': 'März',
                                    '4': 'April',
                                    '5': 'Mai',
                                    '6': 'Juni',
                                    '7': 'Juli',
                                    '8': 'August',
                                    '9': 'September',
                                    '10': 'Oktober',
                                    '11': 'November',
                                    '12': 'Dezember'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mär',
                                    '4': 'Apr',
                                    '5': 'Mai',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Aug',
                                    '9': 'Sep',
                                    '10': 'Okt',
                                    '11': 'Nov',
                                    '12': 'Dez'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Januar',
                                    '2': 'Februar',
                                    '3': 'März',
                                    '4': 'April',
                                    '5': 'Mai',
                                    '6': 'Juni',
                                    '7': 'Juli',
                                    '8': 'August',
                                    '9': 'September',
                                    '10': 'Oktober',
                                    '11': 'November',
                                    '12': 'Dezember'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'M',
                                    'thu': 'D',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'wide': {
                                    'sun': 'Sonntag',
                                    'mon': 'Montag',
                                    'tue': 'Dienstag',
                                    'wed': 'Mittwoch',
                                    'thu': 'Donnerstag',
                                    'fri': 'Freitag',
                                    'sat': 'Samstag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'So',
                                    'mon': 'Mo',
                                    'tue': 'Di',
                                    'wed': 'Mi',
                                    'thu': 'Do',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'M',
                                    'thu': 'D',
                                    'fri': 'F',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'So.',
                                    'mon': 'Mo.',
                                    'tue': 'Di.',
                                    'wed': 'Mi.',
                                    'thu': 'Do.',
                                    'fri': 'Fr.',
                                    'sat': 'Sa.'
                                },
                                'wide': {
                                    'sun': 'Sonntag',
                                    'mon': 'Montag',
                                    'tue': 'Dienstag',
                                    'wed': 'Mittwoch',
                                    'thu': 'Donnerstag',
                                    'fri': 'Freitag',
                                    'sat': 'Samstag'
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
                                    '1': '1. Quartal',
                                    '2': '2. Quartal',
                                    '3': '3. Quartal',
                                    '4': '4. Quartal'
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
                                    '1': '1. Quartal',
                                    '2': '2. Quartal',
                                    '3': '3. Quartal',
                                    '4': '4. Quartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'narrow': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'wide': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'narrow': {
                                    'afternoon': 'nachmittags',
                                    'am': 'vorm.',
                                    'earlyMorning': 'morgens',
                                    'evening': 'abends',
                                    'morning': 'vormittags',
                                    'night': 'nachts',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                },
                                'wide': {
                                    'afternoon': 'Nachmittag',
                                    'am': 'vorm.',
                                    'earlyMorning': 'Morgen',
                                    'evening': 'Abend',
                                    'morning': 'Vormittag',
                                    'night': 'Nacht',
                                    'noon': 'Mittag',
                                    'pm': 'nachm.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'v. Chr.',
                                '1': 'n. Chr.',
                                '0-alt-variant': 'vor der gewöhnlichen Zeitrechnung',
                                '1-alt-variant': 'der gewöhnlichen Zeitrechnung'
                            },
                            'eraAbbr': {
                                '0': 'v. Chr.',
                                '1': 'n. Chr.',
                                '0-alt-variant': 'v. u. Z.',
                                '1-alt-variant': 'u. Z.'
                            },
                            'eraNarrow': {
                                '0': 'v. Chr.',
                                '1': 'n. Chr.',
                                '0-alt-variant': 'vdZ',
                                '1-alt-variant': 'dZ'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'dd.MM.y',
                            'short': 'dd.MM.yy'
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
                                'd': 'd',
                                'Ed': 'E, d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'h': 'h a',
                                'H': 'HH \'Uhr\'',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd.M.',
                                'MEd': 'E, d.M.',
                                'MMd': 'd.MM.',
                                'MMdd': 'dd.MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMEd': 'E, d. MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E, d.M.y',
                                'yMM': 'MM.y',
                                'yMMdd': 'dd.MM.y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd. MMM y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd.-d.'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH-HH \'Uhr\''
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH-HH \'Uhr\' v'
                                },
                                'M': {
                                    'M': 'M.-M.'
                                },
                                'Md': {
                                    'd': 'dd.MM. - dd.MM.',
                                    'M': 'dd.MM. - dd.MM.'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM. - E, dd.MM.',
                                    'M': 'E, dd.MM. - E, dd.MM.'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'd.-d. MMM',
                                    'M': 'd. MMM - d. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d. - E, d. MMM',
                                    'M': 'E, d. MMM - E, d. MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM.y - MM.y',
                                    'y': 'MM.y - MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y - dd.MM.y',
                                    'M': 'dd.MM.y - dd.MM.y',
                                    'y': 'dd.MM.y - dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y - E, dd.MM.y',
                                    'M': 'E, dd.MM.y - E, dd.MM.y',
                                    'y': 'E, dd.MM.y - E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.-d. MMM y',
                                    'M': 'd. MMM - d. MMM y',
                                    'y': 'd. MMM y - d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. - E, d. MMM y',
                                    'M': 'E, d. MMM - E, d. MMM y',
                                    'y': 'E, d. MMM y - E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} Zeit',
                    'regionFormat-type-daylight': '{0} Sommerzeit',
                    'regionFormat-type-standard': '{0} Normalzeit',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language el}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('el', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Ιαν',
                                    '2': 'Φεβ',
                                    '3': 'Μαρ',
                                    '4': 'Απρ',
                                    '5': 'Μαΐ',
                                    '6': 'Ιουν',
                                    '7': 'Ιουλ',
                                    '8': 'Αυγ',
                                    '9': 'Σεπ',
                                    '10': 'Οκτ',
                                    '11': 'Νοε',
                                    '12': 'Δεκ'
                                },
                                'narrow': {
                                    '1': 'Ι',
                                    '2': 'Φ',
                                    '3': 'Μ',
                                    '4': 'Α',
                                    '5': 'Μ',
                                    '6': 'Ι',
                                    '7': 'Ι',
                                    '8': 'Α',
                                    '9': 'Σ',
                                    '10': 'Ο',
                                    '11': 'Ν',
                                    '12': 'Δ'
                                },
                                'wide': {
                                    '1': 'Ιανουαρίου',
                                    '2': 'Φεβρουαρίου',
                                    '3': 'Μαρτίου',
                                    '4': 'Απριλίου',
                                    '5': 'Μαΐου',
                                    '6': 'Ιουνίου',
                                    '7': 'Ιουλίου',
                                    '8': 'Αυγούστου',
                                    '9': 'Σεπτεμβρίου',
                                    '10': 'Οκτωβρίου',
                                    '11': 'Νοεμβρίου',
                                    '12': 'Δεκεμβρίου'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Ιαν',
                                    '2': 'Φεβ',
                                    '3': 'Μάρ',
                                    '4': 'Απρ',
                                    '5': 'Μάι',
                                    '6': 'Ιούν',
                                    '7': 'Ιούλ',
                                    '8': 'Αύγ',
                                    '9': 'Σεπ',
                                    '10': 'Οκτ',
                                    '11': 'Νοέ',
                                    '12': 'Δεκ'
                                },
                                'narrow': {
                                    '1': 'Ι',
                                    '2': 'Φ',
                                    '3': 'Μ',
                                    '4': 'Α',
                                    '5': 'Μ',
                                    '6': 'Ι',
                                    '7': 'Ι',
                                    '8': 'Α',
                                    '9': 'Σ',
                                    '10': 'Ο',
                                    '11': 'Ν',
                                    '12': 'Δ'
                                },
                                'wide': {
                                    '1': 'Ιανουάριος',
                                    '2': 'Φεβρουάριος',
                                    '3': 'Μάρτιος',
                                    '4': 'Απρίλιος',
                                    '5': 'Μάιος',
                                    '6': 'Ιούνιος',
                                    '7': 'Ιούλιος',
                                    '8': 'Αύγουστος',
                                    '9': 'Σεπτέμβριος',
                                    '10': 'Οκτώβριος',
                                    '11': 'Νοέμβριος',
                                    '12': 'Δεκέμβριος'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Κυρ',
                                    'mon': 'Δευ',
                                    'tue': 'Τρί',
                                    'wed': 'Τετ',
                                    'thu': 'Πέμ',
                                    'fri': 'Παρ',
                                    'sat': 'Σάβ'
                                },
                                'narrow': {
                                    'sun': 'Κ',
                                    'mon': 'Δ',
                                    'tue': 'Τ',
                                    'wed': 'Τ',
                                    'thu': 'Π',
                                    'fri': 'Π',
                                    'sat': 'Σ'
                                },
                                'short': {
                                    'sun': 'Κυ',
                                    'mon': 'Δε',
                                    'tue': 'Τρ',
                                    'wed': 'Τε',
                                    'thu': 'Πέ',
                                    'fri': 'Πα',
                                    'sat': 'Σά'
                                },
                                'wide': {
                                    'sun': 'Κυριακή',
                                    'mon': 'Δευτέρα',
                                    'tue': 'Τρίτη',
                                    'wed': 'Τετάρτη',
                                    'thu': 'Πέμπτη',
                                    'fri': 'Παρασκευή',
                                    'sat': 'Σάββατο'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Κυρ',
                                    'mon': 'Δευ',
                                    'tue': 'Τρί',
                                    'wed': 'Τετ',
                                    'thu': 'Πέμ',
                                    'fri': 'Παρ',
                                    'sat': 'Σάβ'
                                },
                                'narrow': {
                                    'sun': 'Κ',
                                    'mon': 'Δ',
                                    'tue': 'Τ',
                                    'wed': 'Τ',
                                    'thu': 'Π',
                                    'fri': 'Π',
                                    'sat': 'Σ'
                                },
                                'short': {
                                    'sun': 'Κυ',
                                    'mon': 'Δε',
                                    'tue': 'Τρ',
                                    'wed': 'Τε',
                                    'thu': 'Πέ',
                                    'fri': 'Πα',
                                    'sat': 'Σά'
                                },
                                'wide': {
                                    'sun': 'Κυριακή',
                                    'mon': 'Δευτέρα',
                                    'tue': 'Τρίτη',
                                    'wed': 'Τετάρτη',
                                    'thu': 'Πέμπτη',
                                    'fri': 'Παρασκευή',
                                    'sat': 'Σάββατο'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Τ1',
                                    '2': 'Τ2',
                                    '3': 'Τ3',
                                    '4': 'Τ4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1ο τρίμηνο',
                                    '2': '2ο τρίμηνο',
                                    '3': '3ο τρίμηνο',
                                    '4': '4ο τρίμηνο'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Τ1',
                                    '2': 'Τ2',
                                    '3': 'Τ3',
                                    '4': 'Τ4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1ο τρίμηνο',
                                    '2': '2ο τρίμηνο',
                                    '3': '3ο τρίμηνο',
                                    '4': '4ο τρίμηνο'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                },
                                'narrow': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                },
                                'wide': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                },
                                'narrow': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                },
                                'wide': {
                                    'am': 'π.μ.',
                                    'pm': 'μ.μ.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'π.Χ.',
                                '1': 'μ.Χ.',
                                '0-alt-variant': 'π.Κ.Χ.',
                                '1-alt-variant': 'ΚΧ'
                            },
                            'eraAbbr': {
                                '0': 'π.Χ.',
                                '1': 'μ.Χ.',
                                '0-alt-variant': 'π.Κ.Χ.',
                                '1-alt-variant': 'ΚΧ'
                            },
                            'eraNarrow': {
                                '0': 'π.Χ.',
                                '1': 'μ.Χ.',
                                '0-alt-variant': 'π.Κ.Χ.',
                                '1-alt-variant': 'ΚΧ'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} - {0}',
                            'long': '{1} - {0}',
                            'medium': '{1} - {0}',
                            'short': '{1} - {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, d/M/y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'LLLL y',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E, dd/MM - E, dd/MM',
                                    'M': 'E, dd/MM - E, dd/MM'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MMMd': {
                                    'd': 'dd-dd MMM',
                                    'M': 'dd MMM - dd MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, dd - E, dd MMM',
                                    'M': 'E, dd MMM - E, dd MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E, dd/MM/y - E, dd/MM/y',
                                    'M': 'E, dd/MM/y - E, dd/MM/y',
                                    'y': 'E, dd/MM/y - E, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'dd-dd MMM y',
                                    'M': 'dd MMM - dd MMM y',
                                    'y': 'dd MMM y - dd MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd MMM - E, dd MMM y',
                                    'M': 'E, dd MMM - E, dd MMM y',
                                    'y': 'E, dd MMM y - E, dd MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Ώρα ({0})',
                    'regionFormat-type-daylight': 'Θερινή ώρα ({0})',
                    'regionFormat-type-standard': 'Χειμερινή ώρα ({0})',
                    'fallbackFormat': '[{1} ({0})]'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language es}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('es', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ene.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'abr.',
                                    '5': 'may.',
                                    '6': 'jun.',
                                    '7': 'jul.',
                                    '8': 'ago.',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'dic.'
                                },
                                'narrow': {
                                    '1': 'E',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'enero',
                                    '2': 'febrero',
                                    '3': 'marzo',
                                    '4': 'abril',
                                    '5': 'mayo',
                                    '6': 'junio',
                                    '7': 'julio',
                                    '8': 'agosto',
                                    '9': 'septiembre',
                                    '10': 'octubre',
                                    '11': 'noviembre',
                                    '12': 'diciembre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Ene.',
                                    '2': 'Feb.',
                                    '3': 'Mar.',
                                    '4': 'Abr.',
                                    '5': 'May.',
                                    '6': 'Jun.',
                                    '7': 'Jul.',
                                    '8': 'Ago.',
                                    '9': 'Sept.',
                                    '10': 'Oct.',
                                    '11': 'Nov.',
                                    '12': 'Dic.'
                                },
                                'narrow': {
                                    '1': 'E',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Enero',
                                    '2': 'Febrero',
                                    '3': 'Marzo',
                                    '4': 'Abril',
                                    '5': 'Mayo',
                                    '6': 'Junio',
                                    '7': 'Julio',
                                    '8': 'Agosto',
                                    '9': 'Septiembre',
                                    '10': 'Octubre',
                                    '11': 'Noviembre',
                                    '12': 'Diciembre'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dom.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mié.',
                                    'thu': 'jue.',
                                    'fri': 'vie.',
                                    'sat': 'sáb.'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'X',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'DO',
                                    'mon': 'LU',
                                    'tue': 'MA',
                                    'wed': 'MI',
                                    'thu': 'JU',
                                    'fri': 'VI',
                                    'sat': 'SA'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'lunes',
                                    'tue': 'martes',
                                    'wed': 'miércoles',
                                    'thu': 'jueves',
                                    'fri': 'viernes',
                                    'sat': 'sábado'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Dom.',
                                    'mon': 'Lun.',
                                    'tue': 'Mar.',
                                    'wed': 'Mié.',
                                    'thu': 'Jue.',
                                    'fri': 'Vie.',
                                    'sat': 'Sáb.'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'DO',
                                    'mon': 'LU',
                                    'tue': 'MA',
                                    'wed': 'MI',
                                    'thu': 'JU',
                                    'fri': 'VI',
                                    'sat': 'SA'
                                },
                                'wide': {
                                    'sun': 'Domingo',
                                    'mon': 'Lunes',
                                    'tue': 'Martes',
                                    'wed': 'Miércoles',
                                    'thu': 'Jueves',
                                    'fri': 'Viernes',
                                    'sat': 'Sábado'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1T',
                                    '2': '2T',
                                    '3': '3T',
                                    '4': '4T'
                                },
                                'wide': {
                                    '1': '1.er trimestre',
                                    '2': '2.º trimestre',
                                    '3': '3.er trimestre',
                                    '4': '4.º trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1T',
                                    '2': '2T',
                                    '3': '3T',
                                    '4': '4T'
                                },
                                'wide': {
                                    '1': '1.er trimestre',
                                    '2': '2.º trimestre',
                                    '3': '3.er trimestre',
                                    '4': '4.º trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a. m.',
                                    'pm': 'p. m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'antes de Cristo',
                                '1': 'anno Dómini',
                                '0-alt-variant': 'a. e. c.',
                                '1-alt-variant': 'e. c.'
                            },
                            'eraAbbr': {
                                '0': 'a. C.',
                                '1': 'd. C.',
                                '0-alt-variant': 'a. e. c.',
                                '1-alt-variant': 'e. c.'
                            },
                            'eraNarrow': {
                                '0': 'a. C.',
                                '1': 'd. C.',
                                '0-alt-variant': 'a. e. c.',
                                '1-alt-variant': 'e. c.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d \'de\' MMMM \'de\' y',
                            'long': 'd \'de\' MMMM \'de\' y',
                            'medium': 'd/M/y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss (zzzz)',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}, {0}',
                            'long': '{1}, {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, H:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM \'de\' y G',
                                'GyMMMd': 'd MMM \'de\' y G',
                                'GyMMMEd': 'E, d \'de\' MMMM \'de\' y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMd': 'd/M',
                                'MMdd': 'd/M',
                                'MMM': 'LLL',
                                'MMMd': 'd \'de\' MMM',
                                'MMMdd': 'dd-MMM',
                                'MMMEd': 'E d \'de\' MMM',
                                'MMMMd': 'd \'de\' MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'EEE, d/M/y',
                                'yMM': 'M/y',
                                'yMMM': 'MMM \'de\' y',
                                'yMMMd': 'd \'de\' MMM \'de\' y',
                                'yMMMEd': 'EEE, d \'de\' MMMM \'de\' y',
                                'yMMMM': 'MMMM \'de\' y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ \'de\' y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0}–{1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a–h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'H–H'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm – h:mm a',
                                    'm': 'h:mm – h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm–H:mm',
                                    'm': 'H:mm–H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a–h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm–H:mm v',
                                    'm': 'H:mm–H:mm v'
                                },
                                'hv': {
                                    'a': 'h a–h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'd/M–d/M',
                                    'M': 'd/M–d/M'
                                },
                                'MEd': {
                                    'd': 'E, d/M–E, d/M',
                                    'M': 'E, d/M–E, d/M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM–d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d MMM–E, d MMM',
                                    'M': 'E, d MMM–E, d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M/y–M/y',
                                    'y': 'M/y–M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y–d/M/y',
                                    'M': 'd/M/y–d/M/y',
                                    'y': 'd/M/y–d/M/y'
                                },
                                'yMEd': {
                                    'd': 'E, d/M/y–E, d/M/y',
                                    'M': 'E, d/M/y–E, d/M/y',
                                    'y': 'E, d/M/y–E, d/M/y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y–MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM–d MMM \'de\' y',
                                    'y': 'd MMM \'de\' y–d MMM \'de\' y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d MMM–E, d MMM \'de\' y',
                                    'M': 'E, d MMM–E, d MMM \'de\' y',
                                    'y': 'E, d MMM \'de\' y–E, d MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM \'de\' y',
                                    'y': 'MMMM \'de\' y–MMMM \'de\' y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Hora de {0}',
                    'regionFormat-type-daylight': 'horario de verano de {0}',
                    'regionFormat-type-standard': 'horario estándar de {0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language fi}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('fi', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'tammikuuta',
                                    '2': 'helmikuuta',
                                    '3': 'maaliskuuta',
                                    '4': 'huhtikuuta',
                                    '5': 'toukokuuta',
                                    '6': 'kesäkuuta',
                                    '7': 'heinäkuuta',
                                    '8': 'elokuuta',
                                    '9': 'syyskuuta',
                                    '10': 'lokakuuta',
                                    '11': 'marraskuuta',
                                    '12': 'joulukuuta'
                                },
                                'narrow': {
                                    '1': 'T',
                                    '2': 'H',
                                    '3': 'M',
                                    '4': 'H',
                                    '5': 'T',
                                    '6': 'K',
                                    '7': 'H',
                                    '8': 'E',
                                    '9': 'S',
                                    '10': 'L',
                                    '11': 'M',
                                    '12': 'J'
                                },
                                'wide': {
                                    '1': 'tammikuuta',
                                    '2': 'helmikuuta',
                                    '3': 'maaliskuuta',
                                    '4': 'huhtikuuta',
                                    '5': 'toukokuuta',
                                    '6': 'kesäkuuta',
                                    '7': 'heinäkuuta',
                                    '8': 'elokuuta',
                                    '9': 'syyskuuta',
                                    '10': 'lokakuuta',
                                    '11': 'marraskuuta',
                                    '12': 'joulukuuta'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'tammi',
                                    '2': 'helmi',
                                    '3': 'maalis',
                                    '4': 'huhti',
                                    '5': 'touko',
                                    '6': 'kesä',
                                    '7': 'heinä',
                                    '8': 'elo',
                                    '9': 'syys',
                                    '10': 'loka',
                                    '11': 'marras',
                                    '12': 'joulu'
                                },
                                'narrow': {
                                    '1': 'T',
                                    '2': 'H',
                                    '3': 'M',
                                    '4': 'H',
                                    '5': 'T',
                                    '6': 'K',
                                    '7': 'H',
                                    '8': 'E',
                                    '9': 'S',
                                    '10': 'L',
                                    '11': 'M',
                                    '12': 'J'
                                },
                                'wide': {
                                    '1': 'tammikuu',
                                    '2': 'helmikuu',
                                    '3': 'maaliskuu',
                                    '4': 'huhtikuu',
                                    '5': 'toukokuu',
                                    '6': 'kesäkuu',
                                    '7': 'heinäkuu',
                                    '8': 'elokuu',
                                    '9': 'syyskuu',
                                    '10': 'lokakuu',
                                    '11': 'marraskuu',
                                    '12': 'joulukuu'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'K',
                                    'thu': 'T',
                                    'fri': 'P',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'wide': {
                                    'sun': 'sunnuntaina',
                                    'mon': 'maanantaina',
                                    'tue': 'tiistaina',
                                    'wed': 'keskiviikkona',
                                    'thu': 'torstaina',
                                    'fri': 'perjantaina',
                                    'sat': 'lauantaina'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'K',
                                    'thu': 'T',
                                    'fri': 'P',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'su',
                                    'mon': 'ma',
                                    'tue': 'ti',
                                    'wed': 'ke',
                                    'thu': 'to',
                                    'fri': 'pe',
                                    'sat': 'la'
                                },
                                'wide': {
                                    'sun': 'sunnuntai',
                                    'mon': 'maanantai',
                                    'tue': 'tiistai',
                                    'wed': 'keskiviikko',
                                    'thu': 'torstai',
                                    'fri': 'perjantai',
                                    'sat': 'lauantai'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1. nelj.',
                                    '2': '2. nelj.',
                                    '3': '3. nelj.',
                                    '4': '4. nelj.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. neljännes',
                                    '2': '2. neljännes',
                                    '3': '3. neljännes',
                                    '4': '4. neljännes'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1. nelj.',
                                    '2': '2. nelj.',
                                    '3': '3. nelj.',
                                    '4': '4. nelj.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. neljännes',
                                    '2': '2. neljännes',
                                    '3': '3. neljännes',
                                    '4': '4. neljännes'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'narrow': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'wide': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'narrow': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                },
                                'wide': {
                                    'am': 'ap.',
                                    'pm': 'ip.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'ennen Kristuksen syntymää',
                                '1': 'jälkeen Kristuksen syntymän',
                                '0-alt-variant': 'ennen ajanlaskun alkua',
                                '1-alt-variant': 'jälkeen ajanlaskun alun'
                            },
                            'eraAbbr': {
                                '0': 'eKr.',
                                '1': 'jKr.',
                                '0-alt-variant': 'eaa.',
                                '1-alt-variant': 'jaa.'
                            },
                            'eraNarrow': {
                                '0': 'eK',
                                '1': 'jK',
                                '0-alt-variant': 'eaa',
                                '1-alt-variant': 'jaa'
                            }
                        },
                        'dateFormats': {
                            'full': 'cccc d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd.M.y',
                            'short': 'd.M.y'
                        },
                        'timeFormats': {
                            'full': 'H.mm.ss zzzz',
                            'long': 'H.mm.ss z',
                            'medium': 'H.mm.ss',
                            'short': 'H.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d.',
                                'Ehm': 'E h.mm a',
                                'EHm': 'E H.mm',
                                'Ehms': 'E h.mm.ss a',
                                'EHms': 'E H.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h.mm a',
                                'Hm': 'H.mm',
                                'hms': 'h.mm.ss a',
                                'Hms': 'H.mm.ss',
                                'M': 'L',
                                'Md': 'd.M.',
                                'MEd': 'E d.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'ccc d. MMM',
                                'ms': 'm.ss',
                                'y': 'y',
                                'yM': 'L.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E d.M.y',
                                'yMM': 'M.y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd. MMM y',
                                'yMMMEd': 'E d. MMM y',
                                'yMMMM': 'LLLL y',
                                'yMMMMccccd': 'cccc d. MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0}–{1}',
                                'd': {
                                    'd': 'd.–d.'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'H–H'
                                },
                                'hm': {
                                    'a': 'h.mm a – h.mm a',
                                    'h': 'h.mm–h.mm a',
                                    'm': 'h.mm–h.mm a'
                                },
                                'Hm': {
                                    'H': 'H.mm–H.mm',
                                    'm': 'H.mm–H.mm'
                                },
                                'hmv': {
                                    'a': 'h.mm a – h.mm a v',
                                    'h': 'h.mm–h.mm a v',
                                    'm': 'h.mm–h.mm a v'
                                },
                                'Hmv': {
                                    'H': 'H.mm–H.mm v',
                                    'm': 'H.mm–H.mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'L.–L.'
                                },
                                'Md': {
                                    'd': 'd.–d.M.',
                                    'M': 'd.M.–d.M.'
                                },
                                'MEd': {
                                    'd': 'E d. – E d.M.',
                                    'M': 'E d.M. – E d.M.'
                                },
                                'MMM': {
                                    'M': 'LLL–LLLL'
                                },
                                'MMMd': {
                                    'd': 'd.–d. MMMM',
                                    'M': 'd. MMMM – d. MMMM'
                                },
                                'MMMEd': {
                                    'd': 'E d. – E d. MMMM',
                                    'M': 'E d. MMMM – E d. MMMM'
                                },
                                'MMMM': {
                                    'M': 'LLL–LLLL'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'LLL–LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                },
                                'yMd': {
                                    'd': 'd.–d.M.y',
                                    'M': 'd.M.–d.M.y',
                                    'y': 'd.M.y–d.M.y'
                                },
                                'yMEd': {
                                    'd': 'E d.M.y – E d.M.y',
                                    'M': 'E d.M.y – E d.M.y',
                                    'y': 'E d.M.y – E d.M.y'
                                },
                                'yMMM': {
                                    'M': 'LLL–LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                },
                                'yMMMd': {
                                    'd': 'd.–d. MMMM y',
                                    'M': 'd. MMMM – d. MMMM y',
                                    'y': 'd. MMMM y – d. MMMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d. – E d. MMMM y',
                                    'M': 'E d. MMMM – E d. MMMM y',
                                    'y': 'E d. MMMM y – E d. MMMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLL–LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+H.mm;-H.mm',
                    'gmtFormat': 'UTC{0}',
                    'gmtZeroFormat': 'UTC',
                    'regionFormat': 'aikavyöhyke: {0}',
                    'regionFormat-type-daylight': '{0} (kesäaika)',
                    'regionFormat-type-standard': '{0} (normaaliaika)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language fr}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9310
 * timeZoneNames: 24r9310
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('fr', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'janv.',
                                    '2': 'févr.',
                                    '3': 'mars',
                                    '4': 'avr.',
                                    '5': 'mai',
                                    '6': 'juin',
                                    '7': 'juil.',
                                    '8': 'août',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'déc.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'janvier',
                                    '2': 'février',
                                    '3': 'mars',
                                    '4': 'avril',
                                    '5': 'mai',
                                    '6': 'juin',
                                    '7': 'juillet',
                                    '8': 'août',
                                    '9': 'septembre',
                                    '10': 'octobre',
                                    '11': 'novembre',
                                    '12': 'décembre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'janv.',
                                    '2': 'févr.',
                                    '3': 'mars',
                                    '4': 'avr.',
                                    '5': 'mai',
                                    '6': 'juin',
                                    '7': 'juil.',
                                    '8': 'août',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'déc.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'janvier',
                                    '2': 'février',
                                    '3': 'mars',
                                    '4': 'avril',
                                    '5': 'mai',
                                    '6': 'juin',
                                    '7': 'juillet',
                                    '8': 'août',
                                    '9': 'septembre',
                                    '10': 'octobre',
                                    '11': 'novembre',
                                    '12': 'décembre'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'di',
                                    'mon': 'lu',
                                    'tue': 'ma',
                                    'wed': 'me',
                                    'thu': 'je',
                                    'fri': 've',
                                    'sat': 'sa'
                                },
                                'wide': {
                                    'sun': 'dimanche',
                                    'mon': 'lundi',
                                    'tue': 'mardi',
                                    'wed': 'mercredi',
                                    'thu': 'jeudi',
                                    'fri': 'vendredi',
                                    'sat': 'samedi'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dim.',
                                    'mon': 'lun.',
                                    'tue': 'mar.',
                                    'wed': 'mer.',
                                    'thu': 'jeu.',
                                    'fri': 'ven.',
                                    'sat': 'sam.'
                                },
                                'wide': {
                                    'sun': 'dimanche',
                                    'mon': 'lundi',
                                    'tue': 'mardi',
                                    'wed': 'mercredi',
                                    'thu': 'jeudi',
                                    'fri': 'vendredi',
                                    'sat': 'samedi'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1er trimestre',
                                    '2': '2e trimestre',
                                    '3': '3e trimestre',
                                    '4': '4e trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1er trimestre',
                                    '2': '2e trimestre',
                                    '3': '3e trimestre',
                                    '4': '4e trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'ap.m.',
                                    'am': 'AM',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'ap.-m.',
                                    'am': 'a',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'après-midi',
                                    'am': 'AM',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'ap.m.',
                                    'am': 'av.m.',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'ap.m.'
                                },
                                'narrow': {
                                    'afternoon': 'ap.-m.',
                                    'am': 'a',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'après-midi',
                                    'am': 'avant-midi',
                                    'morning': 'matin',
                                    'night': 'soir',
                                    'noon': 'midi',
                                    'pm': 'après-midi'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'avant Jésus-Christ',
                                '1': 'après Jésus-Christ',
                                '0-alt-variant': 'AEC',
                                '1-alt-variant': 'EC'
                            },
                            'eraAbbr': {
                                '0': 'av. J.-C.',
                                '1': 'ap. J.-C.',
                                '0-alt-variant': 'AEC',
                                '1-alt-variant': 'EC'
                            },
                            'eraNarrow': {
                                '0': 'av. J.-C.',
                                '1': 'ap. J.-C.',
                                '0-alt-variant': 'AEC',
                                '1-alt-variant': 'EC'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd/MM/y'
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
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'h': 'h a',
                                'H': 'HH \'h\'',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E d/M/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E d MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h – h a'
                                },
                                'H': {
                                    'H': 'HH – HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm – h:mm a',
                                    'm': 'h:mm – h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm – HH:mm',
                                    'm': 'HH:mm – HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm – h:mm a v',
                                    'm': 'h:mm – h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm – HH:mm v',
                                    'm': 'HH:mm – HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h – h a v'
                                },
                                'Hv': {
                                    'H': 'HH – HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'dd/MM – dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM - E dd/MM',
                                    'M': 'E dd/MM - E dd/MM'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E d – E d MMM',
                                    'M': 'E d MMM – E d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM/y – MM/y',
                                    'y': 'M/y – M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y – d/M/y',
                                    'M': 'd/M/y – d/M/y',
                                    'y': 'dd/MM/y – dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E dd/MM/y – E dd/MM/y',
                                    'M': 'E dd/MM/y – E dd/MM/y',
                                    'y': 'E dd/MM/y – E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM – d MMM y',
                                    'y': 'd MMM y – d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d – E d MMM y',
                                    'M': 'E d MMM – E d MMM y',
                                    'y': 'E d MMM y – E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM – MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;−HH:mm',
                    'gmtFormat': 'UTC{0}',
                    'gmtZeroFormat': 'UTC',
                    'regionFormat': 'heure : {0}',
                    'regionFormat-type-daylight': '{0} (heure d’été)',
                    'regionFormat-type-standard': '{0} (heure standard)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language he}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('he', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ינו',
                                    '2': 'פבר',
                                    '3': 'מרץ',
                                    '4': 'אפר',
                                    '5': 'מאי',
                                    '6': 'יונ',
                                    '7': 'יול',
                                    '8': 'אוג',
                                    '9': 'ספט',
                                    '10': 'אוק',
                                    '11': 'נוב',
                                    '12': 'דצמ'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': 'ינואר',
                                    '2': 'פברואר',
                                    '3': 'מרץ',
                                    '4': 'אפריל',
                                    '5': 'מאי',
                                    '6': 'יוני',
                                    '7': 'יולי',
                                    '8': 'אוגוסט',
                                    '9': 'ספטמבר',
                                    '10': 'אוקטובר',
                                    '11': 'נובמבר',
                                    '12': 'דצמבר'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'ינו׳',
                                    '2': 'פבר׳',
                                    '3': 'מרץ',
                                    '4': 'אפר׳',
                                    '5': 'מאי',
                                    '6': 'יונ׳',
                                    '7': 'יול׳',
                                    '8': 'אוג׳',
                                    '9': 'ספט׳',
                                    '10': 'אוק׳',
                                    '11': 'נוב׳',
                                    '12': 'דצמ׳'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': 'ינואר',
                                    '2': 'פברואר',
                                    '3': 'מרץ',
                                    '4': 'אפריל',
                                    '5': 'מאי',
                                    '6': 'יוני',
                                    '7': 'יולי',
                                    '8': 'אוגוסט',
                                    '9': 'ספטמבר',
                                    '10': 'אוקטובר',
                                    '11': 'נובמבר',
                                    '12': 'דצמבר'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'יום א׳',
                                    'mon': 'יום ב׳',
                                    'tue': 'יום ג׳',
                                    'wed': 'יום ד׳',
                                    'thu': 'יום ה׳',
                                    'fri': 'יום ו׳',
                                    'sat': 'שבת'
                                },
                                'narrow': {
                                    'sun': 'א׳',
                                    'mon': 'ב׳',
                                    'tue': 'ג׳',
                                    'wed': 'ד׳',
                                    'thu': 'ה׳',
                                    'fri': 'ו׳',
                                    'sat': 'ש׳'
                                },
                                'short': {
                                    'sun': 'א׳',
                                    'mon': 'ב׳',
                                    'tue': 'ג׳',
                                    'wed': 'ד׳',
                                    'thu': 'ה׳',
                                    'fri': 'ו׳',
                                    'sat': 'ש׳'
                                },
                                'wide': {
                                    'sun': 'יום ראשון',
                                    'mon': 'יום שני',
                                    'tue': 'יום שלישי',
                                    'wed': 'יום רביעי',
                                    'thu': 'יום חמישי',
                                    'fri': 'יום שישי',
                                    'sat': 'יום שבת'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'יום א׳',
                                    'mon': 'יום ב׳',
                                    'tue': 'יום ג׳',
                                    'wed': 'יום ד׳',
                                    'thu': 'יום ה׳',
                                    'fri': 'יום ו׳',
                                    'sat': 'שבת'
                                },
                                'narrow': {
                                    'sun': 'א׳',
                                    'mon': 'ב׳',
                                    'tue': 'ג׳',
                                    'wed': 'ד׳',
                                    'thu': 'ה׳',
                                    'fri': 'ו׳',
                                    'sat': 'ש׳'
                                },
                                'short': {
                                    'sun': 'א׳',
                                    'mon': 'ב׳',
                                    'tue': 'ג׳',
                                    'wed': 'ד׳',
                                    'thu': 'ה׳',
                                    'fri': 'ו׳',
                                    'sat': 'ש׳'
                                },
                                'wide': {
                                    'sun': 'יום ראשון',
                                    'mon': 'יום שני',
                                    'tue': 'יום שלישי',
                                    'wed': 'יום רביעי',
                                    'thu': 'יום חמישי',
                                    'fri': 'יום שישי',
                                    'sat': 'יום שבת'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'רבעון 1',
                                    '2': 'רבעון 2',
                                    '3': 'רבעון 3',
                                    '4': 'רבעון 4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'רבעון 1',
                                    '2': 'רבעון 2',
                                    '3': 'רבעון 3',
                                    '4': 'רבעון 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'רבעון 1',
                                    '2': 'רבעון 2',
                                    '3': 'רבעון 3',
                                    '4': 'רבעון 4'
                                },
                                'narrow': {
                                    '1': 'ר1',
                                    '2': 'ר2',
                                    '3': 'ר3',
                                    '4': 'ר4'
                                },
                                'wide': {
                                    '1': 'רבעון 1',
                                    '2': 'רבעון 2',
                                    '3': 'רבעון 3',
                                    '4': 'רבעון 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                },
                                'narrow': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                },
                                'wide': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                },
                                'narrow': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                },
                                'wide': {
                                    'am': 'לפנה״צ',
                                    'pm': 'אחה״צ'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'לפני הספירה',
                                '1': 'לספירה',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'לפנה״ס',
                                '1': 'לסה״נ',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'לפנה״ס',
                                '1': 'לסה״נ',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d בMMMM y',
                            'long': 'd בMMMM y',
                            'medium': 'd בMMM y',
                            'short': 'dd/MM/yy'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} בשעה {0}',
                            'long': '{1} בשעה {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E ה-d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E H:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E H:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd בMMM y G',
                                'GyMMMEd': 'E, d בMMM y G',
                                'h': '‏h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd בMMM',
                                'MMMEd': 'E, d בMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E, d/M/y',
                                'yMM': 'MM/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd בMMM y',
                                'yMMMEd': 'E, d בMMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'H–H'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm–H:mm',
                                    'm': 'H:mm–H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm–H:mm v',
                                    'm': 'H:mm–H:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'd.M–d.M',
                                    'M': 'd.M–d.M'
                                },
                                'MEd': {
                                    'd': 'EEEE d.M–EEEE d.M',
                                    'M': 'EEEE d.M – EEEE d.M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM–d MMM'
                                },
                                'MMMEd': {
                                    'd': 'EEEE d MMM – EEEE d MMM',
                                    'M': 'EEEE d MMM – EEEE d MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL–LLLL'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M.y–M.y',
                                    'y': 'M.y‏-M.y'
                                },
                                'yMd': {
                                    'd': 'dd.M.y – dd.M.y',
                                    'M': 'd.M.y – d.M.y',
                                    'y': 'd.M.y – d.M.y'
                                },
                                'yMEd': {
                                    'd': 'EEEE d.M.y – EEEE d.M.y',
                                    'M': 'EEEE d.M.y – EEEE d.M.y',
                                    'y': 'EEEE d.M.y – EEEE d.M.y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM – d MMM y',
                                    'y': 'd MMM y – d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'EEEE d MMM – EEEE d MMM y',
                                    'M': 'EEEE d MMM – EEEE d MMM y',
                                    'y': 'EEEE d MMM y – EEEE d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y–MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'שעון {0}',
                    'regionFormat-type-daylight': 'שעון {0} (קיץ)',
                    'regionFormat-type-standard': 'שעון {0} (חורף)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language hi}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9296
 * timeZoneNames: 24r9296
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('hi', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'जन',
                                    '2': 'फ़र',
                                    '3': 'मार्च',
                                    '4': 'अप्रै',
                                    '5': 'मई',
                                    '6': 'जून',
                                    '7': 'जुला',
                                    '8': 'अग',
                                    '9': 'सितं',
                                    '10': 'अक्टू',
                                    '11': 'नवं',
                                    '12': 'दिसं'
                                },
                                'narrow': {
                                    '1': 'ज',
                                    '2': 'फ़',
                                    '3': 'मा',
                                    '4': 'अ',
                                    '5': 'म',
                                    '6': 'जू',
                                    '7': 'जु',
                                    '8': 'अ',
                                    '9': 'सि',
                                    '10': 'अ',
                                    '11': 'न',
                                    '12': 'दि'
                                },
                                'wide': {
                                    '1': 'जनवरी',
                                    '2': 'फ़रवरी',
                                    '3': 'मार्च',
                                    '4': 'अप्रैल',
                                    '5': 'मई',
                                    '6': 'जून',
                                    '7': 'जुलाई',
                                    '8': 'अगस्त',
                                    '9': 'सितंबर',
                                    '10': 'अक्टूबर',
                                    '11': 'नवंबर',
                                    '12': 'दिसंबर'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'जन',
                                    '2': 'फ़र',
                                    '3': 'मार्च',
                                    '4': 'अप्रै',
                                    '5': 'मई',
                                    '6': 'जून',
                                    '7': 'जुला',
                                    '8': 'अग',
                                    '9': 'सितं',
                                    '10': 'अक्टू',
                                    '11': 'नवं',
                                    '12': 'दिसं'
                                },
                                'narrow': {
                                    '1': 'ज',
                                    '2': 'फ़',
                                    '3': 'मा',
                                    '4': 'अ',
                                    '5': 'म',
                                    '6': 'जू',
                                    '7': 'जु',
                                    '8': 'अ',
                                    '9': 'सि',
                                    '10': 'अ',
                                    '11': 'न',
                                    '12': 'दि'
                                },
                                'wide': {
                                    '1': 'जनवरी',
                                    '2': 'फ़रवरी',
                                    '3': 'मार्च',
                                    '4': 'अप्रैल',
                                    '5': 'मई',
                                    '6': 'जून',
                                    '7': 'जुलाई',
                                    '8': 'अगस्त',
                                    '9': 'सितंबर',
                                    '10': 'अक्टूबर',
                                    '11': 'नवंबर',
                                    '12': 'दिसंबर'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'रवि',
                                    'mon': 'सोम',
                                    'tue': 'मंगल',
                                    'wed': 'बुध',
                                    'thu': 'गुरु',
                                    'fri': 'शुक्र',
                                    'sat': 'शनि'
                                },
                                'narrow': {
                                    'sun': 'र',
                                    'mon': 'सो',
                                    'tue': 'मं',
                                    'wed': 'बु',
                                    'thu': 'गु',
                                    'fri': 'शु',
                                    'sat': 'श'
                                },
                                'short': {
                                    'sun': 'र',
                                    'mon': 'सो',
                                    'tue': 'मं',
                                    'wed': 'बु',
                                    'thu': 'गु',
                                    'fri': 'शु',
                                    'sat': 'श'
                                },
                                'wide': {
                                    'sun': 'रविवार',
                                    'mon': 'सोमवार',
                                    'tue': 'मंगलवार',
                                    'wed': 'बुधवार',
                                    'thu': 'गुरुवार',
                                    'fri': 'शुक्रवार',
                                    'sat': 'शनिवार'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'रवि',
                                    'mon': 'सोम',
                                    'tue': 'मंगल',
                                    'wed': 'बुध',
                                    'thu': 'गुरु',
                                    'fri': 'शुक्र',
                                    'sat': 'शनि'
                                },
                                'narrow': {
                                    'sun': 'र',
                                    'mon': 'सो',
                                    'tue': 'मं',
                                    'wed': 'बु',
                                    'thu': 'गु',
                                    'fri': 'शु',
                                    'sat': 'श'
                                },
                                'short': {
                                    'sun': 'र',
                                    'mon': 'सो',
                                    'tue': 'मं',
                                    'wed': 'बु',
                                    'thu': 'गु',
                                    'fri': 'शु',
                                    'sat': 'श'
                                },
                                'wide': {
                                    'sun': 'रविवार',
                                    'mon': 'सोमवार',
                                    'tue': 'मंगलवार',
                                    'wed': 'बुधवार',
                                    'thu': 'गुरुवार',
                                    'fri': 'शुक्रवार',
                                    'sat': 'शनिवार'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ति1',
                                    '2': 'ति2',
                                    '3': 'ति3',
                                    '4': 'ति4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'पहली तिमाही',
                                    '2': 'दूसरी तिमाही',
                                    '3': 'तीसरी तिमाही',
                                    '4': 'चौथी तिमाही'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'ति1',
                                    '2': 'ति2',
                                    '3': 'ति3',
                                    '4': 'ति4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'पहली तिमाही',
                                    '2': 'दूसरी तिमाही',
                                    '3': 'तीसरी तिमाही',
                                    '4': 'चौथी तिमाही'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'पूर्व',
                                    'pm': 'अपर'
                                },
                                'narrow': {
                                    'am': 'पू',
                                    'pm': 'अ'
                                },
                                'wide': {
                                    'am': 'पूर्वाह्न',
                                    'pm': 'अपराह्न'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'पूर्व',
                                    'pm': 'अपर'
                                },
                                'narrow': {
                                    'am': 'पू',
                                    'pm': 'अ'
                                },
                                'wide': {
                                    'am': 'पूर्वाह्न',
                                    'pm': 'अपराह्न'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'ईसा-पूर्व',
                                '1': 'ईस्वी',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'ईसा-पूर्व',
                                '1': 'ईस्वी',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'ईसा-पूर्व',
                                '1': 'ईस्वी',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'dd-MM-y',
                            'short': 'd-M-yy'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} को {0}',
                            'long': '{1} को {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM G y',
                                'GyMMMd': 'd MMM, G y',
                                'GyMMMEd': 'E, d MMM, G y',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, d/M',
                                'MMdd': 'dd-MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMdd': 'dd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, d/M/y',
                                'yMM': 'MM-y',
                                'yMMdd': 'dd-MM-y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM, y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'd/M – d/M',
                                    'M': 'd/M – d/M'
                                },
                                'MEd': {
                                    'd': 'E, d/M – E, d/M',
                                    'M': 'E, d/M – E, d/M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd MMM–d',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d MMM – E, d MMM',
                                    'M': 'E, d MMM – E, d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M/y – M/y',
                                    'y': 'M/y – M/y'
                                },
                                'yMd': {
                                    'd': 'd/M/y – d/M/y',
                                    'M': 'd/M/y – d/M/y',
                                    'y': 'd/M/y – d/M/y'
                                },
                                'yMEd': {
                                    'd': 'E, d/M/y – E, d/M/y',
                                    'M': 'E, d/M/y – E, d/M/y',
                                    'y': 'E, d/M/y – E, d/M/y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd MMM–d, y',
                                    'M': 'd MMM – d MMM, y',
                                    'y': 'd MMM, y – d MMM, y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d MMM – E, d MMM, y',
                                    'M': 'E, d MMM – E, d MMM, y',
                                    'y': 'E, d MMM, y – E, d MMM, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM – MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} समय',
                    'regionFormat-type-daylight': '{0} डेलाइट समय',
                    'regionFormat-type-standard': '{0} मानक समय',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language hr}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('hr', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'sij',
                                    '2': 'velj',
                                    '3': 'ožu',
                                    '4': 'tra',
                                    '5': 'svi',
                                    '6': 'lip',
                                    '7': 'srp',
                                    '8': 'kol',
                                    '9': 'ruj',
                                    '10': 'lis',
                                    '11': 'stu',
                                    '12': 'pro'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.',
                                    '5': '5.',
                                    '6': '6.',
                                    '7': '7.',
                                    '8': '8.',
                                    '9': '9.',
                                    '10': '10.',
                                    '11': '11.',
                                    '12': '12.'
                                },
                                'wide': {
                                    '1': 'siječnja',
                                    '2': 'veljače',
                                    '3': 'ožujka',
                                    '4': 'travnja',
                                    '5': 'svibnja',
                                    '6': 'lipnja',
                                    '7': 'srpnja',
                                    '8': 'kolovoza',
                                    '9': 'rujna',
                                    '10': 'listopada',
                                    '11': 'studenoga',
                                    '12': 'prosinca'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'sij',
                                    '2': 'velj',
                                    '3': 'ožu',
                                    '4': 'tra',
                                    '5': 'svi',
                                    '6': 'lip',
                                    '7': 'srp',
                                    '8': 'kol',
                                    '9': 'ruj',
                                    '10': 'lis',
                                    '11': 'stu',
                                    '12': 'pro'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.',
                                    '5': '5.',
                                    '6': '6.',
                                    '7': '7.',
                                    '8': '8.',
                                    '9': '9.',
                                    '10': '10.',
                                    '11': '11.',
                                    '12': '12.'
                                },
                                'wide': {
                                    '1': 'siječanj',
                                    '2': 'veljača',
                                    '3': 'ožujak',
                                    '4': 'travanj',
                                    '5': 'svibanj',
                                    '6': 'lipanj',
                                    '7': 'srpanj',
                                    '8': 'kolovoz',
                                    '9': 'rujan',
                                    '10': 'listopad',
                                    '11': 'studeni',
                                    '12': 'prosinac'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': 'Č',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'wide': {
                                    'sun': 'nedjelja',
                                    'mon': 'ponedjeljak',
                                    'tue': 'utorak',
                                    'wed': 'srijeda',
                                    'thu': 'četvrtak',
                                    'fri': 'petak',
                                    'sat': 'subota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 'u',
                                    'wed': 's',
                                    'thu': 'č',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'uto',
                                    'wed': 'sri',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sub'
                                },
                                'wide': {
                                    'sun': 'nedjelja',
                                    'mon': 'ponedjeljak',
                                    'tue': 'utorak',
                                    'wed': 'srijeda',
                                    'thu': 'četvrtak',
                                    'fri': 'petak',
                                    'sat': 'subota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1kv',
                                    '2': '2kv',
                                    '3': '3kv',
                                    '4': '4kv'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1kv',
                                    '2': '2kv',
                                    '3': '3kv',
                                    '4': '4kv'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'navečer',
                                    'morning': 'prijepodne',
                                    'night': 'noću',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'navečer',
                                    'morning': 'prijepodne',
                                    'night': 'noću',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'navečer',
                                    'morning': 'prijepodne',
                                    'night': 'noću',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'popodne',
                                    'am': 'AM',
                                    'earlyMorning': 'ujutro',
                                    'evening': 'navečer',
                                    'morning': 'prijepodne',
                                    'night': 'noću',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': 'podne',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Prije Krista',
                                '1': 'Poslije Krista',
                                '0-alt-variant': 'pr. n. e.',
                                '1-alt-variant': 'n.e.'
                            },
                            'eraAbbr': {
                                '0': 'pr. Kr.',
                                '1': 'p. Kr.',
                                '0-alt-variant': 'pr. n. e.',
                                '1-alt-variant': 'n.e.'
                            },
                            'eraNarrow': {
                                '0': 'pr.n.e.',
                                '1': 'AD',
                                '0-alt-variant': 'pr. n. e.',
                                '1-alt-variant': 'n.e.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y.',
                            'long': 'd. MMMM y.',
                            'medium': 'd. MMM y.',
                            'short': 'd.M.yy.'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'u\' {0}',
                            'long': '{1} \'u\' {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd.',
                                'Ed': 'E, d.',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y. G',
                                'GyMMM': 'LLL y. G',
                                'GyMMMd': 'd. MMM y. G',
                                'GyMMMEd': 'E, d. MMM y. G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'hh:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'hh:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L.',
                                'Md': 'd. M.',
                                'MEd': 'E, d. M.',
                                'MMdd': 'dd. MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'MMMMd': 'd. MMMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMEd': 'E, d. MMMM',
                                'ms': 'mm:ss',
                                'y': 'y.',
                                'yM': 'M. y.',
                                'yMd': 'd. M. y.',
                                'yMEd': 'E, d. M. y.',
                                'yMM': 'MM. y.',
                                'yMMM': 'LLL y.',
                                'yMMMd': 'd. MMM y.',
                                'yMMMEd': 'E, d. MMM y.',
                                'yMMMM': 'LLLL y.',
                                'yQQQ': 'QQQ y.',
                                'yQQQQ': 'QQQQ y.'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'dd. - dd.'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h - h\'h\' a'
                                },
                                'H': {
                                    'H': 'HH-HH\'h\''
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h - h \'h\' a v'
                                },
                                'Hv': {
                                    'H': 'HH - HH \'h\' v'
                                },
                                'M': {
                                    'M': 'MM. - MM.'
                                },
                                'Md': {
                                    'd': 'dd.MM. - dd.MM.',
                                    'M': 'dd.MM. - dd.MM.'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM. - E, dd.MM.',
                                    'M': 'E, dd.MM. - E, dd.MM.'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MMMd': {
                                    'd': 'dd. - dd. MMM',
                                    'M': 'dd. MMM - dd. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, dd. - E, dd. MMM',
                                    'M': 'E, dd. MMM - E, dd. MMM'
                                },
                                'y': {
                                    'y': 'y. - y.'
                                },
                                'yM': {
                                    'M': 'MM.y. - MM.y.',
                                    'y': 'MM.y. - MM.y.'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y. - dd.MM.y.',
                                    'M': 'dd.MM.y. - dd.MM.y.',
                                    'y': 'dd.MM.y. - dd.MM.y.'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y. - E, dd.MM.y.',
                                    'M': 'E, dd.MM.y. - E, dd.MM.y.',
                                    'y': 'E, dd.MM.y. - E, dd.MM.y.'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y.',
                                    'y': 'LLL y. - LLL y.'
                                },
                                'yMMMd': {
                                    'd': 'dd. - dd. MMM y.',
                                    'M': 'dd. MMM - dd. MMM y.',
                                    'y': 'dd. MMM y. - dd. MMM y.'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd. - E, dd. MMM y.',
                                    'M': 'E, dd. MMM - E, dd. MMM y.',
                                    'y': 'E, dd. MMM y. - E, dd. MMM y.'
                                },
                                'yMMMM': {
                                    'M': 'LLLL – LLLL y.',
                                    'y': 'LLLL y. - LLLL y.'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm; -HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}',
                    'regionFormat-type-daylight': '{0}, ljetno vrijeme',
                    'regionFormat-type-standard': '{0}, standardno vrijeme',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language hu}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9317
 * timeZoneNames: 24r9317
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('hu', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'febr.',
                                    '3': 'márc.',
                                    '4': 'ápr.',
                                    '5': 'máj.',
                                    '6': 'jún.',
                                    '7': 'júl.',
                                    '8': 'aug.',
                                    '9': 'szept.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'Á',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'Sz',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'január',
                                    '2': 'február',
                                    '3': 'március',
                                    '4': 'április',
                                    '5': 'május',
                                    '6': 'június',
                                    '7': 'július',
                                    '8': 'augusztus',
                                    '9': 'szeptember',
                                    '10': 'október',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'febr.',
                                    '3': 'márc.',
                                    '4': 'ápr.',
                                    '5': 'máj.',
                                    '6': 'jún.',
                                    '7': 'júl.',
                                    '8': 'aug.',
                                    '9': 'szept.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'Á',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'Sz',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'január',
                                    '2': 'február',
                                    '3': 'március',
                                    '4': 'április',
                                    '5': 'május',
                                    '6': 'június',
                                    '7': 'július',
                                    '8': 'augusztus',
                                    '9': 'szeptember',
                                    '10': 'október',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'narrow': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sz',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Sz'
                                },
                                'short': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'wide': {
                                    'sun': 'vasárnap',
                                    'mon': 'hétfő',
                                    'tue': 'kedd',
                                    'wed': 'szerda',
                                    'thu': 'csütörtök',
                                    'fri': 'péntek',
                                    'sat': 'szombat'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'narrow': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sz',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Sz'
                                },
                                'short': {
                                    'sun': 'V',
                                    'mon': 'H',
                                    'tue': 'K',
                                    'wed': 'Sze',
                                    'thu': 'Cs',
                                    'fri': 'P',
                                    'sat': 'Szo'
                                },
                                'wide': {
                                    'sun': 'vasárnap',
                                    'mon': 'hétfő',
                                    'tue': 'kedd',
                                    'wed': 'szerda',
                                    'thu': 'csütörtök',
                                    'fri': 'péntek',
                                    'sat': 'szombat'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'N1',
                                    '2': 'N2',
                                    '3': 'N3',
                                    '4': 'N4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': 'I. negyedév',
                                    '2': 'II. negyedév',
                                    '3': 'III. negyedév',
                                    '4': 'IV. negyedév'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'N1',
                                    '2': 'N2',
                                    '3': 'N3',
                                    '4': 'N4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. negyedév',
                                    '2': '2. negyedév',
                                    '3': '3. negyedév',
                                    '4': '4. negyedév'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'narrow': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'wide': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'narrow': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                },
                                'wide': {
                                    'am': 'de.',
                                    'pm': 'du.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'időszámításunk előtt',
                                '1': 'időszámításunk szerint',
                                '0-alt-variant': 'Kr. e.',
                                '1-alt-variant': 'Kr. u.'
                            },
                            'eraAbbr': {
                                '0': 'i. e.',
                                '1': 'i. sz.',
                                '0-alt-variant': 'Kr. e.',
                                '1-alt-variant': 'Kr. u.'
                            },
                            'eraNarrow': {
                                '0': 'ie.',
                                '1': 'isz.',
                                '0-alt-variant': 'Kr. e.',
                                '1-alt-variant': 'Kr. u.'
                            }
                        },
                        'dateFormats': {
                            'full': 'y. MMMM d., EEEE',
                            'long': 'y. MMMM d.',
                            'medium': 'y MMM d',
                            'short': 'y. MM. dd.'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'd., E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y.',
                                'GyMMM': 'G y. MMM',
                                'GyMMMd': 'G y. MMM d.',
                                'GyMMMEd': 'G y. MMM d., E',
                                'h': 'a h',
                                'H': 'H',
                                'hm': 'a h:mm',
                                'Hm': 'H:mm',
                                'hms': 'a h:mm:ss',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'M. d.',
                                'MEd': 'M. d., E',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d.',
                                'MMMEd': 'MMM d., E',
                                'MMMMd': 'MMMM d.',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y.',
                                'yM': 'y. M.',
                                'yMd': 'y. MM. dd.',
                                'yMEd': 'y. MM. dd., E',
                                'yMMM': 'y. MMM',
                                'yMMMd': 'y. MMM d.',
                                'yMMMEd': 'y. MMM d., E',
                                'yMMMM': 'y. MMMM',
                                'yQQQ': 'y. QQQ',
                                'yQQQQ': 'y. QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d.'
                                },
                                'h': {
                                    'a': 'a h – a h',
                                    'h': 'a h–h'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'hm': {
                                    'a': 'a h:mm – a h:mm',
                                    'h': 'a h:mm–h:mm',
                                    'm': 'a h:mm–h:mm'
                                },
                                'Hm': {
                                    'H': 'H:mm–H:mm',
                                    'm': 'H:mm–H:mm'
                                },
                                'hmv': {
                                    'a': 'a h:mm – a h:mm v',
                                    'h': 'a h:mm–h:mm v',
                                    'm': 'a h:mm–h:mm v'
                                },
                                'Hmv': {
                                    'H': 'H:mm–H:mm v',
                                    'm': 'H:mm–H:mm v'
                                },
                                'hv': {
                                    'a': 'a h – a h v',
                                    'h': 'a h–h v'
                                },
                                'Hv': {
                                    'H': 'H–H v'
                                },
                                'M': {
                                    'M': 'M–M.'
                                },
                                'Md': {
                                    'd': 'M. d–d.',
                                    'M': 'M. d. – M. d.'
                                },
                                'MEd': {
                                    'd': 'M. dd., E – M. d., E',
                                    'M': 'M. d., E – M. d., E'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'MMM d–d.',
                                    'M': 'MMM d. – MMM d.'
                                },
                                'MMMEd': {
                                    'd': 'MMM d., E – d., E',
                                    'M': 'MMM d., E – MMM d., E'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'y. MM–MM.',
                                    'y': 'y. MM. – y. MM.'
                                },
                                'yMd': {
                                    'd': 'y. MM. dd–dd.',
                                    'M': 'y. MM. dd. – MM. dd.',
                                    'y': 'y. MM. dd. – y. MM. dd.'
                                },
                                'yMEd': {
                                    'd': 'y. MM. dd., E – dd., E',
                                    'M': 'y. MM. dd., E – MM. dd., E',
                                    'y': 'y. MM. dd., E – y. MM. dd., E'
                                },
                                'yMMM': {
                                    'M': 'y. MMM–MMM',
                                    'y': 'y. MMM – y. MMM'
                                },
                                'yMMMd': {
                                    'd': 'y. MMM d–d.',
                                    'M': 'y. MMM d. – MMM d.',
                                    'y': 'y. MMM d. – y. MMM d.'
                                },
                                'yMMMEd': {
                                    'd': 'y. MMM d., E – d., E',
                                    'M': 'y. MMM d., E – MMM d., E',
                                    'y': 'y. MMM d., E – y. MMM d., E'
                                },
                                'yMMMM': {
                                    'M': 'y. MMMM–MMMM',
                                    'y': 'y. MMMM – y. MMMM'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} idő',
                    'regionFormat-type-daylight': '{0} nyári idő',
                    'regionFormat-type-standard': '{0} zónaidő',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language it}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('it', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'gen',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'mag',
                                    '6': 'giu',
                                    '7': 'lug',
                                    '8': 'ago',
                                    '9': 'set',
                                    '10': 'ott',
                                    '11': 'nov',
                                    '12': 'dic'
                                },
                                'narrow': {
                                    '1': 'G',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'G',
                                    '7': 'L',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'gennaio',
                                    '2': 'febbraio',
                                    '3': 'marzo',
                                    '4': 'aprile',
                                    '5': 'maggio',
                                    '6': 'giugno',
                                    '7': 'luglio',
                                    '8': 'agosto',
                                    '9': 'settembre',
                                    '10': 'ottobre',
                                    '11': 'novembre',
                                    '12': 'dicembre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'gen',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'mag',
                                    '6': 'giu',
                                    '7': 'lug',
                                    '8': 'ago',
                                    '9': 'set',
                                    '10': 'ott',
                                    '11': 'nov',
                                    '12': 'dic'
                                },
                                'narrow': {
                                    '1': 'G',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'G',
                                    '7': 'L',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Gennaio',
                                    '2': 'Febbraio',
                                    '3': 'Marzo',
                                    '4': 'Aprile',
                                    '5': 'Maggio',
                                    '6': 'Giugno',
                                    '7': 'Luglio',
                                    '8': 'Agosto',
                                    '9': 'Settembre',
                                    '10': 'Ottobre',
                                    '11': 'Novembre',
                                    '12': 'Dicembre'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'lun',
                                    'tue': 'mar',
                                    'wed': 'mer',
                                    'thu': 'gio',
                                    'fri': 'ven',
                                    'sat': 'sab'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'G',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dom',
                                    'mon': 'lun',
                                    'tue': 'mar',
                                    'wed': 'mer',
                                    'thu': 'gio',
                                    'fri': 'ven',
                                    'sat': 'sab'
                                },
                                'wide': {
                                    'sun': 'domenica',
                                    'mon': 'lunedì',
                                    'tue': 'martedì',
                                    'wed': 'mercoledì',
                                    'thu': 'giovedì',
                                    'fri': 'venerdì',
                                    'sat': 'sabato'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'lun',
                                    'tue': 'mar',
                                    'wed': 'mer',
                                    'thu': 'gio',
                                    'fri': 'ven',
                                    'sat': 'sab'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'G',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dom',
                                    'mon': 'lun',
                                    'tue': 'mar',
                                    'wed': 'mer',
                                    'thu': 'gio',
                                    'fri': 'ven',
                                    'sat': 'sab'
                                },
                                'wide': {
                                    'sun': 'Domenica',
                                    'mon': 'Lunedì',
                                    'tue': 'Martedì',
                                    'wed': 'Mercoledì',
                                    'thu': 'Giovedì',
                                    'fri': 'Venerdì',
                                    'sat': 'Sabato'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1º trimestre',
                                    '2': '2º trimestre',
                                    '3': '3º trimestre',
                                    '4': '4º trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'Primo trimestre',
                                    '2': 'Secondo trimestre',
                                    '3': 'Terzo trimestre',
                                    '4': 'Quarto trimestre'
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
                                    'am': 'm.',
                                    'pm': 'p.'
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
                                    'am': 'm.',
                                    'pm': 'p.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'a.C.',
                                '1': 'd.C.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'aC',
                                '1': 'dC',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'aC',
                                '1': 'dC',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d MMMM y',
                            'long': 'dd MMMM y',
                            'medium': 'dd/MMM/y',
                            'short': 'dd/MM/yy'
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
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h.mm a',
                                'EHm': 'E HH.mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'h': 'hh a',
                                'H': 'HH',
                                'hm': 'hh:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'hh:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E d/M/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E d MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH-HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E dd/MM - E dd/MM',
                                    'M': 'E dd/MM - E dd/MM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'dd-dd MMM',
                                    'M': 'dd MMM - dd MMM'
                                },
                                'MMMEd': {
                                    'd': 'E dd - E dd MMM',
                                    'M': 'E dd MMM - E dd MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E dd/MM/y - E dd/MM/y',
                                    'M': 'E dd/MM/y - E dd/MM/y',
                                    'y': 'E dd/MM/y - E dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'dd-dd MMM y',
                                    'M': 'dd MMM - dd MMM y',
                                    'y': 'dd MMM y - dd MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d - E d MMM y',
                                    'M': 'E d MMM - E d MMM y',
                                    'y': 'E d MMM y - E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Ora {0}',
                    'regionFormat-type-daylight': 'Ora legale: {0}',
                    'regionFormat-type-standard': 'Ora standard: {0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ja}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('ja', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'narrow': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'short': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'wide': {
                                    'sun': '日曜日',
                                    'mon': '月曜日',
                                    'tue': '火曜日',
                                    'wed': '水曜日',
                                    'thu': '木曜日',
                                    'fri': '金曜日',
                                    'sat': '土曜日'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'narrow': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'short': {
                                    'sun': '日',
                                    'mon': '月',
                                    'tue': '火',
                                    'wed': '水',
                                    'thu': '木',
                                    'fri': '金',
                                    'sat': '土'
                                },
                                'wide': {
                                    'sun': '日曜日',
                                    'mon': '月曜日',
                                    'tue': '火曜日',
                                    'wed': '水曜日',
                                    'thu': '木曜日',
                                    'fri': '金曜日',
                                    'sat': '土曜日'
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
                                    '1': '第1四半期',
                                    '2': '第2四半期',
                                    '3': '第3四半期',
                                    '4': '第4四半期'
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
                                    '1': '第1四半期',
                                    '2': '第2四半期',
                                    '3': '第3四半期',
                                    '4': '第4四半期'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                },
                                'narrow': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                },
                                'wide': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                },
                                'narrow': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                },
                                'wide': {
                                    'am': '午前',
                                    'noon': '正午',
                                    'pm': '午後'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '紀元前',
                                '1': '西暦',
                                '0-alt-variant': '西暦紀元前',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '紀元前',
                                '1': '西暦',
                                '0-alt-variant': '西暦紀元前',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'BC',
                                '1': 'AD',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y年M月d日EEEE',
                            'long': 'y年M月d日',
                            'medium': 'y/MM/dd',
                            'short': 'y/MM/dd'
                        },
                        'timeFormats': {
                            'full': 'H時mm分ss秒 zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd日',
                                'Ed': 'd日(E)',
                                'EEEEd': 'd日EEEE',
                                'Ehm': 'a K 時 mm 分 (E)',
                                'EHm': 'HH 時 mm 分 (E)',
                                'Ehms': 'a K 時 mm 分 ss 秒 (E)',
                                'EHms': 'HH 時 mm 分 ss 秒 (E)',
                                'Gy': 'Gy年',
                                'GyMMM': 'Gy年M月',
                                'GyMMMd': 'Gy年M月d日',
                                'GyMMMEd': 'Gy年M月d日(E)',
                                'GyMMMEEEEd': 'Gy年M月d日EEEE',
                                'h': 'aK時',
                                'H': 'H時',
                                'hm': 'aK:mm',
                                'Hm': 'H:mm',
                                'hms': 'aK:mm:ss',
                                'Hms': 'H:mm:ss',
                                'M': 'M月',
                                'Md': 'M/d',
                                'MEd': 'M/d(E)',
                                'MEEEEd': 'M/dEEEE',
                                'MMM': 'M月',
                                'MMMd': 'M月d日',
                                'MMMEd': 'M月d日(E)',
                                'MMMEEEEd': 'M月d日EEEE',
                                'ms': 'mm:ss',
                                'y': 'y年',
                                'yM': 'y/M',
                                'yMd': 'y/M/d',
                                'yMEd': 'y/M/d(E)',
                                'yMEEEEd': 'y/M/dEEEE',
                                'yMM': 'y/MM',
                                'yMMM': 'y年M月',
                                'yMMMd': 'y年M月d日',
                                'yMMMEd': 'y年M月d日(E)',
                                'yMMMEEEEd': 'y年M月d日EEEE',
                                'yQQQ': 'y/QQQ',
                                'yQQQQ': 'yQQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0}～{1}',
                                'd': {
                                    'd': 'd日～d日'
                                },
                                'h': {
                                    'a': 'aK時～aK時',
                                    'h': 'aK時～K時'
                                },
                                'H': {
                                    'H': 'H時～H時'
                                },
                                'hm': {
                                    'a': 'aK時mm分～aK時mm分',
                                    'h': 'aK時mm分～K時mm分',
                                    'm': 'aK時mm分～K時mm分'
                                },
                                'Hm': {
                                    'H': 'H時mm分～H時mm分',
                                    'm': 'H時mm分～H時mm分'
                                },
                                'hmv': {
                                    'a': 'aK時mm分～aK時mm分(v)',
                                    'h': 'aK時mm分～K時mm分(v)',
                                    'm': 'aK時mm分～K時mm分(v)'
                                },
                                'Hmv': {
                                    'H': 'H時mm分～H時mm分(v)',
                                    'm': 'H時mm分～H時mm分(v)'
                                },
                                'hv': {
                                    'a': 'aK時～aK時(v)',
                                    'h': 'aK時～K時(v)'
                                },
                                'Hv': {
                                    'H': 'H時～H時(v)'
                                },
                                'M': {
                                    'M': 'M月～M月'
                                },
                                'Md': {
                                    'd': 'MM/dd～MM/dd',
                                    'M': 'MM/dd～MM/dd'
                                },
                                'MEd': {
                                    'd': 'MM/dd(E)～MM/dd(E)',
                                    'M': 'MM/dd(E)～MM/dd(E)'
                                },
                                'MMM': {
                                    'M': 'M月～M月'
                                },
                                'MMMd': {
                                    'd': 'M月d日～d日',
                                    'M': 'M月d日～M月d日'
                                },
                                'MMMEd': {
                                    'd': 'M月d日(E)～d日(E)',
                                    'M': 'M月d日(E)～M月d日(E)'
                                },
                                'MMMM': {
                                    'M': 'M月～M月'
                                },
                                'y': {
                                    'y': 'y年～y年'
                                },
                                'yM': {
                                    'M': 'y/MM～y/MM',
                                    'y': 'y/MM～y/MM'
                                },
                                'yMd': {
                                    'd': 'y/MM/dd～y/MM/dd',
                                    'M': 'y/MM/dd～y/MM/dd',
                                    'y': 'y/MM/dd～y/MM/dd'
                                },
                                'yMEd': {
                                    'd': 'y/MM/dd(E)～y/MM/dd(E)',
                                    'M': 'y/MM/dd(E)～y/MM/dd(E)',
                                    'y': 'y/MM/dd(E)～y/MM/dd(E)'
                                },
                                'yMMM': {
                                    'M': 'y年M月～M月',
                                    'y': 'y年M月～y年M月'
                                },
                                'yMMMd': {
                                    'd': 'y年M月d日～d日',
                                    'M': 'y年M月d日～M月d日',
                                    'y': 'y年M月d日～y年M月d日'
                                },
                                'yMMMEd': {
                                    'd': 'y年M月d日(E)～d日(E)',
                                    'M': 'y年M月d日(E)～M月d日(E)',
                                    'y': 'y年M月d日(E)～y年M月d日(E)'
                                },
                                'yMMMM': {
                                    'M': 'y年M月～M月',
                                    'y': 'y年M月～y年M月'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}時間',
                    'regionFormat-type-daylight': '{0}夏時間',
                    'regionFormat-type-standard': '{0}標準時',
                    'fallbackFormat': '{1}（{0}）'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ko}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('ko', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                },
                                'narrow': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                },
                                'wide': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                },
                                'narrow': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                },
                                'wide': {
                                    '1': '1월',
                                    '2': '2월',
                                    '3': '3월',
                                    '4': '4월',
                                    '5': '5월',
                                    '6': '6월',
                                    '7': '7월',
                                    '8': '8월',
                                    '9': '9월',
                                    '10': '10월',
                                    '11': '11월',
                                    '12': '12월'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'narrow': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'short': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'wide': {
                                    'sun': '일요일',
                                    'mon': '월요일',
                                    'tue': '화요일',
                                    'wed': '수요일',
                                    'thu': '목요일',
                                    'fri': '금요일',
                                    'sat': '토요일'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'narrow': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'short': {
                                    'sun': '일',
                                    'mon': '월',
                                    'tue': '화',
                                    'wed': '수',
                                    'thu': '목',
                                    'fri': '금',
                                    'sat': '토'
                                },
                                'wide': {
                                    'sun': '일요일',
                                    'mon': '월요일',
                                    'tue': '화요일',
                                    'wed': '수요일',
                                    'thu': '목요일',
                                    'fri': '금요일',
                                    'sat': '토요일'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1분기',
                                    '2': '2분기',
                                    '3': '3분기',
                                    '4': '4분기'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '제 1/4분기',
                                    '2': '제 2/4분기',
                                    '3': '제 3/4분기',
                                    '4': '제 4/4분기'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1분기',
                                    '2': '2분기',
                                    '3': '3분기',
                                    '4': '4분기'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '제 1/4분기',
                                    '2': '제 2/4분기',
                                    '3': '제 3/4분기',
                                    '4': '제 4/4분기'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': '오전',
                                    'pm': '오후'
                                },
                                'narrow': {
                                    'am': '오전',
                                    'pm': '오후'
                                },
                                'wide': {
                                    'am': '오전',
                                    'pm': '오후'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': '오전',
                                    'pm': '오후'
                                },
                                'narrow': {
                                    'am': '오전',
                                    'pm': '오후'
                                },
                                'wide': {
                                    'am': '오전',
                                    'pm': '오후'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '서력기원전',
                                '1': '서력기원',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '기원전',
                                '1': '서기',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '기원전',
                                '1': '서기',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y년 M월 d일 EEEE',
                            'long': 'y년 M월 d일',
                            'medium': 'y. M. d.',
                            'short': 'yy. M. d.'
                        },
                        'timeFormats': {
                            'full': 'a h시 m분 s초 zzzz',
                            'long': 'a h시 m분 s초 z',
                            'medium': 'a h:mm:ss',
                            'short': 'a h:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd일',
                                'Ed': 'd일 (E)',
                                'EEEEd': 'd일 EEEE',
                                'Ehm': '(E) a h:mm',
                                'EHm': '(E) HH:mm',
                                'Ehms': '(E) a h:mm:ss',
                                'EHms': '(E) HH:mm:ss',
                                'Gy': 'G y년',
                                'GyMMM': 'G y년 MMM',
                                'GyMMMd': 'G y년 MMM d일',
                                'GyMMMEd': 'G y년 MMM d일 (E)',
                                'GyMMMEEEEd': 'G y년 MMM d일 EEEE',
                                'h': 'a h시',
                                'H': 'H시',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'a h:mm',
                                'Hm': 'HH:mm',
                                'hms': 'a h:mm:ss',
                                'Hms': 'H시 m분 s초',
                                'M': 'M월',
                                'Md': 'M. d.',
                                'MEd': 'M. d. (E)',
                                'MEEEEd': 'M. d. EEEE',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d일',
                                'MMMEd': 'MMM d일 (E)',
                                'MMMEEEEd': 'MMM d일 EEEE',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y년',
                                'yM': 'y. M.',
                                'yMd': 'y. M. d.',
                                'yMEd': 'y. M. d. (E)',
                                'yMEEEEd': 'y. M. d. EEEE',
                                'yMM': 'y. M.',
                                'yMMM': 'y년 MMM',
                                'yMMMd': 'y년 MMM d일',
                                'yMMMEd': 'y년 MMM d일 (E)',
                                'yMMMEEEEd': 'y년 MMM d일 EEEE',
                                'yQQQ': 'y년 QQQ',
                                'yQQQQ': 'y년 QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} ~ {1}',
                                'd': {
                                    'd': 'd일 ~ d일'
                                },
                                'h': {
                                    'a': 'a h시 ~ a h시',
                                    'h': 'a h시 ~ h시'
                                },
                                'H': {
                                    'H': 'HH ~ HH시'
                                },
                                'hm': {
                                    'a': 'a h:mm ~ a h:mm',
                                    'h': 'a h:mm~h:mm',
                                    'm': 'a h:mm~h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm ~ HH:mm',
                                    'm': 'HH:mm ~ HH:mm'
                                },
                                'hmv': {
                                    'a': 'a h:mm ~ a h:mm v',
                                    'h': 'a h:mm~h:mm v',
                                    'm': 'a h:mm~h:mm v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm ~ HH:mm v',
                                    'm': 'HH:mm ~ HH:mm v'
                                },
                                'hv': {
                                    'a': 'a h시 ~ a h시(v)',
                                    'h': 'a h시 ~ h시(v)'
                                },
                                'Hv': {
                                    'H': 'HH ~ HH시 v'
                                },
                                'M': {
                                    'M': 'M월 ~ M월'
                                },
                                'Md': {
                                    'd': 'M. d ~ M. d',
                                    'M': 'M. d ~ M. d'
                                },
                                'MEd': {
                                    'd': 'M. d (E) ~ M. d (E)',
                                    'M': 'M. d (E) ~ M. d (E)'
                                },
                                'MMM': {
                                    'M': 'MMM ~ MMM'
                                },
                                'MMMd': {
                                    'd': 'M월 d일 ~ d일',
                                    'M': 'M월 d일 ~ M월 d일'
                                },
                                'MMMEd': {
                                    'd': 'M월 d일 (E) ~ d일 (E)',
                                    'M': 'M월 d일 (E) ~ M월 d일 (E)'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'y': {
                                    'y': 'y년 ~ y년'
                                },
                                'yM': {
                                    'M': 'y. M ~ y. M',
                                    'y': 'y. M ~ y. M'
                                },
                                'yMd': {
                                    'd': 'y. M. d. ~ y. M. d.',
                                    'M': 'y. M. d. ~ y. M. d.',
                                    'y': 'y. M. d. ~ y. M. d.'
                                },
                                'yMEd': {
                                    'd': 'y. M. d. (E) ~ y. M. d. (E)',
                                    'M': 'y. M. d. (E) ~ y. M. d. (E)',
                                    'y': 'y. M. d. (E) ~ y. M. d. (E)'
                                },
                                'yMMM': {
                                    'M': 'y년 M월~M월',
                                    'y': 'y년 M월 ~ y년 M월'
                                },
                                'yMMMd': {
                                    'd': 'y년 M월 d일~d일',
                                    'M': 'y년 M월 d일 ~ M월 d일',
                                    'y': 'y년 M월 d일 ~ y년 M월 d일'
                                },
                                'yMMMEd': {
                                    'd': 'y년 M월 d일 (E) ~ d일 (E)',
                                    'M': 'y년 M월 d일 (E) ~ M월 d일 (E)',
                                    'y': 'y년 M월 d일 (E) ~ y년 M월 d일 (E)'
                                },
                                'yMMMEEEEd': {
                                    'd': 'y년 M월 d일 EEEE ~ d일 EEEE',
                                    'M': 'y년 M월 d일 EEEE ~ M월 d일 EEEE',
                                    'y': 'y년 M월 d일 EEEE ~ y년 M월 d일 EEEE'
                                },
                                'yMMMM': {
                                    'M': 'y년 MM월 ~ MM월',
                                    'y': 'y년 MM월 ~ y년 MM월'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} 시간',
                    'regionFormat-type-daylight': '{0} 일광 절약 시간',
                    'regionFormat-type-standard': '{0} 표준시',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language nb}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('nb', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.',
                                    '5': 'mai',
                                    '6': 'jun.',
                                    '7': 'jul.',
                                    '8': 'aug.',
                                    '9': 'sep.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'des.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'mars',
                                    '4': 'april',
                                    '5': 'mai',
                                    '6': 'juni',
                                    '7': 'juli',
                                    '8': 'august',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'desember'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'mai',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'des'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'mars',
                                    '4': 'april',
                                    '5': 'mai',
                                    '6': 'juni',
                                    '7': 'juli',
                                    '8': 'august',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'desember'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'søn.',
                                    'mon': 'man.',
                                    'tue': 'tir.',
                                    'wed': 'ons.',
                                    'thu': 'tor.',
                                    'fri': 'fre.',
                                    'sat': 'lør.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'sø.',
                                    'mon': 'ma.',
                                    'tue': 'ti.',
                                    'wed': 'on.',
                                    'thu': 'to.',
                                    'fri': 'fr.',
                                    'sat': 'lø.'
                                },
                                'wide': {
                                    'sun': 'søndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'lørdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'sø.',
                                    'mon': 'ma.',
                                    'tue': 'ti.',
                                    'wed': 'on.',
                                    'thu': 'to.',
                                    'fri': 'fr.',
                                    'sat': 'lø.'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'sø.',
                                    'mon': 'ma.',
                                    'tue': 'ti.',
                                    'wed': 'on.',
                                    'thu': 'to.',
                                    'fri': 'fr.',
                                    'sat': 'lø.'
                                },
                                'wide': {
                                    'sun': 'søndag',
                                    'mon': 'mandag',
                                    'tue': 'tirsdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'lørdag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. kvartal',
                                    '2': '2. kvartal',
                                    '3': '3. kvartal',
                                    '4': '4. kvartal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'før vår tidsregning',
                                '1-alt-variant': 'vår tidsregning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'fvt.',
                                '1-alt-variant': 'vt.'
                            },
                            'eraNarrow': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'fvt.',
                                '1-alt-variant': 'vt'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd. MMM y',
                            'short': 'dd.MM.yy'
                        },
                        'timeFormats': {
                            'full': 'HH.mm.ss zzzz',
                            'long': 'HH.mm.ss z',
                            'medium': 'HH.mm.ss',
                            'short': 'HH.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} \'kl.\' {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd.',
                                'Ed': 'E d.',
                                'Ehm': 'E h.mm a',
                                'EHm': 'E HH.mm',
                                'Ehms': 'E h.mm.ss a',
                                'EHms': 'E HH.mm.ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E d. MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h.mm a',
                                'Hm': 'HH.mm',
                                'hms': 'h.mm.ss a',
                                'Hms': 'HH.mm.ss',
                                'M': 'L.',
                                'Md': 'd.M.',
                                'MEd': 'E d.M',
                                'MMdd': 'd.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E d. MMM',
                                'ms': 'mm.ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E d.MM.y',
                                'yMM': 'MM.y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd. MMM y',
                                'yMMMEd': 'E d. MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0}–{1}',
                                'd': {
                                    'd': 'd.–d.'
                                },
                                'h': {
                                    'a': 'H–H',
                                    'h': 'H–H'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'H.mm–H.mm',
                                    'h': 'H.mm–H.mm',
                                    'm': 'H.mm–H.mm'
                                },
                                'Hm': {
                                    'H': 'HH.mm–HH.mm',
                                    'm': 'HH.mm–HH.mm'
                                },
                                'hmv': {
                                    'a': 'H.mm–H.mm v',
                                    'h': 'H.mm–H.mm v',
                                    'm': 'H.mm–H.mm v'
                                },
                                'Hmv': {
                                    'H': 'HH.mm–HH.mm v',
                                    'm': 'HH.mm–HH.mm v'
                                },
                                'hv': {
                                    'a': 'H–H v',
                                    'h': 'H–H v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M.–M.'
                                },
                                'Md': {
                                    'd': 'dd.MM.–dd.MM.',
                                    'M': 'dd.MM.–dd.MM.'
                                },
                                'MEd': {
                                    'd': 'E dd.MM.–E dd.MM.',
                                    'M': 'E dd.MM.–E dd.MM.'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd.–d. MMM',
                                    'M': 'd. MMM–d. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E d.–E d. MMM',
                                    'M': 'E d. MMM–E d. MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM.y–MM.y',
                                    'y': 'MM.y–MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y–dd.MM.y',
                                    'M': 'dd.MM.y–dd.MM.y',
                                    'y': 'dd.MM.y–dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E dd.MM.y–E dd.MM.y',
                                    'M': 'E dd.MM.y–E dd.MM.y',
                                    'y': 'E dd.MM.y–E dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y–MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.–d. MMM y',
                                    'M': 'd. MMM–d. MMM y',
                                    'y': 'd. MMM y–d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d.–E d. MMM y',
                                    'M': 'E d. MMM–E d. MMM y',
                                    'y': 'E d. MMM y–E d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y–MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH.mm;-HH.mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'tidssone for {0}',
                    'regionFormat-type-daylight': 'sommertid – {0}',
                    'regionFormat-type-standard': 'normaltid – {0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language nl}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('nl', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mrt.',
                                    '4': 'apr.',
                                    '5': 'mei',
                                    '6': 'jun.',
                                    '7': 'jul.',
                                    '8': 'aug.',
                                    '9': 'sep.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'maart',
                                    '4': 'april',
                                    '5': 'mei',
                                    '6': 'juni',
                                    '7': 'juli',
                                    '8': 'augustus',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mrt',
                                    '4': 'apr',
                                    '5': 'mei',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'maart',
                                    '4': 'april',
                                    '5': 'mei',
                                    '6': 'juni',
                                    '7': 'juli',
                                    '8': 'augustus',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'narrow': {
                                    'sun': 'Z',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'W',
                                    'thu': 'D',
                                    'fri': 'V',
                                    'sat': 'Z'
                                },
                                'short': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'wide': {
                                    'sun': 'zondag',
                                    'mon': 'maandag',
                                    'tue': 'dinsdag',
                                    'wed': 'woensdag',
                                    'thu': 'donderdag',
                                    'fri': 'vrijdag',
                                    'sat': 'zaterdag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'narrow': {
                                    'sun': 'Z',
                                    'mon': 'M',
                                    'tue': 'D',
                                    'wed': 'W',
                                    'thu': 'D',
                                    'fri': 'V',
                                    'sat': 'Z'
                                },
                                'short': {
                                    'sun': 'zo',
                                    'mon': 'ma',
                                    'tue': 'di',
                                    'wed': 'wo',
                                    'thu': 'do',
                                    'fri': 'vr',
                                    'sat': 'za'
                                },
                                'wide': {
                                    'sun': 'zondag',
                                    'mon': 'maandag',
                                    'tue': 'dinsdag',
                                    'wed': 'woensdag',
                                    'thu': 'donderdag',
                                    'fri': 'vrijdag',
                                    'sat': 'zaterdag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1e kwartaal',
                                    '2': '2e kwartaal',
                                    '3': '3e kwartaal',
                                    '4': '4e kwartaal'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1e kwartaal',
                                    '2': '2e kwartaal',
                                    '3': '3e kwartaal',
                                    '4': '4e kwartaal'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'AM',
                                    'noon': 'n',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'am': 'voormiddag',
                                    'noon': '12 uur \'s middags',
                                    'pm': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Voor Christus',
                                '1': 'na Christus',
                                '0-alt-variant': 'vóór gewone jaartelling',
                                '1-alt-variant': 'gewone jaartelling'
                            },
                            'eraAbbr': {
                                '0': 'v.Chr.',
                                '1': 'n.Chr.',
                                '0-alt-variant': 'v.g.j.',
                                '1-alt-variant': 'g.j.'
                            },
                            'eraNarrow': {
                                '0': 'v.C.',
                                '1': 'n.C.',
                                '0-alt-variant': 'vgj',
                                '1-alt-variant': 'gj'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd-MM-yy'
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
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd-M',
                                'MEd': 'E d-M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M-y',
                                'yMd': 'd-M-y',
                                'yMEd': 'E d-M-y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E d MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH-HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd-MM - dd-MM',
                                    'M': 'dd-MM - dd-MM'
                                },
                                'MEd': {
                                    'd': 'E dd-MM - E dd-MM',
                                    'M': 'E dd-MM - E dd-MM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E d - E d MMM',
                                    'M': 'E d MMM - E d MMM'
                                },
                                'MMMM': {
                                    'M': 'MMMM–MMMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM-y - MM-y',
                                    'y': 'MM-y - MM-y'
                                },
                                'yMd': {
                                    'd': 'dd-MM-y - dd-MM-y',
                                    'M': 'dd-MM-y - dd-MM-y',
                                    'y': 'dd-MM-y - dd-MM-y'
                                },
                                'yMEd': {
                                    'd': 'E dd-MM-y - E dd-MM-y',
                                    'M': 'E dd-MM-y - E dd-MM-y',
                                    'y': 'E dd-MM-y - E dd-MM-y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d - E d MMM y',
                                    'M': 'E d MMM - E d MMM y',
                                    'y': 'E d MMM y - E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}-tijd',
                    'regionFormat-type-daylight': 'Zomertijd {0}',
                    'regionFormat-type-standard': 'Standaardtijd {0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language pl}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('pl', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'sty',
                                    '2': 'lut',
                                    '3': 'mar',
                                    '4': 'kwi',
                                    '5': 'maj',
                                    '6': 'cze',
                                    '7': 'lip',
                                    '8': 'sie',
                                    '9': 'wrz',
                                    '10': 'paź',
                                    '11': 'lis',
                                    '12': 'gru'
                                },
                                'narrow': {
                                    '1': 's',
                                    '2': 'l',
                                    '3': 'm',
                                    '4': 'k',
                                    '5': 'm',
                                    '6': 'c',
                                    '7': 'l',
                                    '8': 's',
                                    '9': 'w',
                                    '10': 'p',
                                    '11': 'l',
                                    '12': 'g'
                                },
                                'wide': {
                                    '1': 'stycznia',
                                    '2': 'lutego',
                                    '3': 'marca',
                                    '4': 'kwietnia',
                                    '5': 'maja',
                                    '6': 'czerwca',
                                    '7': 'lipca',
                                    '8': 'sierpnia',
                                    '9': 'września',
                                    '10': 'października',
                                    '11': 'listopada',
                                    '12': 'grudnia'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'sty',
                                    '2': 'lut',
                                    '3': 'mar',
                                    '4': 'kwi',
                                    '5': 'maj',
                                    '6': 'cze',
                                    '7': 'lip',
                                    '8': 'sie',
                                    '9': 'wrz',
                                    '10': 'paź',
                                    '11': 'lis',
                                    '12': 'gru'
                                },
                                'narrow': {
                                    '1': 's',
                                    '2': 'l',
                                    '3': 'm',
                                    '4': 'k',
                                    '5': 'm',
                                    '6': 'c',
                                    '7': 'l',
                                    '8': 's',
                                    '9': 'w',
                                    '10': 'p',
                                    '11': 'l',
                                    '12': 'g'
                                },
                                'wide': {
                                    '1': 'styczeń',
                                    '2': 'luty',
                                    '3': 'marzec',
                                    '4': 'kwiecień',
                                    '5': 'maj',
                                    '6': 'czerwiec',
                                    '7': 'lipiec',
                                    '8': 'sierpień',
                                    '9': 'wrzesień',
                                    '10': 'październik',
                                    '11': 'listopad',
                                    '12': 'grudzień'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': 'śr.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'W',
                                    'wed': 'Ś',
                                    'thu': 'C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': 'śr.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'niedziela',
                                    'mon': 'poniedziałek',
                                    'tue': 'wtorek',
                                    'wed': 'środa',
                                    'thu': 'czwartek',
                                    'fri': 'piątek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': 'śr.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'W',
                                    'wed': 'Ś',
                                    'thu': 'C',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'niedz.',
                                    'mon': 'pon.',
                                    'tue': 'wt.',
                                    'wed': 'śr.',
                                    'thu': 'czw.',
                                    'fri': 'pt.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'niedziela',
                                    'mon': 'poniedziałek',
                                    'tue': 'wtorek',
                                    'wed': 'środa',
                                    'thu': 'czwartek',
                                    'fri': 'piątek',
                                    'sat': 'sobota'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I kwartał',
                                    '2': 'II kwartał',
                                    '3': 'III kwartał',
                                    '4': 'IV kwartał'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1 kw.',
                                    '2': '2 kw.',
                                    '3': '3 kw.',
                                    '4': '4 kw.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I kwartał',
                                    '2': 'II kwartał',
                                    '3': 'III kwartał',
                                    '4': 'IV kwartał'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                },
                                'wide': {
                                    'afternoon': 'po południu',
                                    'am': 'AM',
                                    'earlyMorning': 'nad ranem',
                                    'evening': 'wieczorem',
                                    'lateMorning': 'przed południem',
                                    'morning': 'rano',
                                    'night': 'w nocy',
                                    'noon': 'w południe',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'p.n.e.',
                                '1': 'n.e.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'p.n.e.',
                                '1': 'n.e.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'p.n.e.',
                                '1': 'n.e.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd.MM.y'
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
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E, d',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd.MM',
                                'MEd': 'E, d.MM',
                                'MMdd': 'd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM.y',
                                'yMd': 'd.MM.y',
                                'yMEd': 'E, d.MM.y',
                                'yMM': 'MM.y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'LLLL y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'MM-MM'
                                },
                                'Md': {
                                    'd': 'dd.MM–dd.MM',
                                    'M': 'dd.MM–dd.MM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM – E, dd.MM',
                                    'M': 'E, dd.MM – E, dd.MM'
                                },
                                'MMM': {
                                    'M': 'LLL–LLL'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d MMM – E, d MMM',
                                    'M': 'E, d MMM - E, d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM.y - MM.y',
                                    'y': 'MM.y - MM.y'
                                },
                                'yMd': {
                                    'd': 'dd-dd.MM.y',
                                    'M': 'dd.MM-dd.MM.y',
                                    'y': 'dd.MM.y-dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y - E, dd.MM.y',
                                    'M': 'E, dd.MM.y - E, dd.MM.y',
                                    'y': 'E, dd.MM.y - E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y',
                                    'y': 'LLL y - LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d - E, d MMM y',
                                    'M': 'E, d MMM - E, d MMM y',
                                    'y': 'E, d MMM y - E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Czas: {0}',
                    'regionFormat-type-daylight': '{0} (czas letni)',
                    'regionFormat-type-standard': '{0} (czas standardowy)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language pt-PT}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('pt-PT', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Fev',
                                    '3': 'Mar',
                                    '4': 'Abr',
                                    '5': 'Mai',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Ago',
                                    '9': 'Set',
                                    '10': 'Out',
                                    '11': 'Nov',
                                    '12': 'Dez'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Janeiro',
                                    '2': 'Fevereiro',
                                    '3': 'Março',
                                    '4': 'Abril',
                                    '5': 'Maio',
                                    '6': 'Junho',
                                    '7': 'Julho',
                                    '8': 'Agosto',
                                    '9': 'Setembro',
                                    '10': 'Outubro',
                                    '11': 'Novembro',
                                    '12': 'Dezembro'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Fev',
                                    '3': 'Mar',
                                    '4': 'Abr',
                                    '5': 'Mai',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Ago',
                                    '9': 'Set',
                                    '10': 'Out',
                                    '11': 'Nov',
                                    '12': 'Dez'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Janeiro',
                                    '2': 'Fevereiro',
                                    '3': 'Março',
                                    '4': 'Abril',
                                    '5': 'Maio',
                                    '6': 'Junho',
                                    '7': 'Julho',
                                    '8': 'Agosto',
                                    '9': 'Setembro',
                                    '10': 'Outubro',
                                    '11': 'Novembro',
                                    '12': 'Dezembro'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 'sáb'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'S',
                                    'tue': 'T',
                                    'wed': 'Q',
                                    'thu': 'Q',
                                    'fri': 'S',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'do',
                                    'mon': 'sg',
                                    'tue': 'te',
                                    'wed': 'qu',
                                    'thu': 'qi',
                                    'fri': 'sx',
                                    'sat': 'sb'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'segunda-feira',
                                    'tue': 'terça-feira',
                                    'wed': 'quarta-feira',
                                    'thu': 'quinta-feira',
                                    'fri': 'sexta-feira',
                                    'sat': 'sábado'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 'sáb'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'S',
                                    'tue': 'T',
                                    'wed': 'Q',
                                    'thu': 'Q',
                                    'fri': 'S',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'do',
                                    'mon': 'sg',
                                    'tue': 'te',
                                    'wed': 'qu',
                                    'thu': 'qi',
                                    'fri': 'sx',
                                    'sat': 'sb'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'segunda-feira',
                                    'tue': 'terça-feira',
                                    'wed': 'quarta-feira',
                                    'thu': 'quinta-feira',
                                    'fri': 'sexta-feira',
                                    'sat': 'sábado'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1.º trimestre',
                                    '2': '2.º trimestre',
                                    '3': '3.º trimestre',
                                    '4': '4.º trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1.º trimestre',
                                    '2': '2.º trimestre',
                                    '3': '3.º trimestre',
                                    '4': '4.º trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'da manhã',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'da tarde'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meia-noite',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'a.m.',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Antes de Cristo',
                                '1': 'Ano do Senhor',
                                '0-alt-variant': 'a.E.C.',
                                '1-alt-variant': 'E.C.'
                            },
                            'eraAbbr': {
                                '0': 'a.C.',
                                '1': 'd.C.',
                                '0-alt-variant': 'a.E.C.',
                                '1-alt-variant': 'E.C.'
                            },
                            'eraNarrow': {
                                '0': 'a.C.',
                                '1': 'd.C.',
                                '0-alt-variant': 'a.E.C.',
                                '1-alt-variant': 'E.C.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d \'de\' MMMM \'de\' y',
                            'long': 'd \'de\' MMMM \'de\' y',
                            'medium': 'dd/MM/y',
                            'short': 'dd/MM/yy'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'às\' {0}',
                            'long': '{1} \'às\' {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E, d',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM \'de\' y G',
                                'GyMMMd': 'd \'de\' MMM \'de\' y G',
                                'GyMMMEd': 'E, d \'de\' MMM \'de\' y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, dd/MM',
                                'MMdd': 'dd/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd/MM',
                                'MMMEd': 'E, d/MM',
                                'MMMMd': 'd \'de\' MMMM',
                                'MMMMEd': 'E, d \'de\' MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM/y',
                                'yMd': 'dd/MM/y',
                                'yMEd': 'E, dd/MM/y',
                                'yMM': 'MM/y',
                                'yMMM': 'MM/y',
                                'yMMMd': 'd/MM/y',
                                'yMMMEd': 'E, d/MM/y',
                                'yMMMEEEEd': 'EEEE, d/MM/y',
                                'yMMMM': 'MMMM \'de\' y',
                                'yMMMMd': 'd \'de\' MMMM \'de\' y',
                                'yMMMMEd': 'E, d \'de\' MMMM \'de\' y',
                                'yQQQ': 'QQQQ \'de\' y',
                                'yQQQQ': 'QQQQ \'de\' y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm - h:mm a',
                                    'm': 'h:mm - h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm - HH:mm',
                                    'm': 'HH:mm - HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm - h:mm a v',
                                    'm': 'h:mm - h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm - HH:mm v',
                                    'm': 'HH:mm - HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h - h a v'
                                },
                                'Hv': {
                                    'H': 'HH - HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E, dd/MM - E, dd/MM',
                                    'M': 'E, dd/MM - E, dd/MM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d \'de\' MMM',
                                    'M': 'd \'de\' MMM - d \'de\' MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d \'de\' MMM - E, d \'de\' MMM',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E, dd/MM/y - E, dd/MM/y',
                                    'M': 'E, dd/MM/y - E, dd/MM/y',
                                    'y': 'E, dd/MM/y - E, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM \'de\' y',
                                    'y': 'MMM \'de\' y - MMM \'de\' y'
                                },
                                'yMMMd': {
                                    'd': 'd-d \'de\' MMM \'de\' y',
                                    'M': 'd \'de\' MMM - d \'de\' MMM \'de\' y',
                                    'y': 'd \'de\' MMM \'de\' y - d \'de\' MMM \'de\' y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                    'y': 'E, d \'de\' MMM \'de\' y - E, d \'de\' MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM - MMMM \'de\' y',
                                    'y': 'MMMM \'de\' y - MMMM \'de\' y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Hora de {0}',
                    'regionFormat-type-daylight': 'Hora de Verão de {0}',
                    'regionFormat-type-standard': 'Hora Padrão de {0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language pt}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('pt', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'fev',
                                    '3': 'mar',
                                    '4': 'abr',
                                    '5': 'mai',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'ago',
                                    '9': 'set',
                                    '10': 'out',
                                    '11': 'nov',
                                    '12': 'dez'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'janeiro',
                                    '2': 'fevereiro',
                                    '3': 'março',
                                    '4': 'abril',
                                    '5': 'maio',
                                    '6': 'junho',
                                    '7': 'julho',
                                    '8': 'agosto',
                                    '9': 'setembro',
                                    '10': 'outubro',
                                    '11': 'novembro',
                                    '12': 'dezembro'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'fev',
                                    '3': 'mar',
                                    '4': 'abr',
                                    '5': 'mai',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'ago',
                                    '9': 'set',
                                    '10': 'out',
                                    '11': 'nov',
                                    '12': 'dez'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'janeiro',
                                    '2': 'fevereiro',
                                    '3': 'março',
                                    '4': 'abril',
                                    '5': 'maio',
                                    '6': 'junho',
                                    '7': 'julho',
                                    '8': 'agosto',
                                    '9': 'setembro',
                                    '10': 'outubro',
                                    '11': 'novembro',
                                    '12': 'dezembro'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 'sáb'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'S',
                                    'tue': 'T',
                                    'wed': 'Q',
                                    'thu': 'Q',
                                    'fri': 'S',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 'sáb'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'segunda-feira',
                                    'tue': 'terça-feira',
                                    'wed': 'quarta-feira',
                                    'thu': 'quinta-feira',
                                    'fri': 'sexta-feira',
                                    'sat': 'sábado'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 'sáb'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'S',
                                    'tue': 'T',
                                    'wed': 'Q',
                                    'thu': 'Q',
                                    'fri': 'S',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'dom',
                                    'mon': 'seg',
                                    'tue': 'ter',
                                    'wed': 'qua',
                                    'thu': 'qui',
                                    'fri': 'sex',
                                    'sat': 'sáb'
                                },
                                'wide': {
                                    'sun': 'domingo',
                                    'mon': 'segunda-feira',
                                    'tue': 'terça-feira',
                                    'wed': 'quarta-feira',
                                    'thu': 'quinta-feira',
                                    'fri': 'sexta-feira',
                                    'sat': 'sábado'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1º trimestre',
                                    '2': '2º trimestre',
                                    '3': '3º trimestre',
                                    '4': '4º trimestre'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1º trimestre',
                                    '2': '2º trimestre',
                                    '3': '3º trimestre',
                                    '4': '4º trimestre'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meia-noite',
                                    'pm': 'PM'
                                },
                                'narrow': {
                                    'afternoon': 'tarde',
                                    'am': 'a',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'p'
                                },
                                'wide': {
                                    'afternoon': 'tarde',
                                    'am': 'AM',
                                    'morning': 'manhã',
                                    'night': 'noite',
                                    'noon': 'meio-dia',
                                    'pm': 'PM'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Antes de Cristo',
                                '1': 'Ano do Senhor',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'a.C.',
                                '1': 'd.C.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'a.C.',
                                '1': 'd.C.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d \'de\' MMMM \'de\' y',
                            'long': 'd \'de\' MMMM \'de\' y',
                            'medium': 'dd/MM/y',
                            'short': 'dd/MM/yy'
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
                                'd': 'd',
                                'Ed': 'E, d',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM \'de\' y G',
                                'GyMMMd': 'd \'de\' MMM \'de\' y G',
                                'GyMMMEd': 'E, d \'de\' MMM \'de\' y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, dd/MM',
                                'MMdd': 'dd/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd \'de\' MMM',
                                'MMMEd': 'E, d \'de\' MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM/y',
                                'yMd': 'dd/MM/y',
                                'yMEd': 'E, dd/MM/y',
                                'yMM': 'MM/y',
                                'yMMM': 'MMM \'de\' y',
                                'yMMMd': 'd \'de\' MMM \'de\' y',
                                'yMMMEd': 'E, d \'de\' MMM \'de\' y',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h\'h\' a - h\'h\' a',
                                    'h': 'h\'h\' - h\'h\' a'
                                },
                                'H': {
                                    'H': 'HH\'h\' - HH\'h\''
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h - h a v'
                                },
                                'Hv': {
                                    'H': 'HH - HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'E, dd/MM - E, dd/MM',
                                    'M': 'E, dd/MM - E, dd/MM'
                                },
                                'MMM': {
                                    'M': 'MMM - MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d \'de\' MMM',
                                    'M': 'd \'de\' MMM - d \'de\' MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d - E, d \'de\' MMM',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM'
                                },
                                'y': {
                                    'y': 'y - y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'E, dd/MM/y - E, dd/MM/y',
                                    'M': 'E, dd/MM/y - E, dd/MM/y',
                                    'y': 'E, dd/MM/y - E, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM \'de\' y',
                                    'y': 'MMM \'de\' y - MMM \'de\' y'
                                },
                                'yMMMd': {
                                    'd': 'd-d \'de\' MMM \'de\' y',
                                    'M': 'd \'de\' MMM - d \'de\' MMM \'de\' y',
                                    'y': 'd \'de\' MMM \'de\' y - d \'de\' MMM \'de\' y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d - E, d \'de\' MMM \'de\' y',
                                    'M': 'E, d \'de\' MMM - E, d \'de\' MMM \'de\' y',
                                    'y': 'E, d \'de\' MMM \'de\' y - E, d \'de\' MMM \'de\' y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM - MMMM \'de\' y',
                                    'y': 'MMMM \'de\' y - MMMM \'de\' y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Horário {0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ro}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('ro', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ian.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.',
                                    '5': 'mai',
                                    '6': 'iun.',
                                    '7': 'iul.',
                                    '8': 'aug.',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'I',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'I',
                                    '7': 'I',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'ianuarie',
                                    '2': 'februarie',
                                    '3': 'martie',
                                    '4': 'aprilie',
                                    '5': 'mai',
                                    '6': 'iunie',
                                    '7': 'iulie',
                                    '8': 'august',
                                    '9': 'septembrie',
                                    '10': 'octombrie',
                                    '11': 'noiembrie',
                                    '12': 'decembrie'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'ian.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.',
                                    '5': 'mai',
                                    '6': 'iun.',
                                    '7': 'iul.',
                                    '8': 'aug.',
                                    '9': 'sept.',
                                    '10': 'oct.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'I',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'I',
                                    '7': 'I',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'ianuarie',
                                    '2': 'februarie',
                                    '3': 'martie',
                                    '4': 'aprilie',
                                    '5': 'mai',
                                    '6': 'iunie',
                                    '7': 'iulie',
                                    '8': 'august',
                                    '9': 'septembrie',
                                    '10': 'octombrie',
                                    '11': 'noiembrie',
                                    '12': 'decembrie'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Dum',
                                    'mon': 'Lun',
                                    'tue': 'Mar',
                                    'wed': 'Mie',
                                    'thu': 'Joi',
                                    'fri': 'Vin',
                                    'sat': 'Sâm'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Du',
                                    'mon': 'Lu',
                                    'tue': 'Ma',
                                    'wed': 'Mi',
                                    'thu': 'Jo',
                                    'fri': 'Vi',
                                    'sat': 'Sâ'
                                },
                                'wide': {
                                    'sun': 'duminică',
                                    'mon': 'luni',
                                    'tue': 'marți',
                                    'wed': 'miercuri',
                                    'thu': 'joi',
                                    'fri': 'vineri',
                                    'sat': 'sâmbătă'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Dum',
                                    'mon': 'Lun',
                                    'tue': 'Mar',
                                    'wed': 'Mie',
                                    'thu': 'Joi',
                                    'fri': 'Vin',
                                    'sat': 'Sâm'
                                },
                                'narrow': {
                                    'sun': 'D',
                                    'mon': 'L',
                                    'tue': 'M',
                                    'wed': 'M',
                                    'thu': 'J',
                                    'fri': 'V',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Du',
                                    'mon': 'Lu',
                                    'tue': 'Ma',
                                    'wed': 'Mi',
                                    'thu': 'Jo',
                                    'fri': 'Vi',
                                    'sat': 'Sâ'
                                },
                                'wide': {
                                    'sun': 'duminică',
                                    'mon': 'luni',
                                    'tue': 'marți',
                                    'wed': 'miercuri',
                                    'thu': 'joi',
                                    'fri': 'vineri',
                                    'sat': 'sâmbătă'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'trim. I',
                                    '2': 'trim. II',
                                    '3': 'trim. III',
                                    '4': 'trim. IV'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'trimestrul I',
                                    '2': 'trimestrul al II-lea',
                                    '3': 'trimestrul al III-lea',
                                    '4': 'trimestrul al IV-lea'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'T1',
                                    '2': 'T2',
                                    '3': 'T3',
                                    '4': 'T4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'trimestrul I',
                                    '2': 'trimestrul al II-lea',
                                    '3': 'trimestrul al III-lea',
                                    '4': 'trimestrul al IV-lea'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                },
                                'wide': {
                                    'am': 'a.m.',
                                    'pm': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'înainte de Hristos',
                                '1': 'după Hristos',
                                '0-alt-variant': 'î.e.n',
                                '1-alt-variant': 'e.n.'
                            },
                            'eraAbbr': {
                                '0': 'î.Hr.',
                                '1': 'd.Hr.',
                                '0-alt-variant': 'î.e.n',
                                '1-alt-variant': 'e.n.'
                            },
                            'eraNarrow': {
                                '0': 'î.Hr.',
                                '1': 'd.Hr.',
                                '0-alt-variant': 'î.e.n',
                                '1-alt-variant': 'e.n.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'dd.MM.y'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}, {0}',
                            'long': '{1}, {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMdd': 'dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM.y',
                                'yMd': 'dd.MM.y',
                                'yMEd': 'E, dd.MM.y',
                                'yMM': 'MM.y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH-HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd.MM - dd.MM',
                                    'M': 'dd.MM - dd.MM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM - E, dd.MM',
                                    'M': 'E, dd.MM - E, dd.MM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d MMM - E, d MMM',
                                    'M': 'E, d MMM - E, d MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM.y - MM.y',
                                    'y': 'MM.y - MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y - dd.MM.y',
                                    'M': 'dd.MM.y - dd.MM.y',
                                    'y': 'dd.MM.y - dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y - E, dd.MM.y',
                                    'M': 'E, dd.MM.y - E, dd.MM.y',
                                    'y': 'E, dd.MM.y - E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d MMM - E, d MMM y',
                                    'M': 'E, d MMM - E, d MMM y',
                                    'y': 'E, d MMM y - E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM - MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Ora din {0}',
                    'regionFormat-type-daylight': 'Ora de vară din {0}',
                    'regionFormat-type-standard': 'Ora standard din {0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language root}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('root', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04',
                                    '5': 'M05',
                                    '6': 'M06',
                                    '7': 'M07',
                                    '8': 'M08',
                                    '9': 'M09',
                                    '10': 'M10',
                                    '11': 'M11',
                                    '12': 'M12'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04',
                                    '5': 'M05',
                                    '6': 'M06',
                                    '7': 'M07',
                                    '8': 'M08',
                                    '9': 'M09',
                                    '10': 'M10',
                                    '11': 'M11',
                                    '12': 'M12'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04',
                                    '5': 'M05',
                                    '6': 'M06',
                                    '7': 'M07',
                                    '8': 'M08',
                                    '9': 'M09',
                                    '10': 'M10',
                                    '11': 'M11',
                                    '12': 'M12'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': 'M01',
                                    '2': 'M02',
                                    '3': 'M03',
                                    '4': 'M04',
                                    '5': 'M05',
                                    '6': 'M06',
                                    '7': 'M07',
                                    '8': 'M08',
                                    '9': 'M09',
                                    '10': 'M10',
                                    '11': 'M11',
                                    '12': 'M12'
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
                                '1': 'CE',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'BCE',
                                '1': 'CE',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'BCE',
                                '1': 'CE',
                                '0-alt-variant': 'BCE',
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
                                'd': 'd',
                                'Ed': 'd, E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'G y MMM',
                                'GyMMMd': 'G y MMM d',
                                'GyMMMEd': 'G y MMM d, E',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'MM-dd',
                                'MEd': 'MM-dd, E',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d',
                                'MMMEd': 'MMM d, E',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'y-MM',
                                'yMd': 'y-MM-dd',
                                'yMEd': 'y-MM-dd, E',
                                'yMMM': 'y MMM',
                                'yMMMd': 'y MMM d',
                                'yMMMEd': 'y MMM d, E',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'MM–MM'
                                },
                                'Md': {
                                    'd': 'MM-dd – MM-dd',
                                    'M': 'MM-dd – MM-dd'
                                },
                                'MEd': {
                                    'd': 'MM-dd, E – MM-dd, E',
                                    'M': 'MM-dd, E – MM-dd, E'
                                },
                                'MMM': {
                                    'M': 'LLL–LLL'
                                },
                                'MMMd': {
                                    'd': 'MMM d–d',
                                    'M': 'MMM d – MMM d'
                                },
                                'MMMEd': {
                                    'd': 'MMM d, E – MMM d, E',
                                    'M': 'MMM d, E – MMM d, E'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'y-MM – y-MM',
                                    'y': 'y-MM – y-MM'
                                },
                                'yMd': {
                                    'd': 'y-MM-dd – y-MM-dd',
                                    'M': 'y-MM-dd – y-MM-dd',
                                    'y': 'y-MM-dd – y-MM-dd'
                                },
                                'yMEd': {
                                    'd': 'y-MM-dd, E – y-MM-dd, E',
                                    'M': 'y-MM-dd, E – y-MM-dd, E',
                                    'y': 'y-MM-dd, E – y-MM-dd, E'
                                },
                                'yMMM': {
                                    'M': 'y MMM–MMM',
                                    'y': 'y MMM – y MMM'
                                },
                                'yMMMd': {
                                    'd': 'y MMM d–d',
                                    'M': 'y MMM d – MMM d',
                                    'y': 'y MMM d – y MMM d'
                                },
                                'yMMMEd': {
                                    'd': 'y MMM d, E – MMM d, E',
                                    'M': 'y MMM d, E – MMM d, E',
                                    'y': 'y MMM d, E – y MMM d, E'
                                },
                                'yMMMM': {
                                    'M': 'y MMMM–MMMM',
                                    'y': 'y MMMM – y MMMM'
                                }
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
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language ru}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('ru', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'янв.',
                                    '2': 'февр.',
                                    '3': 'марта',
                                    '4': 'апр.',
                                    '5': 'мая',
                                    '6': 'июня',
                                    '7': 'июля',
                                    '8': 'авг.',
                                    '9': 'сент.',
                                    '10': 'окт.',
                                    '11': 'нояб.',
                                    '12': 'дек.'
                                },
                                'narrow': {
                                    '1': 'Я',
                                    '2': 'Ф',
                                    '3': 'М',
                                    '4': 'А',
                                    '5': 'М',
                                    '6': 'И',
                                    '7': 'И',
                                    '8': 'А',
                                    '9': 'С',
                                    '10': 'О',
                                    '11': 'Н',
                                    '12': 'Д'
                                },
                                'wide': {
                                    '1': 'января',
                                    '2': 'февраля',
                                    '3': 'марта',
                                    '4': 'апреля',
                                    '5': 'мая',
                                    '6': 'июня',
                                    '7': 'июля',
                                    '8': 'августа',
                                    '9': 'сентября',
                                    '10': 'октября',
                                    '11': 'ноября',
                                    '12': 'декабря'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Янв.',
                                    '2': 'Февр.',
                                    '3': 'Март',
                                    '4': 'Апр.',
                                    '5': 'Май',
                                    '6': 'Июнь',
                                    '7': 'Июль',
                                    '8': 'Авг.',
                                    '9': 'Сент.',
                                    '10': 'Окт.',
                                    '11': 'Нояб.',
                                    '12': 'Дек.'
                                },
                                'narrow': {
                                    '1': 'Я',
                                    '2': 'Ф',
                                    '3': 'М',
                                    '4': 'А',
                                    '5': 'М',
                                    '6': 'И',
                                    '7': 'И',
                                    '8': 'А',
                                    '9': 'С',
                                    '10': 'О',
                                    '11': 'Н',
                                    '12': 'Д'
                                },
                                'wide': {
                                    '1': 'Январь',
                                    '2': 'Февраль',
                                    '3': 'Март',
                                    '4': 'Апрель',
                                    '5': 'Май',
                                    '6': 'Июнь',
                                    '7': 'Июль',
                                    '8': 'Август',
                                    '9': 'Сентябрь',
                                    '10': 'Октябрь',
                                    '11': 'Ноябрь',
                                    '12': 'Декабрь'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'вс',
                                    'mon': 'пн',
                                    'tue': 'вт',
                                    'wed': 'ср',
                                    'thu': 'чт',
                                    'fri': 'пт',
                                    'sat': 'сб'
                                },
                                'narrow': {
                                    'sun': 'вс',
                                    'mon': 'пн',
                                    'tue': 'вт',
                                    'wed': 'ср',
                                    'thu': 'чт',
                                    'fri': 'пт',
                                    'sat': 'сб'
                                },
                                'short': {
                                    'sun': 'вс',
                                    'mon': 'пн',
                                    'tue': 'вт',
                                    'wed': 'ср',
                                    'thu': 'чт',
                                    'fri': 'пт',
                                    'sat': 'сб'
                                },
                                'wide': {
                                    'sun': 'воскресенье',
                                    'mon': 'понедельник',
                                    'tue': 'вторник',
                                    'wed': 'среда',
                                    'thu': 'четверг',
                                    'fri': 'пятница',
                                    'sat': 'суббота'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Вс',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'narrow': {
                                    'sun': 'В',
                                    'mon': 'П',
                                    'tue': 'В',
                                    'wed': 'С',
                                    'thu': 'Ч',
                                    'fri': 'П',
                                    'sat': 'С'
                                },
                                'short': {
                                    'sun': 'вс',
                                    'mon': 'пн',
                                    'tue': 'вт',
                                    'wed': 'ср',
                                    'thu': 'чт',
                                    'fri': 'пт',
                                    'sat': 'сб'
                                },
                                'wide': {
                                    'sun': 'Воскресенье',
                                    'mon': 'Понедельник',
                                    'tue': 'Вторник',
                                    'wed': 'Среда',
                                    'thu': 'Четверг',
                                    'fri': 'Пятница',
                                    'sat': 'Суббота'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1-й кв.',
                                    '2': '2-й кв.',
                                    '3': '3-й кв.',
                                    '4': '4-й кв.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1-й квартал',
                                    '2': '2-й квартал',
                                    '3': '3-й квартал',
                                    '4': '4-й квартал'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1-й кв.',
                                    '2': '2-й кв.',
                                    '3': '3-й кв.',
                                    '4': '4-й кв.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1-й квартал',
                                    '2': '2-й квартал',
                                    '3': '3-й квартал',
                                    '4': '4-й квартал'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'до полудня',
                                    'pm': 'после полудня'
                                },
                                'narrow': {
                                    'am': 'дп',
                                    'pm': 'пп'
                                },
                                'wide': {
                                    'am': 'до полудня',
                                    'pm': 'после полудня'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'до полудня',
                                    'pm': 'после полудня'
                                },
                                'narrow': {
                                    'am': 'дп',
                                    'pm': 'пп'
                                },
                                'wide': {
                                    'am': 'до полудня',
                                    'pm': 'после полудня'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'до н.э.',
                                '1': 'н.э.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'н.э.'
                            },
                            'eraAbbr': {
                                '0': 'до н. э.',
                                '1': 'н. э.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'н.э.'
                            },
                            'eraNarrow': {
                                '0': 'до н.э.',
                                '1': 'н.э.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'н.э.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y \'г\'.',
                            'long': 'd MMMM y \'г\'.',
                            'medium': 'dd MMM y \'г\'.',
                            'short': 'dd.MM.yy'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}, {0}',
                            'long': '{1}, {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'E': 'ccc',
                                'Ed': 'ccc, d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y \'г\'. G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMdd': 'dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'ccc, d MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yLLLL': 'LLLL y',
                                'yM': 'MM.y',
                                'yMd': 'dd.MM.y',
                                'yMEd': 'ccc, d.MM.y \'г\'.',
                                'yMM': 'MM.y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y \'г\'.',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'LLLL y',
                                'yQQQ': 'QQQ y \'г\'.',
                                'yQQQQ': 'QQQQ y \'г\'.'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'H-H'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm-H:mm',
                                    'm': 'H:mm-H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm-H:mm v',
                                    'm': 'H:mm-H:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'H-H v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'dd.MM - dd.MM',
                                    'M': 'dd.MM - dd.MM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM - E, dd.MM',
                                    'M': 'E, dd.MM - E, dd.MM'
                                },
                                'MMM': {
                                    'M': 'LLL-MMM'
                                },
                                'MMMd': {
                                    'd': 'd-d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'ccc, d - E, d MMM',
                                    'M': 'ccc, d MMM - ccc, d MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM.y - MM.y',
                                    'y': 'MM.y - MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y - dd.MM.y',
                                    'M': 'dd.MM.y - dd.MM.y',
                                    'y': 'dd.MM.y - dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                    'M': 'ccc, dd.MM.y - ccc, dd.MM.y',
                                    'y': 'ccc, dd.MM.y - ccc, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL-LLL y \'г\'.',
                                    'y': 'LLL y - LLL y \'г\'.'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y \'г\'.',
                                    'M': 'd MMM - d MMM y \'г\'.',
                                    'y': 'd MMM y - d MMM y \'г\'.'
                                },
                                'yMMMEd': {
                                    'd': 'ccc, d - ccc, d MMM y \'г\'.',
                                    'M': 'ccc, d MMM - ccc, d MMM y \'г\'.',
                                    'y': 'ccc, d MMM y - ccc, d MMM y \'г\'.'
                                },
                                'yMMMM': {
                                    'M': 'LLLL-LLLL y \'г\'.',
                                    'y': 'LLLL y - LLLL y \'г\'.'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} время',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language sk}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('sk', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'máj',
                                    '6': 'jún',
                                    '7': 'júl',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a',
                                    '5': 'm',
                                    '6': 'j',
                                    '7': 'j',
                                    '8': 'a',
                                    '9': 's',
                                    '10': 'o',
                                    '11': 'n',
                                    '12': 'd'
                                },
                                'wide': {
                                    '1': 'januára',
                                    '2': 'februára',
                                    '3': 'marca',
                                    '4': 'apríla',
                                    '5': 'mája',
                                    '6': 'júna',
                                    '7': 'júla',
                                    '8': 'augusta',
                                    '9': 'septembra',
                                    '10': 'októbra',
                                    '11': 'novembra',
                                    '12': 'decembra'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'máj',
                                    '6': 'jún',
                                    '7': 'júl',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a',
                                    '5': 'm',
                                    '6': 'j',
                                    '7': 'j',
                                    '8': 'a',
                                    '9': 's',
                                    '10': 'o',
                                    '11': 'n',
                                    '12': 'd'
                                },
                                'wide': {
                                    '1': 'január',
                                    '2': 'február',
                                    '3': 'marec',
                                    '4': 'apríl',
                                    '5': 'máj',
                                    '6': 'jún',
                                    '7': 'júl',
                                    '8': 'august',
                                    '9': 'september',
                                    '10': 'október',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'ut',
                                    'wed': 'st',
                                    'thu': 'št',
                                    'fri': 'pi',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': 'Š',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Ne',
                                    'mon': 'Po',
                                    'tue': 'Ut',
                                    'wed': 'St',
                                    'thu': 'Št',
                                    'fri': 'Pi',
                                    'sat': 'So'
                                },
                                'wide': {
                                    'sun': 'nedeľa',
                                    'mon': 'pondelok',
                                    'tue': 'utorok',
                                    'wed': 'streda',
                                    'thu': 'štvrtok',
                                    'fri': 'piatok',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ne',
                                    'mon': 'po',
                                    'tue': 'ut',
                                    'wed': 'st',
                                    'thu': 'št',
                                    'fri': 'pi',
                                    'sat': 'so'
                                },
                                'narrow': {
                                    'sun': 'N',
                                    'mon': 'P',
                                    'tue': 'U',
                                    'wed': 'S',
                                    'thu': 'Š',
                                    'fri': 'P',
                                    'sat': 'S'
                                },
                                'short': {
                                    'sun': 'Ne',
                                    'mon': 'Po',
                                    'tue': 'Ut',
                                    'wed': 'St',
                                    'thu': 'Št',
                                    'fri': 'Pi',
                                    'sat': 'So'
                                },
                                'wide': {
                                    'sun': 'nedeľa',
                                    'mon': 'pondelok',
                                    'tue': 'utorok',
                                    'wed': 'streda',
                                    'thu': 'štvrtok',
                                    'fri': 'piatok',
                                    'sat': 'sobota'
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
                                    '1': '1. štvrťrok',
                                    '2': '2. štvrťrok',
                                    '3': '3. štvrťrok',
                                    '4': '4. štvrťrok'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1Q',
                                    '2': '2Q',
                                    '3': '3Q',
                                    '4': '4Q'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1. štvrťrok',
                                    '2': '2. štvrťrok',
                                    '3': '3. štvrťrok',
                                    '4': '4. štvrťrok'
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
                                '0': 'pred n.l.',
                                '1': 'n.l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'pred n.l.',
                                '1': 'n.l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'pred n.l.',
                                '1': 'n.l.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d. MMMM y',
                            'long': 'd. MMMM y',
                            'medium': 'd.M.y',
                            'short': 'd.M.y'
                        },
                        'timeFormats': {
                            'full': 'H:mm:ss zzzz',
                            'long': 'H:mm:ss z',
                            'medium': 'H:mm:ss',
                            'short': 'H:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd.',
                                'Ed': 'E d.',
                                'Ehm': 'E h:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd.M.y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'GyMMMMd': 'd. MMMM y G',
                                'h': 'h a',
                                'H': 'H',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L.',
                                'Md': 'd.M.',
                                'MEd': 'E, d.M.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM.',
                                'MMMEd': 'E, d. MMM.',
                                'MMMMd': 'd. MMMM',
                                'MMMMEd': 'E, d. MMMM',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M.y',
                                'yMd': 'd.M.y',
                                'yMEd': 'E d. M. y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd.M.y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMM': 'LLLL y',
                                'yMMMMd': 'd. MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd. – d.'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h – h a'
                                },
                                'H': {
                                    'H': 'HH – HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm - h:mm a',
                                    'm': 'h:mm - h:mm a'
                                },
                                'Hm': {
                                    'H': 'H:mm – H:mm',
                                    'm': 'H:mm – H:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm - h:mm a v',
                                    'm': 'h:mm - h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm – H:mm v',
                                    'm': 'H:mm – H:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h – h a v'
                                },
                                'Hv': {
                                    'H': 'HH – HH v'
                                },
                                'M': {
                                    'M': 'M. – M.'
                                },
                                'Md': {
                                    'd': 'd.M. - d.M.',
                                    'M': 'd.M. - d.M.'
                                },
                                'MEd': {
                                    'd': 'E, d.M. - E, d.M.',
                                    'M': 'E, d.M. - E, d.M.'
                                },
                                'MMM': {
                                    'M': 'LLL – LLL'
                                },
                                'MMMd': {
                                    'd': 'd. - d. MMM',
                                    'M': 'd. MMM - d. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d. - E, d. MMM',
                                    'M': 'E, d. MMM - E, d. MMM'
                                },
                                'MMMM': {
                                    'M': 'LLLL-LLLL'
                                },
                                'y': {
                                    'y': 'y - y'
                                },
                                'yM': {
                                    'M': 'M.y - M.y',
                                    'y': 'M.y - M.y'
                                },
                                'yMd': {
                                    'd': 'd.M.y - d.M.y',
                                    'M': 'd.M.y - d.M.y',
                                    'y': 'd.M.y - d.M.y'
                                },
                                'yMEd': {
                                    'd': 'E, d.M.y - E, d.M.y',
                                    'M': 'E, d.M.y - E, d.M.y',
                                    'y': 'E, d.M.y - E, d.M.y'
                                },
                                'yMMM': {
                                    'M': 'LLL - LLL y',
                                    'y': 'LLL y - LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd. - d. MMM y',
                                    'M': 'd. MMM - d. MMM y',
                                    'y': 'd. MMM y - d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. - E, d. MMM y',
                                    'M': 'E, d. MMM - E, d. MMM y',
                                    'y': 'E, d. MMM y - E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL - LLLL y',
                                    'y': 'LLLL y - LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Časové pásmo {0}',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language sl}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('sl', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan.',
                                    '2': 'feb.',
                                    '3': 'mar.',
                                    '4': 'apr.',
                                    '5': 'maj',
                                    '6': 'jun.',
                                    '7': 'jul.',
                                    '8': 'avg.',
                                    '9': 'sep.',
                                    '10': 'okt.',
                                    '11': 'nov.',
                                    '12': 'dec.'
                                },
                                'narrow': {
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a',
                                    '5': 'm',
                                    '6': 'j',
                                    '7': 'j',
                                    '8': 'a',
                                    '9': 's',
                                    '10': 'o',
                                    '11': 'n',
                                    '12': 'd'
                                },
                                'wide': {
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marec',
                                    '4': 'april',
                                    '5': 'maj',
                                    '6': 'junij',
                                    '7': 'julij',
                                    '8': 'avgust',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'maj',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'avg',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'j',
                                    '2': 'f',
                                    '3': 'm',
                                    '4': 'a',
                                    '5': 'm',
                                    '6': 'j',
                                    '7': 'j',
                                    '8': 'a',
                                    '9': 's',
                                    '10': 'o',
                                    '11': 'n',
                                    '12': 'd'
                                },
                                'wide': {
                                    '1': 'januar',
                                    '2': 'februar',
                                    '3': 'marec',
                                    '4': 'april',
                                    '5': 'maj',
                                    '6': 'junij',
                                    '7': 'julij',
                                    '8': 'avgust',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'ned.',
                                    'mon': 'pon.',
                                    'tue': 'tor.',
                                    'wed': 'sre.',
                                    'thu': 'čet.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 't',
                                    'wed': 's',
                                    'thu': 'č',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned.',
                                    'mon': 'pon.',
                                    'tue': 'tor.',
                                    'wed': 'sre.',
                                    'thu': 'čet.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'nedelja',
                                    'mon': 'ponedeljek',
                                    'tue': 'torek',
                                    'wed': 'sreda',
                                    'thu': 'četrtek',
                                    'fri': 'petek',
                                    'sat': 'sobota'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'ned',
                                    'mon': 'pon',
                                    'tue': 'tor',
                                    'wed': 'sre',
                                    'thu': 'čet',
                                    'fri': 'pet',
                                    'sat': 'sob'
                                },
                                'narrow': {
                                    'sun': 'n',
                                    'mon': 'p',
                                    'tue': 't',
                                    'wed': 's',
                                    'thu': 'č',
                                    'fri': 'p',
                                    'sat': 's'
                                },
                                'short': {
                                    'sun': 'ned.',
                                    'mon': 'pon.',
                                    'tue': 'tor.',
                                    'wed': 'sre.',
                                    'thu': 'čet.',
                                    'fri': 'pet.',
                                    'sat': 'sob.'
                                },
                                'wide': {
                                    'sun': 'nedelja',
                                    'mon': 'ponedeljek',
                                    'tue': 'torek',
                                    'wed': 'sreda',
                                    'thu': 'četrtek',
                                    'fri': 'petek',
                                    'sat': 'sobota'
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
                                    '1': '1. četrtletje',
                                    '2': '2. četrtletje',
                                    '3': '3. četrtletje',
                                    '4': '4. četrtletje'
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
                                    '1': '1. četrtletje',
                                    '2': '2. četrtletje',
                                    '3': '3. četrtletje',
                                    '4': '4. četrtletje'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                },
                                'narrow': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                },
                                'wide': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                },
                                'narrow': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                },
                                'wide': {
                                    'am': 'dop.',
                                    'pm': 'pop.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'pred našim štetjem',
                                '1': 'naše štetje',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'po n. št.'
                            },
                            'eraAbbr': {
                                '0': 'pr. n. št.',
                                '1': 'po Kr.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'po n. št.'
                            },
                            'eraNarrow': {
                                '0': 'pr. n. št.',
                                '1': 'po Kr.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'po n. št.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, dd. MMMM y',
                            'long': 'dd. MMMM y',
                            'medium': 'd. MMM y',
                            'short': 'd. MM. yy'
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
                                'd': 'd',
                                'Ed': 'E, d.',
                                'Ehm': 'E h.mm a',
                                'EHm': 'E HH.mm',
                                'Ehms': 'E h.mm.ss a',
                                'EHms': 'E HH.mm.ss',
                                'Gy': 'y G',
                                'GyM': 'M/y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd. MMM y G',
                                'GyMMMEd': 'E, d. MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd. M.',
                                'MEd': 'E, d. MM.',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMEd': 'E, d. MMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd. M. y',
                                'yMEd': 'E, d. M. y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd. MMM y',
                                'yMMMEd': 'E, d. MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd.–d.'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH.mm–HH.mm',
                                    'm': 'HH.mm–HH.mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH.mm–HH.mm v',
                                    'm': 'HH.mm–HH.mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M.–M.'
                                },
                                'Md': {
                                    'd': 'd. – d. M.',
                                    'M': 'd. M. – d. M.'
                                },
                                'MEd': {
                                    'd': 'E, d. – E, d. M.',
                                    'M': 'E, d. M. – E, d. M.'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd.–d. MMM',
                                    'M': 'd. MMM – d. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d. – E, d. MMM',
                                    'M': 'E, d. MMM – E, d. MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'M.–M. y',
                                    'y': 'M. y – M. y'
                                },
                                'yMd': {
                                    'd': 'd. M. y – d. M. y',
                                    'M': 'd. M. – d. M. y',
                                    'y': 'd. M. y – d. M. y'
                                },
                                'yMEd': {
                                    'd': 'E, d. – E, d. M. y',
                                    'M': 'E, d. M. – E, d. M. y',
                                    'y': 'E, d. M. y – E, d. M. y'
                                },
                                'yMMM': {
                                    'M': 'MMM – MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd.–d. MMM y',
                                    'M': 'd. MMM – d. MMM y',
                                    'y': 'd. MMM y – d. MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d. MMM – E, d. MMM y',
                                    'M': 'E, d. MMM – E, d. MMM y',
                                    'y': 'E, d. MMM y – E, d. MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} čas',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language sr}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('sr', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'јан',
                                    '2': 'феб',
                                    '3': 'мар',
                                    '4': 'апр',
                                    '5': 'мај',
                                    '6': 'јун',
                                    '7': 'јул',
                                    '8': 'авг',
                                    '9': 'сеп',
                                    '10': 'окт',
                                    '11': 'нов',
                                    '12': 'дец'
                                },
                                'narrow': {
                                    '1': 'ј',
                                    '2': 'ф',
                                    '3': 'м',
                                    '4': 'а',
                                    '5': 'м',
                                    '6': 'ј',
                                    '7': 'ј',
                                    '8': 'а',
                                    '9': 'с',
                                    '10': 'о',
                                    '11': 'н',
                                    '12': 'д'
                                },
                                'wide': {
                                    '1': 'јануар',
                                    '2': 'фебруар',
                                    '3': 'март',
                                    '4': 'април',
                                    '5': 'мај',
                                    '6': 'јун',
                                    '7': 'јул',
                                    '8': 'август',
                                    '9': 'септембар',
                                    '10': 'октобар',
                                    '11': 'новембар',
                                    '12': 'децембар'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'јан',
                                    '2': 'феб',
                                    '3': 'мар',
                                    '4': 'апр',
                                    '5': 'мај',
                                    '6': 'јун',
                                    '7': 'јул',
                                    '8': 'авг',
                                    '9': 'сеп',
                                    '10': 'окт',
                                    '11': 'нов',
                                    '12': 'дец'
                                },
                                'narrow': {
                                    '1': 'ј',
                                    '2': 'ф',
                                    '3': 'м',
                                    '4': 'а',
                                    '5': 'м',
                                    '6': 'ј',
                                    '7': 'ј',
                                    '8': 'а',
                                    '9': 'с',
                                    '10': 'о',
                                    '11': 'н',
                                    '12': 'д'
                                },
                                'wide': {
                                    '1': 'јануар',
                                    '2': 'фебруар',
                                    '3': 'март',
                                    '4': 'април',
                                    '5': 'мај',
                                    '6': 'јун',
                                    '7': 'јул',
                                    '8': 'август',
                                    '9': 'септембар',
                                    '10': 'октобар',
                                    '11': 'новембар',
                                    '12': 'децембар'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'нед',
                                    'mon': 'пон',
                                    'tue': 'уто',
                                    'wed': 'сре',
                                    'thu': 'чет',
                                    'fri': 'пет',
                                    'sat': 'суб'
                                },
                                'narrow': {
                                    'sun': 'н',
                                    'mon': 'п',
                                    'tue': 'у',
                                    'wed': 'с',
                                    'thu': 'ч',
                                    'fri': 'п',
                                    'sat': 'с'
                                },
                                'short': {
                                    'sun': 'нед',
                                    'mon': 'пон',
                                    'tue': 'уто',
                                    'wed': 'сре',
                                    'thu': 'чет',
                                    'fri': 'пет',
                                    'sat': 'суб'
                                },
                                'wide': {
                                    'sun': 'недеља',
                                    'mon': 'понедељак',
                                    'tue': 'уторак',
                                    'wed': 'среда',
                                    'thu': 'четвртак',
                                    'fri': 'петак',
                                    'sat': 'субота'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'нед',
                                    'mon': 'пон',
                                    'tue': 'уто',
                                    'wed': 'сре',
                                    'thu': 'чет',
                                    'fri': 'пет',
                                    'sat': 'суб'
                                },
                                'narrow': {
                                    'sun': 'н',
                                    'mon': 'п',
                                    'tue': 'у',
                                    'wed': 'с',
                                    'thu': 'ч',
                                    'fri': 'п',
                                    'sat': 'с'
                                },
                                'short': {
                                    'sun': 'не',
                                    'mon': 'по',
                                    'tue': 'ут',
                                    'wed': 'ср',
                                    'thu': 'че',
                                    'fri': 'пе',
                                    'sat': 'су'
                                },
                                'wide': {
                                    'sun': 'недеља',
                                    'mon': 'понедељак',
                                    'tue': 'уторак',
                                    'wed': 'среда',
                                    'thu': 'четвртак',
                                    'fri': 'петак',
                                    'sat': 'субота'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'К1',
                                    '2': 'К2',
                                    '3': 'К3',
                                    '4': 'К4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': 'Прво тромесечје',
                                    '2': 'Друго тромесечје',
                                    '3': 'Треће тромесечје',
                                    '4': 'Четврто тромесечје'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'К1',
                                    '2': 'К2',
                                    '3': 'К3',
                                    '4': 'К4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': 'Прво тромесечје',
                                    '2': 'Друго тромесечје',
                                    '3': 'Треће тромесечје',
                                    '4': 'Четврто тромесечје'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                },
                                'narrow': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                },
                                'wide': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                },
                                'narrow': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                },
                                'wide': {
                                    'am': 'пре подне',
                                    'pm': 'поподне'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Пре нове ере',
                                '1': 'Нове ере',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'п. н. е.',
                                '1': 'н. е.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'п.н.е.',
                                '1': 'н.е.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, dd. MMMM y.',
                            'long': 'dd. MMMM y.',
                            'medium': 'dd.MM.y.',
                            'short': 'd.M.yy.'
                        },
                        'timeFormats': {
                            'full': 'HH.mm.ss zzzz',
                            'long': 'HH.mm.ss z',
                            'medium': 'HH.mm.ss',
                            'short': 'HH.mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d.',
                                'Ehm': 'E, h:mm a',
                                'EHm': 'E, HH:mm',
                                'Ehms': 'E, h:mm:ss a',
                                'EHms': 'E, HH:mm:ss',
                                'Gy': 'y. G',
                                'GyMMM': 'MMM y. G',
                                'GyMMMd': 'd. MMM y. G',
                                'GyMMMEd': 'E, d. MMM y. G',
                                'h': 'hh a',
                                'H': 'HH',
                                'hm': 'hh.mm a',
                                'Hm': 'HH.mm',
                                'hms': 'hh.mm.ss a',
                                'Hms': 'HH.mm.ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E, M-d',
                                'MMdd': 'MM-dd',
                                'MMM': 'LLL',
                                'MMMd': 'd. MMM',
                                'MMMdd': 'dd.MMM',
                                'MMMEd': 'E d. MMM',
                                'MMMMd': 'd. MMMM',
                                'MMMMdd': 'dd. MMMM',
                                'MMMMEd': 'E d. MMMM',
                                'ms': 'mm.ss',
                                'y': 'y.',
                                'yM': 'y-M',
                                'yMd': 'd. M. y.',
                                'yMEd': 'E, d. M. y.',
                                'yMM': 'MM.y',
                                'yMMdd': 'dd.MM.y',
                                'yMMM': 'MMM y.',
                                'yMMMd': 'd. MMM y.',
                                'yMMMEd': 'E, d. MMM y.',
                                'yMMMM': 'MMMM y.',
                                'yQQQ': 'QQQ. y',
                                'yQQQQ': 'QQQQ. y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH-HH'
                                },
                                'hm': {
                                    'a': 'h.mm a - h.mm a',
                                    'h': 'h.mm-h.mm a',
                                    'm': 'h.mm-h.mm a'
                                },
                                'Hm': {
                                    'H': 'HH.mm-HH.mm',
                                    'm': 'HH.mm-HH.mm'
                                },
                                'hmv': {
                                    'a': 'h.mm a - h.mm a v',
                                    'h': 'h.mm-h.mm a v',
                                    'm': 'h.mm-h.mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH.mm-HH.mm v',
                                    'm': 'HH.mm-HH.mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH-HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'd.M - d.M',
                                    'M': 'd.M - d.M'
                                },
                                'MEd': {
                                    'd': 'E, d.M - E, d.M',
                                    'M': 'E, d.M - E, d.M'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': 'dd.-dd. MMM',
                                    'M': 'dd. MMM - dd. MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, dd. - E, dd. MMM',
                                    'M': 'E, dd. MMM - E, dd. MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'y M - M',
                                    'y': 'y M - M'
                                },
                                'yMd': {
                                    'd': 'd.M.y. - d.M.y.',
                                    'M': 'd.M.y. - d.M.y.',
                                    'y': 'd.M.y. - d.M.y.'
                                },
                                'yMEd': {
                                    'd': 'E, d.M.y. - E, d.M.y.',
                                    'M': 'E, d.M.y. - E, d.M.y.',
                                    'y': 'E, d.M.y. - E, d.M.y.'
                                },
                                'yMMM': {
                                    'M': 'MMM-MMM y.',
                                    'y': 'MMM y. - MMM y.'
                                },
                                'yMMMd': {
                                    'd': 'dd.-dd. MMM y.',
                                    'M': 'dd. MMM - dd. MMM y.',
                                    'y': 'dd. MMM y. - dd. MMM y.'
                                },
                                'yMMMEd': {
                                    'd': 'E, dd. - E, dd. MMM y.',
                                    'M': 'E, dd. MMM - E, dd. MMM y.',
                                    'y': 'E, dd. MMM y. - E, dd. MMM y.'
                                },
                                'yMMMM': {
                                    'M': 'y-MM – MM',
                                    'y': 'y-MM – y-MM'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HHmm;-HHmm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Време у земљи: {0}',
                    'regionFormat-type-daylight': '{0}, летње време',
                    'regionFormat-type-standard': '{0}, стандардно време',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language sv}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('sv', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'jan',
                                    '2': 'feb',
                                    '3': 'mar',
                                    '4': 'apr',
                                    '5': 'maj',
                                    '6': 'jun',
                                    '7': 'jul',
                                    '8': 'aug',
                                    '9': 'sep',
                                    '10': 'okt',
                                    '11': 'nov',
                                    '12': 'dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'januari',
                                    '2': 'februari',
                                    '3': 'mars',
                                    '4': 'april',
                                    '5': 'maj',
                                    '6': 'juni',
                                    '7': 'juli',
                                    '8': 'augusti',
                                    '9': 'september',
                                    '10': 'oktober',
                                    '11': 'november',
                                    '12': 'december'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr',
                                    '5': 'Maj',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Aug',
                                    '9': 'Sep',
                                    '10': 'Okt',
                                    '11': 'Nov',
                                    '12': 'Dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'Januari',
                                    '2': 'Februari',
                                    '3': 'Mars',
                                    '4': 'April',
                                    '5': 'Maj',
                                    '6': 'Juni',
                                    '7': 'Juli',
                                    '8': 'Augusti',
                                    '9': 'September',
                                    '10': 'Oktober',
                                    '11': 'November',
                                    '12': 'December'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'sön',
                                    'mon': 'mån',
                                    'tue': 'tis',
                                    'wed': 'ons',
                                    'thu': 'tors',
                                    'fri': 'fre',
                                    'sat': 'lör'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'sö',
                                    'mon': 'må',
                                    'tue': 'ti',
                                    'wed': 'on',
                                    'thu': 'to',
                                    'fri': 'fr',
                                    'sat': 'lö'
                                },
                                'wide': {
                                    'sun': 'söndag',
                                    'mon': 'måndag',
                                    'tue': 'tisdag',
                                    'wed': 'onsdag',
                                    'thu': 'torsdag',
                                    'fri': 'fredag',
                                    'sat': 'lördag'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Sön',
                                    'mon': 'Mån',
                                    'tue': 'Tis',
                                    'wed': 'Ons',
                                    'thu': 'Tor',
                                    'fri': 'Fre',
                                    'sat': 'Lör'
                                },
                                'narrow': {
                                    'sun': 'S',
                                    'mon': 'M',
                                    'tue': 'T',
                                    'wed': 'O',
                                    'thu': 'T',
                                    'fri': 'F',
                                    'sat': 'L'
                                },
                                'short': {
                                    'sun': 'Sö',
                                    'mon': 'Må',
                                    'tue': 'Ti',
                                    'wed': 'On',
                                    'thu': 'To',
                                    'fri': 'Fr',
                                    'sat': 'Lö'
                                },
                                'wide': {
                                    'sun': 'Söndag',
                                    'mon': 'Måndag',
                                    'tue': 'Tisdag',
                                    'wed': 'Onsdag',
                                    'thu': 'Torsdag',
                                    'fri': 'Fredag',
                                    'sat': 'Lördag'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1:a kvartalet',
                                    '2': '2:a kvartalet',
                                    '3': '3:e kvartalet',
                                    '4': '4:e kvartalet'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'K1',
                                    '2': 'K2',
                                    '3': 'K3',
                                    '4': 'K4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1:a kvartalet',
                                    '2': '2:a kvartalet',
                                    '3': '3:e kvartalet',
                                    '4': '4:e kvartalet'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'FM',
                                    'pm': 'EM'
                                },
                                'narrow': {
                                    'am': 'f',
                                    'pm': 'e'
                                },
                                'wide': {
                                    'am': 'fm',
                                    'pm': 'em'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'fm',
                                    'pm': 'em'
                                },
                                'narrow': {
                                    'am': 'f.m.',
                                    'pm': 'e.m.'
                                },
                                'wide': {
                                    'am': 'förmiddag',
                                    'pm': 'eftermiddag'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'före Kristus',
                                '1': 'efter Kristus',
                                '0-alt-variant': 'före västerländsk tideräkning',
                                '1-alt-variant': 'västerländsk tideräkning'
                            },
                            'eraAbbr': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'f.v.t.',
                                '1-alt-variant': 'v.t.'
                            },
                            'eraNarrow': {
                                '0': 'f.Kr.',
                                '1': 'e.Kr.',
                                '0-alt-variant': 'fvt',
                                '1-alt-variant': 'vt'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE\'en\' \'den\' d:\'e\' MMMM y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'y-MM-dd'
                        },
                        'timeFormats': {
                            'full': '\'kl\'. HH:mm:ss zzzz',
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
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMd': 'd/M',
                                'MMdd': 'dd/MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd:\'e\' MMMM',
                                'MMMMEd': 'E d:\'e\' MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'y-MM',
                                'yMd': 'y-MM-dd',
                                'yMEd': 'E, y-MM-dd',
                                'yMM': 'y-MM',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E d MMM y',
                                'yQQQ': 'y QQQ',
                                'yQQQQ': 'y QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'd–d/M',
                                    'M': 'd/M – d/M'
                                },
                                'MEd': {
                                    'd': 'E d/M – E d/M',
                                    'M': 'E d/M – E d/M'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E d – E d MMM',
                                    'M': 'E d MMM – E d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'y-MM – MM',
                                    'y': 'y-MM – y-MM'
                                },
                                'yMd': {
                                    'd': 'y-MM-dd – dd',
                                    'M': 'y-MM-dd – MM-dd',
                                    'y': 'y-MM-dd – y-MM-dd'
                                },
                                'yMEd': {
                                    'd': 'E, y-MM-dd – E, y-MM-dd',
                                    'M': 'E, y-MM-dd – E, y-MM-dd',
                                    'y': 'E, y-MM-dd – E, y-MM-dd'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM–d MMM y',
                                    'y': 'd MMM y–d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E dd MMM–E dd MMM y',
                                    'M': 'E dd MMM–E dd MMM y',
                                    'y': 'E dd MMM y–E dd MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;−HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}tid',
                    'regionFormat-type-daylight': '{0} (sommartid)',
                    'regionFormat-type-standard': '{0} (normaltid)',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language th}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9318
 * timeZoneNames: 24r9318
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('th', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ม.ค.',
                                    '2': 'ก.พ.',
                                    '3': 'มี.ค.',
                                    '4': 'เม.ย.',
                                    '5': 'พ.ค.',
                                    '6': 'มิ.ย.',
                                    '7': 'ก.ค.',
                                    '8': 'ส.ค.',
                                    '9': 'ก.ย.',
                                    '10': 'ต.ค.',
                                    '11': 'พ.ย.',
                                    '12': 'ธ.ค.'
                                },
                                'narrow': {
                                    '1': 'ม.ค.',
                                    '2': 'ก.พ.',
                                    '3': 'มี.ค.',
                                    '4': 'เม.ย.',
                                    '5': 'พ.ค.',
                                    '6': 'มิ.ย.',
                                    '7': 'ก.ค.',
                                    '8': 'ส.ค.',
                                    '9': 'ก.ย.',
                                    '10': 'ต.ค.',
                                    '11': 'พ.ย.',
                                    '12': 'ธ.ค.'
                                },
                                'wide': {
                                    '1': 'มกราคม',
                                    '2': 'กุมภาพันธ์',
                                    '3': 'มีนาคม',
                                    '4': 'เมษายน',
                                    '5': 'พฤษภาคม',
                                    '6': 'มิถุนายน',
                                    '7': 'กรกฎาคม',
                                    '8': 'สิงหาคม',
                                    '9': 'กันยายน',
                                    '10': 'ตุลาคม',
                                    '11': 'พฤศจิกายน',
                                    '12': 'ธันวาคม'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'ม.ค.',
                                    '2': 'ก.พ.',
                                    '3': 'มี.ค.',
                                    '4': 'เม.ย.',
                                    '5': 'พ.ค.',
                                    '6': 'มิ.ย.',
                                    '7': 'ก.ค.',
                                    '8': 'ส.ค.',
                                    '9': 'ก.ย.',
                                    '10': 'ต.ค.',
                                    '11': 'พ.ย.',
                                    '12': 'ธ.ค.'
                                },
                                'narrow': {
                                    '1': 'ม.ค.',
                                    '2': 'ก.พ.',
                                    '3': 'มี.ค.',
                                    '4': 'เม.ย.',
                                    '5': 'พ.ค.',
                                    '6': 'มิ.ย.',
                                    '7': 'ก.ค.',
                                    '8': 'ส.ค.',
                                    '9': 'ก.ย.',
                                    '10': 'ต.ค.',
                                    '11': 'พ.ย.',
                                    '12': 'ธ.ค.'
                                },
                                'wide': {
                                    '1': 'มกราคม',
                                    '2': 'กุมภาพันธ์',
                                    '3': 'มีนาคม',
                                    '4': 'เมษายน',
                                    '5': 'พฤษภาคม',
                                    '6': 'มิถุนายน',
                                    '7': 'กรกฎาคม',
                                    '8': 'สิงหาคม',
                                    '9': 'กันยายน',
                                    '10': 'ตุลาคม',
                                    '11': 'พฤศจิกายน',
                                    '12': 'ธันวาคม'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'อา.',
                                    'mon': 'จ.',
                                    'tue': 'อ.',
                                    'wed': 'พ.',
                                    'thu': 'พฤ.',
                                    'fri': 'ศ.',
                                    'sat': 'ส.'
                                },
                                'narrow': {
                                    'sun': 'อา',
                                    'mon': 'จ',
                                    'tue': 'อ',
                                    'wed': 'พ',
                                    'thu': 'พฤ',
                                    'fri': 'ศ',
                                    'sat': 'ส'
                                },
                                'short': {
                                    'sun': 'อา.',
                                    'mon': 'จ.',
                                    'tue': 'อ.',
                                    'wed': 'พ.',
                                    'thu': 'พฤ.',
                                    'fri': 'ศ.',
                                    'sat': 'ส.'
                                },
                                'wide': {
                                    'sun': 'วันอาทิตย์',
                                    'mon': 'วันจันทร์',
                                    'tue': 'วันอังคาร',
                                    'wed': 'วันพุธ',
                                    'thu': 'วันพฤหัสบดี',
                                    'fri': 'วันศุกร์',
                                    'sat': 'วันเสาร์'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'อา.',
                                    'mon': 'จ.',
                                    'tue': 'อ.',
                                    'wed': 'พ.',
                                    'thu': 'พฤ.',
                                    'fri': 'ศ.',
                                    'sat': 'ส.'
                                },
                                'narrow': {
                                    'sun': 'อา',
                                    'mon': 'จ',
                                    'tue': 'อ',
                                    'wed': 'พ',
                                    'thu': 'พฤ',
                                    'fri': 'ศ',
                                    'sat': 'ส'
                                },
                                'short': {
                                    'sun': 'อา.',
                                    'mon': 'จ.',
                                    'tue': 'อ.',
                                    'wed': 'พ.',
                                    'thu': 'พฤ.',
                                    'fri': 'ศ.',
                                    'sat': 'ส.'
                                },
                                'wide': {
                                    'sun': 'วันอาทิตย์',
                                    'mon': 'วันจันทร์',
                                    'tue': 'วันอังคาร',
                                    'wed': 'วันพุธ',
                                    'thu': 'วันพฤหัสบดี',
                                    'fri': 'วันศุกร์',
                                    'sat': 'วันเสาร์'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'ไตรมาส 1',
                                    '2': 'ไตรมาส 2',
                                    '3': 'ไตรมาส 3',
                                    '4': 'ไตรมาส 4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'ไตรมาส 1',
                                    '2': 'ไตรมาส 2',
                                    '3': 'ไตรมาส 3',
                                    '4': 'ไตรมาส 4'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'ไตรมาส 1',
                                    '2': 'ไตรมาส 2',
                                    '3': 'ไตรมาส 3',
                                    '4': 'ไตรมาส 4'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'ไตรมาส 1',
                                    '2': 'ไตรมาส 2',
                                    '3': 'ไตรมาส 3',
                                    '4': 'ไตรมาส 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'ก่อนเที่ยง',
                                    'pm': 'หลังเที่ยง'
                                },
                                'narrow': {
                                    'am': 'ก่อนเที่ยง',
                                    'pm': 'หลังเที่ยง'
                                },
                                'wide': {
                                    'am': 'ก่อนเที่ยง',
                                    'pm': 'หลังเที่ยง'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'ก่อนเที่ยง',
                                    'pm': 'หลังเที่ยง'
                                },
                                'narrow': {
                                    'am': 'ก่อนเที่ยง',
                                    'pm': 'หลังเที่ยง'
                                },
                                'wide': {
                                    'am': 'ก่อนเที่ยง',
                                    'pm': 'หลังเที่ยง'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'ปีก่อนคริสต์ศักราช',
                                '1': 'คริสต์ศักราช',
                                '0-alt-variant': 'ก่อนสามัญศักราช',
                                '1-alt-variant': 'สามัญศักราช'
                            },
                            'eraAbbr': {
                                '0': 'ปีก่อน ค.ศ.',
                                '1': 'ค.ศ.',
                                '0-alt-variant': 'ก.ส.ศ.',
                                '1-alt-variant': 'ส.ศ.'
                            },
                            'eraNarrow': {
                                '0': 'ก่อน ค.ศ.',
                                '1': 'ค.ศ.',
                                '0-alt-variant': 'ก.ส.ศ.',
                                '1-alt-variant': 'ส.ศ.'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEEที่ d MMMM G y',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'd/M/yy'
                        },
                        'timeFormats': {
                            'full': 'H นาฬิกา mm นาที ss วินาที zzzz',
                            'long': 'H นาฬิกา mm นาที ss วินาที z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'MMM G y',
                                'GyMMMd': 'd MMM G y',
                                'GyMMMEd': 'E d MMM G y',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'd/M',
                                'MEd': 'E d/M',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E d MMMM',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E d/M/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E d MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd-d'
                                },
                                'h': {
                                    'a': 'h a - h a',
                                    'h': 'h-h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a - h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a - h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'H:mm-H:mm v',
                                    'm': 'H:mm-H:mm v'
                                },
                                'hv': {
                                    'a': 'h a - h a v',
                                    'h': 'h-h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M-M'
                                },
                                'Md': {
                                    'd': 'd/M - d/M',
                                    'M': 'd/M - d/M'
                                },
                                'MEd': {
                                    'd': 'E d - E d/M',
                                    'M': 'E d - E d/M'
                                },
                                'MMM': {
                                    'M': 'LLL-LLL'
                                },
                                'MMMd': {
                                    'd': 'd - d MMM',
                                    'M': 'd MMM - d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E d - E d MMM',
                                    'M': 'E d MMM - E d MMM'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'M/y - M/y',
                                    'y': 'M/y - M/y'
                                },
                                'yMd': {
                                    'd': 'd-d/M/y',
                                    'M': 'd/M/y - d/M/y',
                                    'y': 'd/M/y - d/M/y'
                                },
                                'yMEd': {
                                    'd': 'E d - E d/M/y',
                                    'M': 'E d/M/y - E d/M/y',
                                    'y': 'E d/M/y - E d/M/y'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y - MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd-d MMM y',
                                    'M': 'd MMM - d MMM y',
                                    'y': 'd MMM y - d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E d - E d MMM y',
                                    'M': 'E d MMM - E d MMM y',
                                    'y': 'E d MMM y - E d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM–MMMM y',
                                    'y': 'MMMM y - MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'เวลา{0}',
                    'regionFormat-type-daylight': 'เวลาออมแสง{0}',
                    'regionFormat-type-standard': 'เวลามาตรฐาน{0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language tr}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('tr', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Oca',
                                    '2': 'Şub',
                                    '3': 'Mar',
                                    '4': 'Nis',
                                    '5': 'May',
                                    '6': 'Haz',
                                    '7': 'Tem',
                                    '8': 'Ağu',
                                    '9': 'Eyl',
                                    '10': 'Eki',
                                    '11': 'Kas',
                                    '12': 'Ara'
                                },
                                'narrow': {
                                    '1': 'O',
                                    '2': 'Ş',
                                    '3': 'M',
                                    '4': 'N',
                                    '5': 'M',
                                    '6': 'H',
                                    '7': 'T',
                                    '8': 'A',
                                    '9': 'E',
                                    '10': 'E',
                                    '11': 'K',
                                    '12': 'A'
                                },
                                'wide': {
                                    '1': 'Ocak',
                                    '2': 'Şubat',
                                    '3': 'Mart',
                                    '4': 'Nisan',
                                    '5': 'Mayıs',
                                    '6': 'Haziran',
                                    '7': 'Temmuz',
                                    '8': 'Ağustos',
                                    '9': 'Eylül',
                                    '10': 'Ekim',
                                    '11': 'Kasım',
                                    '12': 'Aralık'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Oca',
                                    '2': 'Şub',
                                    '3': 'Mar',
                                    '4': 'Nis',
                                    '5': 'May',
                                    '6': 'Haz',
                                    '7': 'Tem',
                                    '8': 'Ağu',
                                    '9': 'Eyl',
                                    '10': 'Eki',
                                    '11': 'Kas',
                                    '12': 'Ara'
                                },
                                'narrow': {
                                    '1': 'O',
                                    '2': 'Ş',
                                    '3': 'M',
                                    '4': 'N',
                                    '5': 'M',
                                    '6': 'H',
                                    '7': 'T',
                                    '8': 'A',
                                    '9': 'E',
                                    '10': 'E',
                                    '11': 'K',
                                    '12': 'A'
                                },
                                'wide': {
                                    '1': 'Ocak',
                                    '2': 'Şubat',
                                    '3': 'Mart',
                                    '4': 'Nisan',
                                    '5': 'Mayıs',
                                    '6': 'Haziran',
                                    '7': 'Temmuz',
                                    '8': 'Ağustos',
                                    '9': 'Eylül',
                                    '10': 'Ekim',
                                    '11': 'Kasım',
                                    '12': 'Aralık'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Paz',
                                    'mon': 'Pzt',
                                    'tue': 'Sal',
                                    'wed': 'Çar',
                                    'thu': 'Per',
                                    'fri': 'Cum',
                                    'sat': 'Cmt'
                                },
                                'narrow': {
                                    'sun': 'P',
                                    'mon': 'P',
                                    'tue': 'S',
                                    'wed': 'Ç',
                                    'thu': 'P',
                                    'fri': 'C',
                                    'sat': 'C'
                                },
                                'short': {
                                    'sun': 'Pa',
                                    'mon': 'Pt',
                                    'tue': 'Sa',
                                    'wed': 'Ça',
                                    'thu': 'Pe',
                                    'fri': 'Cu',
                                    'sat': 'Ct'
                                },
                                'wide': {
                                    'sun': 'Pazar',
                                    'mon': 'Pazartesi',
                                    'tue': 'Salı',
                                    'wed': 'Çarşamba',
                                    'thu': 'Perşembe',
                                    'fri': 'Cuma',
                                    'sat': 'Cumartesi'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Paz',
                                    'mon': 'Pzt',
                                    'tue': 'Sal',
                                    'wed': 'Çar',
                                    'thu': 'Per',
                                    'fri': 'Cum',
                                    'sat': 'Cmt'
                                },
                                'narrow': {
                                    'sun': 'P',
                                    'mon': 'P',
                                    'tue': 'S',
                                    'wed': 'Ç',
                                    'thu': 'P',
                                    'fri': 'C',
                                    'sat': 'C'
                                },
                                'short': {
                                    'sun': 'Pa',
                                    'mon': 'Pt',
                                    'tue': 'Sa',
                                    'wed': 'Ça',
                                    'thu': 'Pe',
                                    'fri': 'Cu',
                                    'sat': 'Ct'
                                },
                                'wide': {
                                    'sun': 'Pazar',
                                    'mon': 'Pazartesi',
                                    'tue': 'Salı',
                                    'wed': 'Çarşamba',
                                    'thu': 'Perşembe',
                                    'fri': 'Cuma',
                                    'sat': 'Cumartesi'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Ç1',
                                    '2': 'Ç2',
                                    '3': 'Ç3',
                                    '4': 'Ç4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. çeyrek',
                                    '2': '2. çeyrek',
                                    '3': '3. çeyrek',
                                    '4': '4. çeyrek'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Ç1',
                                    '2': 'Ç2',
                                    '3': 'Ç3',
                                    '4': 'Ç4'
                                },
                                'narrow': {
                                    '1': '1.',
                                    '2': '2.',
                                    '3': '3.',
                                    '4': '4.'
                                },
                                'wide': {
                                    '1': '1. çeyrek',
                                    '2': '2. çeyrek',
                                    '3': '3. çeyrek',
                                    '4': '4. çeyrek'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                },
                                'narrow': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                },
                                'wide': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                },
                                'narrow': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                },
                                'wide': {
                                    'am': 'ÖÖ',
                                    'pm': 'ÖS'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Milattan Önce',
                                '1': 'Milattan Sonra',
                                '0-alt-variant': 'İÖ',
                                '1-alt-variant': 'İS'
                            },
                            'eraAbbr': {
                                '0': 'MÖ',
                                '1': 'MS',
                                '0-alt-variant': 'İÖ',
                                '1-alt-variant': 'İS'
                            },
                            'eraNarrow': {
                                '0': 'MÖ',
                                '1': 'MS',
                                '0-alt-variant': 'İÖ',
                                '1-alt-variant': 'İS'
                            }
                        },
                        'dateFormats': {
                            'full': 'd MMMM y EEEE',
                            'long': 'd MMMM y',
                            'medium': 'd MMM y',
                            'short': 'd.MM.y'
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
                                'd': 'd',
                                'Ed': 'd E',
                                'Ehm': 'E a h:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E a h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y',
                                'GyMMM': 'G MMM y',
                                'GyMMMd': 'G dd MMM y',
                                'GyMMMEd': 'G d MMM y E',
                                'h': 'a h',
                                'H': 'HH',
                                'hm': 'a h:mm',
                                'Hm': 'HH:mm',
                                'hms': 'a h:mm:ss',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'dd/MM',
                                'MEd': 'dd/MM E',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'd MMMM E',
                                'MMMMd': 'dd MMMM',
                                'MMMMEd': 'dd MMMM E',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM/y',
                                'yMd': 'dd.MM.y',
                                'yMEd': 'dd.MM.y E',
                                'yMM': 'MM.y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'dd MMM y',
                                'yMMMEd': 'd MMM y E',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'y/QQQ',
                                'yQQQQ': 'y/QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'a h – a h',
                                    'h': 'a h–h'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'a h:mm – a h:mm',
                                    'h': 'a h:mm–h:mm',
                                    'm': 'a h:mm–h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'a h:mm – a h:mm v',
                                    'h': 'a h:mm–h:mm v',
                                    'm': 'a h:mm–h:mm v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'a h – a h v',
                                    'h': 'a h–h v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'MM–MM'
                                },
                                'Md': {
                                    'd': 'dd/MM – dd/MM',
                                    'M': 'dd/MM – dd/MM'
                                },
                                'MEd': {
                                    'd': 'dd/MM E – dd/MM E',
                                    'M': 'dd/MM E – dd/MM E'
                                },
                                'MMM': {
                                    'M': 'MMM–MMM'
                                },
                                'MMMd': {
                                    'd': 'd – d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'd MMM E – d MMM E',
                                    'M': 'd MMM E – d MMM E'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM/y – MM/y',
                                    'y': 'MM/y – MM/y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y – dd.MM.y',
                                    'M': 'dd.MM.y – dd.MM.y',
                                    'y': 'dd.MM.y – dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'dd.MM.y E – dd.MM.y E',
                                    'M': 'dd.MM.y E – dd.MM.y E',
                                    'y': 'dd.MM.y E – dd.MM.y E'
                                },
                                'yMMM': {
                                    'M': 'MMM–MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM – d MMM y',
                                    'y': 'd MMM y – d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'd MMM y E – d MMM y E',
                                    'M': 'd MMM y E – d MMM y E',
                                    'y': 'd MMM y E – d MMM y E'
                                },
                                'yMMMM': {
                                    'M': 'MMMM – MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} Saati',
                    'regionFormat-type-daylight': '{0} Yaz Saati',
                    'regionFormat-type-standard': '{0} Standart Saati',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language uk}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('uk', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'січ.',
                                    '2': 'лют.',
                                    '3': 'бер.',
                                    '4': 'квіт.',
                                    '5': 'трав.',
                                    '6': 'черв.',
                                    '7': 'лип.',
                                    '8': 'серп.',
                                    '9': 'вер.',
                                    '10': 'жовт.',
                                    '11': 'лист.',
                                    '12': 'груд.'
                                },
                                'narrow': {
                                    '1': 'С',
                                    '2': 'Л',
                                    '3': 'Б',
                                    '4': 'К',
                                    '5': 'Т',
                                    '6': 'Ч',
                                    '7': 'Л',
                                    '8': 'С',
                                    '9': 'В',
                                    '10': 'Ж',
                                    '11': 'Л',
                                    '12': 'Г'
                                },
                                'wide': {
                                    '1': 'січня',
                                    '2': 'лютого',
                                    '3': 'березня',
                                    '4': 'квітня',
                                    '5': 'травня',
                                    '6': 'червня',
                                    '7': 'липня',
                                    '8': 'серпня',
                                    '9': 'вересня',
                                    '10': 'жовтня',
                                    '11': 'листопада',
                                    '12': 'грудня'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Січ',
                                    '2': 'Лют',
                                    '3': 'Бер',
                                    '4': 'Кві',
                                    '5': 'Тра',
                                    '6': 'Чер',
                                    '7': 'Лип',
                                    '8': 'Сер',
                                    '9': 'Вер',
                                    '10': 'Жов',
                                    '11': 'Лис',
                                    '12': 'Гру'
                                },
                                'narrow': {
                                    '1': 'С',
                                    '2': 'Л',
                                    '3': 'Б',
                                    '4': 'К',
                                    '5': 'Т',
                                    '6': 'Ч',
                                    '7': 'Л',
                                    '8': 'С',
                                    '9': 'В',
                                    '10': 'Ж',
                                    '11': 'Л',
                                    '12': 'Г'
                                },
                                'wide': {
                                    '1': 'Січень',
                                    '2': 'Лютий',
                                    '3': 'Березень',
                                    '4': 'Квітень',
                                    '5': 'Травень',
                                    '6': 'Червень',
                                    '7': 'Липень',
                                    '8': 'Серпень',
                                    '9': 'Вересень',
                                    '10': 'Жовтень',
                                    '11': 'Листопад',
                                    '12': 'Грудень'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'Нд',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'narrow': {
                                    'sun': 'Н',
                                    'mon': 'П',
                                    'tue': 'В',
                                    'wed': 'С',
                                    'thu': 'Ч',
                                    'fri': 'П',
                                    'sat': 'С'
                                },
                                'short': {
                                    'sun': 'Нд',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'wide': {
                                    'sun': 'неділя',
                                    'mon': 'понеділок',
                                    'tue': 'вівторок',
                                    'wed': 'середа',
                                    'thu': 'четвер',
                                    'fri': 'пʼятниця',
                                    'sat': 'субота'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'Нд',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'narrow': {
                                    'sun': 'Н',
                                    'mon': 'П',
                                    'tue': 'В',
                                    'wed': 'С',
                                    'thu': 'Ч',
                                    'fri': 'П',
                                    'sat': 'С'
                                },
                                'short': {
                                    'sun': 'Нд',
                                    'mon': 'Пн',
                                    'tue': 'Вт',
                                    'wed': 'Ср',
                                    'thu': 'Чт',
                                    'fri': 'Пт',
                                    'sat': 'Сб'
                                },
                                'wide': {
                                    'sun': 'Неділя',
                                    'mon': 'Понеділок',
                                    'tue': 'Вівторок',
                                    'wed': 'Середа',
                                    'thu': 'Четвер',
                                    'fri': 'Пʼятниця',
                                    'sat': 'Субота'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': 'I кв.',
                                    '2': 'II кв.',
                                    '3': 'III кв.',
                                    '4': 'IV кв.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': 'I квартал',
                                    '2': 'II квартал',
                                    '3': 'III квартал',
                                    '4': 'IV квартал'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1-й кв.',
                                    '2': '2-й кв.',
                                    '3': '3-й кв.',
                                    '4': '4-й кв.'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '1-й квартал',
                                    '2': '2-й квартал',
                                    '3': '3-й квартал',
                                    '4': '4-й квартал'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                },
                                'narrow': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                },
                                'wide': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                },
                                'narrow': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                },
                                'wide': {
                                    'afternoon': 'дня',
                                    'am': 'дп',
                                    'evening': 'вечора',
                                    'morning': 'ранку',
                                    'night': 'ночі',
                                    'pm': 'пп'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'до нашої ери',
                                '1': 'нашої ери',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'до н.е.',
                                '1': 'н.е.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'до н.е.',
                                '1': 'н.е.',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, d MMMM y \'р\'.',
                            'long': 'd MMMM y \'р\'.',
                            'medium': 'd MMM y',
                            'short': 'dd.MM.yy'
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
                                'd': 'd',
                                'Ed': 'E, d',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'LLL y G',
                                'GyMMMd': 'd MMM y G',
                                'GyMMMEd': 'E, d MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'HHmm': 'HH:mm',
                                'HHmmss': 'HH:mm:ss',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'dd.MM',
                                'MEd': 'E, dd.MM',
                                'MMM': 'LLL',
                                'MMMd': 'd MMM',
                                'MMMEd': 'E, d MMM',
                                'MMMMd': 'd MMMM',
                                'MMMMEd': 'E, d MMMM',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'MM.y',
                                'yMd': 'dd.MM.y',
                                'yMEd': 'E, dd.MM.y',
                                'yMMM': 'LLL y',
                                'yMMMd': 'd MMM y',
                                'yMMMEd': 'E, d MMM y',
                                'yMMMM': 'LLLL y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y \'р\'.'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h–h a'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm–h:mm a',
                                    'm': 'h:mm–h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm–h:mm a v',
                                    'm': 'h:mm–h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm v',
                                    'm': 'HH:mm–HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h–h a v'
                                },
                                'Hv': {
                                    'H': 'HH–HH v'
                                },
                                'M': {
                                    'M': 'M–M'
                                },
                                'Md': {
                                    'd': 'dd.MM – dd.MM',
                                    'M': 'dd.MM – dd.MM'
                                },
                                'MEd': {
                                    'd': 'E, dd.MM – E, dd.MM',
                                    'M': 'E, dd.MM – E, dd.MM'
                                },
                                'MMM': {
                                    'M': 'LLL–LLL'
                                },
                                'MMMd': {
                                    'd': 'd–d MMM',
                                    'M': 'd MMM – d MMM'
                                },
                                'MMMEd': {
                                    'd': 'E, d – E, d MMM',
                                    'M': 'E, d MMM – E, d MMM'
                                },
                                'y': {
                                    'y': 'y–y'
                                },
                                'yM': {
                                    'M': 'MM.y – MM.y',
                                    'y': 'MM.y – MM.y'
                                },
                                'yMd': {
                                    'd': 'dd.MM.y – dd.MM.y',
                                    'M': 'dd.MM.y – dd.MM.y',
                                    'y': 'dd.MM.y – dd.MM.y'
                                },
                                'yMEd': {
                                    'd': 'E, dd.MM.y – E, dd.MM.y',
                                    'M': 'E, dd.MM.y – E, dd.MM.y',
                                    'y': 'E, dd.MM.y – E, dd.MM.y'
                                },
                                'yMMM': {
                                    'M': 'LLL–LLL y',
                                    'y': 'LLL y – LLL y'
                                },
                                'yMMMd': {
                                    'd': 'd–d MMM y',
                                    'M': 'd MMM – d MMM y',
                                    'y': 'd MMM y – d MMM y'
                                },
                                'yMMMEd': {
                                    'd': 'E, d – E, d MMM y',
                                    'M': 'E, d MMM – E, d MMM y',
                                    'y': 'E, d MMM y – E, d MMM y'
                                },
                                'yMMMM': {
                                    'M': 'LLLL – LLLL y',
                                    'y': 'LLLL y – LLLL y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Час: {0}',
                    'regionFormat-type-daylight': 'Час: {0}, літній',
                    'regionFormat-type-standard': 'Час: {0}, стандартний',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language vi}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('vi', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'thg 1',
                                    '2': 'thg 2',
                                    '3': 'thg 3',
                                    '4': 'thg 4',
                                    '5': 'thg 5',
                                    '6': 'thg 6',
                                    '7': 'thg 7',
                                    '8': 'thg 8',
                                    '9': 'thg 9',
                                    '10': 'thg 10',
                                    '11': 'thg 11',
                                    '12': 'thg 12'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': 'tháng 1',
                                    '2': 'tháng 2',
                                    '3': 'tháng 3',
                                    '4': 'tháng 4',
                                    '5': 'tháng 5',
                                    '6': 'tháng 6',
                                    '7': 'tháng 7',
                                    '8': 'tháng 8',
                                    '9': 'tháng 9',
                                    '10': 'tháng 10',
                                    '11': 'tháng 11',
                                    '12': 'tháng 12'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Thg 1',
                                    '2': 'Thg 2',
                                    '3': 'Thg 3',
                                    '4': 'Thg 4',
                                    '5': 'Thg 5',
                                    '6': 'Thg 6',
                                    '7': 'Thg 7',
                                    '8': 'Thg 8',
                                    '9': 'Thg 9',
                                    '10': 'Thg 10',
                                    '11': 'Thg 11',
                                    '12': 'Thg 12'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': 'Tháng 1',
                                    '2': 'Tháng 2',
                                    '3': 'Tháng 3',
                                    '4': 'Tháng 4',
                                    '5': 'Tháng 5',
                                    '6': 'Tháng 6',
                                    '7': 'Tháng 7',
                                    '8': 'Tháng 8',
                                    '9': 'Tháng 9',
                                    '10': 'Tháng 10',
                                    '11': 'Tháng 11',
                                    '12': 'Tháng 12'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': 'CN',
                                    'mon': 'Th 2',
                                    'tue': 'Th 3',
                                    'wed': 'Th 4',
                                    'thu': 'Th 5',
                                    'fri': 'Th 6',
                                    'sat': 'Th 7'
                                },
                                'narrow': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'short': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'wide': {
                                    'sun': 'Chủ Nhật',
                                    'mon': 'Thứ Hai',
                                    'tue': 'Thứ Ba',
                                    'wed': 'Thứ Tư',
                                    'thu': 'Thứ Năm',
                                    'fri': 'Thứ Sáu',
                                    'sat': 'Thứ Bảy'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': 'CN',
                                    'mon': 'Th 2',
                                    'tue': 'Th 3',
                                    'wed': 'Th 4',
                                    'thu': 'Th 5',
                                    'fri': 'Th 6',
                                    'sat': 'Th 7'
                                },
                                'narrow': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'short': {
                                    'sun': 'CN',
                                    'mon': 'T2',
                                    'tue': 'T3',
                                    'wed': 'T4',
                                    'thu': 'T5',
                                    'fri': 'T6',
                                    'sat': 'T7'
                                },
                                'wide': {
                                    'sun': 'Chủ Nhật',
                                    'mon': 'Thứ Hai',
                                    'tue': 'Thứ Ba',
                                    'wed': 'Thứ Tư',
                                    'thu': 'Thứ Năm',
                                    'fri': 'Thứ Sáu',
                                    'sat': 'Thứ Bảy'
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
                                    '1': 'Quý 1',
                                    '2': 'Quý 2',
                                    '3': 'Quý 3',
                                    '4': 'Quý 4'
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
                                    '1': 'Quý 1',
                                    '2': 'Quý 2',
                                    '3': 'Quý 3',
                                    '4': 'Quý 4'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'narrow': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'wide': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'narrow': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                },
                                'wide': {
                                    'am': 'SA',
                                    'pm': 'CH'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'tr. CN',
                                '1': 'sau CN',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': 'tr. CN',
                                '1': 'sau CN',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'tr. CN',
                                '1': 'sau CN',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, \'ngày\' dd MMMM \'năm\' y',
                            'long': '\'Ngày\' dd \'tháng\' MM \'năm\' y',
                            'medium': 'dd-MM-y',
                            'short': 'dd/MM/y'
                        },
                        'timeFormats': {
                            'full': 'HH:mm:ss zzzz',
                            'long': 'HH:mm:ss z',
                            'medium': 'HH:mm:ss',
                            'short': 'HH:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{0} {1}',
                            'long': '{0} {1}',
                            'medium': '{0} {1}',
                            'short': '{0} {1}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'E, dd',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': '\'Năm\' y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'dd MMM, y G',
                                'GyMMMEd': 'E, dd MMM y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'H:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'H:mm:ss',
                                'M': 'L',
                                'Md': 'dd-M',
                                'MEd': 'E, dd-M',
                                'MMdd': 'dd-MM',
                                'MMM': 'LLL',
                                'MMMd': 'dd MMM',
                                'MMMEd': 'E, dd MMM',
                                'MMMMd': 'dd MMMM',
                                'MMMMEd': 'E, dd MMMM',
                                'mmss': 'mm:ss',
                                'ms': 'mm:ss',
                                'y': '\'Năm\' y',
                                'yM': 'M/y',
                                'yMd': 'd/M/y',
                                'yMEd': 'E, dd-M-y',
                                'yMM': 'MM-y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'dd MMM, y',
                                'yMMMEd': 'E, dd MMM y',
                                'yMMMM': 'MMMM y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} - {1}',
                                'd': {
                                    'd': '\'Ngày\' dd-dd'
                                },
                                'h': {
                                    'a': 'h\'h\' a - h\'h\' a',
                                    'h': 'h\'h\' - h\'h\' a'
                                },
                                'H': {
                                    'H': 'HH\'h\' - HH\'h\''
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm-h:mm a',
                                    'm': 'h:mm-h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm-HH:mm',
                                    'm': 'HH:mm-HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm-h:mm a v',
                                    'm': 'h:mm-h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm-HH:mm v',
                                    'm': 'HH:mm-HH:mm v'
                                },
                                'hv': {
                                    'a': 'h\'h\' a - h\'h\' a v',
                                    'h': 'h\'h\'-h\'h\' a v'
                                },
                                'Hv': {
                                    'H': 'HH\'h\'-HH\'h\' v'
                                },
                                'M': {
                                    'M': '\'Tháng\' M - \'Tháng\' M'
                                },
                                'Md': {
                                    'd': 'dd/MM - dd/MM',
                                    'M': 'dd/MM - dd/MM'
                                },
                                'MEd': {
                                    'd': 'EEEE, dd/MM - EEEE, dd/MM',
                                    'M': 'EEEE, dd/MM - EEEE, dd/MM'
                                },
                                'MMM': {
                                    'M': 'MMM-MMM'
                                },
                                'MMMd': {
                                    'd': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M',
                                    'M': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M'
                                },
                                'MMMEd': {
                                    'd': 'EEEE, \'ngày\' dd - EEEE, \'ngày\' dd \'tháng\' M',
                                    'M': 'EEEE, \'ngày\' dd \'tháng\' M - EEEE, \'ngày\' dd \'tháng\' M'
                                },
                                'y': {
                                    'y': 'y-y'
                                },
                                'yM': {
                                    'M': 'MM/y - MM/y',
                                    'y': 'MM/y - MM/y'
                                },
                                'yMd': {
                                    'd': 'dd/MM/y - dd/MM/y',
                                    'M': 'dd/MM/y - dd/MM/y',
                                    'y': 'dd/MM/y - dd/MM/y'
                                },
                                'yMEd': {
                                    'd': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                    'M': 'EEEE, dd/MM/y - EEEE, dd/MM/y',
                                    'y': 'EEEE, dd/MM/y - EEEE, dd/MM/y'
                                },
                                'yMMM': {
                                    'M': '\'Tháng\' M - \'Tháng\' M \'năm\' y',
                                    'y': '\'Tháng\' M \'năm\' y - \'Tháng\' M \'năm\' y'
                                },
                                'yMMMd': {
                                    'd': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M \'năm\' y',
                                    'M': '\'Ngày\' dd \'tháng\' M - \'Ngày\' dd \'tháng\' M \'năm\' y',
                                    'y': '\'Ngày\' dd \'tháng\' M \'năm\' y - \'Ngày\' dd \'tháng\' M \'năm\' y'
                                },
                                'yMMMEd': {
                                    'd': 'EEEE, \'ngày\' dd MMM - EEEE, \'ngày\' dd MMM \'năm\' y',
                                    'M': 'E, dd \'tháng\' M - E, dd \'tháng\' M, y',
                                    'y': 'E, dd \'tháng\' M, y - E, dd \'tháng\' M, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM-MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': 'Giờ {0}',
                    'regionFormat-type-daylight': 'Giờ ban ngày {0}',
                    'regionFormat-type-standard': 'Giờ chuẩn {0}',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language zh-Hant}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('zh-Hant', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '週日',
                                    'mon': '週一',
                                    'tue': '週二',
                                    'wed': '週三',
                                    'thu': '週四',
                                    'fri': '週五',
                                    'sat': '週六'
                                },
                                'narrow': {
                                    'sun': '日',
                                    'mon': '一',
                                    'tue': '二',
                                    'wed': '三',
                                    'thu': '四',
                                    'fri': '五',
                                    'sat': '六'
                                },
                                'short': {
                                    'sun': '日',
                                    'mon': '一',
                                    'tue': '二',
                                    'wed': '三',
                                    'thu': '四',
                                    'fri': '五',
                                    'sat': '六'
                                },
                                'wide': {
                                    'sun': '星期日',
                                    'mon': '星期一',
                                    'tue': '星期二',
                                    'wed': '星期三',
                                    'thu': '星期四',
                                    'fri': '星期五',
                                    'sat': '星期六'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '週日',
                                    'mon': '週一',
                                    'tue': '週二',
                                    'wed': '週三',
                                    'thu': '週四',
                                    'fri': '週五',
                                    'sat': '週六'
                                },
                                'narrow': {
                                    'sun': '日',
                                    'mon': '一',
                                    'tue': '二',
                                    'wed': '三',
                                    'thu': '四',
                                    'fri': '五',
                                    'sat': '六'
                                },
                                'short': {
                                    'sun': '日',
                                    'mon': '一',
                                    'tue': '二',
                                    'wed': '三',
                                    'thu': '四',
                                    'fri': '五',
                                    'sat': '六'
                                },
                                'wide': {
                                    'sun': '星期日',
                                    'mon': '星期一',
                                    'tue': '星期二',
                                    'wed': '星期三',
                                    'thu': '星期四',
                                    'fri': '星期五',
                                    'sat': '星期六'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1季',
                                    '2': '2季',
                                    '3': '3季',
                                    '4': '4季'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '第1季',
                                    '2': '第2季',
                                    '3': '第3季',
                                    '4': '第4季'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1季',
                                    '2': '2季',
                                    '3': '3季',
                                    '4': '4季'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '第1季',
                                    '2': '第2季',
                                    '3': '第3季',
                                    '4': '第4季'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'narrow': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'wide': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'narrow': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'wide': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '西元前',
                                '1': '西元',
                                '0-alt-variant': '公元前',
                                '1-alt-variant': '公元'
                            },
                            'eraAbbr': {
                                '0': '西元前',
                                '1': '西元',
                                '0-alt-variant': '公元前',
                                '1-alt-variant': '公元'
                            },
                            'eraNarrow': {
                                '0': '西元前',
                                '1': '西元',
                                '0-alt-variant': '公元前',
                                '1-alt-variant': '公元'
                            }
                        },
                        'dateFormats': {
                            'full': 'y年M月d日EEEE',
                            'long': 'y年M月d日',
                            'medium': 'y年M月d日',
                            'short': 'y/M/d'
                        },
                        'timeFormats': {
                            'full': 'zzzzah時mm分ss秒',
                            'long': 'zah時mm分ss秒',
                            'medium': 'ah:mm:ss',
                            'short': 'ah:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1}{0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd日',
                                'Ed': 'd日（E）',
                                'Ehm': 'E a h:mm',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E a h:mm:ss',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'G y 年',
                                'GyMMM': 'G y 年 M 月',
                                'GyMMMd': 'G y 年 M 月 d 日',
                                'GyMMMEd': 'G y 年 M 月 d 日E',
                                'h': 'ah時',
                                'H': 'H時',
                                'hm': 'ah:mm',
                                'Hm': 'HH:mm',
                                'hms': 'ah:mm:ss',
                                'Hms': 'HH:mm:ss',
                                'M': 'M月',
                                'Md': 'M/d',
                                'MEd': 'M/d（E）',
                                'MMdd': 'MM/dd',
                                'MMM': 'LLL',
                                'MMMd': 'M月d日',
                                'MMMEd': 'M月d日E',
                                'MMMMdd': 'M月dd日',
                                'ms': 'mm:ss',
                                'y': 'y年',
                                'yM': 'y/M',
                                'yMd': 'y/M/d',
                                'yMEd': 'y/M/d（E）',
                                'yMM': 'y-MM',
                                'yMMM': 'y年M月',
                                'yMMMd': 'y年M月d日',
                                'yMMMEd': 'y年M月d日E',
                                'yMMMM': 'y年M月',
                                'yQQQ': 'y年QQQ',
                                'yQQQQ': 'y年QQQQ'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0}至{1}',
                                'd': {
                                    'd': 'd日至d日'
                                },
                                'h': {
                                    'a': 'ah時至ah時',
                                    'h': 'ah時至h時'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'ah:mm至ah:mm',
                                    'h': 'ah:mm至h:mm',
                                    'm': 'ah:mm至h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm至HH:mm'
                                },
                                'hmv': {
                                    'a': 'a h:mm 至a h:mm [v]',
                                    'h': 'a h:mm 至 h:mm [v]',
                                    'm': 'a h:mm 至 h:mm [v]'
                                },
                                'Hmv': {
                                    'H': 'HH:mm–HH:mm [v]',
                                    'm': 'HH:mm–HH:mm [v]'
                                },
                                'hv': {
                                    'a': 'a h 時至a h 時 [v]',
                                    'h': 'a h 時至 h 時 [v]'
                                },
                                'Hv': {
                                    'H': 'HH–HH [v]'
                                },
                                'M': {
                                    'M': 'M月至M月'
                                },
                                'Md': {
                                    'd': 'M/d至M/d',
                                    'M': 'M/d至M/d'
                                },
                                'MEd': {
                                    'd': 'M/dE至M/dE',
                                    'M': 'M/dE至M/dE'
                                },
                                'MMM': {
                                    'M': 'LLL至LLL'
                                },
                                'MMMd': {
                                    'd': 'M月d日至d日',
                                    'M': 'M月d日至M月d日'
                                },
                                'MMMEd': {
                                    'd': 'M月d日E至d日E',
                                    'M': 'M月d日E至M月d日E'
                                },
                                'MMMM': {
                                    'M': 'LLLL至 LLLL'
                                },
                                'y': {
                                    'y': 'y至y'
                                },
                                'yM': {
                                    'M': 'y/M至y/M',
                                    'y': 'y/M至y/M'
                                },
                                'yMd': {
                                    'd': 'y/M/d至y/M/d',
                                    'M': 'y/M/d至y/M/d',
                                    'y': 'y/M/d至y/M/d'
                                },
                                'yMEd': {
                                    'd': 'y/M/dE至y/M/dE',
                                    'M': 'y/M/dE至y/M/dE',
                                    'y': 'y/M/dE至y/M/dE'
                                },
                                'yMMM': {
                                    'M': 'y年M月至M月',
                                    'y': 'y年M月至y年M月'
                                },
                                'yMMMd': {
                                    'd': 'y年M月d日至d日',
                                    'M': 'y年M月d日至M月d日',
                                    'y': 'y年M月d日至y年M月d日'
                                },
                                'yMMMEd': {
                                    'd': 'y年M月d日E至d日E',
                                    'M': 'y年M月d日E至M月d日E',
                                    'y': 'y年M月d日E至y年M月d日E'
                                },
                                'yMMMM': {
                                    'M': 'y年M月至M月',
                                    'y': 'y年M月至y年M月'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}時間',
                    'regionFormat-type-daylight': '{0} (+1)',
                    'regionFormat-type-standard': '{0} (+0)',
                    'fallbackFormat': '{1}（{0}）'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language zh}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9308
 * timeZoneNames: 24r9308
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('zh', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': '一月',
                                    '2': '二月',
                                    '3': '三月',
                                    '4': '四月',
                                    '5': '五月',
                                    '6': '六月',
                                    '7': '七月',
                                    '8': '八月',
                                    '9': '九月',
                                    '10': '十月',
                                    '11': '十一月',
                                    '12': '十二月'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1月',
                                    '2': '2月',
                                    '3': '3月',
                                    '4': '4月',
                                    '5': '5月',
                                    '6': '6月',
                                    '7': '7月',
                                    '8': '8月',
                                    '9': '9月',
                                    '10': '10月',
                                    '11': '11月',
                                    '12': '12月'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4',
                                    '5': '5',
                                    '6': '6',
                                    '7': '7',
                                    '8': '8',
                                    '9': '9',
                                    '10': '10',
                                    '11': '11',
                                    '12': '12'
                                },
                                'wide': {
                                    '1': '一月',
                                    '2': '二月',
                                    '3': '三月',
                                    '4': '四月',
                                    '5': '五月',
                                    '6': '六月',
                                    '7': '七月',
                                    '8': '八月',
                                    '9': '九月',
                                    '10': '十月',
                                    '11': '十一月',
                                    '12': '十二月'
                                }
                            }
                        },
                        'days': {
                            'format': {
                                'abbreviated': {
                                    'sun': '周日',
                                    'mon': '周一',
                                    'tue': '周二',
                                    'wed': '周三',
                                    'thu': '周四',
                                    'fri': '周五',
                                    'sat': '周六'
                                },
                                'narrow': {
                                    'sun': '日',
                                    'mon': '一',
                                    'tue': '二',
                                    'wed': '三',
                                    'thu': '四',
                                    'fri': '五',
                                    'sat': '六'
                                },
                                'short': {
                                    'sun': '周日',
                                    'mon': '周一',
                                    'tue': '周二',
                                    'wed': '周三',
                                    'thu': '周四',
                                    'fri': '周五',
                                    'sat': '周六'
                                },
                                'wide': {
                                    'sun': '星期日',
                                    'mon': '星期一',
                                    'tue': '星期二',
                                    'wed': '星期三',
                                    'thu': '星期四',
                                    'fri': '星期五',
                                    'sat': '星期六'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'sun': '周日',
                                    'mon': '周一',
                                    'tue': '周二',
                                    'wed': '周三',
                                    'thu': '周四',
                                    'fri': '周五',
                                    'sat': '周六'
                                },
                                'narrow': {
                                    'sun': '日',
                                    'mon': '一',
                                    'tue': '二',
                                    'wed': '三',
                                    'thu': '四',
                                    'fri': '五',
                                    'sat': '六'
                                },
                                'short': {
                                    'sun': '周日',
                                    'mon': '周一',
                                    'tue': '周二',
                                    'wed': '周三',
                                    'thu': '周四',
                                    'fri': '周五',
                                    'sat': '周六'
                                },
                                'wide': {
                                    'sun': '星期日',
                                    'mon': '星期一',
                                    'tue': '星期二',
                                    'wed': '星期三',
                                    'thu': '星期四',
                                    'fri': '星期五',
                                    'sat': '星期六'
                                }
                            }
                        },
                        'quarters': {
                            'format': {
                                'abbreviated': {
                                    '1': '1季度',
                                    '2': '2季度',
                                    '3': '3季度',
                                    '4': '4季度'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '第一季度',
                                    '2': '第二季度',
                                    '3': '第三季度',
                                    '4': '第四季度'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': '1季度',
                                    '2': '2季度',
                                    '3': '3季度',
                                    '4': '4季度'
                                },
                                'narrow': {
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '4': '4'
                                },
                                'wide': {
                                    '1': '第一季度',
                                    '2': '第二季度',
                                    '3': '第三季度',
                                    '4': '第四季度'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'narrow': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'wide': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'narrow': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                },
                                'wide': {
                                    'afternoon': '下午',
                                    'am': '上午',
                                    'earlyMorning': '清晨',
                                    'midDay': '中午',
                                    'morning': '上午',
                                    'night': '晚上',
                                    'noon': '中午',
                                    'pm': '下午',
                                    'weeHours': '凌晨'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': '公元前',
                                '1': '公元',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraAbbr': {
                                '0': '公元前',
                                '1': '公元',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': '公元前',
                                '1': '公元',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'y年M月d日EEEE',
                            'long': 'y年M月d日',
                            'medium': 'y年M月d日',
                            'short': 'yy/M/d'
                        },
                        'timeFormats': {
                            'full': 'zzzzah:mm:ss',
                            'long': 'zah:mm:ss',
                            'medium': 'ah:mm:ss',
                            'short': 'ah:mm'
                        },
                        'dateTimeFormats': {
                            'full': '{1} {0}',
                            'long': '{1} {0}',
                            'medium': '{1} {0}',
                            'short': '{1} {0}',
                            'availableFormats': {
                                'd': 'd日',
                                'Ed': 'd日E',
                                'Ehm': 'Eah:mm',
                                'EHm': 'EHH:mm',
                                'Ehms': 'Eah:mm:ss',
                                'EHms': 'EHH:mm:ss',
                                'Gy': 'Gy年',
                                'GyMMM': 'Gy年M月',
                                'GyMMMd': 'Gy年M月d日',
                                'GyMMMEd': 'Gy年M月d日E',
                                'h': 'ah时',
                                'H': 'H时',
                                'hm': 'ah:mm',
                                'Hm': 'HH:mm',
                                'hms': 'ah:mm:ss',
                                'Hms': 'HH:mm:ss',
                                'M': 'M月',
                                'Md': 'M/d',
                                'MEd': 'M/dE',
                                'MMdd': 'MM/dd',
                                'MMM': 'LLL',
                                'MMMd': 'M月d日',
                                'MMMEd': 'M月d日E',
                                'MMMMdd': 'M月dd日',
                                'ms': 'mm:ss',
                                'y': 'y年',
                                'yM': 'y/M',
                                'yMd': 'y/M/d',
                                'yMEd': 'y/M/dE',
                                'yMM': 'y年M月',
                                'yMMM': 'y年M月',
                                'yMMMd': 'y年M月d日',
                                'yMMMEd': 'y年M月d日E',
                                'yMMMM': 'y年M月',
                                'yQQQ': 'y年第Q季度',
                                'yQQQQ': 'y年第Q季度'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{1} {0}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{1}{0}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{1} {0}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd–d日'
                                },
                                'h': {
                                    'a': 'ah时至ah时',
                                    'h': 'ah时至h时'
                                },
                                'H': {
                                    'H': 'HH–HH'
                                },
                                'hm': {
                                    'a': 'ah:mm至ah:mm',
                                    'h': 'ah:mm至h:mm',
                                    'm': 'ah:mm至h:mm'
                                },
                                'Hm': {
                                    'H': 'HH:mm–HH:mm',
                                    'm': 'HH:mm–HH:mm'
                                },
                                'hmv': {
                                    'a': 'vah:mm至ah:mm',
                                    'h': 'vah:mm至h:mm',
                                    'm': 'vah:mm至h:mm'
                                },
                                'Hmv': {
                                    'H': 'v HH:mm–HH:mm',
                                    'm': 'v HH:mm–HH:mm'
                                },
                                'hv': {
                                    'a': 'vah时至ah时',
                                    'h': 'vah时至h时'
                                },
                                'Hv': {
                                    'H': 'v HH–HH'
                                },
                                'M': {
                                    'M': 'M–M月'
                                },
                                'Md': {
                                    'd': 'M/d – M/d',
                                    'M': 'M/d – M/d'
                                },
                                'MEd': {
                                    'd': 'M/dE至M/dE',
                                    'M': 'M/dE至M/dE'
                                },
                                'MMM': {
                                    'M': 'LLL至LLL'
                                },
                                'MMMd': {
                                    'd': 'M月d日至d日',
                                    'M': 'M月d日至M月d日'
                                },
                                'MMMEd': {
                                    'd': 'M月d日E至d日E',
                                    'M': 'M月d日E至M月d日E'
                                },
                                'y': {
                                    'y': 'y–y年'
                                },
                                'yM': {
                                    'M': 'y年M月至M月',
                                    'y': 'y年M月至y年M月'
                                },
                                'yMd': {
                                    'd': 'y/M/d – y/M/d',
                                    'M': 'y/M/d – y/M/d',
                                    'y': 'y/M/d – y/M/d'
                                },
                                'yMEd': {
                                    'd': 'y/M/dE至y/M/dE',
                                    'M': 'y/M/dE至y/M/dE',
                                    'y': 'y/M/dE至y/M/dE'
                                },
                                'yMMM': {
                                    'M': 'y年M月至M月',
                                    'y': 'y年M月至y年M月'
                                },
                                'yMMMd': {
                                    'd': 'y年M月d日至d日',
                                    'M': 'y年M月d日至M月d日',
                                    'y': 'y年M月d日至y年M月d日'
                                },
                                'yMMMEd': {
                                    'd': 'y年M月d日E至d日E',
                                    'M': 'y年M月d日E至M月d日E',
                                    'y': 'y年M月d日E至y年M月d日E'
                                },
                                'yMMMM': {
                                    'M': 'y年M月至M月',
                                    'y': 'y年M月至y年M月'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0}时间',
                    'regionFormat-type-daylight': '{0}夏令时间',
                    'regionFormat-type-standard': '{0}标准时间',
                    'fallbackFormat': '{1}（{0}）'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));

/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language en}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * ca-gregorian: 24r9287
 * timeZoneNames: 24r9287
 * </pre>
 */

/*
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

(function (thisContext) {
    /*jshint -W100 */
    'use strict';

    if ('object' !== typeof thisContext || null === thisContext) {
        throw new TypeError('Invalid global context');
    }

    function defineLanguage(AstroDate) {
        AstroDate.lang('en', {
            'dates': {
                'calendars': {
                    'gregorian': {
                        'months': {
                            'format': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr',
                                    '5': 'May',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Aug',
                                    '9': 'Sep',
                                    '10': 'Oct',
                                    '11': 'Nov',
                                    '12': 'Dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'January',
                                    '2': 'February',
                                    '3': 'March',
                                    '4': 'April',
                                    '5': 'May',
                                    '6': 'June',
                                    '7': 'July',
                                    '8': 'August',
                                    '9': 'September',
                                    '10': 'October',
                                    '11': 'November',
                                    '12': 'December'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    '1': 'Jan',
                                    '2': 'Feb',
                                    '3': 'Mar',
                                    '4': 'Apr',
                                    '5': 'May',
                                    '6': 'Jun',
                                    '7': 'Jul',
                                    '8': 'Aug',
                                    '9': 'Sep',
                                    '10': 'Oct',
                                    '11': 'Nov',
                                    '12': 'Dec'
                                },
                                'narrow': {
                                    '1': 'J',
                                    '2': 'F',
                                    '3': 'M',
                                    '4': 'A',
                                    '5': 'M',
                                    '6': 'J',
                                    '7': 'J',
                                    '8': 'A',
                                    '9': 'S',
                                    '10': 'O',
                                    '11': 'N',
                                    '12': 'D'
                                },
                                'wide': {
                                    '1': 'January',
                                    '2': 'February',
                                    '3': 'March',
                                    '4': 'April',
                                    '5': 'May',
                                    '6': 'June',
                                    '7': 'July',
                                    '8': 'August',
                                    '9': 'September',
                                    '10': 'October',
                                    '11': 'November',
                                    '12': 'December'
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
                                    'sun': 'Su',
                                    'mon': 'Mo',
                                    'tue': 'Tu',
                                    'wed': 'We',
                                    'thu': 'Th',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'wide': {
                                    'sun': 'Sunday',
                                    'mon': 'Monday',
                                    'tue': 'Tuesday',
                                    'wed': 'Wednesday',
                                    'thu': 'Thursday',
                                    'fri': 'Friday',
                                    'sat': 'Saturday'
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
                                    'sun': 'Su',
                                    'mon': 'Mo',
                                    'tue': 'Tu',
                                    'wed': 'We',
                                    'thu': 'Th',
                                    'fri': 'Fr',
                                    'sat': 'Sa'
                                },
                                'wide': {
                                    'sun': 'Sunday',
                                    'mon': 'Monday',
                                    'tue': 'Tuesday',
                                    'wed': 'Wednesday',
                                    'thu': 'Thursday',
                                    'fri': 'Friday',
                                    'sat': 'Saturday'
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
                                    '1': '1st quarter',
                                    '2': '2nd quarter',
                                    '3': '3rd quarter',
                                    '4': '4th quarter'
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
                                    '1': '1st quarter',
                                    '2': '2nd quarter',
                                    '3': '3rd quarter',
                                    '4': '4th quarter'
                                }
                            }
                        },
                        'dayPeriods': {
                            'format': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'n',
                                    'pm': 'p',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                }
                            },
                            'stand-alone': {
                                'abbreviated': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'narrow': {
                                    'am': 'a',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'n',
                                    'pm': 'p',
                                    'pm-alt-variant': 'p.m.'
                                },
                                'wide': {
                                    'am': 'AM',
                                    'am-alt-variant': 'a.m.',
                                    'noon': 'noon',
                                    'pm': 'PM',
                                    'pm-alt-variant': 'p.m.'
                                }
                            }
                        },
                        'eras': {
                            'eraNames': {
                                '0': 'Before Christ',
                                '1': 'Anno Domini',
                                '0-alt-variant': 'Before Common Era',
                                '1-alt-variant': 'Common Era'
                            },
                            'eraAbbr': {
                                '0': 'BC',
                                '1': 'AD',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            },
                            'eraNarrow': {
                                '0': 'B',
                                '1': 'A',
                                '0-alt-variant': 'BCE',
                                '1-alt-variant': 'CE'
                            }
                        },
                        'dateFormats': {
                            'full': 'EEEE, MMMM d, y',
                            'long': 'MMMM d, y',
                            'medium': 'MMM d, y',
                            'short': 'M/d/yy'
                        },
                        'timeFormats': {
                            'full': 'h:mm:ss a zzzz',
                            'long': 'h:mm:ss a z',
                            'medium': 'h:mm:ss a',
                            'short': 'h:mm a'
                        },
                        'dateTimeFormats': {
                            'full': '{1} \'at\' {0}',
                            'long': '{1} \'at\' {0}',
                            'medium': '{1}, {0}',
                            'short': '{1}, {0}',
                            'availableFormats': {
                                'd': 'd',
                                'Ed': 'd E',
                                'Ehm': 'E h:mm a',
                                'EHm': 'E HH:mm',
                                'Ehms': 'E h:mm:ss a',
                                'EHms': 'E HH:mm:ss',
                                'Gy': 'y G',
                                'GyMMM': 'MMM y G',
                                'GyMMMd': 'MMM d, y G',
                                'GyMMMEd': 'E, MMM d, y G',
                                'h': 'h a',
                                'H': 'HH',
                                'hm': 'h:mm a',
                                'Hm': 'HH:mm',
                                'hms': 'h:mm:ss a',
                                'Hms': 'HH:mm:ss',
                                'M': 'L',
                                'Md': 'M/d',
                                'MEd': 'E, M/d',
                                'MMM': 'LLL',
                                'MMMd': 'MMM d',
                                'MMMEd': 'E, MMM d',
                                'ms': 'mm:ss',
                                'y': 'y',
                                'yM': 'M/y',
                                'yMd': 'M/d/y',
                                'yMEd': 'E, M/d/y',
                                'yMMM': 'MMM y',
                                'yMMMd': 'MMM d, y',
                                'yMMMEd': 'E, MMM d, y',
                                'yQQQ': 'QQQ y',
                                'yQQQQ': 'QQQQ y'
                            },
                            'appendItems': {
                                'Day': '{0} ({2}: {1})',
                                'Day-Of-Week': '{0} {1}',
                                'Era': '{0} {1}',
                                'Hour': '{0} ({2}: {1})',
                                'Minute': '{0} ({2}: {1})',
                                'Month': '{0} ({2}: {1})',
                                'Quarter': '{0} ({2}: {1})',
                                'Second': '{0} ({2}: {1})',
                                'Timezone': '{0} {1}',
                                'Week': '{0} ({2}: {1})',
                                'Year': '{0} {1}'
                            },
                            'intervalFormats': {
                                'intervalFormatFallback': '{0} – {1}',
                                'd': {
                                    'd': 'd – d'
                                },
                                'h': {
                                    'a': 'h a – h a',
                                    'h': 'h – h a'
                                },
                                'H': {
                                    'H': 'HH – HH'
                                },
                                'hm': {
                                    'a': 'h:mm a – h:mm a',
                                    'h': 'h:mm – h:mm a',
                                    'm': 'h:mm – h:mm a'
                                },
                                'Hm': {
                                    'H': 'HH:mm – HH:mm',
                                    'm': 'HH:mm – HH:mm'
                                },
                                'hmv': {
                                    'a': 'h:mm a – h:mm a v',
                                    'h': 'h:mm – h:mm a v',
                                    'm': 'h:mm – h:mm a v'
                                },
                                'Hmv': {
                                    'H': 'HH:mm – HH:mm v',
                                    'm': 'HH:mm – HH:mm v'
                                },
                                'hv': {
                                    'a': 'h a – h a v',
                                    'h': 'h – h a v'
                                },
                                'Hv': {
                                    'H': 'HH – HH v'
                                },
                                'M': {
                                    'M': 'M – M'
                                },
                                'Md': {
                                    'd': 'M/d – M/d',
                                    'M': 'M/d – M/d'
                                },
                                'MEd': {
                                    'd': 'E, M/d – E, M/d',
                                    'M': 'E, M/d – E, M/d'
                                },
                                'MMM': {
                                    'M': 'MMM – MMM'
                                },
                                'MMMd': {
                                    'd': 'MMM d – d',
                                    'M': 'MMM d – MMM d'
                                },
                                'MMMEd': {
                                    'd': 'E, MMM d – E, MMM d',
                                    'M': 'E, MMM d – E, MMM d'
                                },
                                'y': {
                                    'y': 'y – y'
                                },
                                'yM': {
                                    'M': 'M/y – M/y',
                                    'y': 'M/y – M/y'
                                },
                                'yMd': {
                                    'd': 'M/d/y – M/d/y',
                                    'M': 'M/d/y – M/d/y',
                                    'y': 'M/d/y – M/d/y'
                                },
                                'yMEd': {
                                    'd': 'E, M/d/y – E, M/d/y',
                                    'M': 'E, M/d/y – E, M/d/y',
                                    'y': 'E, M/d/y – E, M/d/y'
                                },
                                'yMMM': {
                                    'M': 'MMM – MMM y',
                                    'y': 'MMM y – MMM y'
                                },
                                'yMMMd': {
                                    'd': 'MMM d – d, y',
                                    'M': 'MMM d – MMM d, y',
                                    'y': 'MMM d, y – MMM d, y'
                                },
                                'yMMMEd': {
                                    'd': 'E, MMM d – E, MMM d, y',
                                    'M': 'E, MMM d – E, MMM d, y',
                                    'y': 'E, MMM d, y – E, MMM d, y'
                                },
                                'yMMMM': {
                                    'M': 'MMMM – MMMM y',
                                    'y': 'MMMM y – MMMM y'
                                }
                            }
                        }
                    }
                },
                'timeZoneNames': {
                    'hourFormat': '+HH:mm;-HH:mm',
                    'gmtFormat': 'GMT{0}',
                    'gmtZeroFormat': 'GMT',
                    'regionFormat': '{0} Time',
                    'regionFormat-type-daylight': '{0} Daylight Time',
                    'regionFormat-type-standard': '{0} Standard Time',
                    'fallbackFormat': '{1} ({0})'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineLanguage(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineLanguage);
    } else {
        defineLanguage(thisContext.AstroDate);
    }
}(this));
