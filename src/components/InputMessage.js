import React from "react";
import { Input } from "antd";

const Search = Input.Search;

const InputMessage = (onSubmit = (value) => {
  this.onSubmitEnter(value);
}) => (
  <Search
    placeholder="input message"
    onSearch={value => onSubmit(value)}
    enterButton="Send"
  />
);

export default InputMessage;
