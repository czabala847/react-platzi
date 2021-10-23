import React from "react";

function TodoList({
  error,
  onError,
  loading,
  onLoading,
  searchedtodos,
  onEmpty,
  render,
  allTodos,
  searchText,
  onEmptyResult,
}) {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          {error && onError()}
          {loading && onLoading()}
          {!loading && !allTodos && onEmpty()}
          {!!allTodos && !searchedtodos.length && onEmptyResult(searchText)}

          {!loading && <ul className="m-0 p-0">{searchedtodos.map(render)}</ul>}
        </div>
      </div>
    </section>
  );
}

export { TodoList };
