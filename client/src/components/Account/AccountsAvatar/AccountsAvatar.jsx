import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAvatar } from '../../../store/actions/userAction';
import './styleAvatar.css';

export default function AccountsAvatar() {
  const { user } = useSelector((store) => store.userStore);
  const [img, setImg] = useState(null);
  const [form, setForm] = useState({
    image: '',
  });
  const [userBD, setUseBD] = useState(`${user?.image}`);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/account', {

      credentials: 'include',

    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(userAvatar(res.image));
        setUseBD(res.image);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', img);
    data.append('form', JSON.stringify(form));
    fetch('http://localhost:3001/account', {
      method: 'PUT',
      credentials: 'include',
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(userAvatar(res.image));
        setUseBD(res.image);
      });
  };
  console.log('>>>>>>', userBD);

  const testImg = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  return (
    <>
     <div>Добрый день { user && user.login}!!</div>
    <div>

        <img className="imgCreateAvatar" src={`http://localhost:3001/${userBD && userBD}`} alt="" />
    </div>
            <form onSubmit={handleSubmit}>
                <h2>Изменить Аватар</h2>
            <input type="file" onChange={testImg} />
            <button type="submit" id={user && user.userId}>Submit</button>
            </form>

    </>
  );
}
