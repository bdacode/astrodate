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
