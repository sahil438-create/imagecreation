import React, { useState, useCallback, useEffect } from 'react';

import './App.css';
import SearchBar from './components/searchBar';
import ImageResults from './components/ImageResults';
import CanvasEditor from './components/CanvasEditor';

const App = () => {
  const [images, setImages] = useState([]);
  const [imagesdata, setimagesdata] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (query) => {
    const response = await fetch(
      `https://pixabay.com/api/?key=44961852-4b47c4620eca70cf11bbf6b3e`
    );

    const data = await response.json();
    setimagesdata(data.hits);

    const Filtereddata = imagesdata.filter((elem) => {
      setImages(data.hits);
      const tagsArray = elem.tags.split(',');
      return tagsArray.some((tag) => tag.trim().includes(query));
    });
    setImages(Filtereddata);
    console.log(images, 'images');
  };

  return (
    <div className="App">
      Name:<h1>Sahil Gupta</h1> <br/>
      Email : <h1>Gsahil438@gmail.com</h1>  <br/>
      <SearchBar onSearch={fetchImages} images={images} />
      <ImageResults images={images} onSelectImage={setSelectedImage} />
      {selectedImage && <CanvasEditor imageUrl={selectedImage} />}
    </div>
  );
};

export default App;
