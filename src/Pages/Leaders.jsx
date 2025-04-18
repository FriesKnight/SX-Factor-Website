import React from "react";

const Leaders = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold">Our Leaders</h1>
            <div className="mt-8 space-y-6">
                <div>
                    <h2 className="text-3xl font-semibold">Leader 1</h2>
                    <p className="mt-2 text-lg">Introduction and biography of Leader 1.</p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">Leader 2</h2>
                    <p className="mt-2 text-lg">Introduction and biography of Leader 2.</p>
                </div>
            </div>
        </div>
    );
};

export default Leaders;
