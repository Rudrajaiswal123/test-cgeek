const Header = () =>{

    
    return(
        <>
        <div className=" container-fluid">
            <div className="row">
                <div className=" col-12 bg-black text-center">
                    <p className=" text-white mb-0">Free Delivery on all <span className=" text-danger">orders over $25</span></p>
                </div>
            </div>
        </div>
        <div className=" container">
        <div className="row">
                <div className=" col-md-6 float-start mt-2">
                    <img src="./logo.jpg" alt="err" width="50"/>
                </div>
                <div className=" col-md-6 d-flex flex-row justify-content-end mt-3 mb-3 ">
                    <button className=" btn btn-outline-danger px-3 me-4 rounded-pill">Become a Chef</button>
                    <button className="btn btn-danger px-4 rounded-pill">Login</button>
                </div>
            </div>
        </div>
        </>
    );
};
 export default Header;