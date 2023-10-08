import AllCategories from "../AllCategories/AllCategories";
import Banner from "../Banner/Banner";
import OverlayCategories from "../OverlayCategories/OverlayCategories";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <OverlayCategories></OverlayCategories>
            <AllCategories></AllCategories>
        </div>
    );
};

export default Home;