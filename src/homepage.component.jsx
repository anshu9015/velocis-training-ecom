import React from "react";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center p-5 md:p-20">
            <div className="w-full flex flex-wrap justify-center">
                <div className="min-w-30 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="min-w-30 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="min-w-30 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="min-w-30 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                        <div className="content">
                            <h1 className="title">WOMENS</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>
                    <div className="min-w-30 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                        <div className="content">
                            <h1 className="title">MENS</h1>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
