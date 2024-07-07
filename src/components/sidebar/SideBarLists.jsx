import React from "react";

// import { Menu } from "antd";
// import {
//   HomeOutlined,
//   UserOutlined,
//   LogoutOutlined,
//   SettingFilled,
//   AreaChartOutlined,
//   BarsOutlined,
// } from "@ant-design/icons";

export default function SideBarLists({ darkTheme }) {
  return (
    <>
      <div className="wrapper">
        <aside id="sidebar">
          
          <div className="sidebar">
            <ul className="sidebar-nav sidebar-nav-top">
              <li className="sidebar-item">
              <a href="/" className="sidebar-link">
              <i class="lni lni-grid-alt"></i>
                  <span>Feeds</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  href="/"
                  className="sidebar-link sidebar-link-dropdown-group"
                  data-bs-toggle="collapse"
                  data-bs-target="#users"
                  aria-expanded="false"
                  aria-controls="users"
                >
                  <div className="i-t">
                    <i class="lni lni-users"></i>
                    <span>All Users</span>
                  </div>
                  <i class="lni lni-angle-double-down"></i>
                </a>
                <ul
                  id="users"
                  class="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item mt-3">
                    <a
                      href="/"
                      className="sidebar-link  position-relative link-display "
                    >
                      <div className="icon-text">
                        <i class="lni lni-blogger"></i>
                        <span>Refugee</span>
                      </div>

                      <span
                        style={{ fontSize: "10px" }}
                        className="notification position-absolute end-0 mx-4 mt-0 badge text-bg-danger"
                      >
                        1
                      </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="/"
                      className="sidebar-link  position-relative link-display"
                    >
                      <div className="icon-text">
                        <i class="lni lni-blogger"></i>
                        <span>Host</span>
                      </div>

                      <div
                        className="notification position-absolute end-0 mx-4 mt-0 badge text-bg-danger"
                        style={{ fontSize: "10px" }}
                      >
                        1
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="/"
                      className="sidebar-link position-relative link-display"
                    >
                      <div className="icon-text">
                        <i class="lni lni-squarespace"></i>
                        <span>Ngos</span>
                      </div>

                      <div
                        className="notification position-absolute end-0 mx-4 mt-1 badge text-bg-danger"
                        style={{ fontSize: "10px" }}
                      >
                        1
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  href="/"
                  className="sidebar-link sidebar-link-dropdown-group"
                  data-bs-toggle="collapse"
                  data-bs-target="#group"
                  aria-expanded="false"
                  aria-controls="group"
                >
                  <div className="i-t">
                    <i class="lni lni-layers"></i>
                    <span>Group</span>
                  </div>

                  <i class="lni lni-angle-double-down"></i>
                </a>
                <ul
                  id="group"
                  class="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item mt-3">
                    <a
                      href="/"
                      className="sidebar-link  position-relative link-display "
                    >
                      <div className="icon-text">
                        <i class="lni lni-blogger"></i>
                        <span>Refugee</span>
                      </div>

                      <span
                        style={{ fontSize: "10px" }}
                        className="notification position-absolute end-0 mx-4 mt-0 badge text-bg-danger"
                      >
                        1
                      </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="/"
                      className="sidebar-link  position-relative link-display"
                    >
                      <div className="icon-text">
                        <i class="lni lni-blogger"></i>
                        <span>Host</span>
                      </div>

                      <div
                        className="notification position-absolute end-0 mx-4 mt-0 badge text-bg-danger"
                        style={{ fontSize: "10px" }}
                      >
                        1
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="/"
                      className="sidebar-link position-relative link-display"
                    >
                      <div className="icon-text">
                        <i class="lni lni-squarespace"></i>
                        <span>Ngos</span>
                      </div>

                      <div
                        className="notification position-absolute end-0 mx-4 mt-1 badge text-bg-danger"
                        style={{ fontSize: "10px" }}
                      >
                        1
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a href="/" className="sidebar-link">
                  <i class="lni lni-blogger"></i>
                  <span>Blog</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="/" className="sidebar-link">
                  <i class="lni lni-user"></i>
                  <span>Profile</span>
                </a>
              </li>
            </ul>

            <ul className="sidebar-nav sidebar-nav-bottom">
              <li className="sidebar-item">
                <a href="/" className="sidebar-link">
                  <i class="lni lni-cogs"></i>
                  <span>Setting</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="/" className="sidebar-link">
                  <i class="lni lni-exit"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
