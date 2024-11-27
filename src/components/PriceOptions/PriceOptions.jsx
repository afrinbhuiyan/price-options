import PriceOption from "../PriceOption/PriceOption";

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
        <div>
            <h1 className="text-5xl">Best Prices in the town</h1>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option} > </PriceOption> )
            }
        </div>
    );
};

export default PriceOptions;