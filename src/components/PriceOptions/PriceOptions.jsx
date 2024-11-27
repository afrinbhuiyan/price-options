import PriceOption from "../PriceOption/PriceOption";
import { AiFillOpenAI } from "react-icons/ai";
const PriceOptions = () => {

    const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 20,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 fitness assessment per year",
            "Complimentary water bottle refill",
            "Free parking during gym hours"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 35,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "2 fitness assessments per year",
            "Access to group fitness classes",
            "Towel service included",
            "Free Wi-Fi access",
            "Discount on gym merchandise (5%)"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 50,
          "currency": "USD",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited fitness assessments",
            "Access to group fitness classes",
            "1 personal training session per month",
            "Access to sauna and spa",
            "Access to swimming pool",
            "Priority access to new equipment",
            "10% discount on gym merchandise"
          ]
        },
        {
          "id": 4,
          "name": "Elite Plan",
          "price": 80,
          "currency": "USD",
          "features": [
            "All features of Premium Plan",
            "Unlimited personal training sessions",
            "Priority booking for classes and events",
            "Free gym merchandise every year",
            "Dedicated locker with laundry service",
            "Access to VIP lounge",
            "Complimentary post-workout snacks",
            "Invitations to exclusive member events",
            "Free guest passes (4 per month)"
          ]
        }
      ]
      

    return (
        <div className="mx-5 lg:mx-40 lg:mt-10">
            <h1 className="flex items-center text-2xl lg:text-5xl font-bold my-10"> 
            <span className=" text-4xl lg:text-7xl text-[#ec17cf7e] " ><AiFillOpenAI /></span>
            Best <span className="flex text-[#bf8aebb4] mx-2">Prices</span> in the town</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option} > </PriceOption> )
            }
            </div>
        </div>
    );
};

export default PriceOptions;