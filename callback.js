
function processData(callback) {
  console.log("Processing data...");


  setTimeout(() => {
    const result = "Data processed";

    callback(result);
  }, 2000);
}


function handleResult(result) {
  console.log("Callback executed: ", result);
}


processData(handleResult);

console.log("This message is logged before the callback is executed.");
