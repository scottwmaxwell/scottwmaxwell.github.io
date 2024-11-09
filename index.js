// Sections
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const blogSection = document.getElementById('blog');
const sections = [aboutSection, portfolioSection, blogSection];

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
        if(elem != element)
            elem.classList.add("hidden");
        console.log(elem.classList);
    });
    element.classList.remove("hidden");

    buttons.forEach((btn)=>{
        if(btn != button)
            btn.classList.remove("navSelected");
    });
    button.classList.add("navSelected");
}

const getBlog = async () =>{
    resp = await fetch("/collection/example.html");
    const blog = await resp.text();
    document.body.innerHTML += blog;
}

getHTML();