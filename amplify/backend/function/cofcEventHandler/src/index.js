exports.handler = async (event) => {
    console.log(event)
    const cofcEventID = event.pathParameters.eventID;
    const cofcEvent = {'eventID': cofcEventID, 'cofcEventName': "CofC Event " + cofcEventID };
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify(cofcEvent),
    };
    return response;
};