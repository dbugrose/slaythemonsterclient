using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using api.Services.Context;

namespace api.Services
{
    public class TodoService
    {
        private readonly DataContext _context;
        public TodoService(DataContext context)
        {
          _context = context;  
        }
        public bool CreateTodo(TodoModel todo)
        {
            bool result;
            _context.Add(todo);
            result = _context.SaveChanges() != 0;
            return result;       
        }

        public bool DeleteTodo(TodoModel toDelete)
        {
            _context.Update(toDelete);
            return _context.SaveChanges() != 0;
        }

        public IEnumerable<TodoModel> GetIncompleteTodos()
        {
            return _context.TodoInfo.Where(item => item.Completed == false);
        }

        public IEnumerable<TodoModel> GetTodos()
        {
            return _context.TodoInfo;
        }

        public bool UpdateTodo(TodoModel toUpdate)
        {
            _context.Update(toUpdate);
            return _context.SaveChanges() != 0;
        }
    }
}