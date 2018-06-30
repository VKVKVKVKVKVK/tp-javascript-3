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
  const isPrivate = (Component) => connect(mapStateToProps)(props.isLoggedIn ? <Component  store={props.ownprops}  /> : <LogInLayout/>);
  
  const PrivateMessages = isPrivate(Messages);

  //FIXME: Condition authentification n'active pas les composants...
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
  /* Mettre <PrivateMessages/>  à la place de <Messages/> pour activer la vue par défaut*/
}


