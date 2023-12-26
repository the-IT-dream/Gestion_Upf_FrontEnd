import React, { useState } from 'react';
import '../css/Account.css';
import '../css/Postuler.css';

import { Button } from '../../../../../../Components/Mini-Components/Js/Button'
import Input from '../../../../../../Components/Mini-Components/Js/Input';

function Postuler() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...files]);
  };

  const handleUpload = () => {
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    setSelectedFiles([]);
  };

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // State to track focused input
  const [focusedInput, setFocusedInput] = useState(null);

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle input focus
  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for handling form submission here
    // For example, you can send the data to a server for authentication
    console.log('Form submitted with data:', formData);
    console.log('Files uploaded:', uploadedFiles);
  };

  const [clicked, setClicked] = useState(false);

  return (
    <div className='account__container'>
      <div className='content__header__account'>
        <h2>Postuler</h2>
        <div className='image__container'>
          <div className='image__text__account'>
            <div className='image__button'>
              <select>
                <optgroup>
                  <option>capgimini</option>
                  <option>cgi</option>
                  <option>atos</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='content__account'>
        <div className='parag'>
          <p>Upload Multiple Files</p>
        </div>
        <label className="custom-file-upload">
          <input type="file" onChange={handleFileChange} multiple />
          <i className="fa fa-cloud-upload"></i>
          <span>Drop Files here or click to upload</span>
        </label>
        {selectedFiles.length > 0 && (
          <div className="selected-files">
            <p>Selected Files:</p>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        {uploadedFiles.length > 0 && (
          <div className="uploaded-files">
            <p>Uploaded Files:</p>
            <ul>
              {uploadedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='footer__account'>
        <div className='image__button__footer'>
          <Button
            buttonStyle={'btn--save--style'}
            buttonSize={'btn--save--size'}
            children={'Upload Files'}
            buttonPath={'/Espace_Etudiant'}
            onClick={handleSubmit}
          />
          <Button
            className='reset_butt'
            buttonStyle={'btn--remove--style'}
            buttonSize={'btn--remove--size'}
            children={'Remove All'}
            buttonPath={'/Espace_Etudiant'}
          />
        </div>
      </div>
    </div>
  );
}

export default Postuler;
