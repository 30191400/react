import{useEffect,useState} from "react";

function usecurrencyinfo(currency){
    const[data,setdata]=useState({});
    useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/gh/
      fawazahmed0/currency-api@1/latest/
      currencies/${currency}.json`)
    .then((res)=>res.json())
    console.log(res.json())
    .then((res)=>setdata(res[currency]))
    return data

    console.log(data);
      
    }, [currency])
    
}
export default usecurrencyinfo;