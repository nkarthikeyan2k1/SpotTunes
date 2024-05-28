import React from "react";
import Sidebar from "./Sidebar";
import Player from "./Player";
import SongList from "./SongList";
import "./Template.css";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className=" col-sm-12 col-md-12 col-lg-6">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-2">
                  <Sidebar />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-10">
                  <Outlet />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <Player />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Template;
