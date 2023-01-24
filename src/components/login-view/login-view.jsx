import React from "react";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        //this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();
        const data = {
            access: username,
            secret: password
        };
        fetch("https://myFlix/account/login.json", {
            method: "POST",
            headers: {
                "Content Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Login response: ", data);
                if (dat.user) {
                    onLoggedIn(data.user, data.token);
                } else {
                    alert("no such user");
                }
            })
            .catch((e) => {
                alert("Something went wrong")
            });


            if (response.ok) {
                onLoggedIn(username);
            } else {
                alert("Login failed");
            }
        };




        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }