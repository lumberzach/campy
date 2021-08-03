import LottieAnimation from '../Lottie';
import campfire2 from '../Animation/campfire2.json';

const Loader = () => {
    return (
        <div className="loader">
            <h1>Loading</h1>
            <LottieAnimation lotti={campfire2} height={200} width={740} /> 
        </div>  
    )
}

export default Loader
