import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          id: '',
          password: '',
          errors: {
            id: '',
            password: ''
          }
        }
      }
    onLogin = (event) => {
        event.preventDefault();
        const data = {
            accountId: this.state.id,
            pswd: this.state.password
        }
        if(this.validateForm(this.state.errors)) {
            fetch("https://apertum-interview.herokuapp.com/api/user/login", {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)    
                })
                .then((response) => response.json())
                .then((response) => {
                    window.localStorage.setItem("TOKEN", response.token); 
                    this.props.history.push('/userlist');
                    }
                )
                .catch((error) => {
                    console.error("Error:", error);
                }
            );
        }
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
      }

    handleChange = (e) =>{
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch(name){
            case "id":
                errors.id = value=='admin' ? '' : 'Please enter a valid id';
            break;
            case "password":
                errors.password = value=='123456' ? '' : 'Please enter a valid password';
            break;
            default:
            break;
        }  
        this.setState({
            errors, [name]: value
        });     
    }
        
    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-12 login-form">
                        <h3>Apertum</h3>
                        <form onSubmit={this.onLogin}>
                            <div className="form-group">
                                <input type="text" name="id" className="form-control" placeholder="Your ID *" onChange={this.handleChange} required/>
                                {this.state.errors.id.length > 0 && <span className='error'>{this.state.errors.id}</span>}
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Your Password *" onChange={this.handleChange} required/>
                                {this.state.errors.password.length > 0 && <span className='error'>{this.state.errors.password}</span>}
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Login;