import { useState } from 'react';
import InputPage from './pages/InputPage.jsx';
import ViewPage from './pages/ViewPage';

export default function App() {
  const [page, setPage] = useState('input');
  const [points, setPoints] = useState({
    A: { x: 100, y: 100 },
    B: { x: 500, y: 150 },
    C: { x: 250, y: 600 }
  });

  return page === 'input' ? (
    <InputPage points={points} setPoints={setPoints} onNext={() => setPage('view')} />
  ) : (
    <ViewPage points={points} onBack={() => setPage('input')} setPoints={setPoints} />
  );
}
