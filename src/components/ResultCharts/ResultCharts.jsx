import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const students = [
    { id: 1, name: "Arafat Hossain", english: 78, math: 85, science: 74 },
    { id: 2, name: "Nusrat Jahan", english: 92, math: 88, science: 95 },
    { id: 3, name: "Rafi Ahmed", english: 67, math: 73, science: 70 },
    { id: 4, name: "Meem Rahman", english: 85, math: 91, science: 89 },
    { id: 5, name: "Tahmid Islam", english: 74, math: 80, science: 78 },
    { id: 6, name: "Sumaiya Akter", english: 90, math: 84, science: 92 },
    { id: 7, name: "Hasan Mahmud", english: 65, math: 70, science: 68 },
    { id: 8, name: "Rima Chowdhury", english: 88, math: 82, science: 90 },
    { id: 9, name: "Adnan Karim", english: 79, math: 76, science: 83 },
    { id: 10, name: "Farhana Haque", english: 94, math: 89, science: 97 }
];


const ResultCharts = () => {
    return (
        <div className='container mx-auto flex justify-center'>
            <LineChart width={800} height={300} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'english'}></YAxis>
                <Line dataKey={'english'}></Line>
                <Line dataKey={'math'} stroke='blue'></Line>
                <Line dataKey={'science'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;