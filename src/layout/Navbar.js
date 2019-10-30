import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Button } from "antd";

import ThemeSelect from "../component/ThemeSelect";
import Copy from "../component/Copy";
import Reset from "../component/Reset";
import Image from "../component/Image";
import Link from "../component/Link";
import Code from "../component/Code";
import Italic from "../component/Italic";
import Bold from "../component/Bold";
import Del from "../component/Del";
import FullScreen from "../component/FullScreen";
import About from "../component/About";
import Font from "../component/Font";
import Setting from "../component/Setting";

const ButtonGroup = Button.Group;

@inject("title")
@inject("userInfo")
@observer
class Navbar extends Component {

  render() {
    return (
      <div style={style.navBar}>
        <div style={style.leftNav}>
          {/* <Title /> */}
          <section style={style.title}>Markdown Nice</section>
          <div>
            <ButtonGroup style={style.btnGroupMargin}>
              <Setting />
            </ButtonGroup>
            <ButtonGroup style={style.btnGroupMargin}>
              <Del />
              <Bold />
              <Italic />
              <Code />
            </ButtonGroup>
            <ButtonGroup style={style.btnGroupMargin}>
              <Link />
              <Image />
            </ButtonGroup>
            <ButtonGroup style={style.btnGroupRight}>
              <Reset />
              <FullScreen />
              <Font />
            </ButtonGroup>
          </div>
        </div>
        <div style={style.rightNav}>
          <Copy />
          <About />
          <ThemeSelect />
        </div>
      </div>
    );
  }
}

const style = {
  navBar: {
    height: "64px",
    display: "flex",
    justifyContent: "space-between",
    flex: "none",
    padding: "20px"
  },
  leftNav: {
    flex: "1 1 50%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rightNav: {
    flex: "1 1 50%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  btnGroupMargin: {
    marginRight: "10px"
  },
  btnGroupRight: {
    marginRight: "20px"
  },
  title: {
    marginRight: "10px",
    fontWeight: "bold",
    fontSize: "16px"
  }
};

export default Navbar;
