import { useState } from "react";

function Card() {

    const [counter, setCounter] = useState<number>(0);

    return (
       <>

        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
            </a>
            <h5 className="text-center text-xs"> {counter} </h5>
        </div>

       

       </>
    )
};

export default Card;