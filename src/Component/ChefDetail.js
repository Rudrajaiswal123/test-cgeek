import { StarFill, ArrowRight } from "react-bootstrap-icons";

const ChefDetail = () =>{
    return(
        <>
            <div className="bg-danger text-center mt-5  " style={{paddingTop:"30px",height:'35vh'}}>
                <h2 className="text-white">Chef Of The Week</h2>
            </div>
            <div className=" container shadow" style={{marginTop:"-150px"}}>
                <div className="row ">
                    <div className="col-md-5 ps-0" >
                    <img src="./chef-pic.jpg"  alt="" width="600" height="380px"/>
                    </div>
                    <div className="col-md-7 bg-white text-start" style={{padding:" 30px 50px"}}>
                        <div className=" d-flex flex-row justify-content-between">
                            <h2 className="fw-bold">Chef Sofia</h2>
                            <p className="subtitle fs-5">4.5<StarFill className=" text-warning pb-1 fs-4 mx-1"/> (10 reviews)</p>
                        </div>
                        <p className="subtitle fs-5 my-3 pb-3" style={{textAlign:"justify"}}>Contrary to popular belief, Loreum ipsum is not simply random text.It has not roots in
                           a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                           Contrary to popular belief, Loreum ipsum is not simply random text.It has not roots in
                           a piece of classical Latin literature from 45 BC, making it over 2000 years old.  </p>
                        <p className=" text-success fs-5">View details <ArrowRight/></p>
                    </div>
                </div>
            </div>
            
        </>
    );

};
export default ChefDetail;