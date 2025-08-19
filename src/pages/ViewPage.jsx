import './ViewPage.css';

export default function ViewPage({ points, onBack }) {
  const {A,B,C} = points;

  // פונקציות מתמטיות בפנים (בלי utils)
  const dist = (p, q) => Math.hypot(p.x - q.x, p.y - q.y);
  const toDeg = r => r * 180 / Math.PI;
  function lawOfCos(a,b,c){
    const cosA = (b*b + c*c - a*a) / (2*b*c);
    return Math.acos(Math.max(-1, Math.min(1, cosA)));
  }

  const a = dist(B,C), b = dist(A,C), c = dist(A,B);
  const alpha = toDeg(lawOfCos(a,b,c)).toFixed(1);
  const beta  = toDeg(lawOfCos(b,a,c)).toFixed(1);
  const gamma = toDeg(lawOfCos(c,a,b)).toFixed(1);

  return (
    <div className="view-page">
      <h1>עמוד תצוגה</h1>

      <div className="canvas-wrap">
        <svg viewBox="0 0 800 800" className="canvas" preserveAspectRatio="xMidYMid meet">
          <polygon points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`} className="tri" />
          <circle cx={A.x} cy={A.y} r="4" className="pt"/>
          <circle cx={B.x} cy={B.y} r="4" className="pt"/>
          <circle cx={C.x} cy={C.y} r="4" className="pt"/>
          <text x={A.x+10} y={A.y} className="label">{alpha}°</text>
          <text x={B.x+10} y={B.y} className="label">{beta}°</text>
          <text x={C.x+10} y={C.y} className="label">{gamma}°</text>
        </svg>
      </div>
            <button className="button" onClick={onBack}> חזרה אחורה</button>

    </div>
  );
}