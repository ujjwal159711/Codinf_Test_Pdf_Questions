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
var RecordTracker = /** @class */ (function () {
    function RecordTracker(recordMap) {
        this.recordMap = recordMap;
    }
    RecordTracker.prototype.initialize = function () {
    };
    RecordTracker.prototype.printPingMessage = function () {
        //console.log("Priting ping message each after 10 seconds :");
        setInterval(function (x) { return console.log(x); }, 10000, "Ping");
    };
    RecordTracker.prototype.getRecordMap = function () {
        return __assign({}, this.recordMap);
    };
    return RecordTracker;
}());
//-------------------------------------------------------------------------------------------------
function a1(msg) {
    //console.log("msg");
}
function b1(fn) {
    fn("Hello There...!!!");
}
var ob1;
ob1 = {
    sendMessage: a1,
    onMessage: b1
};
var ob2;
ob2 = {
    recordName: ob1
};
var obj = new RecordTracker(ob2);
//console.log(obj.initialize());
console.log(obj.getRecordMap());
console.log("Printing ping message each after 10 seconds :");
console.log(obj.printPingMessage());
