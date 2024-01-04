import User from "../User";
import UserClass from "../UserClass";

class AboutUs extends React.Component {
  constructor(prope) {
    super(prope);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <UserClass name="Vishal jadhav (class)" location="Navi Mumbai" />
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <User name="Vishal jadhav" location="Navi Mumbai" />
//       <UserClass name="Vishal jadhav (class)" location="Navi Mumbai" />
//     </div>
//   );
// };

export default AboutUs;
