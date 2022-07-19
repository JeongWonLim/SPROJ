'use strict';

const axios = require('axios');

var krx = {}
var naver= {};

krx.ohlcvRequest = async function (){
    return await axios(
        {
            method : 'post',
            url : '/bldAttendant/getJsonData.cmd',
            baseURL : 'http://data.krx.co.kr/comm',
            headers :{
                
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

krx.individuellTradingPerpormenceRequest = async function (stkcode, startDay, endday){
    return await axios(
        {
            method : 'post',
            url : '/bldAttendant/getJsonData.cmd',
            baseURL : 'http://data.krx.co.kr/comm',
            headers :{
                
            },
            params : {
                bld: 'dbms/MDC/STAT/standard/MDCSTAT02301',
                isuCd: 'KR7005930003',
                strtDd: '20220715',
                endDd: '20220715',
            },
            
        }
    )
}

naver.dataParser = function(data){
    var toJSON = []
    for(var i = 1; i < data.length; i++){
        toJSON.push({
            'day' : data[i][0],
            'open_price' : data[i][1],
            'high_price' : data[i][2],
            'low_price' : data[i][3],
            'close_price' : data[i][4],
            'volume' : data[i][5],
        })
    }

    return toJSON
}

naver.ohlcvRequest = async function (){
    return await axios(
        {
            method : 'post',
            url : 'https://api.finance.naver.com/siseJson.naver?symbol=KOSPI&requestType=1&startTime=20180303&endTime=20200511&timeframe=day',
            headers :{
                
            },
            params : {
                'symbol': 'KOSPI',
                'requestType': '1',
                'startTime': '20180303',
                'endTime': '20200511',
                'timeframe': 'day',
            },
            transformResponse : function(data){
                return naver.dataParser(eval(data));
            }
        }
    )
}


exports = module.exports = krx;

naver.ohlcvRequest()