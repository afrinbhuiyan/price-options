import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center mt-3'> <span className='text-[#e00fac49] mr-2'><AiFillCheckCircle /></span> {feature} </p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;