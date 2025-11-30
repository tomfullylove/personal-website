export function Error({ clearFatalError }: { clearFatalError: () => void }) {
  return (
    <div className="w-dvw h-dvh flex flex-row justify-center items-center p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold">Unable to connect</h1>
        <p>Can't establish a connection to the server at localhost:5173.</p>
        <ul className="list-disc pl-6">
          <li>
            The site could be temporarily unavailable or too busy. Try again in a few moments.
          </li>
          <li>
            If you are unable to load any pages, check your computer's network connection.
          </li>
        </ul>
        <button
          onClick={clearFatalError}
          className="rounded-lg py-2 px-8 bg-blue-500 text-white mt-4 cursor-pointer text-center self-end"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
