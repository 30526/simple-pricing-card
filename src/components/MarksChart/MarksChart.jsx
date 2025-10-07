import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data
    // data processing for the chart 

    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            english: studentData.marks.english,
            math: studentData.marks.math,
            science: studentData.marks.science
        }
        const avg = (student.english + student.math + student.science) / 3
        student.avg = avg
        return student;
    })


    console.log(marksChartData)
    return (
        <div className='container mx-auto flex justify-center mt-20'>
            <BarChart width={800} height={300} data={marksChartData}>
                {/* <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid> */}
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'avg'} fill='purple'></Bar>
                <Bar dataKey={'english'} fill='orange'></Bar>
                <Bar dataKey={'math'} fill='skyblue'></Bar>
                <Bar dataKey={'science'} fill='white'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;