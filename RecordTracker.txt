interface Client{
    sendMessage: (message: string) => void;
    onMessage: (callback: (message: string) => void) => void;
}

type RecordMap = {                     
    [recordName: string]: Client
};              

class RecordTracker {

    constructor (private recordMap: RecordMap) {}

    public initialize():void{
        this.asyncCall();
    }

    private fun(c:Client):Promise<any>{
        return new Promise((resolve,reject)  => {
            resolve(c.sendMessage('ping'))
            setTimeout(() => {c.onMessage(callbackCall);},10000)
        });
    }

    private responseCheck(responseValue:any){
        if(responseValue === undefined){
            delete r1['clientA'];
        }
    }

    private async asyncCall(){
        console.log('start');
        var result;
        var k:string = "";
        for (let [key,value] of Object.entries(this.recordMap)) {
            k = key;
            result = await this.fun(this.recordMap[key]);
        }
        //console.log(result);
        console.log('end');
    }

    public getRecordMap(): RecordMap {
        return {...this.recordMap};
    }
}



const r1:RecordMap = {
    'clientA' : {
        sendMessage : (msg:string) => {
            setInterval(() => {console.log(msg);}, 10000);
        },
        onMessage : (callback:(msg:string) => void) => {
            callback('pong');
        }
    },

    'clientB' : {
        sendMessage : (msg:string) => {
            setInterval(() => {console.log(msg);}, 10000);
        },
        onMessage : (callback:(msg:string) => void) => {
            callback('pong');
        }
    },

    'clientC' : {
        sendMessage : (msg:string) => {
            setInterval(() => {console.log(msg);}, 10000);
        },
        onMessage : (callback:(msg:string) => void) => {
            callback('pong');
        }
    },

    'clientD' : {
        sendMessage : (msg:string) => {
            setInterval(() => {console.log(msg);}, 10000);
        },
        onMessage : (callback:(msg:string) => void) => {
            callback(undefined);
        }
    }
}



const callbackCall = (msg:string) :void => {
    setTimeout(()=>{ console.log(msg);}, 3000);
}


const obj = new RecordTracker(r1);

obj.initialize();
//console.log(obj.getRecordMap());












