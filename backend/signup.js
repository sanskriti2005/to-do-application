import { url } from "./baseUrl.js";
import * as main from "./main.js"

async function main1() {
    // catching the basics
    const form = document.querySelector("#form");
    // fetching the data from the endpoint
    let data = await main.getData(url);
    console.log(data)
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        let name = form.name.value
        let email = form.email.value
        let password = form.password.value
        let todos = []
        let userObj = { name, email, password, todos }

        main.checkIfDataAlreadyExists(data, userObj);
    })




    
}
main1()