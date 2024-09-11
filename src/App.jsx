import { useState } from "react";
import BarGraph from "./BarGraph";

const App = () => {
const [expenseSum, setExpenseSum] = useState("");

const handleExpenseSum = (data) => {
setExpenseSum(data)
}

return (
<div className="h-screen bg-cream font-sans grid place-items-center grid-cols-1">
  <div className="xl:w-1/3 md:w-2/3 w-11/12">
    <div className="mb-8 py-6 px-8 bg-soft-red text-white rounded-xl flex justify-between">
      <div>
        <p className="font-light pb-1">My balance</p>
        <h3 className="text-3xl font-bold">$921.48</h3>
      </div>
      <img src="./assets/images/logo.svg" alt="" />
    </div>

    <div className="py-6 px-8 rounded-xl bg-pale-orange">
      <h3 className="text-2xl font-bold text-dark-brown"> Spending- Last 7 days</h3>
      <BarGraph sendTotalSum = {handleExpenseSum} />
      <hr className="border-1" />
      <p className="mt-6 text-stone-400">Total This Month</p>
      <div className="flex justify-between">
        <h2 className="text-3xl md:text-5xl mt-1 font-bold text-dark-brown">${expenseSum}</h2>
        <div className="text-right">
          <p className="text-dark-brown font-bold">+2.4%</p>
          <p className="text-stone-400 -mt-1">from last month</p>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default App;