import {Promise} from 'es6-promise';

interface Client{
    sendMessage: (message: string) => void;
    onMessage: (callback: (message: string) => void) => void;
}

type RecordMap = {                              //it is type of object
    [recordName: string]: Client
};              

class RecordTracker {

    constructor (private recordMap: RecordMap) {}

    public initialize(): void {}

    public getRecordMap(): RecordMap {
        return {...this.recordMap};
    }
}

//=================================================================================================================

//        -------------------Sending "ping" message and "pong" message using callback-------------------

function send(msg:string):void{
    console.log("Sending ping message each after 10 seconds :");
    setInterval((x:string) => console.log(x), 10000, msg); 
}

function call(back:(msg:string)=>void):void {
    console.log("Receiving pong message sing callback function:");
    const replyMessage = "Pong";
    back(replyMessage);
}

call((msg) => {
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

let client1 : Client;
let client2 : Client;
client1 = {
    sendMessage: send,
    onMessage: call
};
client2 = {
    sendMessage: send,
    onMessage: call
};

let arr:Client[]=[client1,client2];
let recordM : RecordMap = {};
recordM = {
    recordName:client1
}
//console.log(arr);


//-----------------------------------------------------------------------------------------------------------------

//                     ---------------------- Creating object of class ------------------------

const obj = new RecordTracker(recordM);
//console.log(obj.getRecordMap());


//----------------------------------------------------------------------------------------------------------------

//                 ------------------ Trying promise with ping and pong message --------------------


const pro :Promise<string> = new Promise((resolve,reject) => {
    setInterval(() => {resolve("ping");}, 10000);
    setTimeout(()=>{ reject("pong"); } ,2000);
});

pro.then(data => {
    ('');
    ('');
});


//===============================================================================================================






