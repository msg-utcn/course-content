// fetch("https://catfact.ninja/fact").then(response=>response.json()).then(console.log) // fetch implemented out of the box version >= Node 18

import axios from "axios";


// More free apis at https://apipheny.io/free-api/

axios({method: "get", url: "https://catfact.ninja/fact"}).then((response: { data: { fact: string } }) => {
    console.log(response.data.fact);
});
axios({
    method: "get",
    url: "https://myowncatfactapiwhichdoesnotexist.ninja/fact"
}).then((response: { data: { fact: string } }) => {
    console.log(response.data.fact);
}).catch(error => {
    console.error("URL is wrong")
});

// ES6 syntax
async function someAsyncRandomNumberGeneratorFunc(): Promise<number> {
    return 42;
}

async function setup(): Promise<void> {
    const randomNumber = await someAsyncRandomNumberGeneratorFunc();
    console.log(randomNumber);
    const es6PromiseResponse = await axios({method: "get", url: "https://catfact.ninja/fact"});
    console.log(es6PromiseResponse.data.fact);

    try {

        const es6PromiseResponse = await axios({
            method: "get",
            url: "https://myowncatfactapiwhichdoesnotexist.ninja/fact"
        });
    } catch (error) {

        console.error("URL is wrong also with newer syntax")
    }
}

setup(); // top-level await in newer JS function




