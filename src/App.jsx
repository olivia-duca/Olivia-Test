import React from 'react';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'linear-gradient(135deg, var(--bayer-primary-50) 0%, var(--bayer-secondary-50) 100%)' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 lmnt-theme-primary">Bayer Calculator</h1>
          <p className="lmnt-theme-on-background opacity-70">Precision in every calculation</p>
        </div>
        <Calculator />
      </div>
    </div>
  );
}

export default App;