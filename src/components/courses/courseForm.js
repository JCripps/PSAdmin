"use strict";

var React = require("react");
var Input = require("../common/textInput");
var AuthorDropDown = require("../common/authorDropDown");

var CourseForm = React.createClass({
	propTypes: {
		course:	React.PropTypes.object.isRequired,
        authors: React.PropTypes.object.isRequired,
        onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},

    render: function() { 
        var heading = this.props.course ? "Add Course" : "Edit Course";
        
        return (
            <form>
                <h1>{heading}</h1>
                <Input name="title"
                    label="Title"
                    value={this.props.course.title}
                    onChange={this.props.onChange}
                    error={this.props.errors.title}/>
                
                <AuthorDropDown authors={this.props.authors} selectedAuthor={this.props.course.author}/>

                <Input name="category"
                    label="Category"
                    value={this.props.course.category}
                    onChange={this.props.onChange}
                    error={this.props.errors.category}/>

                <Input name="length"
                    label="Length"
                    value={this.props.course.length}
                    onChange={this.props.onChange}
                    error={this.props.errors.length}/>
                
				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = CourseForm;