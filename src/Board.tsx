import Card from "./Card.tsx";

function board() {
  return (
    <>
      <div className="flex flex-col px-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 w-80 overflow-hidden">
      <div className="grid grid-cols-10 w-full mb-4">
        <input
          type="text"
          className="col-span-9 text-sm border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-8" 
          placeholder="Introduce un título" 
        />
        <button className="h-8 justify-self-end">...</button>
      </div>

      <div id="card" className="w-full">
        <Card />
      </div>
    </div>



     
      
    </>
  );
}

export default board;