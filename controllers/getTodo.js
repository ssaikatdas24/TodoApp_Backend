// import th model
const Todo = require("../models/Todo");
//define route handler
exports.getTodos= async(req, res) => {

    try {
        // fetch all todos from database
        // mongoose provide very much functions
        // now i want to find every items
        const todos = await Todo.find({});

        // response ko update kar do
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Entire TODO data is fetched'
        });
    }
    catch(err) {
    console.error(err)
    res.status(500)
    .json({
        success : false,
        error:err.message,
        message: 'Server Error',
    });
}
}

exports.getTodoById = async(req, res) => {
    try {
        // fetch all todos from database
        // mongoose provide very much functions
        // now i want to find every items
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // data forgiven id not found
        if(!todo) {
            return res.status(404)
            .json({
                success: false,
                error: 'Todo not found',
                message: 'Todo not found'
            });
        }
        // data found

        // response ko update kar do
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo with id ${id} is fetched`
        });
    }
    catch(err) {
    console.error(err)
    res.status(500)
    .json({
        success : false,
        error:err.message,
        message: 'Server Error',
    });
}
}




