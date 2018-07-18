"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;
var Toastr = require("toastr");

var CourseActions = require("../../actions/courseActions");

var CourseList = React.createClass({
    propTypes: { 
        courses: React.PropTypes.array.isRequired
    },

    deleteCourse: function(id, event) { 
        event.preventDefault(); 
        Toastr.success("Author Deleted");
    },

    render: function() { 
        var createCourseRow = function(course) { 
            return (
                <tr key={course.title}>
                    <td>Watch</td>
                    <td><Link to="manageAuthor" params={{id: course.id}}>{course.title}</Link></td>
                    <td>{course.author.name}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                    {/* <td><a href="#" onClick={this.deleteAuthor.bind(this, course.title)}>Delete Author</a></td> */}
                    <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete Author</a></td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = CourseList;