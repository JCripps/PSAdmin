"use strict";

var React = require("react");
var Router = require("react-router");
var Toastr = require("toastr");

var CourseForm = require("./courseForm");
var CourseActions = require("../../actions/courseActions");
var CourseStore = require("../../stores/courseStore");
var AuthorStore = require("../../stores/authorStore");

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() { 
        return {
            course: {
                id: "",
                title: "",
                watchHref: "",
                author: {  
                    id: "",
                    name: ""
                },
                length: "",
                category: ""
            },
            authors: AuthorStore.getAllAuthors(),
            errors: {},
            dirty: false
        };
    },
    
    componentWillMount: function() {
        var courseId = this.props.params.id;

        if(courseId) {
            this.setState({course: CourseStore.getCourseById(courseId)});
        }
    },

    setCourseState: function(event) { 
        var field = event.target.name; 
        var value = event.target.value; 

        this.state.course[field] = value; 
        
        return this.setState({
            course: this.state.course,
            dirty: true
        });
    },

    setCourseAuthorState: function(author) { 
        this.state.course.author = author;
        
        return this.setState({
            course: this.state.course,
            dirty: true
        });
    },

    saveCourse: function(event) {
        event.preventDefault();
        
        if(this.courseFormIsValid()) {
            if(this.state.course.id) {
                CourseActions.updateCourse(this.state.course);
            } else { 
                CourseActions.createCourse(this.state.course);
            }
            
            Toastr.success("Course saved.");
            this.transitionTo("courses");
            this.setState({dirty: false});
        }
    },

    courseFormIsValid: function() {
        this.state.errors = {}; //Clear any previous errors
        var isValid = true; 

        if(this.state.course.title.length < 3) {
            this.state.errors.title = "The title must be at least 3 characters";
            isValid = false;
        } 
        
        if (this.state.course.category.length < 3) {
            this.state.errors.category = "The category must be at least 3 characters";
            isValid = false;
        }

        if (this.state.course.length.length < 3) {
            this.state.errors.length = "The length must be at least 3 characters";
            isValid = false;
        }

        this.setState({errors: this.state.errors});

        return isValid;
    },

    render: function() { 
        return (
            <CourseForm 
            course={this.state.course}
            authors={this.state.authors}
            onChange={this.setCourseState}
            authorOnChange={this.setCourseAuthorState}
            onSave={this.saveCourse} 
            errors={this.state.errors}/>
        );
    }
});

module.exports = ManageCoursePage;