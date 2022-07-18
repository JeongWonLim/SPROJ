'use strict';

const axios = require('axios');
let requestObj = {};

var req = exports = module.exports = {};

req.ohlcvRequest = async function (stkcode, startDay, endday){
    return await axios(
        {
            method : 'post',
            url : '/bldAttendant/getJsonData.cmd',
            baseURL : 'http://data.krx.co.kr/comm',
            headers :{
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest',
            },
            params : {
                bld: 'dbms/MDC/STAT/standard/MDCSTAT01701',
                isuCd: 'KR7005930003',
                strtDd: '20220715',
                endDd: '20220715',
            },
            transformResponse : function(data){
                return JSON.parse(data).output;
            }
        }
    )
}

req.individuellTradingPerpormenceRequest = async function (stkcode, startDay, endday){
    return await axios(
        {
            method : 'post',
            url : '/bldAttendant/getJsonData.cmd',
            baseURL : 'http://data.krx.co.kr/comm',
            headers :{
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest',
            },
            params : {
                bld: 'dbms/MDC/STAT/standard/MDCSTAT02301',
                isuCd: 'KR7005930003',
                strtDd: '20220715',
                endDd: '20220715',
            },
            transformResponse : function(data){
                return JSON.parse(data).output;
            }
        }
    )
}


req.individuellTradingPerpormenceRequest(1,2,3).then(data=>console.log(data.data))