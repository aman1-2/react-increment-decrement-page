import { useState } from "react";
import "./App.css";

function App() {
  /*This variable is used to update the data on the data div.*/
  //let count=0;

  //This is the way we declare with the help of stateHook.........
  const[count,setCount]=useState(0);//Using the state hook it updates the count value as well as it re-renders it..

  /*This function is used to decrease the value present in the count.*/
  function decrementHandler(){
    //count=count-1;
    /*But doing only this won't update the count value in the UI or data div.For this we have to use the use State hook
    method to uodate the state on the UI.*/

    //This is use to set the value of count with the help of StateHook...........
    setCount(count-1);
  }

  /*This function is used to increase the value present in the count.*/
  function increaseeHandler(){
    //This is use to set the value of count with the help of StateHook...........
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return(
    /*In these function we need to note it down that the function should has a root as only one child in return is
    accepted no siblings can be there.*/
    <div>

      <div className="Wrapper w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#344151] gap-10">

        <div className="Heading text-[#0398d4] font-medium text-[20px]">Increment And Decrement</div>

        <div className="Button bg-white flex text-[#344151] rounded-sm gap-12 p-3 px-5">
          <button className="Decrement border-r-2 border-[#bfbfbf] pr-5 text-center text-5xl w-20" onClick={decrementHandler}>
            -
          </button>
          <div className="Data text-center font-bold text-4xl w-20">{count}</div>
          <button className="Increment border-l-2 border-[#bfbfbf] pl-5 text-center text-5xl w-20" onClick={increaseeHandler}>
            +
          </button>
        </div>

        <button className="Reset bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" onClick={resetHandler}>Reset</button>

      </div>
      
    </div>
  );
}

export default App;
