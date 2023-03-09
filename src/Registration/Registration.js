import React,{useState,useRef} from "react";
import {Link} from "react-router-dom"
import {userdata} from '../Recoil'
import {useRecoilState} from "recoil"
import Style from "./Registration.module.css"
import CustomSelector from '../CustomSelector'



export default function  Registration(){

  const [name , setName] = useState("")
  const [lastname , setLastname] = useState("")
  const [image , setImage] = useState("")
  const [show , setShow] = useState(false)
  const [date , setDate] = useState("")
  const [month , setMonth] = useState("")
  const [year , setYear] = useState("")
  const [user , setUser ]  = useRecoilState(userdata)
  const Myref = useRef("")
  const DateArray = Array(31).fill(1).map((e,i)=>e+i)
  const MonthArray = ["Jan","feb","march","april","may","june","july","august","september","october","november","december"]
  const YearArray = Array(35).fill(1990).map((e,i)=>e+i)
  
  
  

  function handlefirstname(e){
   setName(e.target.value)
   console.log(e.target.value)
  }
  function handlelastname(e){
    setLastname(e.target.value)
    console.log(e.target.value)
   }
   
   function handleimage(e){
     if(e.target.files[0]){
       setImage(URL.createObjectURL(e.target.files[0]))
       console.log(e.target.files[0])
     }
     setShow(true)
   }
   function handleimageClick(){
     Myref.current.click()
   }
   function handledate(e){
     setDate(e.target.value)
   }
   function handlemonth(e){
    setMonth(e.target.value)
  }
  function handleyear(e){
    setYear(e.target.value)
  }
  function handlesubmit(){
   const sub = {
      id : 1,
      name : name,
      lastname: lastname,
      dob : date,
      month : month,
      year : year,
      image : image

   }
   setUser([sub,...user])
   console.log(user,"i m from ")
   alert("you are registered")
  }




  return(

    <div className={Style.body}>
    <div className={Style.container} >
    <h1 className={Style.registration}>Registration Page</h1>
    {show ?
    <img src = {image} className={Style.img1}/>
    :
    <div onClick={ handleimageClick}>
    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcCPPVjCBxBNdDx-2xGgW-L5uDPBLbJui-tRFJTdDnQ&s" className={Style.img} />

    </div>
}
    
     <div>
      <label>FIRST NAME</label>
      :
     <input onChange={handlefirstname} type="text" value={name} placeholder="FIRST NAME"/>
     </div>
     <div>
      <label>LAST NAME</label>
      :
     <input  onChange={handlelastname} type="text" value={lastname} placeholder="LAST NAME"/>
     </div>
    

     <div className={Style.inputimage}>
      <label>IMAGE</label>
      :
     < input onChange={handleimage} ref={Myref} type="file"   />
     </div>
     <div className={Style.custombtn}>
       <label>D.O.B :</label>
     <CustomSelector onChange={handledate} Array={DateArray} defaulttext="Date"/>
     <CustomSelector onChange={handlemonth}Array={MonthArray} defaulttext="Month"/>
     <CustomSelector onChange={handleyear} Array={YearArray} defaulttext="Year"/>
     </div>


     <Link to="/">
     <button onClick={handlesubmit}>Submit</button>

     </Link>

    </div>
    </div>
    
  )
}