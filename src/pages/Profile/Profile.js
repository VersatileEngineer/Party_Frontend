import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext"; 

import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase/config";

import { useNavigate } from 'react-router-dom';



export default function Profile() {
  const {user} = useAuthContext();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://th.bing.com/th/id/OIP.aXaaimA5JT6Lp3XYXN5FGAAAAA?pid=ImgDet&w=206&h=206&c=7");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }
  async function updateUserProfile(file, user, setLoading){
    const fileRef = ref(storage,user.uid + '.png');
    
     setLoading(true);
      const snapshot = await uploadBytes(fileRef, file);
      const photoURL = await getDownloadURL(fileRef);
      updateProfile(user, { photoURL })
        .then((res) => {
          dispatch({ type: 'UPDATE', payload: res.currentUser })
        })
        .catch((err) => {
          setError(err.message)
        })
      setLoading(false);
      alert("Uploaded file!");
      navigate('/')
  }

  function handleClick() {
    updateUserProfile(photo, user, setLoading);
  }

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user])

  return (
    <div className="fields">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="Avatar" className="avatar" />
    </div>
  );
}