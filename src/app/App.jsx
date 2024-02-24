import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Header from "../components/header";
import Footer from "../components/footer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
