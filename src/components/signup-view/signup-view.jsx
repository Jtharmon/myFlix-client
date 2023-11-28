import React, { useState } from "react";

export const SignupView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch("https://http://54.234.239.246:8080/movie-api/movie-api/user", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            //.then(response => response.json())
            .then((response) => {
                console.log(response)
                if (response.status === 201) {
                    alert("Signup successful");
                    window.location.reload();
                } else {
                    alert("Signup failed");
                }
            })
            .catch((error) => {
                console.log("Signup failed:", error);
                alert("Signup failed");
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username-input">Username:
                Username:
                <input
                    id="username-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Birthday:
                <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            </label>
            <button type="submit">SignUp Submit</button>
        </form>
    );
};
