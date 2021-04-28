"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var RecordTracker = /** @class */ (function () {
    function RecordTracker(recordMap) {
        this.recordMap = recordMap;
    }
    RecordTracker.prototype.initialize = function () { };
    RecordTracker.prototype.getRecordMap = function () {
        return __assign({}, this.recordMap);
    };
    return RecordTracker;
}());
//=================================================================================================================
//        -------------------Sending "ping" message and "pong" message using callback-------------------
function send(msg) {
    console.log("Sending ping message each after 10 seconds :");
    setInterval(function (x) { return console.log(x); }, 10000, msg);
}
function call(back) {
    console.log("Receiving pong message sing callback function:");
    var replyMessage = "Pong";
    back(replyMessage);
}
call(function (msg) {
    console.log(msg);
    console.log();
});
send("Ping");
// call(replyCallBack);                    //   ------->    another way to call callback function
// function replyCallBack(msg:string){
//     console.log(msg); 
// }
//--------------------------------------------------------------------------------------------------------------------
//         -----------------------Creating client type array for RecordMap------------------------
var client1;
var client2;
client1 = {
    sendMessage: send,
    onMessage: call
};
client2 = {
    sendMessage: send,
    onMessage: call
};
var arr = [client1, client2];
var recordM = {};
recordM = {
    recordName: client1
};
//console.log(arr);
//-----------------------------------------------------------------------------------------------------------------
//                     ---------------------- Creating object of class ------------------------
var obj = new RecordTracker(recordM);
//console.log(obj.getRecordMap());
//----------------------------------------------------------------------------------------------------------------
//                 ------------------ Trying promise with ping and pong message -------------------
var pro = new es6_promise_1.Promise(function (resolve, reject) {
    setInterval(function () { resolve("ping"); }, 10000);
    setTimeout(function () { reject("pong"); }, 2000);
});
pro.then(function (data) {
    ('');
    ('');
});
//===============================================================================================================
