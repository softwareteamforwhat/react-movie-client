import React, {Component} from "react";
import userLogout from "../../assets/images/userLogout.png";
import userDefault from "../../assets/images/userDefault.png";
import './index.less'
export default class User extends Component {
    render() {
        const avatar: string = localStorage.getItem("avatar") || userDefault;
        const token = localStorage.getItem("token");
        return (
          <div>
              User
          </div>
        );
    }
}