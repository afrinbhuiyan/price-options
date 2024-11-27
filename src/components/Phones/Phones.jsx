import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio, CirclesWithBar } from 'react-loader-spinner';

const Phones = () => {
    const [phones, setPhone] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //  fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        //  .then(res => res.json())
        //  .then(data => setPhone(data.data))

        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                console.log(phoneWithFakeData)
                setPhone(phoneWithFakeData)
                setLoading(false);
            })

    }, [])

    return (
        <div>
            {loading && <div>
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    outerCircleColor="#4fa94d"
                    innerCircleColor="#4fa94d"
                    barColor="#4fa94d"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>}
            <h1 className="text-3xl"> Phones: {phones.length} </h1>
            <BarChart width={1600} height={700} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" ></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;