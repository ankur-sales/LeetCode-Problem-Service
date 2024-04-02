const express = require('express');

const { ProblemController } = require('../../controllers/index')
const problemRouter = express.Router();


problemRouter.get('/ping', ProblemController.pingProblemController);
problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.get('/', ProblemController.getProblems);
problemRouter.post('/', ProblemController.addProblem);
problemRouter.delete('/', ProblemController.deleteProblems);
problemRouter.put('/', ProblemController.updateProblem);

module.exports = problemRouter;

