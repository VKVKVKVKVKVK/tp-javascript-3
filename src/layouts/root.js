import React from "react";
import { Provider } from "react-redux";
import Messages from "./Messages";
import LogInLayout from "./authentication/Login";
import {connect} from "./authentication/Login";
import "antd/dist/antd.css";

export default function Root(props) {

  const mapStateToProps = ({authentication}, ownProps) => ({
    ownProps: ownProps,
    isLoggedIn: authentication.isLoggedIn
  });

  /*
  const isPrivate = (Component) => connect(mapStateToProps)((props) => props.isLoggedIn ? <Component  store={props.ownprops}  /> : <LogInLayout/>);
  */
  /*enlever props={props.ownprops} si fail*/
  
  /*
  const isPrivate = (Component) => connect(mapStateToProps)((props) => <Component  store={props.ownprops}  />);


  const PrivateMessages = isPrivate(Messages);
*/
  return (
    <Provider store={props.store}>
        <Messages style={{
          padding: "24px 0",
          backgroundImage: "url(" + "../images/background.png" + ")",
          height: "calc(100%)"
        }}/>
    </Provider>
  );
  /* Mettre <Messages dans le return pr afficher messages/> */
}


