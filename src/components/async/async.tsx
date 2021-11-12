
async function sendRequest(url:string, saveData:(data:any)=>void, loading:(parameter:boolean)=>void, noResponse:(parameter:boolean)=>void) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error('Could not fetch data for that resource.');
        }
        const data = await response.json();

        saveData(data);
        loading(false);
    }
    catch(error) {
        console.log(error);
        noResponse(true);
        loading(false);
    }
}

async function requestCutest(
    url:string, 
    saveCutest:(data:any)=>void, 
    loading:(parameter:boolean)=>void, 
    noResponse:(parameter:boolean)=>void) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error('Could not fetch data for that resource.');
        }
        const data = await response.json();
        
        if( data && data.length > 1 ){
            saveCutest([data[0]])
        } else if ( data && data.length === 1 ) {
            saveCutest([data[Math.floor(Math.random() * data.length)]])
        }
        // saveCutest(data[0])
        loading(false);
    }
    catch(error) {
        console.log(error);
        noResponse(true);
        loading(false);
    }
}

async function requestTournament( 
    url:string, 
    saveData1:(data:any)=>void,
    saveData2:(data:any)=>void,
    loading:(parameter:boolean)=>void, 
    noResponse:(parameter:boolean)=>void) {
    try {
        const response1 = await fetch(url);
        let response2 = await fetch(url);

        if (!response1.ok || !response2.ok) {
            throw Error('Could not fetch data for that resource.');
        }
        const data1 = await response1.json();
        let data2 = await response2.json();

        if ( data1.id === data2.id ) {
            response2 = await fetch(url);
            data2 = await response1.json();
        }
        saveData1(data1)
        saveData2(data2)
        loading(false);
    }
    catch(error) {
        console.log(error);
        noResponse(true);
        loading(false);
    }
}


export { sendRequest, requestCutest, requestTournament }
