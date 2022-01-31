import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ArrowLeft, ArrowRight, StarFill} from "react-bootstrap-icons";
import { useEffect, useRef } from "react";

const PopularWeek = (props) =>{
        
    const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

    
    return(
        <>
        <div className=" container">
            <div className="row mt-5" >
                <div className="d-flex flex-row justify-content-between">
                    <h2 className="mt-5 mb-5 fw-bold">Popular weekly Food</h2>
                    <div className="mt-5">
                        
                        <ArrowLeft className="text-secondary border border-secondary rounded-circle m-1 fs-1 p-2 me-3" onClick={() => sliderRef.current.slickPrev()}/>
                        <ArrowRight className="text-success border border-success rounded-circle m-1 fs-1 p-2" onClick={() => sliderRef.current.slickNext()}/>
                    </div>
                </div>
                <div className="pt-3">
                    <Slider
                        dots
                        dotsClass="slick-dots line-indicator"
                        ref={sliderRef}
                        slidesToShow={3}
                        slidesToScroll={1}
                        customPaging={(i) => (
                            <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "-10px",
                                opacity: 0,
                                paddding:"10px"
                                
                            }}
                            >
                            {i}
                            </div>
                        )}
                    >
                        
                        {props.popularweek.map((item, index)=>(
                    <div className=" col-md-4 pt-3 " key={index}>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner" >
                            <div class="carousel-item active">
                            <img src={"http://63.142.251.101:3000/"+ item.dish_masters[0].dishImage} alt="" width="410" height="230" class="d-block"/>
                            </div>
                            <div class="carousel-item">
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
                        <img src={item.chefprofile?"http://63.142.251.101:3000/"+ item.chefprofile:"./avatar.jpg"} className=" border-4 rounded-circle border border-white" alt="" width="70" height="70"/> 
                    </div>
                    <h5 className=" fw-bold margint-20 ps-2">{item.dish_masters[0].dishname}</h5>                
                    <p className="fw-bold subtitle ps-2">{item.chefname}</p>
                    <div className="d-flex flex-row  mt-5">
                        <div className="d-flex flex-row w-50  justify-content-lg-center shadow-sm">
                            <p className=" bg-danger text-white px-2 rounded">{item.totalRating} <StarFill className=" text-warning pb-1"/></p>
                            <p className="subtitle ms-2">({item.reviewCnt} reviews)</p>
                        </div>
                        <div className="w-50 text-center shadow-sm">
                            <p className=" text-success">View details <ArrowRight/></p>
                        </div>
                    </div>
                </div>
                    )
                )}
                    </Slider>
                </div>
                
            </div>
        </div>
        </>
    );
};
export default PopularWeek;