import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
import InputComp from './Components/InputComp';

function App() {

  // const [fetchdata,setfetchdata] = useState([]);
  // const[value,setvalue] = useState('flower');
  // const[data,setdata] = useState([]);
  
  // useEffect(() => {
  //   console.log("Component mounted or updated.");
  //   result_api(value);
  // }, [value]);

  // async function result_api(para) {
  //   console.log("Fetching data from API...");
  //   let res = await fetch(`https://api.unsplash.com/search/photos/?query=${para}&client_id=mRDaAzHpCpLLsxIWnIdSB6NYOK3EOtJ2e9DITojTGkQ`)
  //   let ans = await res.json();
  //   console.log("Data fetched successfully:", ans);
  //   setfetchdata(ans.results);
  // }
  
  console.log("Rendering component...");
  return (
    <div className="App">
      {/* <input type="text" value={value} onChange={ ((e)=>{
        setvalue(e.target.value);
      })}/>
      <button onClick={ ()=>{
        console.log("Submitting search query...");
        result_api(value)
      }}>Search</button>
      <div className='subcontainer' style={{display:"flex" , flexWrap:"wrap",justifyContent:"center"}}>
      {fetchdata.map((e, index)=>{
        return(
          <div key={e.id} style={{display:"flex",flexWrap:"wrap",margin:"10px"}}>
            <div className='text-content' style={{position:"relative"}}>
            
              
               <p style={{position:"absolute",marginTop:"2rem",marginLeft:"10px",color:"white",fontWeight:"500"}}>{e.updated_at}</p>
               <p style={{position:"absolute",marginTop:"4rem",marginLeft:"10px",color:"white",fontWeight:"500"}}>{e.alt_description}</p>
               <img src={e.urls.small} alt={e.alt_description}/>
              </div>
          </div>
        )
      })}
      </div> */}
       <InputComp />

    </div>
  );
}

export default App;
