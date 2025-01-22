import Nav from "../../Component/home_component/navbar";
import SideBar from "../../Component/TourPackage/sidebar";
import Page1 from "../../Component/TourPackage/page1";
import Footer from "../../Component/home_component/footer";
import MoreDetails from "../../Component/TourPackage/cancelation";

export default function TourPackage(){
    return(
        <div>
            <Nav />
            <Page1 />
            <MoreDetails />
            <SideBar />
            <Footer />
        </div>
    )
} 