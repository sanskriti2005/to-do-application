// Consists of all the main functions needed

// function that fetches data from the endpoint
export async function getData(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch(err){
        alert("Could not fetch data");
        console.log(err);
    }
}

//function that checks if a user already exists in the database
export async function checkIfDataAlreadyExists(arr, userObj) {
    let foundObj = arr.find((ele,i) => ele.email == userObj.email);
    return foundObj;
}

export async function login(foundObj, tempUserObj) {
    if(foundObj){
        if(foundObj.password == tempUserObj.password){
            alert("Login Sucessful!")
            window.location.href = "todo.html"

            // check if data from a previous login is there not not, if it is not present, us add it.
            let loginData = JSON.parse(localStorage.getItem("loginData")) || []
            if(loginData != []){
                localStorage.setItem("loginData", JSON.stringify(foundObj))
            }
        } else {
            alert("Wrong Password! Please try again");
        }
    } else{
        alert("User not found. Please try signing up")
        window.location.href = "signup.html"
    }
}

// [SIGNUP FUNCTION]: Uses post request to save a new user's data in the database
export async function signup(userObj, foundObj ,url) {
    if(foundObj){
        alert("User already exists!")
        window.location.href = "login.html"
    } else {
        // POST the new user's data back to the endpoint
        try{
            const res = await fetch(url, {
                method:"POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify(userObj)
            })
            
            // storing login data in local storage
            let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
            if(loginData != []){
                localStorage.setItem("loginData", JSON.stringify(userObj))
            } 

            // alert the user of a successfull signup and redirected them to the todos page
            alert("Sign-Up Successful!")
            window.location.href = "todo.html"
        }catch(err){
            console.log(err)
            alert("Something went wrong.. Could not Sign-up")
        }
    }
}

export function displayTasks(arr, container){
    arr.forEach((ele, i) => {
        
    })
}