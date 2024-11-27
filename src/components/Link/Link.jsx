import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-5 hover:bg-white hover:text-black py-2 pl-3 pr-5 rounded-xl">
            <a href={route.path} >
                { route.name }
            </a> </li>
    );
};


Link.propType = {
    route: PropTypes.object.isRequired
}


export default Link;