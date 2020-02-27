import React from "react";
import { storiesOf } from "@storybook/react";
import Skeleton from ".";

storiesOf("Components|Skeleton/Base", module)
    .add("Default", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <Skeleton />
        </div>
    ))
    .add("different size", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <div style={{margin: '10px'}}>
                <Skeleton w={99} h={16} />
            </div>
            <div style={{margin: '10px'}}>
                <Skeleton w={100} h={160} />
            </div>
        </div>
    ))
    .add("diferent colors", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <div style={{margin: '10px'}}>
                <Skeleton color="red-light" />
            </div>
            <div style={{margin: '10px'}}>
                <Skeleton color="blue-light" />
            </div>
            <div style={{margin: '10px'}}>
                <Skeleton color="primary-light" />
            </div>
            <div style={{margin: '10px'}}>
                <Skeleton color="green-light" />
            </div>
        </div>
    ))
    .add("diferent radius", () => (
        <div style={{ backgroundColor: "#f2f2f2", height: "100vh"}}>
            <div style={{margin: '10px'}}>
                <Skeleton radius="10%" />
            </div>
            <div style={{margin: '10px'}}>
                <Skeleton radius="20%"  color="primary-light"/>
            </div>
            <div style={{margin: '10px'}}>
                <Skeleton radius="30%" color="primary-light" />
            </div>
            <div style={{margin: '10px'}}>
                <Skeleton radius="40%" />
            </div>
            <div style={{margin: '10px'}}>
                <Skeleton radius="50%" />
            </div>
        </div>
    ))