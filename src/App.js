import './App.css';
import React, { useState } from 'react';


function App() {
  const [netIncome,calculateNet]=useState(0);
  const [grossInc,calculateGross]=useState(0);
  function calculateNetIncome()
  {
   // alert("entered");
    var gross=document.getElementById("grossincome").value;
    //alert(gross);
    if(gross<=400000)
    {
      calculateNet(0);
    }
    else
    {
      var tax=0;
      if(gross>=150000&&gross<=300000)
      {
        tax=tax+(gross*2.5)/100;
        calculateNet(tax);

      }
      
      else if(gross>=300000&&gross<=800000)
      {
        tax=(150000*2.5)/100+((gross-300000)*10)/100;
        calculateNet(tax);
      }
      else if(gross>=800000&&gross<= 10000000)
      {
        tax=(150000*2.5)/100+(500000*10)/100+((gross-800000)*25)/100;
        calculateNet(tax);

      }
      else if(gross>=10000000)
      {
        tax=(150000*2.5)/100+(500000*10)/100+(9200000 * 25)/100+((gross-10000000)*30)/100;
        calculateNet(tax);

      }

    
      
      

    }

  }
 function calculateGrossIncome()
 {
  var net=document.getElementById("netincome").value;
  if(net<=400000)
  {
    calculateGross(0);
  }
  else
  {
    var gross=150000;//746000-30000 446000
    net=net-150000;
    gross=gross+150000;
    net=net-150000+3750;
    if(net-450000<=0)
    {
      //alert(net);
      gross=gross+(net)*100/90;
      calculateGross(gross);

    }
    else
    {
      net=net-500000+50000;
      gross=gross+500000;
      alert(net);
      if(net-50000<=0)
      {
      gross=gross+(net)*100/75;
      calculateGross(gross);
      }
      else
      {
        alert(gross);
        alert(net);
        net=net-200000+50000;
        gross=gross+200000;
        alert(net);
        gross=gross+(net)*100/70;
        calculateGross(gross);


      }
    }
   

    
  }

 }
  return (
    <div className="App">
      <p>Enter Your Gross Income:</p>
      <input type="number" id="grossincome"/>
      <br />
      <button onClick={calculateNetIncome}>ClickME!!!!</button>
      
      <p>Total Tax Applicable is:{netIncome}</p>
      <br />
      <hr></hr>
      <p>Enter Your net Income:</p>
      <input type="number" id="netincome"/>
      <br />
      <button onClick={calculateGrossIncome}>ClickME!!!!</button>
      <p>Total Gross Income is:{grossInc}</p>
      
    </div>
  );
}

export default App;
