import React, {Component} from 'react';

export class VisibilityControl extends Component {
    render = () => {
        return (
            <div className ="form-check">
                <input classname = "form-checkinput" type = "checkbox"
                    checked= {this.props.isChecked}
                    onChange = { (element) => this.props.callback(element.target.checked)} />
                <label className = "form-check-label">
                    Show {this.props.description}
                </label>
            </div>
        )
    }
}