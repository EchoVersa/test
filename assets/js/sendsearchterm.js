function sendSearchTerm(term) {
    // create event payload
    var eventPayload = JSON.stringify({
        "eventName": "user_search",
        "searchTerm": term,
        "timestamp": Date.now()
    })
    // set request headers and send
    var xhttp = new XMLHttpRequest()
    xhttp.open("POST", "https://19vojrtb1m.execute-api.eu-central-1.amazonaws.com/jordan-tr-blog-test-function");
    xhttp.send(eventPayload)
}
