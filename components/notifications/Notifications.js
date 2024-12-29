"use client";

import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "Jessie Samson",
      message: "💬 Mentioned you in a comment.",
      time: "10m",
      date: "10:41 AM August 7, 2021",
    },
    {
      id: 2,
      user: "Michael Smith",
      message: "👍 Liked your post.",
      time: "20m",
      date: "10:30 AM August 7, 2021",
    },
    {
      id: 3,
      user: "Sophia Turner",
      message: "📸 Shared your photo.",
      time: "1h",
      date: "9:45 AM August 7, 2021",
    },
  ]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(null);
  const dropdownRef = useRef(null); // Ref to track dropdown element

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Delete notification
  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  // Toggle dropdown menu
  const toggleMenu = (id) => {
    setMenuVisible((prev) => (prev === id ? null : id));
  };

  return (
    <div className="col-auto d-flex align-items-center gap-3">
      {/* Notifications Icon */}
      <div
        className="rounded-circle bg-body-secondary d-flex justify-content-center align-items-center position-relative"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ddd",
          cursor: "pointer",
        }}
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <i className="bi bi-brightness-high"></i>
      </div>

      <div
        className="rounded-circle bg-body-secondary d-flex justify-content-center align-items-center position-relative"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ddd",
          cursor: "pointer",
        }}
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <i className="bi bi-grid-3x3-gap-fill"></i>
      </div>

      <div
        className="rounded-circle bg-body-secondary d-flex justify-content-center align-items-center position-relative"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ddd",
          cursor: "pointer",
        }}
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <i className="bi bi-bell"></i>
      </div>

      {/* Notifications Dropdown */}
      {dropdownVisible && (
        <div
          ref={dropdownRef} // Attach ref to dropdown
          className=" p-3 shadow"
          style={{
            position: "absolute",
            top: "50px",
            right: "0",
            width: "400px",
            zIndex: "10",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        >
                                            <span className="dropdown-menu-arrow"></span>

          <h6 className="dropdown-header">Notifications</h6>
          {notifications.length > 0 ? (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className="d-flex align-items-start p-2"
                style={{ borderBottom: "1px solid #ddd" }}
              >
                {/* User Image */}
                <div
                  className="rounded-circle bg-secondary"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px",
                  }}
                ></div>

                {/* Notification Details */}
                <div className="flex-grow-1">
                  <strong>{notif.user}</strong>
                  <p className="mb-0">{notif.message}</p>
                  <small className="text-muted">
                    {notif.time} - {notif.date}
                  </small>
                </div>

                {/* Options Menu */}
                <div>
                  <i
                    className="bi bi-three-dots-vertical"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleMenu(notif.id)}
                  ></i>
                  {menuVisible === notif.id && (
                    <ul
                      className="list-unstyled p-2 shadow"
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "30px",
                        backgroundColor: "#fff",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        zIndex: "11",
                      }}
                    >
                      <li
                        className="p-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteNotification(notif.id)} // Mark as read (delete notification)
                      >
                        Mark as read
                      </li>
                      <li
                        className="p-2"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          console.log(
                            "Turn off status update notifications for this Page"
                          )
                        }
                      >
                        Turn off status update notifications for this Page
                      </li>
                      <li
                        className="p-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteNotification(notif.id)} // Delete notification
                      >
                        Delete this notification
                      </li>
                      <li
                        className="p-2"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          console.log("Report issue to notifications team")
                        }
                      >
                        Report issue to notifications team
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No notifications</p>
          )}

          {/* Mark All as Read */}
          {notifications.length > 0 && (
            <div className="text-center mt-2">
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => setNotifications([])} // Clear all notifications
              >
                Mark all as read
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavBar;
