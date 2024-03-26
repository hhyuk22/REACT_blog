import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(['남자 코트 추천', '남자 바지 추천', '남자 상의 추천',]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('')
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>김혁래의 블로그</h4>
      </div>
      {
        글제목.map(function(a, i){
          return (
            <div className= "list" key={i}>
              <h4 onClick={()=>{
                let a = modal
                a == true ? setModal(false) : setModal(true)
                setTitle(i)
                }}>{글제목[i]}
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i]=copy[i]+1;
                  따봉변경(copy);}}>👍</span> {따봉[i]}</h4>
                <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1)
                b(copy)}}>삭제</button>
              <p>1월 13일 발행</p>
            </div>
          )
        })
      }
      <input onChange={(e)=>{
        입력값변경(e.target.value)}}>
      </input>
      <button onClick={()=>{
      let copy = [...글제목];
        copy.push(입력값)
        b(copy)
      let copy2 =[...따봉];
      copy2.push(0)
      따봉변경(copy2)}}>글발행</button>
      {
        modal == true ? <Modal b={b} 글제목={글제목} title={title}/> : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목];
        copy[0] = '여자 코트 추천';
        props.b(copy);
        }}>버튼
      </button>
    </div>
  )

}

export default App;
