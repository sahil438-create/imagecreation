import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const CanvasEditor = ({ imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas');
    canvasRef.current = canvas;

    if (imageUrl) {
      fabric.Image.fromURL(imageUrl, (img) => {
        canvas.add(img);
        img.scaleToWidth(canvas.width);
        img.scaleToHeight(canvas.height);
        canvas.renderAll();
      });
    }

    return () => {
      canvas.dispose();
    };
  }, [imageUrl]);

  const addText = () => {
    const canvas = canvasRef.current;
    const text = new fabric.IText('Edit me', {
      left: 100,
      top: 100,
      fill: '#000',
    });
    canvas.add(text);
  };

  const addShape = (shape) => {
    const canvas = canvasRef.current;
    let shapeObject;
    switch (shape) {
      case 'circle':
        shapeObject = new fabric.Circle({
          radius: 50,
          fill: '#f55',
          left: 100,
          top: 100,
        });
        break;
      case 'rectangle':
        shapeObject = new fabric.Rect({
          width: 100,
          height: 50,
          fill: '#55f',
          left: 100,
          top: 100,
        });
        break;
      case 'triangle':
        shapeObject = new fabric.Triangle({
          width: 100,
          height: 100,
          fill: '#5f5',
          left: 100,
          top: 100,
        });
        break;
      default:
        return;
    }
    canvas.add(shapeObject);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1.0,
    });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas-image.png';
    link.click();
  };

  return (
    <div>
      <canvas id="canvas" width="800" height="600"></canvas>
      <button onClick={addText}>Add Text</button>
      <button onClick={() => addShape('circle')}>Add Circle</button>
      <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
      <button onClick={() => addShape('triangle')}>Add Triangle</button>
      <button onClick={downloadImage}>Download</button>
    </div>
  );
};

export default CanvasEditor;
