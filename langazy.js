module.exports = function(library) {
    let excres = {}, defLang = {},
    check = library({
        doc: {
            guide(Entry) {
                if (Entry) {
                    Entry([
                        '%c/* App => Langazy */',
                        '%cconst %clgzData %c= %clangazy%c(%clib %c=> {',
                        '%c    /* Distinguishes translation data',
                        '       stored as objects */',
                        '%c    lib.%cexc%c(%cexcData%c)',
                        '%c    /* It uses the translation data',
                        '       corresponding to the language code */',
                        '%c    lib.%cuse%c(%clanguageCode%c)',
                        '%c    /* Returning a value of true',
                        '       produces the resulting value */',
                        '    %creturn %ctrue',
                        '%c})',
                        '',
                        '%c/* Langazy.lib.exc */',
                        '%cmodule%c.%cexports%c = %cmod %c=> {',
                        '    mod.%cadd%c(\'%cen%c\', {',
                        '        %cexample%c: \'%cExample%c\'',
                        '    })',
                        '    mod.%cadd%c(%c[%c\'%cno%c\', \'%cda%c\'%c]%c, {',
                        '        %cexample%c: \'%ceksempel%c\'',
                        '    })',
                        '',
                        '%c    /* Include deprecated languages',
                        '     * %creturn %cmod.%call %c',
                        '     * Include only the language you are using */',
                        '    %creturn %cmod.%cavail',
                        '%c}',
                    ].join('\n'),
                        'color: hsl(227, 3%, 46%)', 'color: hsl(283, 34%, 48%)',
                        'color: hsl(283, 55%, 65%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(222, 66%, 67%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(39, 88%, 73%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(227, 3%, 46%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(251, 44%, 63%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(348, 48%, 62%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(227, 3%, 46%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(251, 44%, 63%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(348, 48%, 62%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(227, 3%, 46%)', 'color: hsl(283, 55%, 65%)',
                        'color: hsl(27, 87%, 68%)', 'color: hsl(228, 23%, 89%)',
                        'color: hsl(227, 3%, 46%)', 'color: hsl(350, 51%, 59%)',
                        'color: hsl(350, 56%, 70%)', 'color: hsl(350, 58%, 64%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(39, 88%, 73%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(251, 44%, 63%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(83, 31%, 61%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(348, 48%, 62%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(83, 31%, 61%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(251, 44%, 63%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(215, 88%, 66%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(83, 31%, 61%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(83, 31%, 61%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(215, 88%, 66%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(348, 48%, 62%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(83, 31%, 61%)',
                        'color: hsl(228, 23%, 89%)', 'color: hsl(227, 3%, 46%)',
                        'color: hsl(282, 18%, 36%)', 'color: hsl(221, 11%, 63%)',
                        'color: hsl(220, 21%, 46%)', 'color: hsl(227, 3%, 46%)',
                        'color: hsl(283, 55%, 65%)', 'color: hsl(221, 23%, 89%)',
                        'color: hsl(220, 62%, 62%)', 'color: hsl(221, 23%, 89%)',
                    )
                } else console.warn('using: ["lib"].doc.guide(console.info)')
                return undefined
            },
        },
        exc(module) {
            let codeList = {
                ab: {}, aa: {}, af: {}, ak: {},
                sq: {}, am: {}, ar: {}, an: {},
                hy: {}, as: {}, av: {}, ae: {},
                ay: {}, az: {}, bm: {}, ba: {},
                eu: {}, be: {}, bn: {}, bh: {},
                bi: {}, bs: {}, br: {}, bg: {},
                my: {}, ca: {}, ch: {}, ce: {},
                ny: {}, zh: {}, cv: {}, kw: {},
                co: {}, cr: {}, hr: {}, cs: {},
                da: {}, dv: {}, nl: {}, dz: {},
                en: {}, eo: {}, et: {}, ee: {},
                fo: {}, fj: {}, fi: {}, fr: {},
                ff: {}, gl: {}, ka: {}, de: {},
                el: {}, gn: {}, gu: {}, ht: {},
                ha: {}, he: {}, hz: {}, hi: {},
                ho: {}, hu: {}, ia: {}, id: {},
                ie: {}, ga: {}, ig: {}, ik: {},
                io: {}, is: {}, it: {}, iu: {},
                ja: {}, jv: {}, kl: {}, kn: {},
                kr: {}, ks: {}, kk: {}, km: {},
                ki: {}, rw: {}, ky: {}, kv: {},
                kg: {}, ko: {}, ku: {}, kj: {},
                la: {}, lb: {}, lg: {}, li: {},
                ln: {}, lo: {}, lt: {}, lu: {},
                lv: {}, gv: {}, mk: {}, mg: {},
                ms: {}, ml: {}, mt: {}, mi: {},
                mr: {}, mh: {}, mn: {}, na: {},
                nv: {}, nd: {}, ne: {}, ng: {},
                nb: {}, nn: {}, no: {}, ii: {},
                nr: {}, oc: {}, oj: {}, cu: {},
                om: {}, or: {}, os: {}, pa: {},
                pi: {}, fa: {}, pl: {}, ps: {},
                pt: {}, qu: {}, rm: {}, rn: {},
                ro: {}, ru: {}, sa: {}, sc: {},
                sd: {}, se: {}, sm: {}, sg: {},
                sr: {}, gd: {}, sn: {}, si: {},
                sk: {}, sl: {}, so: {}, st: {},
                es: {}, su: {}, sw: {}, ss: {},
                sv: {}, ta: {}, te: {}, tg: {},
                th: {}, ti: {}, bo: {}, tk: {},
                tl: {}, tn: {}, to: {}, tr: {},
                ts: {}, tt: {}, tw: {}, ty: {},
                ug: {}, uk: {}, ur: {}, uz: {},
                ve: {}, vi: {}, vo: {}, wa: {},
                fy: {}, xh: {}, yi: {}, yo: {},
                za: {}, zu: {},
            }
            excres = module({
                add(code = '', transData) {
                    function addKey(code) {
                        for (let [key, value] of Object.entries(transData)) {
                            if (codeList[code])
                                codeList[code][key] = value
                        }
                    }
                    if (Array.isArray(code)) {
                        let codes = code
                        for (let i = 0; i < codes.length; i++)
                            addKey(codes[i])
                    } else if (typeof code === 'string') addKey(code)
                },
                get all() { return codeList },
                get avail() {
                    var list = {}
                    for (let [code, data] of Object.entries(codeList)) {
                        if (0 < Object.values(data).length)
                            list[code] = codeList[code]
                    }
                    return list
                },
            })
        },
        use(docLang) {
            defLang = excres[docLang]
        },
    })

    if (check == true) return defLang
    return undefined
}
