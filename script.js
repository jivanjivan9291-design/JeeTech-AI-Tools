const tools = [

    {
        name: "ChatGPT",
        icon: "🤖",
        category: "AI Assistant",
        description:
            "Useful for studying, coding, writing and learning.",
        link: "https://chatgpt.com/"
    },

    {
        name: "Canva",
        icon: "🎨",
        category: "Design AI",
        description:
            "Create presentations, posters, designs and graphics.",
        link: "https://www.canva.com/"
    },

    {
        name: "GitHub Copilot",
        icon: "💻",
        category: "Coding AI",
        description:
            "AI assistant that helps developers write code.",
        link: "https://github.com/features/copilot"
    },

    {
        name: "Google Gemini",
        icon: "✨",
        category: "AI Assistant",
        description:
            "AI assistant for learning, research and productivity.",
        link: "https://gemini.google.com/"
    },

    {
        name: "Perplexity",
        icon: "🔎",
        category: "AI Search",
        description:
            "AI-powered search and research assistant.",
        link: "https://www.perplexity.ai/"
    },

    {
        name: "Gamma",
        icon: "📊",
        category: "Presentation AI",
        description:
            "Create presentations and documents using AI.",
        link: "https://gamma.app/"
    }

];


const container =
    document.getElementById("tools-container");


const search =
    document.getElementById("search");


function displayTools(toolList) {

    container.innerHTML = "";

    toolList.forEach(tool => {

        const card = document.createElement("div");

        card.className = "tool-card";

        card.innerHTML = `

            <div class="tool-icon">
                ${tool.icon}
            </div>

            <h3>
                ${tool.name}
            </h3>

            <div class="category">
                ${tool.category}
            </div>

            <p>
                ${tool.description}
            </p>

            <a href="${tool.link}"
               target="_blank">

                Visit Tool

            </a>

        `;

        container.appendChild(card);

    });
}


displayTools(tools);


search.addEventListener("input", function () {

    const searchText =
        search.value.toLowerCase();

    const filteredTools =
        tools.filter(tool =>

            tool.name
                .toLowerCase()
                .includes(searchText)

            ||

            tool.category
                .toLowerCase()
                .includes(searchText)

        );

    displayTools(filteredTools);

});
