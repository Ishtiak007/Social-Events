import AllCategories from "../AllCategories/AllCategories";
import Banner from "../Banner/Banner";
import FeatureIntroduce from "../Feature/FeatureIntroduce";
import OverlayCategories from "../OverlayCategories/OverlayCategories";
import Testimonial from "../Testimonial/Testimonial";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OverlayCategories></OverlayCategories>
            <WelcomeSection></WelcomeSection>
            <AllCategories></AllCategories>
            <FeatureIntroduce></FeatureIntroduce>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;