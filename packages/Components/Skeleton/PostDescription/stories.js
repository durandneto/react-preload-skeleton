import React from "react";
import { storiesOf } from "@storybook/react";
import Skeleton from ".";

storiesOf("Components|Skeleton/Post Description", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding:'12px'}}>
            <Skeleton />
        </div>
    ));
