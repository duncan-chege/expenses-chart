import { BarGraph } from "./BarGraph";

const App = () => {
return (
<div className="h-screen bg-cream font-sans grid place-items-center grid-cols-1">
  <div className="w-1/3">
    <div className="mb-8 py-6 px-8 bg-soft-red text-white rounded-xl flex justify-between">
      <div>
        <p className="font-light pb-1">My balance</p>
        <h3 className="text-2xl font-bold">$921.48</h3>
      </div>
      <img src="../public/assets/images/logo.svg" alt="" />
    </div>
    <div className="py-6 px-8 rounded-xl bg-pale-orange">
      <h3 className="text-2xl font-bold text-dark-brown"> Spending- Last 7 days</h3>
      <BarGraph />
    </div>
  </div>
</div>
)
}

export default App;