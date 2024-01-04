import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        image: "",
      },
    };

    //console.log("child constructor");
  }

  async componentDidMount() {
    //console.log("Child componenet did mount");
    const response = await fetch("https://api.github.com/users/vishal1626");
    const json = await response.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    //console.log("child render");
    const { name, login, avatar_url } = this.state.userInfo;
    return (
      <div className="userClass">
        <img src={avatar_url} />
        <h2>{name}</h2>
        <h3>{login}</h3>
      </div>
    );
  }
}

export default UserClass;
