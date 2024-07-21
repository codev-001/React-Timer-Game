import Player from './components/Player.jsx';
import Challenges from './components/challenges.jsx';


function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenges title={'Easy'} targetTime={1}/>
        <Challenges title={'Medium'} targetTime={5}/>
        <Challenges title={'Hard'} targetTime={10}/>
        <Challenges title={'Extreme'} targetTime={15}/>

      </div>
    </>
  );
}

export default App;
