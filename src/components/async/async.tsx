async function sendRequest(saveData:(data:any)=>void, loading:(parameter:boolean)=>void, noResponse:(parameter:boolean)=>void) {
    try {
        const response = await fetch('/hamsters');
        console.log('Response: ', response.ok)
        if (!response.ok) {
            throw Error('Could not fetch data for that resource.');
        }
        const data = await response.json();
        console.log(data);
        saveData(data);
        loading(false);
    }
    catch(error) {
        console.log(error);
        noResponse(true)
        loading(false)
    }
}

export { sendRequest }