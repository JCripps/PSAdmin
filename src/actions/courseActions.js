"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var CourseApi = require("../api/courseApi");
var ActionTypes = require("../constants/actionTypes");

var CourseActions = { 
    createAuthor: function(course) { 
        var newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE, 
            course: newCourse
        });
    },
    updateAuthor: function(course) { 
        var updatedCourse = CourseApi.saveCourse(course);

        // Dispatcher tells all of the stores that an course has been created. 
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_COURSE, 
            course: updatedCourse
        });
    },
    deleteAuthor: function(id) { 
       CourseApi.deleteCourse(id);

        // Dispatcher tells all of the stores that an course has been created. 
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COURSE, 
            id: id
        });
    }
};

module.exports = CourseActions;