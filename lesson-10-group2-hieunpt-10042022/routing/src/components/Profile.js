import { NavLink, Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li style={{ margin: '6px 12px' }}><NavLink to="/profile/aboutme">About Me</NavLink></li>
                <li style={{ margin: '6px 12px' }}><NavLink to="/profile/courses">Courses</NavLink></li>
            </ul>
            <Outlet />
        </div>
    );
};

// Outlet quyết định vị trí render của các Route lồng nhau

const AboutMe = () => {
    return <h2 style={{ marginLeft: 64 }}>About Me</h2>;
};

const Courses = () => {
    return <h2 style={{ marginLeft: 64 }}>Courses</h2>;
};

export { AboutMe, Courses };

export default Profile;