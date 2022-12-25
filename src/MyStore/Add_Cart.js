// import { useParams } from "react-router-dom";
function Cart(probs){
    console.log(probs.title);
    return(
        <div>
            <h1>{probs.title}</h1>
            <img src={probs.image} alt=""/>
            <button>{probs.price}</button>
            <h1>add</h1>
        </div>
    )
}
export default Cart