import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;