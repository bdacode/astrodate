/**
 * @ignore
 * @file {@link http://xotic750.github.io/astrodate/ AstroDate Language Supplemental}.
 * @version 0.6.1
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @desc
 * <pre>
 * likelySubtags: 24r9305
 * timeData: 24r9270
 * weekData: 24r9270
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

    function defineSupplement(AstroDate) {
        AstroDate.supplemental({
            'likelySubtags': {
                'aa': 'aa_Latn_ET',
                'ab': 'ab_Cyrl_GE',
                'ace': 'ace_Latn_ID',
                'ady': 'ady_Cyrl_RU',
                'af': 'af_Latn_ZA',
                'agq': 'agq_Latn_CM',
                'ak': 'ak_Latn_GH',
                'alt': 'alt_Cyrl_RU',
                'am': 'am_Ethi_ET',
                'amo': 'amo_Latn_NG',
                'ar': 'ar_Arab_EG',
                'as': 'as_Beng_IN',
                'asa': 'asa_Latn_TZ',
                'ast': 'ast_Latn_ES',
                'av': 'av_Cyrl_RU',
                'awa': 'awa_Deva_IN',
                'ay': 'ay_Latn_BO',
                'az': 'az_Latn_AZ',
                'az_Arab': 'az_Arab_IR',
                'az_IR': 'az_Arab_IR',
                'az_RU': 'az_Cyrl_RU',
                'ba': 'ba_Cyrl_RU',
                'bal': 'bal_Arab_PK',
                'ban': 'ban_Latn_ID',
                'bas': 'bas_Latn_CM',
                'bax': 'bax_Bamu_CM',
                'bbc': 'bbc_Latn_ID',
                'be': 'be_Cyrl_BY',
                'bem': 'bem_Latn_ZM',
                'bez': 'bez_Latn_TZ',
                'bfq': 'bfq_Taml_IN',
                'bft': 'bft_Arab_PK',
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
                'chm': 'chm_Cyrl_RU',
                'chp': 'chp_Latn_CA',
                'chr': 'chr_Cher_US',
                'cja': 'cja_Arab_KH',
                'cjm': 'cjm_Cham_VN',
                'ckb': 'ckb_Arab_IQ',
                'co': 'co_Latn_FR',
                'cr': 'cr_Cans_CA',
                'crk': 'crk_Cans_CA',
                'cs': 'cs_Latn_CZ',
                'csb': 'csb_Latn_PL',
                'cv': 'cv_Cyrl_RU',
                'cy': 'cy_Latn_GB',
                'da': 'da_Latn_DK',
                'dar': 'dar_Cyrl_RU',
                'dav': 'dav_Latn_KE',
                'de': 'de_Latn_DE',
                'den': 'den_Latn_CA',
                'dgr': 'dgr_Latn_CA',
                'dje': 'dje_Latn_NE',
                'doi': 'doi_Arab_IN',
                'dsb': 'dsb_Latn_DE',
                'dua': 'dua_Latn_CM',
                'dv': 'dv_Thaa_MV',
                'dyo': 'dyo_Latn_SN',
                'dyu': 'dyu_Latn_BF',
                'dz': 'dz_Tibt_BT',
                'ebu': 'ebu_Latn_KE',
                'ee': 'ee_Latn_GH',
                'efi': 'efi_Latn_NG',
                'el': 'el_Grek_GR',
                'en': 'en_Latn_US',
                'eo': 'eo_Latn_001',
                'es': 'es_Latn_ES',
                'et': 'et_Latn_EE',
                'eu': 'eu_Latn_ES',
                'ewo': 'ewo_Latn_CM',
                'fa': 'fa_Arab_IR',
                'fan': 'fan_Latn_GQ',
                'ff': 'ff_Latn_SN',
                'fi': 'fi_Latn_FI',
                'fil': 'fil_Latn_PH',
                'fj': 'fj_Latn_FJ',
                'fo': 'fo_Latn_FO',
                'fon': 'fon_Latn_BJ',
                'fr': 'fr_Latn_FR',
                'fur': 'fur_Latn_IT',
                'fy': 'fy_Latn_NL',
                'ga': 'ga_Latn_IE',
                'gaa': 'gaa_Latn_GH',
                'gag': 'gag_Latn_MD',
                'gbm': 'gbm_Deva_IN',
                'gcr': 'gcr_Latn_GF',
                'gd': 'gd_Latn_GB',
                'gez': 'gez_Ethi_ET',
                'gil': 'gil_Latn_KI',
                'gl': 'gl_Latn_ES',
                'gn': 'gn_Latn_PY',
                'gon': 'gon_Telu_IN',
                'gor': 'gor_Latn_ID',
                'grt': 'grt_Beng_IN',
                'gsw': 'gsw_Latn_CH',
                'gu': 'gu_Gujr_IN',
                'guz': 'guz_Latn_KE',
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
                'swc': 'swc_Latn_CD',
                'syl': 'syl_Beng_BD',
                'syr': 'syr_Syrc_IQ',
                'ta': 'ta_Taml_IN',
                'tbw': 'tbw_Latn_PH',
                'tcy': 'tcy_Knda_IN',
                'tdd': 'tdd_Tale_CN',
                'te': 'te_Telu_IN',
                'tem': 'tem_Latn_SL',
                'teo': 'teo_Latn_UG',
                'tet': 'tet_Latn_TL',
                'tg': 'tg_Cyrl_TJ',
                'tg_Arab': 'tg_Arab_PK',
                'tg_PK': 'tg_Arab_PK',
                'th': 'th_Thai_TH',
                'ti': 'ti_Ethi_ET',
                'tig': 'tig_Ethi_ER',
                'tiv': 'tiv_Latn_NG',
                'tk': 'tk_Latn_TM',
                'tkl': 'tkl_Latn_TK',
                'tl': 'tl_Latn_PH',
                'tmh': 'tmh_Latn_NE',
                'tn': 'tn_Latn_ZA',
                'to': 'to_Latn_TO',
                'tpi': 'tpi_Latn_PG',
                'tr': 'tr_Latn_TR',
                'trv': 'trv_Latn_TW',
                'ts': 'ts_Latn_ZA',
                'tsg': 'tsg_Latn_PH',
                'tt': 'tt_Cyrl_RU',
                'tts': 'tts_Thai_TH',
                'tum': 'tum_Latn_MW',
                'tvl': 'tvl_Latn_TV',
                'twq': 'twq_Latn_NE',
                'ty': 'ty_Latn_PF',
                'tyv': 'tyv_Cyrl_RU',
                'tzm': 'tzm_Latn_MA',
                'udm': 'udm_Cyrl_RU',
                'ug': 'ug_Arab_CN',
                'ug_Cyrl': 'ug_Cyrl_KZ',
                'ug_KZ': 'ug_Cyrl_KZ',
                'ug_MN': 'ug_Cyrl_MN',
                'uk': 'uk_Cyrl_UA',
                'uli': 'uli_Latn_FM',
                'umb': 'umb_Latn_AO',
                'und': 'en_Latn_US',
                'und_AD': 'ca_Latn_AD',
                'und_AE': 'ar_Arab_AE',
                'und_AF': 'fa_Arab_AF',
                'und_AL': 'sq_Latn_AL',
                'und_AM': 'hy_Armn_AM',
                'und_AO': 'pt_Latn_AO',
                'und_AQ': 'und_Latn_AQ',
                'und_AR': 'es_Latn_AR',
                'und_Arab': 'ar_Arab_EG',
                'und_Arab_CC': 'ms_Arab_CC',
                'und_Arab_CN': 'ug_Arab_CN',
                'und_Arab_GB': 'ks_Arab_GB',
                'und_Arab_ID': 'ms_Arab_ID',
                'und_Arab_IN': 'ur_Arab_IN',
                'und_Arab_KH': 'cja_Arab_KH',
                'und_Arab_MN': 'kk_Arab_MN',
                'und_Arab_MU': 'ur_Arab_MU',
                'und_Arab_NG': 'ha_Arab_NG',
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
                'und_BT': 'dz_Tibt_BT',
                'und_Bugi': 'bug_Bugi_ID',
                'und_Buhd': 'bku_Buhd_PH',
                'und_BV': 'und_Latn_BV',
                'und_BY': 'be_Cyrl_BY',
                'und_Cakm': 'ccp_Cakm_BD',
                'und_Cans': 'cr_Cans_CA',
                'und_Cari': 'xcr_Cari_TR',
                'und_CD': 'sw_Latn_CD',
                'und_CF': 'fr_Latn_CF',
                'und_CG': 'fr_Latn_CG',
                'und_CH': 'de_Latn_CH',
                'und_Cham': 'cjm_Cham_VN',
                'und_Cher': 'chr_Cher_US',
                'und_CI': 'fr_Latn_CI',
                'und_CL': 'es_Latn_CL',
                'und_CM': 'fr_Latn_CM',
                'und_CN': 'zh_Hans_CN',
                'und_CO': 'es_Latn_CO',
                'und_Copt': 'cop_Copt_EG',
                'und_CP': 'und_Latn_CP',
                'und_Cprt': 'grc_Cprt_CY',
                'und_CR': 'es_Latn_CR',
                'und_CU': 'es_Latn_CU',
                'und_CV': 'pt_Latn_CV',
                'und_CW': 'pap_Latn_CW',
                'und_CY': 'el_Grek_CY',
                'und_Cyrl': 'ru_Cyrl_RU',
                'und_Cyrl_AL': 'mk_Cyrl_AL',
                'und_Cyrl_BA': 'sr_Cyrl_BA',
                'und_Cyrl_GE': 'ab_Cyrl_GE',
                'und_Cyrl_GR': 'mk_Cyrl_GR',
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
                'war': 'war_Latn_PH',
                'wo': 'wo_Latn_SN',
                'xh': 'xh_Latn_ZA',
                'xog': 'xog_Latn_UG',
                'xsr': 'xsr_Deva_NP',
                'yao': 'yao_Latn_MZ',
                'yap': 'yap_Latn_FM',
                'yav': 'yav_Latn_CM',
                'yi': 'yi_Hebr_UA',
                'yo': 'yo_Latn_NG',
                'za': 'za_Latn_CN',
                'zgh': 'zgh_Tfng_MA',
                'zh': 'zh_Hans_CN',
                'zh_AU': 'zh_Hant_AU',
                'zh_BN': 'zh_Hant_BN',
                'zh_GB': 'zh_Hant_GB',
                'zh_GF': 'zh_Hant_GF',
                'zh_Hant': 'zh_Hant_TW',
                'zh_HK': 'zh_Hant_HK',
                'zh_ID': 'zh_Hant_ID',
                'zh_MO': 'zh_Hant_MO',
                'zh_MY': 'zh_Hant_MY',
                'zh_PA': 'zh_Hant_PA',
                'zh_PF': 'zh_Hant_PF',
                'zh_PH': 'zh_Hant_PH',
                'zh_SR': 'zh_Hant_SR',
                'zh_TH': 'zh_Hant_TH',
                'zh_TW': 'zh_Hant_TW',
                'zh_US': 'zh_Hant_US',
                'zh_VN': 'zh_Hant_VN',
                'zu': 'zu_Latn_ZA',
                'zza': 'zza_Arab_TR'
            },
            'timeData': {
                '001': {
                    '_allowed': 'H h',
                    '_preferred': 'H'
                },
                'AD': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'AE': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'AG': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'AL': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'AM': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'AO': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'AS': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'AT': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'AU': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'AW': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'AX': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'BB': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'BD': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'BE': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'BF': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'BH': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'BJ': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'BL': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'BM': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'BN': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'BR': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'BS': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'BT': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'BW': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'CA': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'CD': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'CI': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'CN': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'CO': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'CP': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'CV': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'CY': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'CZ': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'DE': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'DJ': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'DK': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'DM': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'DZ': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'EE': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'EG': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'EH': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'ER': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'ET': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'FI': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'FJ': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'FM': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'FR': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'GA': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'GD': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'GF': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'GH': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'GL': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'GM': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'GN': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'GP': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'GR': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'GU': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'GW': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'GY': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'HK': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'HR': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'IL': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'IN': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'IQ': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'IS': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'IT': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'JM': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'JO': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'JP': {
                    '_allowed': 'H K h',
                    '_preferred': 'H'
                },
                'KH': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'KI': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'KN': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'KP': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'KR': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'KW': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'KY': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'LB': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'LC': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'LR': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'LS': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'LY': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'MA': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'MC': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'MD': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'MF': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'MH': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'ML': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'MO': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'MP': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'MQ': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'MR': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'MW': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'MY': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'MZ': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'NA': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'NC': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'NE': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'NG': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'NL': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'NZ': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'OM': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'PG': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'PK': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'PM': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'PR': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'PS': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'PT': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'PW': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'QA': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'RE': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'RO': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'RU': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'SA': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'SB': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'SD': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'SE': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'SG': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'SI': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'SJ': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'SK': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'SL': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'SM': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'SO': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'SR': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'SS': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'ST': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'SY': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'SZ': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'TC': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'TD': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'TG': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'TN': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'TR': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'TT': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'TW': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'UM': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'US': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'VC': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'VG': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'VI': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'VU': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'WF': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'WS': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'YE': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'YT': {
                    '_allowed': 'H',
                    '_preferred': 'H'
                },
                'ZA': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'ZM': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                },
                'ZW': {
                    '_allowed': 'H h',
                    '_preferred': 'h'
                }
            },
            'weekData': {
                'minDays': {
                    '001': '1',
                    'AD': '4',
                    'AN': '4',
                    'AT': '4',
                    'AX': '4',
                    'BE': '4',
                    'BG': '4',
                    'CH': '4',
                    'CZ': '4',
                    'DE': '4',
                    'DK': '4',
                    'EE': '4',
                    'ES': '4',
                    'FI': '4',
                    'FJ': '4',
                    'FO': '4',
                    'FR': '4',
                    'GB': '4',
                    'GF': '4',
                    'GG': '4',
                    'GI': '4',
                    'GP': '4',
                    'GR': '4',
                    'GU': '1',
                    'HU': '4',
                    'IE': '4',
                    'IM': '4',
                    'IS': '4',
                    'IT': '4',
                    'JE': '4',
                    'LI': '4',
                    'LT': '4',
                    'LU': '4',
                    'MC': '4',
                    'MQ': '4',
                    'NL': '4',
                    'NO': '4',
                    'PL': '4',
                    'PT': '4',
                    'RE': '4',
                    'SE': '4',
                    'SJ': '4',
                    'SK': '4',
                    'SM': '4',
                    'UM': '1',
                    'US': '1',
                    'VA': '4',
                    'VI': '1'
                },
                'firstDay': {
                    '001': 'mon',
                    'AD': 'mon',
                    'AE': 'sat',
                    'AF': 'sat',
                    'AG': 'sun',
                    'AI': 'mon',
                    'AL': 'mon',
                    'AM': 'mon',
                    'AN': 'mon',
                    'AR': 'sun',
                    'AS': 'sun',
                    'AT': 'mon',
                    'AU': 'sun',
                    'AX': 'mon',
                    'AZ': 'mon',
                    'BA': 'mon',
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
                    'GR': 'mon',
                    'GT': 'sun',
                    'GU': 'sun',
                    'HK': 'sun',
                    'HN': 'sun',
                    'HR': 'mon',
                    'HU': 'mon',
                    'ID': 'sun',
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
                    'NI': 'sun',
                    'NL': 'mon',
                    'NO': 'mon',
                    'NP': 'sun',
                    'NZ': 'sun',
                    'OM': 'sat',
                    'PA': 'sun',
                    'PE': 'sun',
                    'PH': 'sun',
                    'PK': 'sun',
                    'PL': 'mon',
                    'PR': 'sun',
                    'PT': 'mon',
                    'PY': 'sun',
                    'QA': 'sat',
                    'RE': 'mon',
                    'RO': 'mon',
                    'RS': 'mon',
                    'RU': 'mon',
                    'SA': 'sun',
                    'SD': 'sat',
                    'SE': 'mon',
                    'SG': 'sun',
                    'SI': 'mon',
                    'SK': 'mon',
                    'SM': 'mon',
                    'SV': 'sun',
                    'SY': 'sat',
                    'TH': 'sun',
                    'TJ': 'mon',
                    'TM': 'mon',
                    'TN': 'sun',
                    'TR': 'mon',
                    'TT': 'sun',
                    'TW': 'sun',
                    'UA': 'mon',
                    'UM': 'sun',
                    'US': 'sun',
                    'UY': 'mon',
                    'UZ': 'mon',
                    'VA': 'mon',
                    'VE': 'sun',
                    'VI': 'sun',
                    'VN': 'mon',
                    'WS': 'sun',
                    'XK': 'mon',
                    'YE': 'sun',
                    'ZA': 'sun',
                    'ZW': 'sun'
                },
                'firstDay-alt-variant': {
                    'GB': 'sun'
                },
                'weekendStart': {
                    '001': 'sat',
                    'AE': 'fri',
                    'AF': 'thu',
                    'BH': 'fri',
                    'DZ': 'thu',
                    'EG': 'fri',
                    'IL': 'fri',
                    'IN': 'sun',
                    'IQ': 'fri',
                    'IR': 'thu',
                    'JO': 'fri',
                    'KW': 'fri',
                    'LY': 'fri',
                    'MA': 'fri',
                    'OM': 'thu',
                    'QA': 'fri',
                    'SA': 'fri',
                    'SD': 'fri',
                    'SY': 'fri',
                    'TN': 'fri',
                    'YE': 'fri'
                },
                'weekendEnd': {
                    '001': 'sun',
                    'AE': 'sat',
                    'AF': 'fri',
                    'BH': 'sat',
                    'DZ': 'fri',
                    'EG': 'sat',
                    'IL': 'sat',
                    'IQ': 'sat',
                    'IR': 'fri',
                    'JO': 'sat',
                    'KW': 'sat',
                    'LY': 'sat',
                    'MA': 'sat',
                    'OM': 'fri',
                    'QA': 'sat',
                    'SA': 'sat',
                    'SD': 'sat',
                    'SY': 'sat',
                    'TN': 'sat',
                    'YE': 'sat'
                }
            }
        }, false);
    }

    /*global module, require, define */
    if ('object' === typeof module && null !== module && 'object' === typeof module.exports && null !== module.exports) {
        defineSupplement(require('astrodate'));
    } else if ('function' === typeof define && 'object' === typeof define.amd && null !== define.amd) {
        define(['astrodate'], defineSupplement);
    } else {
        defineSupplement(thisContext.AstroDate);
    }
}(this));