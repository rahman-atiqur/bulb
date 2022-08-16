import "./App.css";

//----------------Assignment 2(a) : Bulb----------------
//----------------Assignment 2(a) : Bulb----------------

/* function Bulb(props){
  // let bulbClass='bulb off';                 //2nd way
  // if(props.on){
  //   bulbClass='bulb on';
  // }
  const bulbClass = props.on ?'bulb on' : 'bulb off';    //3rd way
  return <div className={bulbClass}></div>
}
 */
/* const Bulb = (props) => {
  const {on} = props;
  const bulbClass = on ?'bulb on' : 'bulb off';    //3rd way
  return <div className={bulbClass}></div>
} */

/* const Bulb = ({on}) => {
  // const bulbClass = on ?'bulb on' : 'bulb off';    
  return <div className={on ?'bulb on' : 'bulb off'}></div>  //4th way
} */

const Bulb = ({ on }) => <div className={on ? "bulb on" : "bulb off"}></div>; //5th way

//---------------------------------------End of coding for 2(a) --------------------------------------

//----------------Assignment 2(b) : Product Info----------------
//----------------Assignment 2(b) : Product Info----------------

function ProductInfo({ image, title, description, price }) {
    // const { image, title, description, price } = props;
    return (
        <div className="productList">
            <div className="image">{image}</div>
            <div className="title">{title}</div>
            <div className="desc">{description}</div>
            <div className="price">{price}</div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>a. Assignment : Bulb</h1>
            <Bulb on />
            <Bulb />

            <br></br>
            <br></br>
            <br></br>
            <h1>b. Assignment : Product info</h1>
            <h3>Result : Shoes</h3>

            <ProductInfo
                image="shoe1.jpg"
                title="adidas"
                description="Mens Grand Court Tennis"
                price="$85.00"
            />
            <ProductInfo
                image="shoe2.jpg"
                title="Reebok"
                description="Mens Grand Court Tennis"
                price="$109.00"
            />
            <ProductInfo
                image="shoe3.jpg"
                title="PUMA"
                description="Mens Grand Court Tennis"
                price="$66.00"
            />
        </div>
    );
}

export default App;

//---------------------------------------End of coding for 2(b) --------------------------------------
