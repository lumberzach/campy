import LottieAnimation from '../Lottie';
import camping from '../Animation/ufocamping.json';

const About = () => {
    return (
        <div class='about'>
            
            <h4>Version 1.0.0</h4>
            <div className='about-lottie'>
            <LottieAnimation lotti={camping} height={400} width={740} /> 
            </div>
            
            
        </div>
        //<div>
            //<h4>Version 1.0.0</h4>
            //<Link to='/'>Go Back</Link>
        //</div>
        
    )
}

export default About
