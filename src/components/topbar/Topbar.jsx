import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  NotificationsNoneOutlined,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {" "}
          <span className="logo">Tebbitt Textiles Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneOutlined />
            <span className="topIconBag">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
