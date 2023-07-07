// Function that invokes a callback after a delay of 2 seconds:

function callback(callback) {
    setTimeout(callback, 2000);
}

callback(()=>{
    console.log('Callback invoked after 2 seconds')
});