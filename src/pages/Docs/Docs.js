import React, { useEffect } from "react";
import "./Docs.css";
const Docs = () => {
  useEffect(() => {
    initDocs();

  }, [])


  const initDocs = () => {
    const docsMenu = document.getElementById("docs-menu");
    const menuBtn = document.getElementById("menu-toggle-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    if (+window.innerWidth <= 768) {
      menuBtn.innerText = "Show Menu";
      docsMenu.classList.add("hide");
    } else {
      menuBtn.innerText = "Hide Menu";
      docsMenu.classList.remove("hide");
    }

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // console.log(item);
        menuItems.forEach((itemin) => {
          itemin.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  };

  const handleToggleClick = () => {
    const docsMenu = document.getElementById("docs-menu");
    const menuBtn = document.getElementById("menu-toggle-btn");
    docsMenu.classList.toggle("hide");
    menuBtn.innerText =
      menuBtn.innerText === "Show Menu" ? "Hide Menu" : "Show Menu";
  };

  const handleToggleClickScreen = () => {
    if (+window.innerWidth <= 768) {
      handleToggleClick();
    }
  };

  window.addEventListener("resize", initDocs);
  // document.addEventListener("DOMContentLoaded", initDocs);

  return (
    <React.Fragment>
      <div className="docs-page w-full px-3 py-4">
        <div className="docs-container w-100 mx-auto p-2">
          <div
            className="docs-menu rounded"
            id="docs-menu"
            onClick={handleToggleClickScreen}
          >
            <nav>
              <header className="bg-success text-light text-center fs-2">
                Documentation
              </header>
              <ul>
                <li>
                  <a className="nav-link active menu-item" href="#Introduction">
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link menu-item"
                    href="#What_you_should_already_know"
                  >
                    What you should already know
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#JavaScript_and_Java">
                    JavaScript and Java
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#Hello_world">
                    Hello world
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#Variables">
                    Variables
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#Declaring_variables">
                    Declaring variables
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#Variable_scope">
                    Variable scope
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="docs-content-containter ms-2">
            <div className="shadow-sm px-2 py-2">
              <button
                className="menu-toggle-btn border-0 fw-bold"
                id="menu-toggle-btn"
                onClick={handleToggleClick}
              >
                Hide Menu
              </button>
            </div>
            <main className="docs-content my-2 px-3 ">
              <section className="main-section" id="Introduction">
                <header>Introduction</header>
                <article>
                  <p>
                   JavaScript is a cross-platform, object-oriented scripting
                    language. It is a small and lightweight language. Inside a
                    host environment (for example, a web browser), JavaScript
                    can be connected to the objects of its environment to
                    provide programmatic control over them. JavaScript is a
                    cross-platform, object-oriented scripting language. It is a
                    small and lightweight language. Inside a host environment
                    (for example, a web browser), JavaScript can be connected to
                    the objects of its environment to provide programmatic
                    control over them.
                  </p>

                  <p>
                    JavaScript contains a standard library of objects, such as
                    Array, Date, and Math, and a core set of language elements
                    such as operators, control structures, and statements. Core
                    JavaScript can be extended for a variety of purposes by
                    supplementing it with additional objects; for example:
                  </p>
                  <ul>
                    <li>
                      Client-side JavaScript extends the core language by
                      supplying objects to control a browser and its Document
                      Object Model (DOM). For example, client-side extensions
                      allow an application to place elements on an HTML form and
                      respond to user events such as mouse clicks, form input,
                      and page navigation.
                    </li>
                    <li>
                      Server-side JavaScript extends the core language by
                      supplying objects relevant to running JavaScript on a
                      server. For example, server-side extensions allow an
                      application to communicate with a database, provide
                      continuity of information from one invocation to another
                      of the application, or perform file manipulations on a
                      server.
                    </li>
                  </ul>
                </article>
              </section>
              <section
                className="main-section"
                id="What_you_should_already_know"
              >
                <header>What you should already know</header>
                <article>
                  <p>
                    This guide assumes you have the following basic background:
                  </p>
                  <ul>
                    <li>
                      A general understanding of the Internet and the World Wide
                      Web (WWW).
                    </li>
                    <li>
                      Good working knowledge of HyperText Markup Language
                      (HTML).
                    </li>
                    <li>
                      Some programming experience. If you are new to
                      programming, try one of the tutorials linked on the main
                      page about JavaScript.
                    </li>
                  </ul>
                </article>
              </section>
              <section className="main-section" id="JavaScript_and_Java">
                <header>JavaScript and Java</header>
                <article>
                  <p>
                    JavaScript and Java are similar in some ways but
                    fundamentally different in some others. The JavaScript
                    language resembles Java but does not have Java&apos;s static
                    typing and strong type checking. JavaScript follows most
                    Java expression syntax, naming conventions and basic
                    control-flow constructs which was the reason why it was
                    renamed from LiveScript to JavaScript.
                  </p>
                  <p>
                    In contrast to Java&apos;s compile-time system of classes built
                    by declarations, JavaScript supports a runtime system based
                    on a small number of data types representing numeric,
                    Boolean, and string values. JavaScript has a prototype-based
                    object model instead of the more common class-based object
                    model. The prototype-based model provides dynamic
                    inheritance; that is, what is inherited can vary for
                    individual objects. JavaScript also supports functions
                    without any special declarative requirements. Functions can
                    be properties of objects, executing as loosely typed
                    methods.
                  </p>
                  <p>
                    JavaScript is a very free-form language compared to Java.
                    You do not have to declare all variables, classes, and
                    methods. You do not have to be concerned with whether
                    methods are public, private, or protected, and you do not
                    have to implement interfaces. Variables, parameters, and
                    function return types are not explicitly typed.
                  </p>
                </article>
              </section>
              <section className="main-section" id="Hello_world">
                <header>Hello world</header>
                <article>
                  To get started with writing JavaScript, open the Scratchpad
                  and write your first &quot;Hello world&quot; JavaScript code:
                  <code>function greetMe(yourName)</code>
                  Select the code in the pad and hit Ctrl+R to watch it unfold
                  in your browser!
                </article>
              </section>
              <section className="main-section" id="Variables">
                <header>Variables</header>
                <p>
                  You use variables as symbolic names for values in your
                  application. The names of variables, called identifiers,
                  conform to certain rules.
                </p>
                <p>
                  A JavaScript identifier must start with a letter, underscore
                  (_), or dollar sign ($); subsequent characters can also be
                  digits (0-9). Because JavaScript is case sensitive, letters
                  include the characters &quot;A&quot; through &quot;Z&quot; (uppercase) and the
                  characters &quot;a&quot; through &quot;z&quot; (lowercase).
                </p>
                <p>
                  You can use ISO 8859-1 or Unicode letters such as å and ü in
                  identifiers. You can also use the Unicode escape sequences as
                  characters in identifiers. Some examples of legal names are
                  Number_hits, temp99, and _name.
                </p>
              </section>
              <section className="main-section" id="Declaring_variables">
                <header>Declaring variables</header>
                <article>
                  You can declare a variable in three ways:
                  <p>
                    With the keyword var. For example, <code>var x = 42.</code>{" "}
                    This syntax can be used to declare both local and global
                    variables.
                  </p>
                  <p>
                    By simply assigning it a value. For example,{" "}
                    <code>x = 42.</code> This always declares a global variable.
                    It generates a strict JavaScript warning. You shouldn&apos;t use
                    this variant.
                  </p>
                  <p>
                    With the keyword let. For example,<code> let y = 13.</code>{" "}
                    This syntax can be used to declare a block scope local
                    variable. See Variable scope below.
                  </p>
                </article>
              </section>
              <section className="main-section" id="Variable_scope">
                <header>Variable scope</header>
                <article>
                  <p>
                    When you declare a variable outside of any function, it is
                    called a global variable, because it is available to any
                    other code in the current document. When you declare a
                    variable within a function, it is called a local variable,
                    because it is available only within that function.
                  </p>
                  <p>
                    JavaScript before ECMAScript 2015 does not have block
                    statement scope; rather, a variable declared within a block
                    is local to the function (or global scope) that the block
                    resides within. For example the following code will log 5,
                    because the scope of x is the function (or global context)
                    within which x is declared, not the block, which in this
                    case is an if statement.
                  </p>
                  <code>if (true) {"{ var x = 5; }"}console.log(x); // 5</code>
                  <p>
                    This behavior changes, when using the let declaration
                    introduced in ECMAScript 2015.
                  </p>
                  <code>
                    if (true) {"{ let y = 5; } "}console.log(y); //
                    ReferenceError: y is not defined
                  </code>
                </article>
              </section>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Docs;
