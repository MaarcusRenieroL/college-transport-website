import React from "react";

export default function SearchBar() {
    return (
        <div className="flex justify-center items-center mx-10 my-5 space-x-5">
            <div
                className={"bg-white w-1/2 px-2 py-2 rounded-2xl"}
            >
                <input
                    className="h-full rounded-2xl focus:outline-none p-0.5 bg-white text-gray-700"
                    type="text"
                    placeholder="Type the first 4 or 5 letters of the name of your boarding point"
                />
            </div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl"
                >
                    Search
                </button>
            </div>
        </div>

    )
}