import './App.css';
import Patient from './component/patient';
import data from './data/patient.json';

function App() {
  let name = `${data.name[0].given} ${data.name[0].family}`;
  let gender =data.gender;
  let org = data.managingOrganization.display;
  let condition = data.conditions;
  return (
    <div className="App">
      <header className="App-header">
        <div className="patient">
          <Patient name={name} org={org} gender={gender} conditions={condition} />
        </div>

      </header>
    </div>
  );
}

export default App;
