import { Component } from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    rendenActions() {
        return (
            <>
                <button
                    onClick={() =>
                        this.props.deleteStream(this.props.match.params.id)
                    }
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">
                    Cancel
                </Link>
            </>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream?";
        } else {
            return `Are you sire you want delete the stream with title: ${this.props.stream.title}`;
        }
    }

    render() {
        return (
            <Modal
                title="Delete stream"
                content={this.renderContent()}
                actions={this.rendenActions()}
                onDismiss={() => history.push("/")}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
    StreamDelete
);
