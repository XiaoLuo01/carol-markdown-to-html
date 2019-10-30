import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Button } from "antd";

@inject("dialog")
@observer
class AboutDialog extends Component {
  handleOk = e => {
    this.props.dialog.setAboutOpen(false);
  };

  handleCancel = e => {
    this.props.dialog.setAboutOpen(false);
  };

  handleVersion = e => {
    this.props.dialog.setAboutOpen(false);
    this.props.dialog.setVersionOpen(true);
  };

  render() {
    return (
      <Modal
        title="关于"
        okText="确认"
        cancelText="取消"
        visible={this.props.dialog.isAboutOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="version" onClick={this.handleVersion}>更新记录</Button>,
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确认
          </Button>
        ]}
        bodyStyle={{
          paddingTop: "5px"
        }}
      >
        <h3 style={style.headerMargin}>
          Markdown Nice
          <img
            alt=""
            style={style.img}
            src="https://badgen.net/github/stars/zhning12/markdown-nice"
          />
        </h3>

        <p style={style.lineHeight}>支持自定义样式的 Markdown 编辑器；</p>
        <p style={style.lineHeight}>支持微信公众号排版；</p>
      </Modal>
    );
  }
}

const style = {
  imgWidth: {
    width: "50%",
    height: "100%"
  },
  headerMargin: {
    marginTop: "5px",
    marginBottom: "5px",
    color: "black"
  },
  lineHeight: {
    lineHeight: "26px",
    color: "black",
    padding: 0,
    margin: 0
  },
  img: {
    width: "70px",
    marginLeft: "10px",
    display: "inline-block"
  }
};

export default AboutDialog;
