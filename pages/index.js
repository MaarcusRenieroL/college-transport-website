import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Dates from "@/components/Dates";
import BusInfo from "@/components/BusInfo";

export default function Home() {
    return (
        <div className={""}>
            <Navbar/>
            <SearchBar />
            <Dates />
            <BusInfo />
        </div>
    )
}