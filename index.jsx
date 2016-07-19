var React = require('react');
var ReactDOM = require('react-dom');

/*====Stateless Version=====*/
// var Person = function(props) {
//     console.log(props);
//     return (
//         <div className="person">
//             <div className="person-name">{props.name}</div>
//             <img className="person-img" src={props.imageUrl} />
//             <div className="person-job">
//                 {props.job}
//             </div>
//         </div>
//     );
// };

/*====Stateful Version=====*/
var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        console.log(this.state.highlight);
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
        return (
            <div className={classes}>
                <div className="person-name">{this.props.name} onClick={this.onClick}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});



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
