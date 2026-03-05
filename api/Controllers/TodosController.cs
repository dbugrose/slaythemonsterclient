using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Services.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly DataContext _context;

        public TodosController(DataContext context)
        {
            _context = context;
        }
        //Create
    [HttpPost]
    public async Task<ActionResult<TodoModel>> Create(TodoModel todo)
        {
            if (string.IsNullOrEmpty(todo.Text))
            {
                return BadRequest("This is empty or the title is bad.");
            }
            _context.TodoInfo.Add(todo);
           await  _context.SaveChangesAsync();
           return Ok(todo);
        }

        //Read
        [HttpGet]
    public async Task<ActionResult<List<TodoModel>>> GetAll()
        {
            var todos = await _context.TodoInfo.OrderByDescending(t => t.Id).ToListAsync();
            return Ok(todos);
        }

        //Update
        [HttpPut("{id:int}")]

        public async Task <IActionResult> Update(int id, TodoModel updated)
        {
            var todo = await _context.TodoInfo.FindAsync(id);
            if(todo == null)
            {
                return NotFound();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest("This title is required.");
            }

            todo.Text = updated.Text;
            todo.Completed = updated.Completed;

            await _context.SaveChangesAsync();
            return NoContent();
        }
        //Delete
        [HttpDelete("{id:int}")]
        
        public async Task<IActionResult> Delete(int id)
        {
            var todo = await _context.TodoInfo.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }
            _context.TodoInfo.Remove(todo);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}