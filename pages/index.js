import React from 'react'
import Layout from 'layouts/Main'
import {connect} from 'react-redux';
import { getPosts } from 'api/posts'
import Post from 'components/Post'
import { getDsPost } from '../redux/actions/action';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  static getInitialProps = async ({ store }) => {
    const res = await getPosts()
    const json = await res.json()
    return { posts: json }
  }

  render() {
    return (
      <Layout>
        <ul>
          {this.props.listPost.map(p => <Post key={p.title} post={p} />)}
        </ul>
      </Layout>
    );
  }
};

const mapStateToProps = state => ({
  listPost: state
});

const mapDispatchToProps = {
  getDsPost: getDsPost
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
