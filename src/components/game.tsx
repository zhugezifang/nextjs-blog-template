"use client"

export function Game({
  url
}: {
  url: string
}) {
  console.log(url);
  const handleClick = () => {
    const gameElement = document.getElementById("game");
    if (gameElement) {
        gameElement.requestFullscreen();
    }
    console.log("Button clicked!");
  };

  return (
    <div className="w-full mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm" title="Fullscreen">FullScreen</button>
      </div>
    <iframe id="game" src={url} allow="autoplay"  style={{ border:'10px solid #fff',top: '0px', left: '0px',width: '100%', height: '600px'}}></iframe>
    </div>
  )
}
