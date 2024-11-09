// Sections
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const blogSection = document.getElementById('blog');
const sections = [blogSection, portfolioSection, aboutSection];

// Buttons (for showing sections)
const aboutButton = document.getElementById('aboutButton');
const portfolioButton = document.getElementById('portfolioButton');
const blogButton = document.getElementById('blogButton');
const buttons = [aboutButton, portfolioButton, blogButton];

// Listeners
aboutButton.addEventListener('click', (e)=>{
    console.log('aboutButton clicked!');
    showSection(aboutButton, buttons, aboutSection, sections);
});

portfolioButton.addEventListener('click', (e)=>{
    console.log('portfolioButton clicked!');
    showSection(portfolioButton, buttons, portfolioSection, sections);
});

blogButton.addEventListener('click', (e)=>{
    console.log('blogButton clicked!');
    showSection(blogButton, buttons, blogSection, sections);
});

const showSection = (button, buttons, element, elements) => {
    elements.forEach((elem)=>{
        if(elem.id !== element.id){
            elem.classList.add("hidden");
            console.log("adding hidden to " + elem.id)
        }
    });
    element.classList.remove("hidden");
    element.classList.add("visible");

    buttons.forEach((btn)=>{
        if(btn !== button)
            btn.classList.remove("nav-selected");
    });
    button.classList.add("nav-selected");
}

const getBlog = async (url) =>{
    resp = await fetch(url);
    const blog = await resp.text();
    document.body.innerHTML += blog;
}