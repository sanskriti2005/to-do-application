import * as main from "./main.js"
import { url } from "./baseUrl.js"

async function main1() {
    // catching the basics
    const form = document.querySelector("#form");
    // fetching the data from the endpoint
    let data = await main.getData(url);
    console.log(data)
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        let email = form.email.value
        let password = form.password.value

        let tempUserObj = { email, password }
        console.log(tempUserObj);

        // check if the person logging in exists in our database
        let foundObj = await main.checkIfDataAlreadyExists(data, tempUserObj);
        console.log(foundObj);

        // then do the signup after checking
        await main.login(foundObj, tempUserObj)


    }) 
}
main1()