import {Link} from 'react-router-dom';
import {useRef} from 'react';

export default function Login() {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (ev) => {
        ev.preventDefault();
    };

    return (
        <>
            <div className="auth-header">
                <h1>Sign in to your account</h1>
                <p>
                    Manage users, dashboard data, and account settings from one
                    place.
                </p>
            </div>

            <form onSubmit={onSubmit}>
                <label>
                    Username
                    <input ref={usernameRef} name="username" placeholder="Enter your username" />
                </label>

                <label>
                    Password
                    <input
                        ref={passwordRef}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                    />
                </label>

                <button className="btn btn-block">Login</button>

                <p className="message">
                    Not registered? <Link to="/signup">Create an account</Link>
                </p>
            </form>
        </>
    );
}
