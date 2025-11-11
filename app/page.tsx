'use client';

import { useState } from 'react';
import KitchenScene from '@/components/KitchenScene';

type Aspect = '4:5' | '9:16';

export default function Page() {
  const [aspect, setAspect] = useState<Aspect>('4:5');

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">Village Kitchen Cartoon Scene</h1>
        <div className="controls">
          <button
            className={`btn ${aspect === '4:5' ? 'active' : ''}`}
            onClick={() => setAspect('4:5')}
            aria-pressed={aspect === '4:5'}
          >
            4:5
          </button>
          <button
            className={`btn ${aspect === '9:16' ? 'active' : ''}`}
            onClick={() => setAspect('9:16')}
            aria-pressed={aspect === '9:16'}
          >
            9:16
          </button>
        </div>
      </header>

      <main className="canvas-wrap">
        <div className={`aspect-box ${aspect === '4:5' ? 'aspect-4-5' : 'aspect-9-16'}`}>
          <div className="aspect-inner">
            <KitchenScene aspect={aspect} />
          </div>
        </div>
      </main>

      <footer className="footer">
        Bright flat style, bold outlines, warm backlight, comedic exaggeration.
      </footer>
    </div>
  );
}
