import { useState } from "react";

export function Verify() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showError, setShowError] = useState(false);
    return (
        <div className="flex justify-center bg-black pt-18 pb-100 text-white text-xs sm:text-sm md:text-base">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowError(false);
                    setIsSubmitting(true);
                    setTimeout(() => {
                        setIsSubmitting(false);
                        setShowError(true);
                    }, 3000)
                }}
                className="flex flex-col items-center p-8 h-fit mx-8 max-w-92 rounded-lg border border-zinc-700 bg-zinc-900 gap-4"
            >
                <>
                    <h1 className="text-xl">Verify your age</h1>
                    <p>To continue, we are required to verify that you are 18 or older.</p>
                    <div className="w-full flex flex-col">
                        <label>Card number<span className="text-red-500">*</span></label>
                        <input required className="bg-zinc-800 rounded-md h-10 px-2" inputMode="numeric" placeholder="1234  5678  9012  3456" maxLength={16} />
                    </div>
                    <div className="w-full flex flex-col">
                        <label>Expiry<span className="text-red-500">*</span></label>
                        <input required className="bg-zinc-800 rounded-md h-10 px-2" inputMode="numeric" type="month" placeholder="12/34" maxLength={5} />
                    </div>
                    <div className="w-full flex flex-col">
                        <label>CVC<span className="text-red-500">*</span></label>
                        <input required className="bg-zinc-800 rounded-md h-10 px-2" inputMode="numeric" placeholder="456" maxLength={3} />
                    </div>
                    <button disabled={isSubmitting} type="submit" className={`w-full text-black font-bold px-4 py-2 rounded-md h-10 ${isSubmitting ? "bg-orange-300 cursor-not-allowed" : "bg-orange-400 cursor-pointer hover:bg-orange-500"}`}>
                        {isSubmitting ? "Loading..." : "Continue"}
                    </button>
                    {showError ? (
                        <p className="text-red-500">Sorry! You have insufficent funds to access this site, better luck next time!</p>
                    ) : (
                        <p className="text-xs">
                            By pressing continue you agree to our 98 pages of terms and conditions. You also agree to be charged a random amount based on your current bank balance.
                        </p>
                    )}
                </>

            </form>
        </div>
    );
}
