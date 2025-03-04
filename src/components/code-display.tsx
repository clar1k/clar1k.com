function CodeDisplay() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[450px] overflow-hidden rounded-xl border border-purple-200 bg-gray-900 lg:order-last">
      <div className="flex h-8 w-full items-center bg-gray-800 px-3">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="mx-auto text-xs font-medium text-gray-300">
          clar1k.ts
        </div>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="flex">
          <span className="w-6 text-gray-500">1</span>
          <span className="text-gray-300">
            <span className="text-purple-400">const</span>{" "}
            <span className="font-medium text-purple-300">developer</span> ={" "}
            {"{"}
          </span>
        </div>
        <div className="flex">
          <span className="w-6 text-gray-500">2</span>
          <span className="pl-4 text-gray-300">
            <span className="text-purple-400">name:</span>{" "}
            <span className="text-green-300">&apos;Serhii Khara&apos;</span>,
          </span>
        </div>
        <div className="flex">
          <span className="w-6 text-gray-500">3</span>
          <span className="pl-4 text-gray-300">
            <span className="text-purple-400">nickname:</span>{" "}
            <span className="text-green-300">&apos;clar1k&apos;</span>,
          </span>
        </div>

        <div className="flex">
          <span className="w-6 text-gray-500">4</span>
          <span className="pl-4 text-gray-300">
            <span className="text-purple-400">passion:</span>{" "}
            <span className="text-green-300">&apos;CODE&apos;</span>,
          </span>
        </div>
        <div className="flex">
          <span className="w-6 text-gray-500">5</span>
          <span className="text-gray-300">{"}"}</span>
        </div>
        <div className="mt-2 flex">
          <span className="w-6 text-gray-500">6</span>
          <span className="text-gray-300"></span>
        </div>
        <div className="flex">
          <span className="w-6 text-gray-500">7</span>
          <span className="text-gray-300">
            <span className="text-purple-400">function</span>{" "}
            <span className="font-medium text-blue-300">code</span>
            () {"{"}
          </span>
        </div>
        <div className="flex">
          <span className="w-6 text-gray-500">8</span>
          <span className="pl-4 text-gray-300">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-gray-300">developer.code()</span>
          </span>
        </div>
        <div className="flex">
          <span className="w-6 text-gray-500">9</span>
          <span className="text-gray-300">{"}"}</span>
        </div>
        <div className="mt-2 flex">
          <span className="w-6 text-gray-500">10</span>
          <span className="text-gray-300">
            <span className="text-blue-300">code()</span>;
          </span>
        </div>
      </div>
      <div className="absolute bottom-[108px] left-[40px] h-4 w-0.5 animate-pulse bg-purple-400"></div>
    </div>
  );
}

export { CodeDisplay };
