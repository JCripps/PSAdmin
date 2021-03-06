"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var AuthorApi = require("../api/authorApi");
var ActionTypes = require("../constants/actionTypes");

var AuthorActions = { 
    createAuthor: function(author) { 
        var newAuthor = AuthorApi.saveAuthor(author);

        // Dispatcher tells all of the stores that an author has been created. 
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR, 
            author: newAuthor
        });
    },
    updateAuthor: function(author) { 
        var updatedAuthor = AuthorApi.saveAuthor(author);

        // Dispatcher tells all of the stores that an author has been created. 
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR, 
            author: updatedAuthor
        });
    },
    deleteAuthor: function(id) { 
       AuthorApi.deleteAuthor(id);

        // Dispatcher tells all of the stores that an author has been created. 
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR, 
            id: id
        });
    }
};

module.exports = AuthorActions;