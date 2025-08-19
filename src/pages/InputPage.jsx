import './InputPage.css';

export default function InputPage({ points, setPoints, onNext }) {
  function updatePoint(k, axis, value) {
    const v = Number(value);
    setPoints(prev => ({ ...prev, [k]: { ...prev[k], [axis]: v } }));
  }

  return (
    <div className="input-page">
      <h1>עמוד קליטה</h1>
      <p>נא להזין שלוש נקודות (X,Y):</p>

      {['A','B','C'].map(k => (
        <div key={k} className="point-row">
          
          <label> X: </label>

          <input type="number" value={points[k].x}
                 onChange={e=>updatePoint(k,'x',e.target.value)} />
                 
          <label> Y: </label>
          <input type="number" value={points[k].y}
                 onChange={e=>updatePoint(k,'y',e.target.value)} />
        </div>
      ))}

      <button className="btn" onClick={onNext}>הצג משולש</button>
    </div>
  );
}
