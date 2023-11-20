import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFileStart, fetchFiles} from './fileSlice';

const FileComponent = () => {
  const dispatch = useDispatch();
  const { fileData, loading, error } = useSelector((state) => state.file || {});
  let index = 0;

  useEffect(() => {
    dispatch(fetchFiles());
    console.log("Tutaj jestś file component")
  }, [dispatch]);

  console.log("File komponent "+fileData)
  console.log("loading " +loading)

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Błąd: {error}</div>;
  }

  if (!fileData) {
    return null;
  }

  // Użyj fileData do wyrenderowania pliku, na przykład jako obraz, audio, video itp.
  return (
    <div>
      <img src={URL.createObjectURL(fileData)} alt="Pobrany plik" fileId={index++} />
    </div>
  );
};

export default FileComponent;