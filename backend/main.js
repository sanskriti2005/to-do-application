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

// [SIGNUP PAGE]: function that checks if a user already exists in the database and then deals with it accordingly 
export async function checkIfDataAlreadyExists(arr, userObj, url) {
    let foundObj = arr.find((ele,i) => ele.email == userObj.email);
    if(!foundObj){
        alert("User already exists!")
        window.location.href = "login.html"
    } else {
        // POST the new user's data back to the endpoint
        await fetch(url, {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then((promise) => {
            alert("Sign-Up Successful!")
            window.location.href = "todo.html"
        })
        .catch((err) => {
            alert("Something went wrong.. Could not Sign-up")
        })
    }
}