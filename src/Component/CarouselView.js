import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import ProductCard from "./ProductCard";

const CarouselView = (props) =>{

        return(
        <div className=" container">
            <div className="row mt-5" >
                <div className="d-flex flex-row justify-content-between">
                    <h2 className="mt-5 mb-5 fw-bold">{props.title}</h2>
                    <div className="mt-5">
                        <button className="btn btn-danger btn-sm rounded-pill px-4 py-1 me-3 fs-5">View All</button>
                        <ArrowLeft className="text-secondary border border-secondary rounded-circle m-1 fs-1 p-2 me-3"/>
                        <ArrowRight className="text-success border border-success rounded-circle m-1 fs-1 p-2"/>
                    </div>
                </div>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
};
export default CarouselView;