$(document).ready(function () {
  let image = null;
  let rows = 3;
  let tempCols = 3;
  let actualCols = 3;
  let chunks = [];

  const setImage = (src) => {
    image = src;
  };

  const updateChunks = (newChunks) => {
    chunks = newChunks;
    renderChunks();
  };

  const renderChunks = () => {
    const grid = $('#image-grid');
    grid.css('grid-template-columns', `repeat(${actualCols}, minmax(0, 1fr))`);
    grid.empty();
    chunks.forEach((chunk, index) => {
      const img = $('<img>')
        .attr('src', chunk)
        .attr('alt', `Chunk ${index}`)
        .addClass('border border-gray-300 rounded-lg');
      grid.append(img);
    });
  };

  $('#image-upload').on('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  });

  $('#split-button').on('click', function () {
    if (!image) return;
    actualCols = tempCols;
    const img = new Image();
    img.src = image;
    img.onload = function () {
      const { width, height } = img;
      const chunkWidth = Math.floor(width / actualCols);
      const chunkHeight = Math.floor(height / rows);
      const newChunks = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < actualCols; col++) {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = chunkWidth;
          canvas.height = chunkHeight;
          ctx.drawImage(
            img,
            col * chunkWidth,
            row * chunkHeight,
            chunkWidth,
            chunkHeight,
            0,
            0,
            chunkWidth,
            chunkHeight
          );
          newChunks.push(canvas.toDataURL('image/png'));
        }
      }
      updateChunks(newChunks);
    };
  });

  $('#download-button').on('click', function () {
    const zip = new JSZip();
    chunks.forEach((chunk, index) => {
      const base64Data = chunk.split(',')[1];
      zip.file(`chunk_${index}.png`, base64Data, { base64: true });
    });
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      saveAs(content, 'image_chunks.zip');
    });
  });

  $('#rows-input').on('input', function () {
    rows = Number($(this).val());
  });

  $('#cols-input').on('input', function () {
    tempCols = Number($(this).val());
  });
});