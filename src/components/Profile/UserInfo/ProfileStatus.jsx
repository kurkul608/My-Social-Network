import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () =>{
        this.setState({
            editMode: true,
            status: this.props.status
        })  
    }
    deActivateEditMode = () =>{
        this.setState({
            editMode: false
        })  
        this.props.putStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value});

    }
    render() {
        
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'NO STATUS'}
                    </span>
                </div>
            }
            {(this.state.editMode ) &&
                <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActivateEditMode} value={this.state.status} /></div>
            }
        </div>
    }
}
export default ProfileStatus