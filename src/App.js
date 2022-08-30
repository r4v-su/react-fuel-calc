import "./App.css";
import DistanceField from "./components/DistanceField.jsx";
import ConsumptionField from "./components/ConsumptionField.jsx";
import FuelsToggle from "./components/FuelsToggle.jsx"
import CostsTable from "./components/CostsTable.jsx";
import OtherCosts from "./components/OtherCosts.jsx"
import FuelsRadios from "./components/FuelRadio.jsx";

function App() {
	return (
		<div class="container-fluid calc p-3 row-cols-3">
			<div class="col-auto">
				<span class="h2">Kalkulator podrózy</span>
				<form>
        <div class="form-control">
					<DistanceField />
          <ConsumptionField />
          <FuelsToggle />
          <FuelsRadios />
          <OtherCosts />
          <CostsTable />
          </div>
				</form>
			</div>
		</div>
	);
}

export default App;
