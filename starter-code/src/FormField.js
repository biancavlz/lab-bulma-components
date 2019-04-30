import React from 'react'
// import React, {Component} from 'react'

class FormField extends React.Component {
  //class FormField extends Component { 
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

//or as a function instead of a class
// const FormField = (props) => {
//   const { label, type, placeholder } = props; => distraucturing equivalent to:
      // const label = props.label
      // const type = props.typel
      // const placeholder = props.placeholder
//   return (
//     <div className="field">
//       <label className="label">{label}</label>
//       <div className="control">
//         <input className="input" type={type} placeholder={placeholder} />
//       </div>
//     </div>
//   )
// }

export default FormField;
