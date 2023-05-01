import React from "react";

export default function BusInfo() {
    return (
        <div
            className={"flex flex-col items-center justify-center"}
        >
            <h1
                className={"text-4xl font-bold text-white"}
            >
                Bus Info
            </h1>
            <div
                className={"space-y-10 mt-5"}
            >
                <p>Morning to college - 101 buses</p>
                <p>Return from college - 3:15 pm - 95 buses</p>
                <p>Return for admin - 5:15 pm -5 buses</p>
            </div>
        </div>
    )
}