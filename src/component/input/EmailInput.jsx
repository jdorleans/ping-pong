// @material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import EmailIcon from "@material-ui/icons/Email";
// core components
import Component from "component/Component";
// resources
import React from "react";

class EmailInput extends Component {

  render() {
    const {id, value, onChange} = this.props;
    return (
      <TextField
        id={id || "email"}
        placeholder={this.msg("email.name")}
        type={"text"}
        value={value}
        onChange={onChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon/>
            </InputAdornment>
          )
        }}
      />
    );
  }
}

export default EmailInput;
