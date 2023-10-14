import React, { useState, useEffect } from "react";
import './App.css';
import { FiThumbsUp } from "react-icons/fi";
import { FaMoneyBill } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import RectangleImage from "./img/rectangle-54.png";
import VectorImage from "./img/vector.svg";
// import ScreenTimeChart from "./screentime";
import SideNav from "./SideNav";
import Barchart from "./Barchart";
import Piechart from "./Piechart";


import { Card, Col, Row } from "react-bootstrap";
import CreateModal from "./CreateModal";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { BsFillTagsFill } from "react-icons/bs";
import { FiYoutube, FiMail } from "react-icons/fi";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const dataHandler = (submitData) => {
    const updatedArray = [...data, submitData];

    setData(updatedArray);
    setShow(false);
  };

  return (
    <div className="screen">
      <SideNav xyz={"Dashboard"} />
      <div className="group-11" >
        <img className="profile" alt="Rectangle" src={RectangleImage} />
        <div className="notification-wrapper">
          <img className="notification" alt="Vector" src={VectorImage} />
        </div>
      </div>

      <div className="text-wrapper-7" >Dashboard</div>

      <div className="card" >

        <div className="card-wrap-2" >
          <div className="rectangle">
            <a className="link" style={{ backgroundColor: "#7FCD93" }}> <FaMoneyBill ></FaMoneyBill></a>
            <div className="group">
              <div className="text-wrapper-8">Total Revenues</div>
              <div className="text-wrapper-9">$2,1234</div>
              <div className="percentage">+2.5%</div>
            </div>
          </div>
        </div>

        <div className="card-wrap-2">
          <div className="rectangle">
            <a className="link" style={{ backgroundColor: "#DEBF85" }}> <BsFillTagsFill></BsFillTagsFill></a>
            <div className="group">
              <div className="text-wrapper-8">Total Transactions</div>
              <div className="text-wrapper-9">2,1234</div>
              <div className="percentage">+1.5%</div>
            </div>
          </div>
        </div>

        <div className="card-wrap-2">
          <div className="rectangle">
            <a className="link" style={{ backgroundColor: "#ECA4A4" }}> <FiThumbsUp></FiThumbsUp></a>
            <div className="group">
              <div className="text-wrapper-8">Total Likes</div>
              <div className="text-wrapper-9">9,721</div>
              <div className="percentage">+2.2%</div>
            </div>
          </div>
        </div>

        <div className="card-wrap-2">
          <div className="rectangle">
            <a className="link" style={{ backgroundColor: "#A9B0E5" }}><FaUserGroup></FaUserGroup></a>

            <div className="group">
              <div className="text-wrapper-8">Total Users</div>
              <div className="text-wrapper-9">9,721</div>
              <div className="percentage">+2.5%</div>
            </div>
          </div>
        </div>

      </div>


      <div className="billing_outer-3" >
        <div className="billing_text-wrapper-3-1">Activities<br></br><span className="date">May - June 2023</span></div>
        <div className="billing_barchart" >
          <Barchart />
        </div>
      </div>


      <div className="billing_outer1">
        <div className="billing_text-wrapper-3-1">Top products</div>
        <div className="billing_piechart" >
          <Piechart />
        </div>
      </div>

      <div>


        <Row >
          <Col md={3}>
            <Card className="subscription1-card1-create1">
              {
                show ?
                  <>
                    <button className="button11" onClick={(e) => setShowModal(true)}>
                      <span>+</span>
                      <br />
                      <b>Create new Subscription</b>
                    </button>

                    {showModal && (
                      <CreateModal
                        showModal={showModal}
                        setShowModal={setShowModal}
                        dataHandler={dataHandler}
                      />
                    )}
                  </>

                  :
                  <div>
                    {
                      data.map((d) => (
                        <>
                          <h2 className="heading">{d.name}</h2>
                          <div className="grid">
                            
                            <div style={{display:"flex", alignItems:"center",}}><a className="link" style={{ backgroundColor: "#EBE6F9", color: "#5C33CF"}}> <FiMail></FiMail></a><span style={{ marginTop:"2vh"}} >{d.email}</span></div>
                            <div style={{ display:"flex", alignItems:"center",}}><a className="link" style={{ backgroundColor: "#E9F9EB", color: "#3CC952" }}> <BsWhatsapp></BsWhatsapp></a><span style={{ marginTop:"2vh"}} >{d.post}</span></div>
                            <div style={{ display:"flex", alignItems:"center",}}><a className="link" style={{ backgroundColor: "#FFE9E9", color: "#FF0000" }}> <FiYoutube></FiYoutube></a><span style={{marginTop:"2vh"}} >{d.you}</span></div>
                            <div style={{ display:"flex", alignItems:"center",}} ><a className="link" style={{ backgroundColor: "#FFE9EC", color: "#FF4E64"}}><BsInstagram ></BsInstagram></a><span style={{marginTop:"2vh"}} >{d.insta}</span></div>

                          </div>
                        </>
                      ))
                    }
                  </div>

              }
            </Card>
          </Col>
        </Row>
      </div>


    </div>
  );
};

export default Dashboard;

