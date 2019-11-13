import React, { useState } from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Drawer from "../index";
import "../../../styles/index.scss";
import "./style.scss";
import { withInfo } from "@storybook/addon-info";
import Button from "../../Button";

addDecorator(withInfo);

const Demo1 = () => {
  const [visible, setVisible] = useState(true);
  const [visibleTop, setVisibleTop] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const [visibleBottom, setVisibleBottom] = useState(false);
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleBottomWithClose, setVisibleBottomWithClose] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className="drawer-box">
      <div className="drawer-wrapper">
        <Drawer
          className="my-drawer"
          style={{ width: 200 }}
          visible={visible}
          onClose={() => setVisible(false)}
          mask={true}
          placement="right"
        >
          <div style={{ width: 100, padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisible(true)}>打开 Drawer - 默认打开</Button>
      </div>

      <div className="drawer-wrapper">
        <Drawer
          className="my-drawer"
          style={{ width: 200, height: "100vh" }}
          visible={visibleTop}
          onClose={() => setVisibleTop(false)}
          mask={true}
          placement="top"
        >
          <div style={{ width: 100, padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisibleTop(true)}>向上</Button>
      </div>

      <div className="drawer-wrapper">
        <Drawer
          className="my-drawer"
          style={{ width: 200 }}
          visible={visibleRight}
          onClose={() => setVisibleRight(false)}
          mask={true}
          placement="right"
        >
          <div style={{ width: 100, padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisibleRight(true)}>向右</Button>
      </div>

      <div className="drawer-wrapper">
        <Drawer
          className="my-drawer"
          style={{ width: 200 }}
          visible={visibleBottom}
          onClose={() => setVisibleBottom(false)}
          mask={true}
          placement="bottom"
        >
          <div style={{ width: "100%", padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisibleBottom(true)}>向下</Button>
      </div>

      <div className="drawer-wrapper">
        <Drawer
          className="my-drawer"
          style={{ width: 200 }}
          visible={visibleLeft}
          onClose={() => setVisibleLeft(false)}
          mask={true}
          placement="left"
        >
          <div style={{ width: 100, padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisibleLeft(true)}>向左</Button>
      </div>

      <div className="drawer-wrapper">
        <Drawer
          className="my-drawer"
          style={{ width: "100%", height: "100vh" }}
          visible={visibleBottomWithClose}
          onClose={() => setVisibleBottomWithClose(false)}
          mask={true}
          placement="bottom"
          closeIcon={true}
        >
          <div style={{ width: 100, padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisibleBottomWithClose(true)}>
          向下-带关闭X
        </Button>
      </div>

      <div className="drawer-wrapper">
        <Drawer
          style={{ width: 200 }}
          visible={visible2}
          onClose={() => setVisible2(false)}
          mask={true}
          destroyOnClose
        >
          <div style={{ width: 100, padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisible2(true)}>destroyOnClose</Button>
      </div>
    </div>
  );
};

storiesOf("Drawer 抽屉", module).add("Drawer", () => <Demo1 />);
