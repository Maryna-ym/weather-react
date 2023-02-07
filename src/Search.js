import React from "react";

export default function Search() {
  return (
    <form className="search-form">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            className="form-control search-box"
            placeholder="The weather in..."
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-light shadow-sm"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Current"
            className="form-control btn btn-primary shadow-sm"
          />
        </div>
      </div>
    </form>
  );
}
