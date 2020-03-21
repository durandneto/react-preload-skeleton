import React from "react";
import { storiesOf } from "@storybook/react";
import Skeleton from ".";

storiesOf("Components|Skeleton/Card", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <Skeleton />
        </div>
    ))
    .add("with action and title", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <Skeleton button title/>
        </div>
    ))
    .add("with action", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <Skeleton button/>
        </div>
    ));
