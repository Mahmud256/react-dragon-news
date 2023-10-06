import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/authProvider';
import Navbar from '../Shared/Navbar/Navbar';

// Register component for user registration
const Register = () => {

    // Get the createUser function from the AuthContext
    const { createUser } = useContext(AuthContext);

    // Handle user registration form submission
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        // Get user registration data from the form
        const name = form.get("name"); // name
        const photo = form.get("photo"); // photo
        const email = form.get("email"); // email
        const password = form.get("password"); // password
        console.log(form.get("password"));

        // Create a new user with email and password
        createUser(email, password)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                const errorCode = error.code; // error Code
                const errorMessage = error.message; // error Message
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="p-6">Provident cupiditate voluptatem et in.<br /> Quaerat fugiat ut assumenda excepturi exercitationem quasi.<br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className='text-center'>Already have an account <Link className='text-blue-700' to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
