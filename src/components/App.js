import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/SteamCreate";
import StreamDelete from "./streams/SteamDelete";
import StreamEdit from "./streams/SteamEdit";
import StreamList from "./streams/SteamList";
import StreamShow from "./streams/SteamShow";

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" component={StreamList} exact />
                <Route path="/streams/new" component={StreamCreate} exact />
                <Route path="/streams/edit" component={StreamEdit} exact />
                <Route path="/streams/delete" component={StreamDelete} exact />
                <Route path="/streams/show" component={StreamShow} exact />
            </BrowserRouter>
        </div>
    );
};

export default App;
