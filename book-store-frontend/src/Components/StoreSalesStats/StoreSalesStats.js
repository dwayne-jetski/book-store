import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Button, Row } from 'react-bootstrap';

export default function StoreSalesStats(props) {

    const [ perTransactionBarChart, setPerTransactionBarChart ] = useState(false);
    const [ bookSalesBarChart, setBookSalesBarChart ] = useState(false);

    function togglePerTransactionBarChart () {
        setPerTransactionBarChart(!perTransactionBarChart);
        setBookSalesBarChart(false)
    }

    function toggleSalesByBookBarChart () {
        setBookSalesBarChart(!bookSalesBarChart);
        setPerTransactionBarChart(false);
    }

    const getSalesPerTransactionBarChart = () => {
        const salesData1 = props.currentUser.openOrders
        const salesData2 = props.currentUser.completedOrders

        const totalsData1 = salesData1.map((data, index)=> {
                const { total } = data;

                return(parseFloat(total));
        });

        const totalDollarsInSales = totalsData1.reduce((a, b) => {
            return a+b;
        });

        let saleNames = []
        for (let i = 0; i < totalsData1.length; i++){
            saleNames.push(`Transaction #${i+1}`)
        };

        let bgCol = [];
        for (let i = 0; i < salesData1.length; i++){
            if(i%5 === 0){
                bgCol.push( 'rgba(255, 99, 132, 0.2)')
            }
            else if (i%5 === 1){
                bgCol.push( 'rgba(54, 162, 235, 0.2)')
            }
            else if (i%5 === 2){
                bgCol.push( 'rgba(255, 206, 86, 0.2)')
            }
            else if (i%5 === 3){
                bgCol.push( 'rgba(75, 192, 192, 0.2)')
            }
            else if (i%5 === 4){
                bgCol.push( 'rgba(255, 159, 64, 0.2)')
            }
        };
        let borCol = [];
        for (let i = 0; i < salesData1.length; i++){
            if(i%5 === 0){
                borCol.push( 'rgba(255, 99, 132, 1)')
            }
            else if (i%5 === 1){
                borCol.push( 'rgba(54, 162, 235, 1)')
            }
            else if (i%5 === 2){
                borCol.push( 'rgba(255, 206, 86, 1)')
            }
            else if (i%5 === 3){
                borCol.push( 'rgba(75, 192, 192, 1)')
            }
            else if (i%5 === 4){
                borCol.push( 'rgba(255, 159, 64, 1)')
            }
        };

        const data = {
            labels: saleNames,
            datasets: [{
                label: "sales by transaction",
                data: totalsData1,
                backgroundColor: bgCol,
                borderColor: borCol,
                borderWidth: 1

            }]
        };

        const options = {
            legend: {
                
            },
            scales: {
                yAxes: [{
                    ticks: {
                        max: Math.round(Math.max(...totalsData1) + 100),
                        beginAtZero: true
                    }
                }]
            }
        };

        return(
            <React.Fragment>
                
                <Row>
                    Total Sales: ${totalDollarsInSales}
                </Row>

                <Bar 
                
                data={data}
                options={options}

                />
            </React.Fragment>
        )

        
    }

    const getBookSalesByBookBarChart = () =>{
        const orderData1 = props.currentUser.openOrders;
        const orderData2 = props.currentUser.completedOrders.books; 

        const bookData = orderData1.map((data, index)=> {
            const { books } = data

            return books;
        });

        let count = {};
        let titles = {}
        for (let i = 0; i < bookData.length; i++){
            for(let j = 0; j < bookData[i].length; j++){
                
                count[bookData[i][j].title] = 1 + (count[bookData[i][j].title] || 0)
                titles[bookData[i][j].title] = bookData[i][j].title;
              

                
            }
        }

        const names = Object.keys(count);
        const counts = Object.values(count);
        

        let bgCol = []
        for (let i = 0; i < names.length; i++){
            if(i%5 === 0){
                bgCol.push( 'rgba(255, 99, 132, 0.2)')
            }
            else if (i%5 === 1){
                bgCol.push( 'rgba(54, 162, 235, 0.2)')
            }
            else if (i%5 === 2){
                bgCol.push( 'rgba(255, 206, 86, 0.2)')
            }
            else if (i%5 === 3){
                bgCol.push( 'rgba(75, 192, 192, 0.2)')
            }
            else if (i%5 === 4){
                bgCol.push( 'rgba(255, 159, 64, 0.2)')
            }
        }
        let borCol = [];
        for (let i = 0; i < names.length; i++){
            if(i%5 === 0){
                borCol.push( 'rgba(255, 99, 132, 1)')
            }
            else if (i%5 === 1){
                borCol.push( 'rgba(54, 162, 235, 1)')
            }
            else if (i%5 === 2){
                borCol.push( 'rgba(255, 206, 86, 1)')
            }
            else if (i%5 === 3){
                borCol.push( 'rgba(75, 192, 192, 1)')
            }
            else if (i%5 === 4){
                borCol.push( 'rgba(255, 159, 64, 1)')
            }
        }
      

        const data = {
            labels: names,
            datasets: [{
                label: "total each book sold",
                data: counts,
                backgroundColor: bgCol,
                borderColor: borCol,
                borderWidth: 1

            }]
        }

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        max: Math.round(Math.max(...counts) + 20),
                        beginAtZero: true
                    }
                }]
            }
        }

        console.log(data);

        return(
            <React.Fragment>
                <Bar 
                
                data={data}
                options={options}

                />
            </React.Fragment>
        )

    }


    return (

        <React.Fragment>
            <Row>
                <Button variant="info" onClick={()=>togglePerTransactionBarChart()}>Transaction Sales</Button>
                <Button variant="info" onClick={()=>toggleSalesByBookBarChart()}>Book Sales</Button>
            </Row>
            {(perTransactionBarChart === false) ? <div/> : getSalesPerTransactionBarChart()}
            {(bookSalesBarChart === false) ? <div/> : getBookSalesByBookBarChart()}

            <br/><br/>
        </React.Fragment>
    )
}
