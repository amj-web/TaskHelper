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
                    Lorem1
                  </a>
       </li>
                <li>
                  <a
                    className="nav-link menu-item"
                    href="#What_you_should_already_know"
                  >
                    Lorem2
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#JavaScript_and_Java">
                    Lorem3
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#Hello_world">
                    Lorem4
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#Variables">
                    Lorem5
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#Declaring_variables">
                    Lorem6
                  </a>
                </li>
                <li>
                  <a className="nav-link menu-item" href="#Variable_scope">
                    Lorem7
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
                <header>Lorem1</header>
                <article>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                  </p>
                  <ul>
                    <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </li>
                    <li>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </li>
                  </ul>
                </article>
              </section>
              <section
                className="main-section"
                id="What_you_should_already_know"
              >
                <header>Lorem 2</header>
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
                <header>Lorem 3</header>
                <article>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </article>
              </section>
              <section className="main-section" id="Hello_world">
                <header>Lorem 4</header>
                <article>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </article>
              </section>
              <section className="main-section" id="Variables">
                <header>Lorem 5</header>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </section>
              <section className="main-section" id="Declaring_variables">
                <header>Lorem6</header>
                <article>
                  You can declare a variable in three ways:
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </article>
              </section>
              <section className="main-section" id="Variable_scope">
                <header>Lorem7</header>
                <article>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  {/* <code>if (true) {"{ var x = 5; }"}console.log(x); // 5</code> */}
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <code>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
