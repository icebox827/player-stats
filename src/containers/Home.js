import { useEffect, useState } from 'react';
import Api from '../utility/Api';

function Home() {
  const [Players, setPlayers] = useState(null);

  useEffect(() => {
    Api(setPlayers);
  }, []);

  return (
    <>
      <h1>Player Stats and info</h1>
      {Players && Players.map((ply) => (
        <ul key={ply.id}>
          <li>{ply.fullname}</li>
        </ul>
      ))}
    </>
  );
}

export default Home;
