export function Github() {
    return (
        <a href="https://github.com/tomfullylove" target="_blank" className="flex flex-col text-black text-xs bg-white h-full sm:text-sm md:text-base">
            <div className="flex flex-row justify-between items-center bg-neutral-800 px-4 py-2  border border-b-gray-300 border-gray-200">
                <div className="flex flex-row gap-3 items-center">
                    <p className="text-white text-base sm:text-xl md:text-2xl font-bold">Github</p>
                </div>
            </div>
            <div className="flex flex-col items-center h-full pb-12">
                <div className="flex flex-col items-center h-full max-w-220 py-6 px-4 sm:px-8">
                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col items-center">
                            <img src="./account.svg" className="h-16 w-16 sm:h-32 sm:w-32 bg-yellow-400 rounded-full p-4" />
                            <p className="text-lg sm:text-3xl md:text-4xl font-bold self-start sm:mt-4">tomfullylove</p>
                            <div className="flex flex-row gap-1 self-start">
                                <img src="./home.svg" className="w-4 h-auto" />
                                <p className="text-xs sm:text-base">Veygo</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col flex-1 p-4 border-b border-gray-200 gap-1">
                                <div className="flex flex-row gap-2 items-center">
                                    <img src="./book.svg" className="w-4 h-auto" />
                                    <a className="text-blue-500 pointer-cursor mt-[-2px]" >personal-website</a>
                                    <div className="border border-gray-300 rounded-full text-xs px-2 py-1 text-gray-600">Public</div>
                                </div>
                                <div className="flex flex-row gap-1 items-center px-1">
                                    <div className="h-2 w-2 rounded-full bg-blue-800" />
                                    <p className="text-xs text-gray-500">typescript</p>
                                </div>
                            </div>
                            <div className="flex flex-col p-4 border-b border-gray-200 gap-1">
                                <div className="flex flex-row gap-2 items-center">
                                    <img src="./book.svg" className="w-4 h-auto" />
                                    <a className="text-blue-500 pointer-cursor mt-[-2px]" >half-finished-app</a>
                                    <div className="border border-gray-300 rounded-full text-xs px-2 py-1 text-gray-600">Public</div>
                                </div>
                                <div className="flex flex-row gap-1 items-center px-1">
                                    <div className="h-2 w-2 rounded-full bg-red-600" />
                                    <p className="text-xs text-gray-500">swift</p>
                                </div>
                            </div>
                            <div className="flex flex-col p-4 cursor-not-allowed border-b border-gray-200 gap-1">
                                <div className="flex flex-row gap-2 items-center">
                                    <img src="./book.svg" className="w-4 h-auto" />
                                    <a className="text-blue-500 pointer-cursor mt-[-2px]" >billion-dollar-idea</a>
                                    <div className="border border-gray-300 rounded-full text-xs px-2 py-1 text-gray-600">Private</div>
                                </div>
                                <div className="flex flex-row gap-1 items-center px-1">
                                    <div className="h-2 w-2 rounded-full bg-blue-900" />
                                    <p className="text-xs text-gray-500">php</p>
                                </div>
                            </div>
                            <div className="flex flex-col p-4 gap-1">
                                <div className="flex flex-row gap-2 items-center">
                                    <img src="./book.svg" className="w-4 h-auto" />
                                    <a className="text-blue-500 pointer-cursor mt-[-2px]" >barely-started-package</a>
                                    <div className="border border-gray-300 rounded-full text-xs px-2 py-1 text-gray-600">Public</div>
                                </div>
                                <div className="flex flex-row gap-1 items-center px-1">
                                    <div className="h-2 w-2 rounded-full bg-blue-900" />
                                    <p className="text-xs text-gray-500">python</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
