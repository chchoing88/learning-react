import React, { Component } from 'react';
import Member from './Member';
import getFakeMembers from './getFakeMembers';

class App extends Component {
  constructor(){
    super();
    this.state = {
      members: [],
      loading: false,
      error: null,
    }
  }

  componentWillMount(){
    this.setState({loading: true});
    getFakeMembers(this.props.count).then(
      members => {
        this.setState({members, loading: false})
      },
      error => {
        this.setState({error, loading: false})
      }
    )
  }

  componentWillUpdate(){
    console.log('갱신 생애주기');
  }

  render(){
    const {members, loading, error} = this.state;
    return (
      <div>
        {(loading) ?
          <span>멤버 로딩중</span> : 
          (members.length) ? 
            members.map((user, i) => 
            <Member key={i} {...user} />
            ) :
            <span>0 멤버 로딩됨...</span>
        
        }
        {(error) ? <p>멤버 로딩 오류: {error}</p> : ""}
      </div>
    )
  }
}

export default App;
