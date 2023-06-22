import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMatches } from "../../redux/reducers/data/actions";
import HomeLayout from "./layout";

const Home = ({ data, getMatches }) => {
  useEffect(() => {
    if (data.date === "") {
      getMatches(2021);
      getMatches(2016);
    }
  }, [data, getMatches]);
  return <HomeLayout data={data} />;
};

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  getMatches: id => dispatch(getMatches(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
