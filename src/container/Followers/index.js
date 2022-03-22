import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { getFollowersList } from './store/actions';

import styles from './style.css';

const Followers = ({ list, getFollowersList, staticContext }) => {
  useEffect(() => {
    if (!list.length) {
      getFollowersList();
    }
  }, []);

  if (staticContext) {
    staticContext.cssStyle = styles._getCss();
  }

  return (
    <div>
      <Helmet>
        <title>SSR Followers</title>
        <meta name="description" content="SSR Followers Page" />
      </Helmet>
      <div>Followers</div>
      <div>
        {list.map(item => (
          <div key={item.id} className={styles.item}>
            <img src={item.avatar_url} className={styles.avatar} />
            <a href={item.html_url} target="_blank">
              {item.login}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

Followers.loadData = state => {
  return state.dispatch(getFollowersList());
};

const mapStateToProps = state => ({
  list: state.followers.list
});

const mapDispatchToProps = dispatch => ({
  getFollowersList() {
    dispatch(getFollowersList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
