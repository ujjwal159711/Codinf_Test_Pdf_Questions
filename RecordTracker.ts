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
        console.log('Sending ping message to all clients in 10 seconds');
        setInterval(() => {this.asynchornousFunction();}, 10000);
    }

    private async asynchornousFunction(){
        var clientName:string = "";
        for (let [key,value] of Object.entries(this.recordMap)) {
            this.recordMap[key].sendMessage('ping');
            clientName = key;
            await this.promiseFunction(this.recordMap[key],clientName);
        }
    }

    private promiseFunction(client:Client,clientName:string):Promise<any>{
        return new Promise((resolve,reject)  => {
            resolve(false)
            const callbackCall = (msg:string) :void => {
                if(msg === 'pong'){
                    setTimeout(() => {console.log(msg);},3000);
                    resolve(true)
                }
                else{
                    reject(setTimeout(()=>{this.deleteRecordFromMap(clientName)},3000))
                }
            }
            client.onMessage(callbackCall);
        });
    }

    private deleteRecordFromMap(responseValue:string){
        delete this.recordMap[responseValue];
        console.log(responseValue + " is not active");
    }

    public getRecordMap(): RecordMap {
        return {...this.recordMap};
    }
}



const record1:RecordMap = {
    
    'clientA' : {
        sendMessage : (msg:string) => {
            console.log(msg);
        },
        onMessage : (callback:(msg:string) => void) => {
            callback('pong');
        }
    },

    'clientB' : {
        sendMessage : (msg:string) => {
            console.log(msg);
        },
        onMessage : (callback:(msg:string) => void) => {
            callback(undefined);
        }
    },

    'clientC' : {
        sendMessage : (msg:string) => {
            console.log(msg);
        },
        onMessage : (callback:(msg:string) => void) => {
            callback('pong');
        }
    },

    'clientD' : {
        sendMessage : (msg:string) => {
            console.log(msg);
        },
        onMessage : (callback:(msg:string) => void) => {
            callback('not-active');
        }
    }
}

const obj = new RecordTracker(record1);
console.log(obj.getRecordMap());
obj.initialize();
















