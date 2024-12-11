import React, { useState, useRef } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [words, setWords] = useState(["Inspiration", "Spirit", "Eternal", "Loop", "Cosmic", "Jest", "Infinite"]);
  const [newWord, setNewWord] = useState("");
  const [rotationSpeed, setRotationSpeed] = useState(90); // in seconds per full rotation
  const [themeColor, setThemeColor] = useState("#D946EF"); // Default fuchsia

  // Draggable panel states
  const [isDragging, setIsDragging] = useState(false);
  const [panelPosition, setPanelPosition] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  const handleAddWord = () => {
    if (newWord.trim() !== "") {
      setWords((prev) => [...prev, newWord.trim()]);
      setNewWord("");
    }
  };

  const handleChangeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRotationSpeed(Number(e.target.value));
  };

  const changeThemeColor = (color: string) => {
    setThemeColor(color);
  };

  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (panelRef.current) {
      setIsDragging(true);
      const rect = panelRef.current.getBoundingClientRect();
      setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPanelPosition({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
    }
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-black font-sans overflow-hidden">
      {/* Infinite Background Symbol */}
      <div className="pointer-events-none absolute inset-0 flex justify-center items-center opacity-5">
        <div className="text-[30rem] leading-none animate-infiniteRotate select-none">
          ∞
        </div>
      </div>

      {/* Top Marquee */}
      <div className="w-full whitespace-nowrap overflow-x-hidden border-b border-neutral-200">
        <div className="animate-marquee py-2 flex items-center">
          <span className="mx-4 text-xl font-light uppercase tracking-widest">
            Infinite Jest Coin • The Loop Never Ends • Infinite Jest Coin • The Loop Never Ends
          </span>
          <span className="mx-4 text-xl font-light uppercase tracking-widest">
            Infinite Jest Coin • The Loop Never Ends • Infinite Jest Coin • The Loop Never Ends
          </span>
        </div>
      </div>

      {/* Hero / Intro */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-center leading-tight">
          INFINITE JEST COIN
        </h1>
        <p className="mt-8 max-w-xl text-center text-xl text-neutral-700">
          A conceptual token embracing the eternal loop of digital culture.
          No promises, no endpoints. Just the perpetual wink of a never-ending meme.
        </p>
      </section>

      {/* About / Philosophy */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">The Idea</h2>
        <p className="text-lg text-neutral-800 leading-relaxed">
          Infinite Jest Coin draws from the cyclical nature of online humor. Memes rise, morph, and recede,
          only to return in new guises. By tokenizing this loop, we embrace the notion that nothing truly ends,
          it only begins again. Like a literary masterpiece teasing us infinitely, or a cosmic joke without a punchline.
        </p>
      </section>

      {/* The Loop Section */}
      <section className="relative px-6 py-20 max-w-3xl mx-auto text-center border-t border-b border-neutral-200">
        <h2 className="text-4xl font-bold mb-8">Embrace the Loop</h2>
        <p className="text-lg text-neutral-800 leading-relaxed mb-6">
          No roadmap. No final frontier. Just an infinite feedback loop.
          We are here to remind you: the joke always continues.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block mt-6 px-8 py-3 border-2 border-fuchsia-500 text-fuchsia-500 rounded-full font-semibold hover:bg-fuchsia-500 hover:text-white transition-colors"
        >
          Enter the Infinite
        </button>
      </section>

      {/* Closing Thoughts */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Infinite Jest</h2>
        <p className="text-lg text-neutral-800 leading-relaxed">
          By simply existing, the Infinite Jest Coin acknowledges that our digital lives
          are built on endless references, jokes, and cycles. Embrace the absurdity, for it’s
          what makes us human—even when we’re laughing into the void.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-neutral-500 border-t border-neutral-200">
        <p className="text-sm">
          © {new Date().getFullYear()} Infinite Jest Coin — The eternal loop that winks forever.
        </p>
      </footer>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onMouseMove={onDrag}
          onMouseUp={endDrag}
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4 select-none">

            {/* Rotating Infinite Symbol (SVG) */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                animation: `infiniteRotateSlow ${rotationSpeed}s linear infinite`
              }}
            >
              <svg fill={themeColor} height="400px" width="400px" version="1.1" id="Layer_1"
                viewBox="0 0 512 512">
                <g>
                  <g>
                    <path d="M491.841,156.427c-19.471-45.946-51.937-85.013-92.786-112.637C358.217,16.166,308.893-0.007,256,0
			c-35.254-0.002-68.946,7.18-99.571,20.158C110.484,39.63,71.416,72.093,43.791,112.943C16.167,153.78-0.007,203.104,0,256
			c-0.002,35.255,7.181,68.948,20.159,99.573c19.471,45.946,51.937,85.013,92.786,112.637C153.783,495.834,203.107,512.007,256,512
			c35.253,0.002,68.946-7.18,99.571-20.158c45.945-19.471,85.013-51.935,112.638-92.785C495.834,358.22,512.007,308.894,512,256
			C512.002,220.745,504.819,187.052,491.841,156.427z M460.413,342.259c-16.851,39.781-45.045,73.723-80.476,97.676
			c-35.443,23.953-78.02,37.926-123.936,37.933c-30.619-0.002-59.729-6.218-86.255-17.454
			c-39.781-16.851-73.724-45.044-97.677-80.475C48.114,344.495,34.14,301.917,34.133,256c0.002-30.62,6.219-59.731,17.454-86.257
			c16.851-39.781,45.045-73.724,80.476-97.676C167.506,48.113,210.084,34.14,256,34.133c30.619,0.002,59.729,6.218,86.255,17.454
			c39.781,16.85,73.724,45.044,97.677,80.475c23.953,35.443,37.927,78.02,37.934,123.939
			C477.864,286.621,471.648,315.732,460.413,342.259z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M433.11,223.51c-6.359-14.999-16.927-27.712-30.24-36.717c-6.657-4.502-14.011-8.076-21.864-10.524
			c-7.852-2.448-16.206-3.765-24.812-3.764c-12.362-0.011-24.036,2.613-34.69,6.984c-9.338,3.823-17.934,8.94-25.971,14.798
			c-14.059,10.268-26.501,22.793-38.382,35.605c-0.386,0.417-0.764,0.837-1.149,1.256c-0.083-0.091-0.166-0.183-0.249-0.274
			c-6.661-7.219-13.506-14.351-20.697-21.066c-10.79-10.06-22.363-19.233-35.455-26.079c-6.542-3.416-13.469-6.23-20.791-8.185
			c-7.318-1.956-15.027-3.04-23.007-3.038c-11.476-0.002-22.496,2.343-32.491,6.581c-14.999,6.359-27.712,16.927-36.717,30.24
			c-4.502,6.657-8.076,14.011-10.524,21.864c-2.448,7.852-3.765,16.206-3.764,24.812c-0.002,11.476,2.343,22.496,6.581,32.491
			c6.359,14.997,16.928,27.71,30.24,36.715c6.657,4.502,14.011,8.076,21.864,10.524c7.852,2.448,16.206,3.765,24.812,3.764
			c12.362,0.01,24.036-2.613,34.69-6.984c9.338-3.823,17.934-8.94,25.971-14.798c14.059-10.268,26.501-22.793,38.382-35.605
			c0.386-0.417,0.764-0.837,1.149-1.255c0.083,0.091,0.166,0.183,0.249,0.274c6.661,7.219,13.506,14.351,20.697,21.066
			c10.79,10.06,22.363,19.233,35.455,26.079c6.542,3.414,13.469,6.23,20.791,8.185c7.318,1.956,15.027,3.04,23.007,3.038
			c11.476,0.002,22.496-2.344,32.491-6.581c14.999-6.359,27.712-16.927,36.717-30.24c4.502-6.657,8.076-14.011,10.524-21.864
			c2.448-7.852,3.765-16.206,3.764-24.811C439.693,244.525,437.348,233.505,433.11,223.51z M231.208,258.483
			c-6.355,6.889-12.655,13.433-18.941,19.299c-9.426,8.813-18.817,16.044-28.117,20.884c-4.654,2.428-9.28,4.277-13.954,5.525
			c-4.678,1.247-9.406,1.905-14.391,1.907c-6.941-0.002-13.479-1.403-19.462-3.934c-8.968-3.795-16.665-10.183-22.079-18.195
			c-2.708-4.005-4.845-8.406-6.306-13.094c-1.461-4.69-2.251-9.666-2.251-14.873c0.002-6.941,1.403-13.479,3.934-19.461
			c3.795-8.967,10.183-16.665,18.196-22.079c4.004-2.708,8.406-4.845,13.096-6.306c4.69-1.461,9.666-2.251,14.873-2.251
			c7.708,0.01,14.84,1.562,22.044,4.497c6.287,2.569,12.592,6.242,18.941,10.873c11.116,8.086,22.275,19.114,33.553,31.311
			c1.039,1.122,2.085,2.278,3.127,3.418C232.718,256.826,231.961,257.668,231.208,258.483z M402.36,275.464
			c-3.795,8.968-10.183,16.665-18.196,22.079c-4.004,2.708-8.406,4.845-13.096,6.306c-4.69,1.461-9.666,2.251-14.873,2.251
			c-7.708-0.01-14.84-1.562-22.044-4.497c-6.287-2.569-12.592-6.242-18.941-10.873c-11.116-8.086-22.275-19.114-33.553-31.311
			c-1.039-1.122-2.085-2.279-3.127-3.418c0.754-0.825,1.511-1.667,2.263-2.481c6.355-6.889,12.655-13.433,18.941-19.299
			c9.426-8.813,18.817-16.044,28.117-20.884c4.654-2.428,9.28-4.277,13.954-5.525c4.678-1.247,9.406-1.905,14.391-1.907
			c6.941,0.002,13.479,1.403,19.462,3.934c8.968,3.795,16.665,10.183,22.079,18.196c2.708,4.005,4.845,8.406,6.306,13.094
			c1.461,4.69,2.251,9.666,2.251,14.873C406.293,262.942,404.892,269.48,402.36,275.464z"/>
                  </g>
                </g>
              </svg>
            </div>

            {/* Floating Words */}
            <div className="relative w-full h-full pointer-events-none">
              {words.map((word, idx) => (
                <div
                  key={idx}
                  className="absolute font-bold whitespace-nowrap animate-floatWord"
                  style={{
                    fontSize: `${Math.random() * 2 + 1.5}rem`,
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    color: themeColor,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                >
                  {word}
                </div>
              ))}
            </div>

            {/* Control Panel - Draggable */}
            <div
              ref={panelRef}
              className="absolute cursor-move bg-white bg-opacity-90 text-black p-6 rounded-xl shadow-lg w-full max-w-md"
              style={{
                top: `${panelPosition.y}px`,
                left: `${panelPosition.x}px`
              }}
              onMouseDown={startDrag}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Infinite Controls</h3>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Add a Word
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    className="flex-grow border border-neutral-300 rounded px-2 py-1"
                    placeholder="Type a new word..."
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent drag start when clicking button
                      handleAddWord();
                    }}
                    className="px-4 py-1 bg-neutral-800 text-white rounded hover:bg-neutral-700"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Rotation Speed (seconds per rotation)
                </label>
                <input
                  type="range"
                  min="30"
                  max="180"
                  value={rotationSpeed}
                  onChange={(e) => { e.stopPropagation(); handleChangeSpeed(e); }}
                  className="w-full"
                />
                <p className="text-sm text-neutral-600 mt-1">Current: {rotationSpeed}s</p>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Theme Color
                </label>
                <div className="flex gap-2">
                  {["#D946EF", "#22C55E", "#3B82F6", "#F97316", "#EF4444"].map((color) => (
                    <button
                      key={color}
                      onClick={(e) => {
                        e.stopPropagation();
                        changeThemeColor(color);
                      }}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(false);
                  }}
                  className="px-4 py-2 bg-black text-white font-semibold rounded hover:bg-neutral-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
