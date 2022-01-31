
const Category = (props) =>{
   
    const data=[
        {
            img:"./ricon.png",
            dish:"All"
        },
        {
            img:"./ricon.png",
            dish:"Indian"
        },
        {
            img:"./ricon.png",
            dish:"Chinese"
        },
        {
            img:"./ricon.png",
            dish:"Italian"
        },
        {
            img:"./ricon.png",
            dish:"Korean"
        },
        {
            img:"./ricon.png",
            dish:"Indian"
        },
        {
            img:"./ricon.png",
            dish:"Chinese"
        },
        {
            img:"./ricon.png",
            dish:"Italian"
        },
        {
            img:"./ricon.png",
            dish:"Korean"
        }
        
    ];
    return(
        <>
        <div className="light-grey">
            <div className=" container pt-5 pb-4">
                <div className="row text-center d-flex align-content-center justify-content-center">
                    {data.map((item, index) =>(
                        <div  className=" col-md-1" key={index} >
                            <img src={item.img} className="rounded-circle" alt="err" width="50"/>
                            <p className=" fw-bold">{item.dish}</p>
                        </div>
                    ))}                
                </div>
            </div>
        </div>
        <div className="m-auto w-25">
            <select className="form-select rounded-pill" style={{marginTop:"-20px"}}>             
                <option selected >Select a Delivery Day</option>
            </select>
        </div>
        
        </>
    );
};
export default Category;