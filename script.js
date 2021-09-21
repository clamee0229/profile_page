var todd = document.querySelector("#todd");
var connectionRequests = document.querySelector("#connection-requests")
var connections = document.querySelector("#connections-total")
var connectionRequestsNum = 2
connectionRequests.innerText = connectionRequestsNum
var connectionsNum = 501
connections.innerText = connectionsNum


function disappearTodd(){
    todd.remove()
    connectionRequestsNum--;
    connectionRequests.innerText = connectionRequestsNum;
}

var phil = document.querySelector("#phil")

function disappearPhil(){
    connectionRequestsNum--;
    connectionRequests.innerText = connectionRequestsNum;
    phil.remove()
}

function connectionsUp(){
    connectionsNum++
    connections.innerText = connectionsNum
}

function connectionsDown(){
    connectionsNum--
    connections.innerText = connectionsNum
}