import './Loader.css';

import $ from 'jquery';

const Loader = () => {

    $(window).on("load", function () {
        $("#cr-overlay").fadeOut("slow");
    });

    return (
        <>
            <div id="cr-overlay" className='position-fixed top-0 end-0 start-0 bottom-0 bg-white' style={{}}>
                <span className="loader"></span>
            </div>
        </>
    )
}

export default Loader