import React, { useState, useEffect } from "react";

import Link from "next/link";

export default function Dates() {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <div className="flex justify-evenly items-center mx-10 my-10 p-4">
            <div className={"flex space-x-10"}>
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/"}>
                    Day 1
                </Link>
                <Link href={"/"}>
                    Day 2
                </Link>
                <Link href={"/"}>
                    Day 3
                </Link>
                <Link href={"/"}>
                    Day 4
                </Link>
                <Link href={"/"}>
                    Day 5
                </Link>
                <Link href={"/"}>
                    Day 6
                </Link>
                <Link href={"/"}>
                    Day 7
                </Link>
            </div>
            <div>

                {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
                {' '}
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true,
                })}

            </div>
        </div>
    )
}
