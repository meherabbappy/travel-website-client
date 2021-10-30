// import React, { useState } from 'react';
// import { useHistory, useLocation } from 'react-router';
// import './Login.css'
// import useAuth from './../../../hooks/useAuth';


// const Login = () => {

//     const { signInUsingGoogle, setUser, error, setError, handleUserRegister,
//         handleUserLogin, } = useAuth()
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");

//     const [isLogin, setIsLogin] = useState(false);



//     const history = useHistory()
//     const location = useLocation()
//     const redirect_url = location.state?.from || '/home'
//     // google login
//     const handleGoogleSignIn = () => {
//         signInUsingGoogle()
//             .then(result => {
//                 setError("");
//                 setUser(result.user)
//                 history.push(redirect_url)
//             })
//     }


//     const toggleLogin = (e) => {
//         setIsLogin(e.target.checked);
//     };
//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };
//     const handleEmailRegistration = (e) => {
//         e.preventDefault();
//         if (password.length < 6) {
//             setError("Password must be 6 characters long.");
//             return;
//         }
//         if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
//             setError("Password must contain 2 upper case");
//             return;
//         }

//         isLogin ? processLogin(email, password) : registerUser(email, password);
//     };
//     const processLogin = (email, password) => {
//         handleUserLogin(email, password)
//         history.push(redirect_url)
//     };
//     const registerUser = (email, password) => {
//         handleUserRegister(email, password)
//         history.push(redirect_url)
//     };




//     return (
//         <div className=" w-50  mx-auto">

//             <div className="text-danger mt-4 fw-bold">Please Login</div>
//             <br />


//             <button className="google-btn" onClick={handleGoogleSignIn}><i className="fab fa-google fs-4 "></i>oogle sign in</button>
//         </div>
//     );
// };

// export default Login;




// import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from './../../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle, setUser, setError } = useAuth()



    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'

    // google login
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setError("");
                setUser(result.user)
                history.push(redirect_url)
            })
    }


    return (
        <div className="mx-auto w-50  p-5">
            <h2>Please Log In</h2>

            <br />


            <button onClick={handleGoogleSignIn} type="button" class="btn btn-light bg-dark text-white">
                <img src="https://img.icons8.com/color/24/000000/google-logo.png" />
                Google Sign In</button>

        </div>
    );
};

export default Login;