import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Noti from './components/Noti';
<body> </body>
function App() {
  return (
    <div>
      <NavBar />
      <Noti topic= 'HS-ANALYYSI:' body= 'Vielä keskiviikko­iltana näytti siltä, ettei STM ole valmis kumoamaan tanssi­kieltoa – sitten tuli soitto pääministerin kabinetista' /> 
      <Noti topic= 'MAINOS:' body= 'Lunasta kaksi viikkoa maksutonta lukuaikaa!' /> 
      <Noti topic= 'PÄIVÄN TIMANTTI:' body= 'Treenaaminen ja ero eivät rakaisseet Roope Salmisen alkoholiongelmaa' /> 
      <Main />
    </div>
  );
}
export default App;
