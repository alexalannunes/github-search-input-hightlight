import { Fragment, useState } from 'react';
import './App.css';

function Value({ value }: { value: string }) {
  const tokens = value.split(' ');

  const params = tokens.map((token, index) => {
    const colValue = token.split(':');
    if (colValue.length > 1) {
      return (
        <Fragment key={index}>
          <span>
            {index !== 0 && ' '}
            {colValue[0]}:
          </span>
          <span className="filter-value">{colValue[1]}</span>
        </Fragment>
      );
    }
    return (
      <span key={index}>
        {index !== 0 && ' '}
        {colValue[0]}
      </span>
    );
  });

  return (
    <div className="result">
      {params.map((s,x) => (
        <Fragment key={x}>{s}</Fragment>
      ))}
    </div>
  );
}

function App() {
  const [value, setValue] = useState('repo:alexalannunes user:alexalannunes');
  return (
    <>
      <div className="input">
        <Value value={value} />
        <input
          spellCheck={false}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
      </div>
    </>
  );
}

export default App;
