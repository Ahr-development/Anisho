import { Img } from "react-image";
import BounceLoader from "react-spinners/BounceLoader";




const ShowImageStatic = (props) => {
    return ( 

        <Img className={props.classImage}
            src={[`${ 'https://access.arastdev.ir/' + props.image}`,"https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"]}
            loader={
                <div className="text-center mx-auto">
                    <BounceLoader loading={true} color={"#4A90E2"}  />    
                </div>
            }
            
        />


     );
}
 
export default ShowImageStatic;