interface Client{
    sendMessage: (message: string) => void;
    onMessage: (callback: (message: string) => void) => void;
}

type RecordMap = { [recordName: string]: Client };

class RecordTracker {
    constructor (private recordMap: RecordMap) {}
    public initialize(): void {
    }
    public printPingMessage(): void{
        setInterval((x:string) => console.log(x), 10000, "Ping");
    }
    public getRecordMap(): RecordMap {
        return {...this.recordMap};
    }
}

//-------------------------------------------------------------------------------------------------

function a1(msg:string):void{
    //console.log("msg");
}

function b1(fn:(msg:string)=>void):void{
    fn("Hello There...!!!");
}

let ob1 : Client;

ob1 = {
    sendMessage: a1,
    onMessage: b1
};

let ob2 : RecordMap;
ob2 = {
    recordName : ob1
};

const obj = new RecordTracker(ob2);
//console.log(obj.initialize());
console.log(obj.getRecordMap());
console.log("Printing ping message each after 10 seconds :");
console.log(obj.printPingMessage());
