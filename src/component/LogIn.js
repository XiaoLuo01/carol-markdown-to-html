import React from "react";
import { Tooltip, Button, Icon } from "antd";
import { observer, inject } from "mobx-react";
import axios from "axios";

import githubIcon from "../icon/github.svg";

import {
  CLIENT_ID,
  CLIENT_SECRET,
  PROXY,
  ACCESS_TOKEN,
  ENTER_DELAY,
  LEAVE_DELAY
} from "../utils/constant.js";
import { queryParse, axiosJSON, axiosGithub } from "../utils/helper";

@inject("userInfo")
@observer
class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.code = queryParse().code;
    if (this.code) {
      this.loginBack();
    }
    const TOKEN = localStorage.getItem(ACCESS_TOKEN);
    if (TOKEN) {
      axios.defaults.headers.common["Authorization"] = `token ${TOKEN}`;
      this.getUserInfo();
    }
  }

  login = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=public_repo`;
  };

  loginBack = async () => {
    const res = await axiosJSON.post(PROXY, {
      code: this.code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    });
    localStorage.setItem(ACCESS_TOKEN, res.data.access_token);
    window.location.href = "/";
  };

  getUserInfo = async () => {
    try {
      const res = await axiosGithub.get(`/user`);
      this.props.userInfo.setUserInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Tooltip
        placement="bottom"
        mouseEnterDelay={ENTER_DELAY}
        mouseLeaveDelay={LEAVE_DELAY}
        title="登录"
      >
        <Button shape="circle" style={style.btnStyle} onClick={this.login}>
          <Icon component={githubIcon} style={style.iconSize} />
        </Button>
      </Tooltip>
    );
  }
}

const style = {
  btnStyle: {
    border: "none",
    width: "24px",
    height: "24px"
  },
  iconSize: {
    fontSize: "24px"
  },
  avatar: {
    background: "white",
    color: "black"
  }
};

export default LogIn;
