
async function sendRequest(url:string, saveData:(data:any)=>void, loading:(parameter:boolean)=>void, noResponse:(parameter:boolean)=>void) {
    try {
        // const response = await fetch('/hamsters');
        const response = await fetch(url);
        console.log('Response: ', response.ok);
        if (!response.ok) {
            throw Error('Could not fetch data for that resource.');
        }
        const data = await response.json();
        console.log('Retrieved API response');
        saveData(data);
        loading(false);
    }
    catch(error) {
        console.log(error);
        noResponse(true);
        loading(false);
    }
}

async function getCutest(url:string, saveCutest:(data:any)=>void, loading:(parameter:boolean)=>void, noResponse:(parameter:boolean)=>void) {
    try {
        // const response = await fetch('/hamsters');
        const response = await fetch(url);
        console.log('Response for /Cutest: ', response.ok);
        if (!response.ok) {
            throw Error('Could not fetch data for that resource.');
        }
        const data = await response.json();
        console.log('Retrieved API response for /Cutest.', data);
        
        if( data && data.length > 1 ) {
            saveCutest([data[Math.floor(Math.random() * data.length)]])
        } else if (data && data.length === 1) {
            saveCutest([data[0]])
        }
        loading(false);

    }
    catch(error) {
        console.log(error);
        noResponse(true);
        loading(false);
    }
}

export { sendRequest, getCutest }