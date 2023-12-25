import "./ProjectCard.css"


export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h2>${project.title}</h2>
<div>
<a href=${project.github}>
<img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1700336404/PortofolioMarcMateo/logotipo-de-github_ca1hvx.png" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1701516514/PortofolioMarcMateo/link_s2uhw1.png" alt="Link icon" />
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;