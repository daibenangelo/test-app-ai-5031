import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="display-1">Hello!</h1>
        <p>
          This is a <b>test website</b> made for{" "}
          <strong>5.03.1 - Coding with an AI Assistant</strong>. It's a
          collection of components that do not <i>necessarily</i> belong
          together, but hey, it makes for a good test application!
        </p>
        <p>Here's the list of pages, for your reference:</p>
        <ul>
          <li>
            <a href="/">/</a> - The website's landing page. This page gives
            general information on using the website.
          </li>
          <li>
            <a href="/grades">/grades</a> - A simple grade calculation
            application that keeps track of score and total.
          </li>
          <li>
            <a href="/name">/name</a> - A simple application that demonstrates
            element content swapping.
          </li>
          <li>
            <a href="/order">/order</a> - Another simple application that
            demonstrates element content swapping.
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
