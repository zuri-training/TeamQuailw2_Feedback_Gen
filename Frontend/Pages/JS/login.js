const login = () => {
    const form = document.getElementById("formlogin");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const user = {
                email: email,
                password: password,
            };

            const API_URL = "https://yellow-antelope-coat.cyclic.app/auth/login";
            const REQUEST_HEADERS = {
                "Content-Type": "application/json",
            };

            axios
                .post(API_URL, user, { headers: REQUEST_HEADERS })
                // Handle a successful response from the server
                .then((response) => {
                    // Getting a data object from response that contains the necessary data from the server
                    const data = response.data;
                    console.log(data);
                    // Save logged in user to localstorage
                    localStorage.setItem("details", JSON.stringify(user));
                    
                    // Redirect to a page after successful login
                })
                // Catch and print errors if any
                .catch((error) => console.error("Login", error));
        });
    }
};
