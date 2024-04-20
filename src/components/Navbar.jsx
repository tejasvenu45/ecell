import React from "react";

function Navbar() {
    
    const loginOrRegister = () => {
       
        const loginPopup = window.open('', 'Login', 'width=400,height=400');

       
        const popupContent = `
            <div style="text-align: center;">
                <h2>Login/Register</h2>
                <form>
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" name="email"><br><br>
                    <label for="password">Password:</label><br>
                    <input type="password" id="password" name="password"><br><br>
                    <button type="button" onclick="submitLogin()">Login</button>
                    <button type="button" onclick="toggleRegister()">Register</button>
                </form>
                <div id="registerForm" style="display: none;">
                    <h3>Register</h3>
                    <label for="username">Username:</label><br>
                    <input type="text" id="username" name="username"><br><br>
                    <label for="Password">Password:</label><br>
                    <input type="password" id="Password" name="Password"><br><br>
                    <label for="confirmPassword">Confirm Password:</label><br>
                    <input type="password" id="confirmPassword" name="confirmPassword"><br><br>
                    <button type="button" onclick="submitRegister()">Register</button>
                </div>
            </div>
        `;

        
        loginPopup.document.write(popupContent);
        loginPopup.submitLogin = () => {
            const email = loginPopup.document.getElementById('email').value;
            const password = loginPopup.document.getElementById('password').value;
            console.log("Email:", email);
            console.log("Password:", password);
            loginPopup.close();
        };

        
        loginPopup.submitRegister = () => {
            const username = loginPopup.document.getElementById('username').value;
            const email = loginPopup.document.getElementById('email').value;
            const password = loginPopup.document.getElementById('password').value;
            const confirmPassword = loginPopup.document.getElementById('confirmPassword').value;
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
            console.log("Username:", username);
            console.log("Email:", email);
            console.log("Password:", password);
            loginPopup.close();
        };

       
        loginPopup.toggleRegister = () => {
            const registerForm = loginPopup.document.getElementById('registerForm');
            if (registerForm.style.display === 'none') {
                registerForm.style.display = 'block';
            } else {
                registerForm.style.display = 'none';
            }
        };
    };

    return (
        <>
            <div className="flex flex-row items-center justify-left w-full gap-10 bg-gray-400 p-1">
                <div className="flex flex-row items-center justify-left w-full gap-10 bg-gray-400 p-3">
                    <img src='1713525125430.png' className="flex h-12 w-12" alt="Logo"></img>

                    <p><a href="https://pes.edu/" target="_blank" rel="noopener noreferrer" title="PESU Home">Home</a></p>
                    <p>|</p>
                    <p><a href="https://events.pes.edu/" target="_blank" rel="noopener noreferrer" title="PESU Events">Events</a></p>
                    <p>|</p>
                    <p><a href="https://pes.edu/about-us/#:~:text=PES%20University%2C%20located%20in%20Bangalore,to%20find%20their%20true%20north." target="_blank" rel="noopener noreferrer" title="About PESU">About</a></p>
                    <p>|</p>
                    <p><a href="https://research.pes.edu/medical-and-environmental-biotechnology/publications/" target="_blank" rel="noopener noreferrer" title="PESU Articles">Articles</a></p>
                    <p>|</p>
                    <p><a href="https://pes.edu/?s=domains#" target="_blank" rel="noopener noreferrer" title="PESU Domains">Domains</a></p>
                    
                    <p>|</p>
                    <p><a href="https://events.pes.edu/" target="_blank" rel="noopener noreferrer" title="PESU FAQs">Quiz</a></p>
                </div>
                <div className="flex items-center pl-10 p-3 relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-grow pl-5 py-2 rounded-l-2xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        className="py-2 px-4 bg-blue-900 text-white rounded-none hover:bg-blue-600 transition"
                    >
                        Go
                    </button>
                    <button
                        className="py-2 px-9 ml-4 bg-blue-900 text-white rounded-2xl hover:bg-blue-600 transition"
                        onClick={loginOrRegister} // Call loginOrRegister function on button click
                    >
                        Login/Register
                    </button>
                </div>
                <div className="flex flex-row items-center justify-end w-full gap-12 bg-gray-400 p-1">
                    <img src='peslog.png' className="flex h-20 w-30" alt="Logo"></img>
                </div>
            </div>
        </>
    );
}

export default Navbar;

