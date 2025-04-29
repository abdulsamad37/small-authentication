import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UserData = () => {
    const { state } = useLocation();
    const user = state || {};
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.removeItem("token")
        alert("Logged Out Successfully")
        navigate("/")
    }
    return (

        <>

            <div className="card mx-auto mt-5 shadow" style={{ maxWidth: '20rem' }}>
                <div className="card-body text-center">
                    <img
                        src={user.avatar}
                        alt={`${user.name}'s Avatar`}
                        className="rounded-circle shadow mb-3"
                        width="96"
                        height="96"
                    />
                    <h5 className="card-title mb-1">{user.name}</h5>
                    <p className="card-text text-muted mb-2">{user.email}</p>
                    <span className="badge bg-primary mb-3">{user.role}</span>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-muted">
                            Created: {new Date(user.creationAt).toLocaleDateString()}
                        </li>
                        <li className="list-group-item text-muted">
                            Updated: {new Date(user.updatedAt).toLocaleDateString()}
                        </li>
                    </ul>
                </div>
            </div>
            <button className="btn btn-danger" onClick={handleLogOut}>Logout</button>
        </>
    );
};

export default UserData;
