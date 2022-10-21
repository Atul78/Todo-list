import React from "react";

function TodoItem({name, handleSubmit, setName, state, DeleteItem, EditItem}) {
  return (
    <div>
      <form className="new_todo" onSubmit={handleSubmit}>
        <h1>Todo Input</h1>
        <input
          placeholder="New Todo"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Add new task</button>
        <div className="added_new_todo">
          <h1>TodoList</h1>
          {state.people.map((element) => {
            const { id, name } = element;
            if (name !== "") {
              return (
                <div className="original_list" key={id}>
                  <p>{name}</p>
                  <p>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/7470/7470497.png"
                      onClick={() => EditItem(id)}
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/7603/7603415.png"
                      onClick={() => DeleteItem(id)}
                    />
                  </p>
                </div>
              );
            }
          })}
        </div>
      </form>
    </div>
  );
}

export default TodoItem;
