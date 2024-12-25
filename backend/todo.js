import { url } from "./baseUrl.js";
import * as main from "./main.js"

async function main1() {
    // catching the basics
    const form = document.querySelector("#task-form");
    const formDialog = document.querySelector("#task-form-dialog")
    const addTaskBtn = document.querySelector('#add-task-btn')
    const closeBtn = document.querySelector("#close-task-form")

    addTaskBtn.addEventListener("click",()=>{
        formDialog.showModal()
    })
    
    closeBtn.addEventListener("click", ()=>{
        formDialog.close()
    })
    // fetching the data from the endpoint
    let data = await main.getData(url);
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        // get loginData from localStorage
        loginData = JSON.parse(localStorage.getItem("loginData"));
    }) 
}
main1()