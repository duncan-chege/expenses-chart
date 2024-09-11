import { BarElement, Chart as ChartJS, Legend, Title, Tooltip } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import expenseData from "./data.json";
import { useEffect } from "react";

ChartJS.register(
    Legend,
    Tooltip,
    Title,
    BarElement,
);

const BarGraph = ({sendTotalSum}) => {

    const currentDay ="wed";

    const totalSum = expenseData.reduce((accumulator, current) => accumulator + current.amount, 0);

    useEffect(() => {
        sendTotalSum(totalSum);
    }, [sendTotalSum]);

    return (
        <Bar 
            data={{
                labels: expenseData.map((data) => data.day),
                datasets: [
                    {
                        data: expenseData.map((data) => data.amount),
                        backgroundColor: expenseData.map((data) => data.day === currentDay ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"),
                        hoverBackgroundColor: expenseData.map((data) => data.day === currentDay ? "#76b5bcbf" : "hsl(10, 79%, 75%)"),
                        borderRadius: 5,
                    }
                ],
            }}
            options= {{
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    padding: {
                        top: 20,
                        bottom: 20
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        yAlign: "bottom",
                        caretSize: 0,
                        caretPadding: 6,
                        callbacks: {
                            title: function() {
                                return "";
                            },
                            label: function(context) {
                                return `$${context.raw}`
                            }
                        },
                        displayColors: false,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        }
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        display: false
                    }
                }
            }}    
        />


    )
}

export default BarGraph;