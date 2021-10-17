import React from "react";

function TodoList(props) {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <ul className="m-0 p-0">{props.children}</ul>
        </div>
      </div>
    </section>
  );
}

export { TodoList };
