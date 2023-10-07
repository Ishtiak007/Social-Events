import AllCategories from "../AllCategories/AllCategories";
import Banner from "../Banner/Banner";
import ImgGallery from "../ImgGallery/ImgGallery";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <AllCategories></AllCategories>
            <ImgGallery></ImgGallery>
        </div>
    );
};

export default Home;