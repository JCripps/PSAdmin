"use strict";

var React = require("react");

var AuthorDropDown = React.createClass({
    propTypes: { 
        authors: React.PropTypes.array.isRequired
    },

    createAuthorOption: function(author) { 
        var selected = author === this.props.selectedAuthor ? "selected" : "";
        return (
            <option selected={selected}value={author.id}>{author.firstName + " " + author.lastName}</option>
        );
    },

    render: function() { 
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="authorDropDown">Author</label>
                    <select name="authorDropDown" className="form-control">
                        {this.props.authors.map(this.createAuthorOption, this)}
                    </select>
                </div>
            </div>
        );
    }
});

module.exports = AuthorDropDown;