import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFollowersList } from './store/actions';

const Followers = ({ list, getFollowersList }) => {
  useEffect(() => {
    if (!list.length) {
      getFollowersList();
    }
  }, []);

  return (
    <div>
      <div>Followers</div>
      <div>
        {list.map(item => (
          <div key={item.id}>
            <img src={item.avatar_url} width={18} style={{ marginRight: 4, borderRadius: '50%' }} />
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
