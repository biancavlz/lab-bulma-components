import React from 'react'

class FormField extends React.Component {
  render(){
    const formField = (
      <div>
        <div className="field">
          <label className="label">{this.props.label}</label>
          <div className="control">
            <input className="input" type="text" placeholder={this.props.placeholder} />
          </div>
        </div>
      </div>
    )

    return formField;
  }
}

export default FormField;
