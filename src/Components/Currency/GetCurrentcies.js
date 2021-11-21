// // const rates = {}; 
// // const elementUSD = document.querySelector('[data-value="USD"]');
// // const elementEUR = document.querySelector('[data-value="EUR"]');
// // const elementGBP = document.querySelector('[data-value="GBP"]');

// //   async function getCurrentcies () {
// //     const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
// //     const data = await response.json();
// //     const result = await data;

// //     rates.USD = result.Valute.USD;
// //     rates.EUR = result.Valute.EUR;
// //     rates.GBR = result.Valute.GBR;

// //     elementUSD.textContent = rates.USD.toFixed(2);
// //     elementEUR.textContent = rates.EUR.toFixed(2);
// //     elementGBP.textContent = rates.GBP.toFixed(2);

// //     if (rates.USD.Value > rates.USD.Previous) {
// //         elementUSD.classList.add('top');
// //     } else {
// //         elementUSD.classList.add('bottom');
// //     }

// // }
// // getCurrentcies();

// import React from "react";

// class Rate extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           'date': '',
//            'currencyRate': {}      
//         }
//         this.currency = ['USD', 'EUR', 'RUB'];
//       this.getRate();
//   }

//   getRate = () => {
//        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
//        .then(data => {
//            return data.json();
//        })
//        .then( data => {
//            console.log(data);
//            this.setState({date : data.date}); 
//            let result = {};
//            for (let i = 0; i < this.currency.length; i++) {
//                result[this.currency[i]] = data.rates[this.currency[i]];
//            }  
//            console.log(result);
//             this.setState({currencyRate: result});
//        });

//   }
//     render () {
//         return (
//         <div>
//        <h3>Currency</h3>
//        {Object.keys(this.state.currencyRate).map( (keyName,i) => 
//         (
//          <h3>Currency</h3> 
//          /* key={keyName}  
//          {keyName}
//          {this.state.currencyRate[keyName].toFixed(2)} */

//        ))}
//        </div>
//         );
//     }
// }

// export default Rate;