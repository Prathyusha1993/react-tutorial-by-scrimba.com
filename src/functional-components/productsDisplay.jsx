import { React } from "react";
import {BootstrapTable} from 'react-bootstrap-table'

function ProductsDisplay (props) {
    const handleDetails = () => {
        // <div>
        //     <p>Price: {props.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
        //     <p>Desc: {props.desc}</p>
        // </div>
        alert(JSON.stringify(props.price))
        alert(JSON.stringify(props.desc))
        
    }
    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={handleDetails}>Details</button>
            {/* <p>Price: {props.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
            <p>Desc: {props.desc}</p> */}

        </div>
    );
}

// function ProductsDisplay (props) {
//     return (
//         <div>
//             <table  style={{border: '1px solid black'}}>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Desc</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>{props.name}</td>
//                         <td>{props.price}</td>
//                         <td>{props.desc}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }

export default ProductsDisplay;