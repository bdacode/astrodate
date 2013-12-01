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
