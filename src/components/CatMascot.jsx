function Bouquet() {
  return <g className="bouquet-art" strokeLinecap="round" strokeLinejoin="round">
    <path d="M166 163 142 208m25-44 2 46m7-45 23 44" fill="none" stroke="#82916e" strokeWidth="4" />
    <path d="m143 204 39-2-9 17-20-1z" fill="#e9b6cc" stroke="#c98ba9" strokeWidth="2" />
    <g fill="#f5a9cb" stroke="#ffd6e8" strokeWidth="1.5">
      <circle cx="162" cy="143" r="12"/><circle cx="183" cy="135" r="12"/><circle cx="200" cy="150" r="12"/><circle cx="181" cy="160" r="12"/>
    </g>
    <g fill="#ffe1a8"><circle cx="162" cy="143" r="4"/><circle cx="183" cy="135" r="4"/><circle cx="200" cy="150" r="4"/><circle cx="181" cy="160" r="4"/></g>
    <path d="m161 173-11-5m28 4 12-8m-27 22-12 6" fill="none" stroke="#9eb28b" strokeWidth="3" />
  </g>;
}

export default function CatMascot({ mood = 'happy', accessory = 'heart', className = '' }) {
  return <svg className={`cat-illustration cat-${mood} ${className}`} viewBox="0 0 260 270" role="img" aria-label={mood === 'sad' ? 'A little sad kitten' : 'A sweet kitten'} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fur" x1=".15" y1="0" x2=".8" y2="1"><stop stopColor="#fffaf5"/><stop offset="1" stopColor="#e9dff0"/></linearGradient>
      <linearGradient id="belly" x1="0" y1="0" x2=".9" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#f8eaf2"/></linearGradient>
      <filter id="cat-shadow" x="-40%" y="-40%" width="180%" height="190%"><feDropShadow dx="0" dy="7" stdDeviation="6" floodColor="#0b0714" floodOpacity=".2"/></filter>
    </defs>
    <g filter="url(#cat-shadow)" stroke="#d7c7db" strokeWidth="2.5" strokeLinejoin="round">
      <path className="cat-tail" d="M78 210c-43 12-51-21-29-33 11-6 22 2 19 12-2 6-11 8-15 3" fill="none" stroke="#e9dff0" strokeWidth="13"/>
      <path d="M78 164c-7 31 3 67 46 72 43 4 64-22 53-63-6-24-28-36-54-35-23 0-39 9-45 26z" fill="url(#fur)"/>
      <path d="M106 187c-8 21-4 39 16 42 22 2 30-15 24-38-4-15-32-18-40-4z" fill="url(#belly)" stroke="#efe4ed"/>
      <path d="m63 69 7-48 40 31m49 17 35-42 8 53" fill="url(#fur)"/>
      <path d="m77 53 2-20 19 18m65 9 21-25 3 34" fill="#eeb8d0" stroke="none"/>
      <path d="M57 96c0-39 30-64 72-64 41 0 74 28 74 67 0 42-30 68-74 68-41 0-72-27-72-71z" fill="url(#fur)"/>
      <ellipse cx="82" cy="132" rx="13" ry="7" fill="#f2aac7" stroke="none" opacity=".63"/><ellipse cx="176" cy="132" rx="13" ry="7" fill="#f2aac7" stroke="none" opacity=".63"/>
      <g className="cat-eyes" fill="#4d3d58" stroke="none"><ellipse cx="94" cy="109" rx="5" ry="8"/><ellipse cx="164" cy="109" rx="5" ry="8"/><circle cx="95" cy="106" r="1.6" fill="white"/><circle cx="165" cy="106" r="1.6" fill="white"/></g>
      <path d="m124 124 6-4 6 4-6 5z" fill="#d68eac" stroke="none"/><path className="cat-mouth" d={mood === 'sad' ? 'M121 141q9-9 18 0' : 'M122 137q8 8 16 0'} fill="none" stroke="#947587" strokeWidth="2"/>
      <path d="M118 127 92 124m27 9-30 4m64-10 27-3m-27 9 30 4" fill="none" stroke="#c7b4c8" strokeWidth="1.5"/>
      <path d="M102 220v14m42-14v14" stroke="#d7c7db" strokeWidth="8" strokeLinecap="round"/>
      {mood === 'sad' && <path className="cat-tear" d="M166 116c-9 12-8 17-2 18 7 1 10-7 2-18z" fill="#a9c8eb" stroke="#d6e6f8" strokeWidth="1"/>}
    </g>
    {accessory === 'bouquet' && <Bouquet/>}
    {accessory === 'heart' && <g className="cat-heart" transform="translate(180 165) rotate(10)"><path d="M0 18C-30-2-14-21 0-9 14-21 30-2 0 18Z" fill="#f5a9cb" stroke="#ffe4f0" strokeWidth="3"/></g>}
    {accessory === 'flower' && <g transform="translate(187 85)" fill="#f5a9cb" stroke="#ffe4f0" strokeWidth="2"><circle cy="-8" r="7"/><circle cx="8" r="7"/><circle cy="8" r="7"/><circle cx="-8" r="7"/><circle r="3" fill="#ffe3a8" stroke="none"/></g>}
  </svg>;
}
