using api.Services;
using api.Services.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddScoped<FriendService>();
builder.Services.AddScoped<PasswordService>();
builder.Services.AddScoped<TodoService>();
builder.Services.AddScoped<UserService>();


var connectionString = builder.Configuration.GetConnectionString("SlayTheMonster");
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
