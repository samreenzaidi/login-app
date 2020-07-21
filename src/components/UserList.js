import React from 'react';
import Card from './Card';
import Loader from 'react-loader-spinner';

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userList : [],
            loading: true
        }
    }

    componentDidMount(){
        fetch("https://apertum-interview.herokuapp.com/api/users", {
            method: "GET",
            headers: {
            'Accept': 'application/json'
            }    
            })
            .then((response) => response.json())
            .then((response) => {
                    this.setState({
                        userList: response,
                        loading: false
                    })
                    window.localStorage.setItem("userList", JSON.stringify(this.state.userList));
                }
            )
            .catch((error) => {
                console.error("Error:", error);
            }
        );
    }

    handleChange = (e) =>{
        let list = JSON.parse(window.localStorage.getItem("userList"));
        switch(e.target.value){
            case "age >= 20":
                this.setState({
                    userList: list.filter(item => item.age >= 20)
                })
            break;
            case "age < 30":
                this.setState({
                    userList: list.filter(item => item.age < 30)
                })
            break;
            case "length of full name >= 10":
                this.setState({
                    userList: list.filter(item => (item.firstName + item.lastName).length >= 10)
                })
            break;
            default:
                this.setState({
                    userList: list
                })  
        }       
    }
    
    render(){
        const age = ["age >= 20", "age < 30", "length of full name >= 10"]
        return(
            <div>
                <div className="row row-filter">
                    <select onChange={this.handleChange}>
                        <option>Select Filter</option>
                        {age.map(item => {
                            return(
                                <option>{item}</option>
                            )
                        })}                        
                    </select>
                </div>
                <div className="row row-data">
                    {this.state.loading
                        ?<Loader type="Oval" color="#00BFFF" height={80} width={80}/>
                        :this.state.userList.map(item => {
                            return(
                                <Card item={item} />
                            )
                        })
                    }                    
                </div>
            </div>
        )
    }
}
export default UserList;
