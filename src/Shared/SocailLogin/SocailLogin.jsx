import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SocailLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-sm">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocailLogin;