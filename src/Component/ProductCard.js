import {ArrowRight, StarFill} from "react-bootstrap-icons";


const ProductCard = () =>{
   
    return(
        <>
        <div className=" col-md-4 shadow-sm pt-3 ">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg" alt="" width="410" height="230" class="d-block"/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon rounded-circle bg-light carousel-control-color" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon rounded-circle bg-light" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                    
                    <div className="avatar ">
                        <img src="./avatar.jpg" className=" border-4 rounded-circle border border-white" alt="" width="70"/> 
                    </div>
                    <h5 className=" fw-bold margint-20 ps-2">Eggs and Spinach</h5>                
                    <p className="fw-bold subtitle ps-2">Chef Mary</p>
                    <div className="d-flex flex-row  mt-5">
                        <div className="d-flex flex-row w-50  justify-content-lg-center shadow-sm">
                            <p className=" bg-danger text-white px-2 rounded">4.5 <StarFill className=" text-warning pb-1"/></p>
                            <p className="subtitle ms-2">(10 reviews)</p>
                        </div>
                        <div className="w-50 text-center shadow-sm">
                            <p className=" text-success">View details <ArrowRight/></p>
                        </div>
                    </div>
                </div>
       
       </>
    );
};
export default ProductCard;