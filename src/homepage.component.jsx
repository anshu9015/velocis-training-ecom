import React from "react";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center p-5 md:p-20">
            <div className="w-full flex flex-wrap justify-center">
                <div className="min-w-30 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                    <div className="h-90 p-0 sm:p-0 md:p-0 lg:p-25 xl:p-25 flex flex-col items-center justify-center border border-black">
                        <h1 className="font-bold mb-6 text-22 text-gray-700">HATS</h1>
                        <span className="font-light text-16">SHOP NOW</span>
                    </div>
                </div>
                <div className="min-w-30 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                    <div className="h-90 p-0 sm:p-0 md:p-0 lg:p-25 xl:p-25 flex flex-col items-center justify-center border border-black">
                        <h1 className="font-bold mb-6 text-22 text-gray-700">JACKETS</h1>
                        <span className="font-light text-16">SHOP NOW</span>
                    </div>
                </div>
                <div className="min-w-30 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                    <div className="h-90 p-0 sm:p-0 md:p-0 lg:p-25 xl:p-25 flex flex-col items-center justify-center border border-black">
                        <h1 className="font-bold mb-6 text-22 text-gray-700">SNEAKERS</h1>
                        <span className="font-light text-16">SHOP NOW</span>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="min-w-50 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                        <div className="h-90 p-0 sm:p-0 md:p-0 lg:p-25 xl:p-25 flex flex-col items-center justify-center border border-black">
                            <h1 className="font-bold mb-6 text-22 text-gray-700">WOMENS</h1>
                            <span className="font-light text-16">SHOP NOW</span>
                        </div>
                    </div>
                    <div className="min-w-50 h-240 flex-1 flex items-center justify-center border border-black m-0 mx-7.5 my-15">
                        <div className="h-90 p-0 sm:p-0 md:p-0 lg:p-25 xl:p-25 flex flex-col items-center justify-center border border-black">
                            <h1 className="font-bold mb-6 text-22 text-gray-700">MENS</h1>
                            <span className="font-light text-16">SHOP NOW</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
