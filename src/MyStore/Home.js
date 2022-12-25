import {useState,useEffect} from "react"
import Cart from "./Add_Cart"
import "./style.css"
function Mystore(){
    const [Data,setData]=useState([])
    const [newArr,setnewArr]=useState([])
    useEffect(()=>{
        const FakeStore=async()=>{
            const response=await fetch(`https://fakestoreapi.com/products`)
            const result=await response.json()
            // console.log(result)
            setData(result)
        }
        FakeStore()
    },[])
    return(
        <div className="main">
        {
            Data.map((item,index)=>{
                return(
                    <div key={index}>
                    <h1>{item.category}</h1>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt=""/>
                    <p>{item.description}</p>
                    <button>${item.price}</button>
                    <button>{item.rating.rate}</button>
                    <button onClick={()=>{
                        setnewArr([...newArr,Data[index]])
                    }}>ADD TO CART</button>
                    </div>
                )
            })
        }
        {
            newArr.map((item,index)=>{
                return(<div key={index}><Cart image={item.image} title={item.title} price={item.price}/></div>)
            })
        }
        </div>
    )
}

export default Mystore