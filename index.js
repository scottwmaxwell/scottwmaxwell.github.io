// Sections
const aboutSection = document.getElementById("about");
const portfolioSection = document.getElementById("portfolio");
const blogSection = document.getElementById("blog");
const sections = [blogSection, portfolioSection, aboutSection];
const blogContainer = document.getElementById("blogContainer");

// Buttons (for showing sections)
const aboutButton = document.getElementById("aboutButton");
const portfolioButton = document.getElementById("portfolioButton");
const blogButton = document.getElementById("blogButton");
const buttons = [aboutButton, portfolioButton, blogButton];

// Listeners
aboutButton.addEventListener("click", (e) => {
  showSection(aboutButton, buttons, aboutSection, sections);
});

portfolioButton.addEventListener("click", (e) => {
  showSection(portfolioButton, buttons, portfolioSection, sections);
});

blogButton.addEventListener("click", (e) => {
  showSection(blogButton, buttons, blogSection, sections);
});

const showSection = (button, buttons, element, elements) => {
  blogContainer.classList.add("hidden");
  elements.forEach((elem) => {
    if (elem.id !== element.id) elem.classList.add("hidden");
  });
  element.classList.remove("hidden");
  element.classList.add("visible");

  buttons.forEach((btn) => {
    if (btn !== button) btn.classList.remove("nav-selected");
  });
  button.classList.add("nav-selected");
};

const getBlog = async (url) => {
  resp = await fetch(url);
  const blog = await resp.text();
  const backButton = '<a href="#" onclick="showBlogPosts()">Back</a>';
  blogContainer.innerHTML = backButton + blog;
  blogSection.classList.add("hidden");
  blogContainer.classList.remove("hidden");
};

const blogLinks = document.getElementsByClassName("blog-link");
for (let i = 0; i < blogLinks.length; i++) {
  blogLinks[i].addEventListener("click", (e) => {
    const url = e.target.href;
    if (url.includes("scottwmaxwell.github.io") || url.includes("127.0.0.1")) {
      e.preventDefault();
      getBlog(e.target.href);
    }
  });
}

const showBlogPosts = () => {
  blogContainer.classList.add("hidden");
  blogSection.classList.remove("hidden");
};
