import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import image1 from './numbers/1.png'
import image2 from './numbers/2.png'
import image3 from './numbers/3.png'
import image4 from './numbers/4.png'
import image5 from './numbers/5.png'
import image6 from './numbers/6.png'
import image7 from './numbers/7.png'
import image8 from './numbers/8.png'
import image9 from './numbers/9.png'
import { Alert, alertTitleClasses } from '@mui/material';

var number1;
var number2;
var number3;
var smtg = image1;


function App() {
    number1 = Math.floor(Math.random() * 9) + 1
    number2 = Math.floor(Math.random() * 9) + 1
    number3 = Math.floor(Math.random() * 9) + 1
    console.log(number1, number2, number3)
    console.log(image1)

    

    if (number1 == 1) {
      number1 = image1
    } else if(number1 == 2) {
      number1 = image2
    } else if(number1 == 3) {
      number1 = image3
    } else if(number1 == 4) {
      number1 = image4
    } else if(number1 == 5) {
      number1 = image5
    } else if(number1 == 6) {
      number1 = image6
    } else if(number1 == 7) {
      number1 = image7
    } else if(number1 == 8) {
      number1 = image8
    } else if(number1 == 9) {
      number1 = image9
    }; 

if (number2 == 1) {
      number2 = image1
    } else if(number2 == 2) {
      number2 = image2
    } else if(number2 == 3) {
      number2 = image3
    } else if(number2 == 4) {
      number2 = image4
    } else if(number2 == 5) {
      number2 = image5
    } else if(number2 == 6) {
      number2 = image6
    } else if(number2 == 7) {
      number2 = image7
    } else if(number2 == 8) {
      number2 = image8
    } else if(number2 == 9) {
      number2 = image9
    };  

    
    if (number3 == 1) {
      number3 = image1
    } else if(number3 == 2) {
      number3 = image2
    } else if(number3 == 3) {
      number3 = image3
    } else if(number3 == 4) {
      number3 = image4
    } else if(number3 == 5) {
      number3 = image5
    } else if(number3 == 6) {
      number3 = image6
    } else if(number3 == 7) {
      number3 = image7
    } else if(number3 == 8) {
      number3 = image8
    } else if(number3 == 9) {
      number3 = image9
    };  

    if (number1 == number2 && number1 == number3) {
      alert("You won!")
    }




  return (
    <div>
      
      <img class='image1' src={number1} style={{ width: 320, height: 320 }}/>
      <img class='image2' src={number2} style={{ width: 320, height: 320 }}/>
      <img class='image3' src={number3} style={{ width: 320, height: 320 }}/>
    </div>
  );
}

export default App;



