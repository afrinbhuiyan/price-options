import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {price, name, features} = option;
    return (
        <div className='bg-[#7f63fc52] rounded-xl p-10 flex flex-col'>
            <h1 className=' text-center'>
                <span className='text-6xl font-extrabold' >{price}</span>
                <span className='text-2xl mt-5 ' >/mon</span>
            </h1>
            <h1 className='text-3xl  text-center'> {name} </h1>
            <div className='flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature} ></Feature> )
            }
            </div>
            <button className='btn text-white  bg-[#de88f8ce] mt-5 w-full hover:bg-[#cc6af388] hover:shadow-2xl ' >Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.array
}

export default PriceOption;