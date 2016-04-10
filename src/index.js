import React from 'react';
import '../styles/css/bootstrap.css';

const Text = React.createClass({
   render: function(){
     return (<input type="text"
              className="form-control"
              placeholder={this.props.placeholder}
              value={this.props.fieldvalue}/>)
   }
});

export {Text};
