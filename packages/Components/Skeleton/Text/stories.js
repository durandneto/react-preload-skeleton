import React from "react";
import { storiesOf } from "@storybook/react";
import Skeleton from ".";

storiesOf("Components|Skeleton/Text", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding:'2%'}}>
            <Skeleton />
        </div>
    ))
    .add("red", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding:'2%'}}>
            <Skeleton color="red-light"/>
        </div>
    ))
    .add("green", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding:'2%'}}>
            <Skeleton color="green-light"/>
        </div>
    ))
    .add("blue", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding:'2%'}}>
            <Skeleton color="blue-light"/>
        </div>
    ))
    .add("primary", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh", padding:'2%'}}>
            <Skeleton color="primary-light"/>
        </div>
    ))
