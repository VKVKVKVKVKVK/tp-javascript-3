import React from "react";
import { Layout } from "antd";
//import { Messages } from "./Messages";
import image from '../images/background.png';




const MessageLayout = props => (
  <Layout style={{ height: "calc(100%)", backgroundImage: 'url('+ image +')'}}>
    <Layout.Content style={{ padding: "0 50px", height: "calc(80%)" }}>
      <Layout
        style={{
          marginTop: "100px",
          padding: "24px 0",
          background: "#fff",
          height: "calc(100%)"
        }}
      >
        <Layout.Content style={{ padding: "0 24px", height: "calc(80%)" }}>
        Messages here ...
        {props.renderList()}
        </Layout.Content>
      </Layout>
    </Layout.Content>
    <Layout.Footer
      style={{
        padding: "0 50px",
        textAlign: "center",
        height: "calc(20%)", 
        backgroundImage: 'url('+ image +')'
      }}
    >

    {props.renderInput()}

    <img alt="eptia" src={require('../images/epita.jpg')} style={{height: "50px", width: "100px", marginTop: "50px"}}/>
    
      
    </Layout.Footer>
  </Layout>
);

export default MessageLayout;
