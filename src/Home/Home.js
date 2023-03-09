import React,{useState,useEffect} from 'react';
import Style from "./Home.module.css"
import {Link} from "react-router-dom"
import {useRecoilState} from "recoil";
import {userdata} from '../Recoil';


export default function Home(){

  const [list , setList] = useState([])
  const[ data , setData] = useRecoilState(userdata)
  console.log(data)
  const month = new Date().getMonth()
  console.log(month)
  const date = new Date().getDate()
  
  const MonthArray = ["Jan","feb","march","april","may","june","july","august","september","october","november","december"]

  const Today = data.filter((e)=>e.dob == date && e.month == MonthArray[month])
  const Tommorow = data.filter((e)=>e.dob == date+1 && e.month == MonthArray[month])
  const Yesterday = data.filter((e)=>e.dob == date-1 && e.month == MonthArray[month])
  const dayAfterTommorow = data.filter((e)=>e.dob == date+2 && e.month == MonthArray[month])
  
  

   function handlechange(e){
    console.log(e.target.value)
    setList(data)
    if(e.target.value=="Today's Birthday"){
      setList(Today)

    }else if(e.target.value == "Yesterday's Birthday"){
      setList(Yesterday)
    }else if(e.target.value == "Tommorow's Birthday"){
      setList( Tommorow)
    }else if(e.target.value === "Day After Tommorow Birthday"){
      setList(dayAfterTommorow)
    }
    
  }


  return(
    <>
     <h1 className={Style.h1}>WELCOME TO OUR HOME PAGE</h1>
    <h1 className={Style.h1}>BirtDay  Section</h1>
    <Link to="/registration">
    <button>Register Your Self</button>
    </Link>
    <select onChange={handlechange}>
    <option>Filter by Date</option>
    <option>Today's Birthday</option>
    <option>Yesterday's Birthday</option>
    <option>Tommorow's Birthday</option>
    <option>Day After Tommorow Birthday</option>
    </select>

    
    <div className={Style.list}>
     
      {list.map((e)=>
      <>
      <p>
        {e.name} {e.lastname} {e.dob} {e.year}
       </p>
       <img src = {e.image} className={Style.imgtag} />

       </>
      )}
    </div>
  );
    

    </>
  )
}