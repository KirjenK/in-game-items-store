/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import './StyleAccounts.css';

export default function ListAccCS() {
  const [acc, setAcc] = useState();
  useEffect(() => {
    fetch('http://localhost:3001/csgo/listOfAccounts', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAcc(data.filter((el) => el.CategoryId === 1 && el.GameId === 1));
      })
      .catch(console.log);
  }, []);
  return (
    <div className="containerItems">
        ListOfAccounts
        <div className="containerAccount">
            <div className="filtr">
                <div>SortPrise</div>
                <button>Poisk</button>
            </div>
            <div className="mainItems">
                {acc && acc.map((el) => (
                     <div key={el.id} className="boxAccount">
                     <div className="containerImg">
                     <img className="ImgAcc" src={`http://localhost:3001/${el.image}`} alt="" />
                     </div>
                         <div>
                             <button>Info</button>
                         </div>
                                 <div>{el.price}$</div>
                                 <p>{el.description}</p>
                                     <div>
                                         <button>Корзина</button>
                                     </div>
                     </div>
                ))}

            </div>

        </div>

    </div>
  );
}
