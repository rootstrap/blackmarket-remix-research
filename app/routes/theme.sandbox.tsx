export default function Index() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold underline">Theme setup sandbox</h1>
      <h2 className="text-h2">Typographies</h2>
      <hr />
      <ul className="my-8">
        <li className="my-8">
          <h1 className="mr-8 text-h1">H1 - Sample Text</h1>
          <h1 className="font-bold text-h1">H1 BOLD - Sample Text</h1>
        </li>
        <li className="my-8">
          <h2 className="mr-8 text-h2">H2 - Sample Text</h2>
          <h2 className="mr-8 text-3xl font-bold sm:text-2xl">
            H2 BOLD - Sample Text
          </h2>
        </li>
        <li className="my-8">
          <h3 className="text-h3">H3 - Sample Text</h3>
          <h3 className="font-bold text-h3">H3 BOLD - Sample Text</h3>
        </li>
        <li className="my-8">
          <h4 className="text-h4">H4 - Sample Text</h4>
          <h4 className="font-bold text-h4">H4 BOLD- Sample Text</h4>
        </li>
        <li className="my-8">
          <p className="text-body">body - Sample Text</p>
          <p className="font-bold text-body">body BOLD - Sample Text</p>
        </li>
        <li className="my-8">
          <p className="text-body-small">body small - Sample Text</p>
          <p className="font-bold text-body-small">
            body small BOLD - Sample Text
          </p>
        </li>
        <li className="my-8">
          <p className="text-tiny-small">tiny small - Sample Text</p>
          <p className="font-bold text-tiny-small ">
            tiny small BOLD - Sample Text
          </p>
        </li>
      </ul>
      <h2 className="text-h2">Colors</h2>
      <hr />
      <div className="grid grid-cols-4 my-8 md:grid-cols-12">
        <div className="flex col-start-1 col-end-13 row-span-1">
          <div className="w-[100px] h-[100px] m-4 bg-black rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-white rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-gray-700 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-gray-500 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-gray-200 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-gray-50 rounded-lg border border-spacing-1 border-dashed border-gray-500"></div>
        </div>
        <div className="flex col-start-1 col-end-13 row-span-2">
          <div className="w-[100px] h-[100px] m-4 bg-blue-400 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-green-500 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-blue-700 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-blue-50 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-red-500 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-blue-500 rounded-lg"></div>
          <div className="w-[100px] h-[100px] m-4 bg-blue-900 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
