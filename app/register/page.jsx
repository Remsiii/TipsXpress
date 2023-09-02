// import React from 'react'
// import Link from 'next/link';


// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";


// const required = (value) => {
//     if (!value) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This field is required!
//         </div>
//       );
//     }
//   };
  
//   const validEmail = (value) => {
//     if (!isEmail(value)) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           This is not a valid email.
//         </div>
//       );
//     }
//   };
  
//   const vusername = (value) => {
//     if (value.length < 3 || value.length > 20) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           The username must be between 3 and 20 characters.
//         </div>
//       );
//     }
//   };
  
//   const vpassword = (value) => {
//     if (value.length < 6 || value.length > 40) {
//       return (
//         <div className="alert alert-danger" role="alert">
//           The password must be between 6 and 40 characters.
//         </div>
//       );
//     }
//   };


// const RegisterPage = () => {
//     const form = useRef();
//     const checkBtn = useRef();
  
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [successful, setSuccessful] = useState(false);
  
//     const { message } = useSelector(state => state.message);
//     const dispatch = useDispatch();
  
//     const onChangeUsername = (e) => {
//       const username = e.target.value;
//       setUsername(username);
//     };
  
//     const onChangeEmail = (e) => {
//       const email = e.target.value;
//       setEmail(email);
//     };
  
//     const onChangePassword = (e) => {
//       const password = e.target.value;
//       setPassword(password);
//     };
  
//     const handleRegister = (e) => {
//       e.preventDefault();
  
//       setSuccessful(false);
  
//       form.current.validateAll();
  
//       if (checkBtn.current.context._errors.length === 0) {
//         dispatch(register(username, email, password))
//           .then(() => {
//             setSuccessful(true);
//           })
//           .catch(() => {
//             setSuccessful(false);
//           });
//       }
//     };


//   return (
//     <>
// {/* <div className="w-full" style={{ position: 'relative' }}>
//         <div 
//           style={{ 
//             position: 'absolute',
//             top: '-30px',
//             right: '0',
//             bottom: '0',
//             left: '0',
//             backgroundColor: '#cfcfcf', // Setze deine Farbe hier
//             opacity: '0.4',
//             zIndex: '-1'
//           }}
//         ></div> */}
// <div class="min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
//         <main className="w-full flex flex-col items-center justify-center px-4">
//          <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg rounded">
//             <div className="max-w-sm w-full text-gray-600 space-y-5">
//                 <div className="text-center pb-8">
//                     <img src="/assets/images/PETABET_logo.png" width={170} className="mx-auto" />
//                     <div className="">
//                         <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Register your account</h3>
//                     </div>
//                 </div>
//                 <Form onSubmit={handleRegister} ref={form}
//                     // onSubmit={(e) => e.preventDefault()}
//                     className="space-y-5"
//                 >
//                   <div>
//                         <label className="font-medium" htmlFor="username">
//                             Name
//                         </label>
//                         <Input
//                         type="text"
//                         name="username"
//                         value={username}
//                         onChange={onChangeUsername}
//                         validations={[required, vusername]}
//                         className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                         placeholder='Your display name'
//                         />
//                     </div>
//                     <div>
//                         <label className="font-medium" htmlFor="email">
//                             Email
//                         </label>
//                         <Input
//                   type="text"
//                   name="email"
//                   value={email}
//                   onChange={onChangeEmail}
//                   validations={[required, validEmail]}
//                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                         />
//                     </div>
//                     <div>
//                         <label className="font-medium" htmlFor="password">
//                             Password
//                         </label>
//                         <Input
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={onChangePassword}
//                   validations={[required, vpassword]}
//                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                         />
//                     </div>
//                     {/* <div>
//                         <label className="font-medium">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             required
//                             className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
//                         />
//                     </div> */}
//                     <button
//                         className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
//                     >
//                         Sign up
//                     </button>
//                 </Form>
//                 <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
//                     <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <g clip-path="url(#clip0_17_40)">
//                             <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
//                             <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
//                             <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
//                             <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
//                         </g>
//                         <defs>
//                             <clipPath id="clip0_17_40">
//                                 <rect width="48" height="48" fill="white" />
//                             </clipPath>
//                         </defs>
//                     </svg>
//                     Continue with Google
//                 </button>
//                 <p className="text-center">Already registered?  &nbsp;
//                 <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//                  Sign in
//                 </Link>
//                 </p>
//             </div>
//             </div>
//         </main>
//         </div>
// {/* </div> */}
//         </>
//   )
// }

// export default RegisterPage;