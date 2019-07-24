// @material-ui components
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// core components
import Component from "component/Component";
// resources
import React from "react";

class PasswordInput extends Component {

  initDefault() {
    return {
      showPass: false
    };
  }

  toggleShow = () => this.setState(s => ({showPass: !s.showPass}));

  render() {
    const {id, lb, ph, value, si, onChange} = this.props;
    return (
      <TextField
        id={id || "password"}
        label={lb || ""}
        placeholder={ph === "" || ph ? ph : this.msg("password.name")}
        type={this.state.showPass ? "text" : "password"}
        value={value}
        onChange={onChange}
        fullWidth
        InputProps={{
          startAdornment: si === undefined || si ? (
            <InputAdornment position="start"><LockOutlinedIcon/></InputAdornment>
          ) : null,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={this.toggleShow} onMouseDown={e => e.preventDefault()}>
                {this.state.showPass ? <VisibilityOffIcon/> : <VisibilityIcon/>}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  }
}

export default PasswordInput;
