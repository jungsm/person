import Carousel from "./components/Carousel"
import React, { useState} from 'react';
import axios from "axios";

import './Main.css';

function App() {
    const [person, setperson] = useState([]);
    React.useEffect(()=>{
    let url ="http://34.22.82.239:8080/getUserList?date=20230421"
    axios
    .get(url)
    .then((result) =>{const person = result.data.person; setperson(person)})
    .catch((error) => {
        console.log(error);
    });
    },[])
    console.log(person)
  return (
    <div className='wrap'>
        <section className='main'>
            <div className='main-left container'>
                <div className='advertisement'>
                    <h3>광고</h3>
                    <Carousel/>
                <div className="title">
                    <h1>광고 제목</h1>
                </div>
                </div>
                <div className="memo">
                    <h3>메모란</h3>
                    <div className="memo-box">
                        <input type="text" placeholder="메모테스트"/>
                        <input type="text" placeholder="메모테스트"/>
                        <input type="text" placeholder="메모테스트"/>
                        <input type="text" placeholder="메모테스트"/>
                        <input type="text" placeholder="메모테스트"/>
                        <input type="text" placeholder="메모테스트"/>
                        <input type="text" placeholder="메모테스트"/>
                        <input type="text" placeholder="메모테스트"/>
                        <input type="text" placeholder="메모테스트"/>
                    </div>
                </div>
            </div>
            <div className='length-line'></div>
            <div className='main-middle container'>
                <div className="customer">
                <h3>손님 4명</h3>
                <input type="date" id="start" name="trip-start"
       min="2000-01-01" max="2025-12-31"/>
                </div> 
                <div className="person-box">
                <div className="person-text">{person}</div>
                    
                    </div>            
            </div>
            <div className='length-line'></div>
            <div className='main-right container'>
                <div className="filter">
                    <h3>손님 검색 필터</h3>
                    <select name="pets" id="pet-select">
                        <option value="name">이름</option>
                        <option value="number">전화번호</option>
                        <option value="data">생년월일</option>
                    </select>
                    <input className="search" placeholder="장티엔" type="search" />
                </div>
                <div className=""></div>
            </div>




        </section>
    </div>
  );
}

export default App;
