import React, { Component } from "react";
import { connect } from "react-redux";
import * as genomicActions from "../../redux/actions/genomicActions";
import * as seqActions from "../../redux/actions/seqActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import List from "./List";

class DetailPage extends Component {
  componentDidMount() {
    const { courses, authors, actions, geneSymbol, seq, letter } = this.props;
    actions.loadGenomic(geneSymbol).catch((error) => {
      alert("loading courses failed" + error);
    });
    console.log(geneSymbol);
    console.log(seq);
    console.log(letter);
  }
  componentDidUpdata(prevProps, prevState) {
    console.log(this.props.geneSymbol);
  }

  render() {
    return (
      <>
        <h2>Results</h2>
        <List
          courses={this.props.courses}
          seq={this.props.seq}
          letter={this.props.letter}
          geneSymbol={this.props.geneSymbol}
        />
      </>
    );
  }
}

DetailPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadGenomic: bindActionCreators(genomicActions.loadGenomic, dispatch),
      loadSeqs: bindActionCreators(seqActions.loadSeqs, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
