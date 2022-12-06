import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './reg.module.css';

export default function Reg({ setUser }) {
  const [regMsg, setRegMsg] = useState(null);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/reg', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(((res) => {
        console.log(res);
        if (res.status === 'error') {
          setRegMsg(res.msg);
        } else if (res.status === 'success') {
          setRegMsg(res.msg);
          setTimeout(() => {
            setUser({ login: res.login });
            navigate('/');
          }, 1000);
        }
      }));
  };
  return (
    <div className={classes.regForm}>
    <form onSubmit={handleSubmit}>
    <div className={classes.inputForm}>
    <label className={classes.labelForm}>Ваш логин:</label>
    <input className={classes.inputReg} type="text" value={form.name} name="login" placeholder="..." onChange={handleInput} autoComplete="on" />
    </div>
    <div className={classes.inputForm}>
    <label className={classes.labelForm}>E-mail адрес</label>
    <input className={classes.inputReg} type="email" value={form.email} name="email" placeholder="..." onChange={handleInput} autoComplete="on" />
    </div>
    <div className={classes.inputForm}>
    <label className={classes.labelForm}>Пароль:</label>
    <input className={classes.inputReg} type="password" value={form.password} name="password" placeholder="..." onChange={handleInput} autoComplete="on" />
    </div>
    <div className={classes.inputForm}>
    <label className={classes.labelForm}>Повторите пароль</label>
    <input className={classes.inputReg} type="password" value={form.confirmPassword} placeholder="..." name="confirmPassword" onChange={handleInput} autoComplete="on" />
    </div>
      <div className={classes.btnSubmit}>
    <button className={classes.regBtn} type="submit">Submit</button>
      </div>
      <div className={classes.answerReg}>{regMsg}</div>
    </form>

    </div>
  );
}
