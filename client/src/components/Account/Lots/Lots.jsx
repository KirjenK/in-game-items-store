import React, { useState, useEffect } from 'react';
import style from './Stylelots.module.css';

export default function Lots() {
  const [lots, setLots] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
  });
  const [img, setImg] = useState(null);

  useEffect(() => {
    // const abortController = new AbortController();
    fetch('http://localhost:3001/lots', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log('КОНСОЛЬ В ЮЗ ЭФЕКТЕ');
        setLots(data);
      })
      .catch(console.log);

    // return () => console.log('ЮЗ ЭФЕКТ ТЕСТ');
  }, []);

  const handleDeleteLot = (e) => {
    const { id } = e.target;
    console.log('АЙДИ КНОПКИ', id);

    fetch('http://localhost:3001/lots', {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.status === 'удалено') {
          // console.log('удалил лот из базы');
          setLots(lots.filter((el) => el.id !== +id));
        }
      }).catch(console.log);
  };

  const handleEditLot = (e) => {
    // console.log(e.target.id);
    setIsEdit(!isEdit);
    const targetLot = lots.find((el) => el.id === +e.target.id);
    // console.log(targetLot);
    setForm({
      id: targetLot.id,
      name: targetLot.name,
      price: targetLot.price,
      GameId: targetLot.GameId,
      CategoryId: targetLot.CategoryId,
      image: targetLot.image,
      description: targetLot.description,
    });
  };

  const handeleInput = (e) => {
    // console.log(e.target.name, e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log('ИЗМЕНЕННАЯ ФОРМА', form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', img);
    data.append('form', JSON.stringify(form));
    fetch('http://localhost:3001/lots', {
      method: 'POST',
      credentials: 'include',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(form),
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log('ИЗМЕНЕННЫЙ ПРОДУКТ', data);
        setLots((arr) => arr.map((el) => {
          if (el.id === res.id) {
            return res;
          }
          return el;
        }));
      }).catch(console.log);
  };

  const testImg = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleClose = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className={style.containerLot}>
<div>
  {lots && lots.map((lot) => (
    <div key={lot.id} className={style.containerItem}>
      <div className={style.containerImg}><img className={style.ImgLot} src={`http://localhost:3001/${lot.image}`} alt={lot.name} /></div>
      <div className={style.containerInfo}>
      <div>Название: {lot.name}</div>
      <div>Цена: {lot.price} </div>
      <div className={style.description}>Описание: {lot.description}</div>
      {!lot.approved ? (<div>Статус: На рассмотрении</div>) : (null) }
      <div>Выставлен на продажу: {new Date(lot.updatedAt).toLocaleDateString()}</div>
      <button className={style.button} type="button" onClick={handleDeleteLot} id={lot.id}> Удалить</button>
      <button type="button" className={`${!isEdit ? style.visible : style.invisible2}`} onClick={handleEditLot} id={lot.id}> Редактировать</button>
      </div>
    </div>

  ))}
</div>
<div className={`${isEdit ? 'visible' : style.invisible}`}>

<form className={style.containerInput} onSubmit={handleSubmit}>
Форма изменения
    <input className={style.input} onChange={handeleInput} name="name" value={form.name} placeholder="name" />
    <input className={style.input} onChange={handeleInput} name="price" value={form.price} placeholder="price" />
    {/* <input onChange={handeleInput} name="image" value={form.image} placeholder="img" /> */}
    <div className={style.containerMulter}>
      Изменить картинку:
      <input className={style.inputMulter} type="file" onChange={testImg} />
    </div>
    <input className={style.input} onChange={handeleInput} name="description" value={form.description} placeholder="description" />
    <button className={style.button} type="button" onClick={handleClose}> Закрыть</button>
    <button className={style.button} type="submit" onClick={handleClose}>Отправить изменения</button>
</form>
</div>
    </div>
  );
}
