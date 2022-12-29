export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold underline">Theme setup sandbox</h1>
      <h2 className="text-h2">Typographies</h2>
      <hr />
      <ul className="my-8">
        <li className="my-8">
          <h1 className="text-h1 mr-8">H1 - Sample Text</h1>
          <h1 className="text-h1 font-bold">H1 BOLD - Sample Text</h1>
        </li>
        <li className="my-8">
          <h2 className="text-h2 mr-8">H2 - Sample Text</h2>
          <h2 className="mr-8 text-3xl font-bold sm:text-2xl">H2 BOLD - Sample Text</h2>
        </li>
        <li className="my-8">
          <h3 className="text-h3">H3 - Sample Text</h3>
          <h3 className="text-h3 font-bold">H3 BOLD - Sample Text</h3>
        </li>
        <li className="my-8">
          <h4 className="text-h4">H4 - Sample Text</h4>
          <h4 className="text-h4 font-bold">H4 BOLD- Sample Text</h4>
        </li>
        <li className="my-8">
          <p className="text-body">body - Sample Text</p>
          <p className="text-body font-bold">body BOLD - Sample Text</p>
        </li>
        <li className="my-8">
          <p className="text-body-small">body small - Sample Text</p>
          <p className="text-body-small font-bold">body small BOLD - Sample Text</p>
        </li>
        <li className="my-8">
          <p className="text-tiny-small">tiny small - Sample Text</p>
          <p className="text-tiny-small font-bold ">tiny small BOLD - Sample Text</p>
        </li>
      </ul>
      <h2 className="text-h2">Colors</h2>
      <hr />
      <div className="my-8 grid grid-cols-4 md:grid-cols-12">
        <div className="col-start-1 col-end-13 row-span-1 flex">
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-black"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-white"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-gray-700"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-gray-500"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-gray-200"></div>
          <div className="m-4 h-[100px] w-[100px] border-spacing-1 rounded-lg border border-dashed border-gray-500 bg-gray-50"></div>
        </div>
        <div className="col-start-1 col-end-13 row-span-2 flex">
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-blue-400"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-green-500"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-blue-700"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-blue-50"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-red-500"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-blue-500"></div>
          <div className="m-4 h-[100px] w-[100px] rounded-lg bg-blue-900"></div>
        </div>
      </div>
    </div>
  );
}
