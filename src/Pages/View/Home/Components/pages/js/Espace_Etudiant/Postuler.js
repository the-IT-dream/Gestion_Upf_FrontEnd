import React, { useState } from 'react';
import '../../css/Account.css';
import '../../css/Postuler.css';

import { Button } from '../../../../../../../Components/Mini-Components/Js/Button'
import Input from '../../../../../../../Components/Mini-Components/Js/Input';
import Sidebar from '../../../../../../../Components/Mini-Components/SideBar/components/Sidebar_Etudiant';
import TopBar from '../../../../../../../Components/Components/Js/TopBar';

function Postuler() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event, fileType) => {
    const files = event.target.files;
    setSelectedFiles([...files]);

    // Utilisation de la valeur fileType pour décider quel champ de formData mettre à jour
    setFormData(prevFormData => ({
      ...prevFormData,
      [`${fileType}Files`]: [...files]
    }));
  };

  const handleUpload = () => {
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    setSelectedFiles([]);
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    coverLetterFiles: [],  // Champs pour les fichiers de lettre de motivation
    cvFiles: [] 
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
    <div>
      <Sidebar/>
      <div className='content'>
        <div className='content__topbar'>
          <TopBar />
            
        </div>
        <div className='content__menu'>
          <main>
            <div className='Postuler__account__container'>
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
              <div className='Postuler__div'>
              <div className='Postuler__content__account'>
                <div className='parag'>
                  <p>Upload Cover letter</p>
                </div>
                <label className="custom-file-upload">
                  <input type="file" onChange={handleFileChange} />
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
              <div className='Postuler__content__account'>
                <div className='parag'>
                  <p>Upload Cv</p>
                </div>
                <label className="custom-file-upload">
                  <input type="file" onChange={handleFileChange}  />
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
          </main>
        </div>
      </div>
    
    </div>
  );
}

export default Postuler;
