import React from "react";
import { storiesOf } from "@storybook/react";
import Skeleton from ".";

storiesOf("Components|Skeleton/Title Description", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <Skeleton />
        </div>
    ));
