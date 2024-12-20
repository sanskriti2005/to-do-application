function loadNavBar(){
    // catch the navbar div element
    const navbar = document.querySelector("#nav-bar");
    navbar.innerHTML = `<div id="nav">
            <div id="logo">Logo</div>
            <div id="nav-links">
                <div><a href="index.html">Home</a></div>
                <div><a href="signup.html">Sign-Up</a></div>
                <div><a href="login.html">Login</a></div>
                <div><a href="todo.html">To-do</a></div>
            </div>
        </div>`
}
loadNavBar();