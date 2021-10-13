import { Router, Route } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/SteamCreate";
import StreamDelete from "./streams/SteamDelete";
import StreamEdit from "./streams/SteamEdit";
import StreamList from "./streams/SteamList";
import StreamShow from "./streams/SteamShow";
import history from "../history";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path="/" component={StreamList} exact />
                <Route path="/streams/new" component={StreamCreate} exact />
                <Route path="/streams/edit/:id" component={StreamEdit} exact />
                <Route path="/streams/delete" component={StreamDelete} exact />
                <Route path="/streams/show" component={StreamShow} exact />
            </Router>
        </div>
    );
};

export default App;
