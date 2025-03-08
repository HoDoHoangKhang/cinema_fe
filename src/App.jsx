import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { publicRoutes } from "./routes";
import Header from "./components/Header";

function App() {
    return (
        <div className="p-0 m-0 box-border ">
            <Router>
                <div>
                    <Header />
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={Page}
                                    ></Route>
                                );
                            })}
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
