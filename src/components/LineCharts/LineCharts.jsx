import { LineChart as LChart , Line , XAxis, YAxis } from 'recharts';
const LineCharts = () => {

    const subjectMarksData =  [
        { "id": 1, "name": "John", "math": 78, "physics": 85, "chemistry": 72 },
        { "id": 2, "name": "Sarah", "math": 85, "physics": 89, "chemistry": 80 },
        { "id": 3, "name": "Michael", "math": 92, "physics": 94, "chemistry": 88 },
        { "id": 4, "name": "Emma", "math": 74, "physics": 78, "chemistry": 70 },
        { "id": 5, "name": "Daniel", "math": 88, "physics": 84, "chemistry": 86 },
        { "id": 6, "name": "Sophia", "math": 95, "physics": 96, "chemistry": 92 },
        { "id": 7, "name": "James", "math": 68, "physics": 72, "chemistry": 65 },
        { "id": 8, "name": "Olivia", "math": 81, "physics": 79, "chemistry": 85 },
        { "id": 9, "name": "Ethan", "math": 76, "physics": 82, "chemistry": 78 },
        { "id": 10, "name": "Ava", "math": 90, "physics": 91, "chemistry": 89 }
      ];      

    return (
        <div>
            <LChart width={1000} height={400} data={subjectMarksData} >
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke='#de88f8ce' ></Line>
                <Line dataKey={'physics'} ></Line>
                <Line dataKey="chemistry" ></Line>
            </LChart>
        </div>
    );
};

export default LineCharts;