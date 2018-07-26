"use strict";

var React = require("react");

var AuthorDropDown = React.createClass({
    propTypes: { 
        authors: React.PropTypes.array.isRequired,
        authorOnChange: React.PropTypes.func.isRequired
    },
    
    getInitialState: function() { 
        return {
            selectedAuthor: this.props.selectedAuthor
        };
    },

    createAuthorOption: function(author) { 
        var selected = author.id === this.props.selectedAuthor.id ? "selected" : "";
        return (
            <option key={author.id} value={author.id}>{author.firstName + " " + author.lastName}</option>
        );
    },

    onChange: function(event) { 
        var authorOption = event.target[event.target.selectedIndex];

        this.state.selectedAuthor = {
            id: event.target.value,
            name: authorOption.text
        };

        this.setState({
            selectedAuthor: this.state.selectedAuthor
        });

        this.props.authorOnChange(this.state.selectedAuthor);
    },

    render: function() { 
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="authorDropDown">Author</label>
                    <select name="authorDropDown" className="form-control" onChange={this.onChange} value={this.props.selectedAuthor.id}>
                        {this.props.authors.map(this.createAuthorOption, this)}
                    </select>
                </div>
            </div>
        );
    }
});

module.exports = AuthorDropDown;