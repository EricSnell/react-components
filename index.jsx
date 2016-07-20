var React = require('react');
var ReactDOM = require('react-dom');

/*====Stateful Version=====*/
// var Person = React.createClass({
//     getInitialState: function() {
//         return {
//             highlight: false
//         };
//     },
//     onClick: function() {
//         console.log(this.state.highlight);
//         this.setState({
//             highlight: !this.state.highlight
//         });
//     },
//     render: function() {
//         var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
//         return (
//             <div className={classes}>
//                 <div className="person-name" onClick={this.onClick}>{this.props.name}</div>
//                 <img className="person-img" src={this.props.imageUrl} />
//                 <div className="person-job">
//                     {this.props.job}
//                 </div>
//             </div>
//         );
//     }
// });

/*====Stateless Version=====*/

// We pull the 'name', 'imageUrl', and 'job' from the props argument that is
// passed into the component
var Person = function(props) {
    console.log(props);
    return (
        <div className="person">
            <div className="person-name">{props.name}</div>
            <img className="person-img" src={props.imageUrl} />
            <div className="person-job">
                {props.job}
            </div>
        </div>
    );
};

// Setting a default image for the prop if not supplied using the defaultProps attribute
Person.defaultProps = {
    imageUrl: 'http://www.gravatar.com/avatar/?d=identicon'
};

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name="Derek Zoolander"
                    imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg"
                    job="Male model" />
            <Person name="Donald Knuth"
          //          imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
};


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<PersonList />, document.getElementById('app'));
});
