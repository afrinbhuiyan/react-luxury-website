import Footer from "../../Footer/Footer";
import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/NavBar/Navbar";

const ShowDetail = () => {
    return (
        <div>
            <Header></Header>
            <div className="mx-40">
            <Navbar></Navbar>
            </div>
            <h1 className="text-center text-9xl">Show Details</h1>
            <p className="text-center text-9xl">.........</p>
            <Footer></Footer>
        </div>
    );
};

export default ShowDetail;