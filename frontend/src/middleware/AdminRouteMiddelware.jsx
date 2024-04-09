import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/admin.css";

export default function AdminRouteMiddelware() {
  return (
    <div className="admin">
      <div className="top-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h1>BCA4SEM</h1>
            </div>
            <div className="col-md-9">
              <div className="logout">
                <button className="btn btn-danger float-end">Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aside-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="profile-container">
                <div className="profile-image">
                  <img src="https://picsum.photos/seed/picsum/200/300" alt="" />
                </div>
                <div className="profile-name">
                  <h3>Admin</h3>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/users" className="nav-link">
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
