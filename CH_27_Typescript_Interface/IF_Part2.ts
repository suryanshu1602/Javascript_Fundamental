interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;

}

let response1: APIResponse = {
    body: 'Hi',
};

let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};

console.log("response1:", response1);
console.log("response2:", response2);
console.log("response2 headers:", response2.headers);
console.log("response2 responseTime:", response2.responseTime + "ms");
