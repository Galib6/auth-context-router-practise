import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)
    return (
        <div>
            <h2>This is home for {user?.displayName}</h2>
        </div>
    );
};

export default Home;