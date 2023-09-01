const STATUS = {
    INITIALIZING: 0,
    IDLE: 1,
    CLAIMING: 2
};

const K = Object.freeze({
    WebType: {
        UNDEFINED: 0,
        CRYPTOSFAUCETS: 1,
        STORMGAIN: 2,
        FREEBITCOIN: 3,
        FAUCETPAY: 4,
        FREELITECOIN: 5,
        FREEETHEREUMIO: 6,
        BAGIKERAN: 7,
        OKFAUCET: 8,
        BIGBTC: 9,
        BESTCHANGE: 10,
        KINGBIZ: 11,
        BFBOX: 13,
        FREEDOGEIO: 14,
        DUTCHYROLL: 15,
        FCRYPTO: 16,
        CPU: 17,
        CBG: 18,
        FPB: 19,
        G8: 20,
        FREEGRC: 21,
        HELI: 22,
        VIE: 23,
        O24: 24,
        YCOIN: 25,
        CDIVERSITY: 26,
        BSCADS: 27,
        CTOP: 28,
        AUTOCML: 29,
        CCLICKS: 30
    },
    CF: {
        UrlType: {
            HOME: 0,
            FREE: 1,
            CONTACTTWITTER: 2,
            PROMOTION: 3,
            STATS: 4,
            SETTINGS: 5,
            FREEROLLS: 6,
            IGNORE: 99
        },
        PromoStatus: {
            NOCODE: 0,
            PENDING: 1,
            ACCEPTED: 2,
            USEDBEFORE: 3,
            INVALID: 4,
            UNKNOWNERROR: 5,
            EXPIRED: 6
        },
        // ReusableCodeSuggestions: ['q5rlm6ot3r', 'ykxlvmg9ja', 'ki2r0jq5r0', '4obq1i3idd']
    },
    RandomInteractionLevel: {
        NONE: 0,
        LOW: 1,
        MEDIUM: 2,
        HIGH: 3
    },
    Integers: {
        HS_26_IN_MILLISECONDS: 93600000, //Using 26 hs instead of 24hs
        HS_2_IN_MILLISECONDS: 7200000 //and 2hs gap retry when code is flagged as USEDBEFORE
    },
    WalletType: {
        FP_USERNAME: 99,
        FP_MAIL: 100,
        FP_BTC: 101,
        FP_BNB: 102,
        FP_BCH: 103,
        FP_DASH: 104,
        FP_DGB: 105,
        FP_DOGE: 106,
        FP_ETH: 107,
        FP_FEY: 108,
        FP_LTC: 109,
        FP_TRX: 110,
        FP_USDT: 111,
        FP_ZEC: 112,
        FP_SOL: 113,
        FP_MATIC: 114,
        FP_XRP: 115,
        FP_ADA: 116,
        EC: 200,
        BTC: 1,
        LTC: 2
    },
    ErrorType: {
        ERROR: 0,
        TIMEOUT: 1,
        NEED_TO_LOGIN: 2,
        ROLL_ERROR: 3,
        CLICK_ROLL_ERROR: 4,
        LOGIN_ERROR: 5,
        CLAIM_ERROR: 6,
        ADDRESS_ERROR: 7,
        MIN_WITHDRAW_ERROR: 8,
        IP_BAN: 9,
        IP_RESTRICTED: 10,
        IP_ERROR: 11,
        FORCE_CLOSED: 12,
        NO_FUNDS: 13,
        VERIFY_EMAIL: 14,
        NO_ADDRESS: 15,
        FAUCET_EMPTY: 16
    },
    CMC: {
        MULT: '-1',
        BTC: '1',
        LTC: '2',
        XRP: '52',
        DOGE: '74',
        DGB: '109',
        DASH: '131',
        USDT: '825',
        XEM: '873',
        ETH: '1027',
        STEEM: '1230',
        NEO: '1376',
        ZEC: '1437',
        BCH: '1831',
        BNB: '1839',
        TRX: '1958',
        LINK: '1975',
        ADA: '2010',
        USDC: '3408',
        SOL: '5426',
        SHIB: '5994',
        FEY: '10361',
        BFG: '11038',
        CAKE: '7186',
        GRC: '833',
        MATIC: '3890',
        BABY: '10334',
        BTT: '16086',
        BSW: '10746',
    },
    LOCATION: {
        UNKNOWN: 0,
        MANAGER: 1,
        SITE: 2
    }
});
