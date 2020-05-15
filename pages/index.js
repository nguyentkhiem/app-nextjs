import React from 'react'
import Layout from 'layouts/Main'
import {connect} from 'react-redux'
import { getPosts } from 'api/posts'
import Post from 'components/Post'
import { getDsPost } from '../redux/actions/action'
import { compose } from "redux";

class App extends React.Component {
  static getInitialProps = async ({ store }) => {
    const res = await getPosts()
    const json = await res.json()
    return { posts: json }
  }

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Layout>
        <ul>
          {posts.map(p => <Post key={p.title} post={p} />)}
        </ul>
      </Layout>
    )
  }
};

const mapStateToProps = state => ({
  listPost: state.dsPost
});

const mapDispatchToProps = {
  getDsPost
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);


export default compose(withConnect)(App);
