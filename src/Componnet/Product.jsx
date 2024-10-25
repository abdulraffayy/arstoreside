import PropTypes from 'prop-types';

const Product = (props) => {
    return (
        <div className="div-product-info bg-slate-200 border border-red-100 p-2 rounded-lg shadow-md w-[291px] h-[430px]">
            <div className="image mb-4">
                <img src={props.img} alt={props.name} className="w-[300px] h-[300px] rounded-md" />
            </div>
            <h5 className="font-bold text-black text-center truncate">{props.name}</h5>
            <p className="text-gray-700 text-center">{props.price} $</p>
            <button className="mt-2 bg-[#075e54] text-white py-2 px-4 w-[280px]">Order Now</button>
        </div>
    );
};

// Define prop types for validation
Product.propTypes = {
    img: PropTypes.string.isRequired,   // img should be a required string
    name: PropTypes.string.isRequired,  // name should be a required string
    price: PropTypes.oneOfType([        // price can be a number or string
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
    ])
};

export default Product;
