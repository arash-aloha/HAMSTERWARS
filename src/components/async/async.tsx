async function sendRequest(saveData:(data:any)=>void, loading:(parameter:boolean)=>void, noResponse:(parameter:boolean)=>void) {
    try {
        const response = await fetch('/hamsters');
        const data = await response.json();
        console.log(data)
        loading(false)
        saveData(data)
    }
    catch {
        console.log("Error: ", Error);
        loading(false)
        noResponse(true)
    }
}

export { sendRequest }