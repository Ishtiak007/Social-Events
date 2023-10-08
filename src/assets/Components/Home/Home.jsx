import AllCategories from "../AllCategories/AllCategories";
import Banner from "../Banner/Banner";
import OverlayCategories from "../OverlayCategories/OverlayCategories";
import Testimonial from "../Testimonial/Testimonial";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <OverlayCategories></OverlayCategories>
            <AllCategories></AllCategories>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;