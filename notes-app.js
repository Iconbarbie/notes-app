console.log("awesome notes")

// add new element
const newparagraph = document.createElement("p");
newparagraph.textContent = "Happiness likes dancing";
document.querySelector("body").appendChild(newparagraph)

const notes =[
    {
        title: "My next trip",
        body: "awesome spain it is",
    },
    {
        title: "attend book session",
        body: "london arts",
    },
    {
        title: "book iam reading",
        body: "safe harbour",
    },
    {
        title: "javascript conference",
        body: "amsterdam center, netherlands",
    },
    {
        title: "formula1",
        body: "qatar rally",
    },
];
notes.forEach(function (note) {
    const p = document.createElement("p");
    p.textContent = `${note.title} -- ${note.body}`;
    document.querySelector("body").appendChild(p);
});

document.querySelector("button").addEventListener
("click", function (event) {
event.target.textContent = "the button was clicked";
});
