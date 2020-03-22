import React from "react";
import { storiesOf } from "@storybook/react";
import Skeleton from ".";

storiesOf("Components|Skeleton/Title Description", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", padding: '5%', height: "100vh"}}>
            <Skeleton />
        </div>
    ))
    .add("reverse", () => (
        <div style={{ backgroundColor: "#f2f2f2", padding: '5%', height: "100vh"}}>
            <Skeleton reverse/>
        </div>
    ))
    .add("extraLine", () => (
        <div style={{ backgroundColor: "#f2f2f2", padding: '5%', height: "100vh"}}>
            <Skeleton extraLine/>
        </div>
    ))
