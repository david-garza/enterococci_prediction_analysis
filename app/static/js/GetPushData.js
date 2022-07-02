var curRoot = window.location.href;
var predictURL = `${curRoot}prediction`;
var xhttpReq = new XMLHttpRequest();
  xhttpReq.open("POST", predictURL, true);
  xhttpReq.setRequestHeader('Content-type', 'application/json');
  xhttpReq.onreadystatechange = function () {
    if (xhttpReq.readyState === XMLHttpRequest.DONE) {
      var status = xhttpReq.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        // The request has been completed successfully
        console.log("this is my prediction :: ", xhttpReq.responseText);
        document.getElementById("resultPrediction")
          .innerText = JSON.parse(xhttpReq.responseText).prediction;
      } else {
        alert("WARNING :: REQUEST ERROR !!!");
      }
    }
  };
  xhttpReq.onerror = err => console.log(`Send Request Error:\n${err}`);
  var sendPkg = {
    date_index: 16998,
    station_id: "GAL048"
  };
  xhttpReq.send(JSON.stringify(sendPkg));
  console.log ("===>JSON :: ", JSON.stringify(sendPkg))