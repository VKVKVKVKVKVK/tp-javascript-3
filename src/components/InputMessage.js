import React from "react";
import { Input } from "antd";

const Search = Input.Search;

const InputMessage = (onSubmit = (value) => {}) => (
  <Search
    placeholder="input message"
    onSearch={(value) => this.props.onSubmitEnter(value)}
    enterButton="Send"
  />
);

//FIXME ne reconnait pas la fonction
export default InputMessage;
