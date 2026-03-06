using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Services;
using api.Services.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly TodoService _context;

        public TodosController(TodoService context)
        {
            _context = context;
        }
        //Create
    [HttpPost("CreateTodo")]
    public bool CreateTodo(TodoModel todo)
        {
            return _context.CreateTodo(todo);
        }

[HttpGet("GetTodos")]

        public IEnumerable<TodoModel> GetTodos()
        {
            return _context.GetTodos();
        }

[HttpGet("GetIncompleteTodos")]

        public IEnumerable<TodoModel> GetIncompleteTodos()
        {
            return _context.GetIncompleteTodos();
        }
        [HttpPut("UpdateTodo/{ToUpdate}")]
        public bool UpdateTodo(TodoModel toUpdate)
        {
            return _context.UpdateTodo(toUpdate);
        }
        [HttpPut("DeleteTodo/{ToDelete}")]
        public bool DeleteTodo(TodoModel toDelete)
        {
            return _context.DeleteTodo(toDelete);
        }
    }
}