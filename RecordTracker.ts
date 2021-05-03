interface Client{
    sendMessage: (message: string) => void;
    onMessage: (callback: (message: string) => void) => void;
}

type RecordMap = {                     
    [recordName: string]: Client
};              

class RecordTracker implements Client{

    constructor (private recordMap: RecordMap) {}

    sendMessage = (msg:string):void =>{
        console.log("Sending ping message each after 10 seconds :");
        setInterval((x:string) => console.log(x), 10000, msg); 
    }
    onMessage = (callback: (message: string) => void): void => {
        console.log("Receiving pong message sing callback function:");
        setTimeout(() => { console.log(('pong')) }, 3000);
    }

    public initialize(cli:Client,timeOut:number): Promise<any> {
        const pro = new Promise((resolve,reject)  => {
            setTimeout(() => resolve('ping'),timeOut)
            
            cli.onMessage = this.onMessage;
            cli.onMessage(()=>{})
            cli.sendMessage;
        });
        return pro;
    }

    async asyncCall(){
        console.log('start');
        var result;
        var k:string = "";
         for (let [key,value] of Object.entries(this.recordMap)) {
            k = key;
            result = await this.initialize(this.recordMap[key],2000);
            console.log(result);
        }
        Promise.reject(delete(this.recordMap[k]));
        console.log('end');
    }

    public getRecordMap(): RecordMap {
        return {...this.recordMap};
    }
}



const r1:RecordMap = {
    'clientA' : {
        sendMessage : (msg:string) => {console.log(msg)},
        onMessage : (callback:(msg:string) => void) => {
            console.log(('pong'));
        }
    },
    'clientB' : {
        sendMessage : (msg:string) => {console.log(msg)},
        onMessage : (callback:(msg:string) => void) => {
            console.log(('pong'));
        }
    },
    'clientC' : {
        sendMessage : (msg:string) => {console.log(msg)},
        onMessage : (callback:(msg:string) => void) => {
            console.log(('pong'));
        }
    },
    'clientD' : {
        sendMessage : (msg:string) => {console.log(msg)},
        onMessage : (callback:(msg:string) => void) => {
            console.log(('pong'));
        }
    }
}

const obj = new RecordTracker(r1);

obj.asyncCall();
console.log(obj.getRecordMap());
obj.onMessage(()=>{console.log()});







