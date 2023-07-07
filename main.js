let windows = {
    'about-link': `<section id="about">
            <h2>About</h2>
            <p>I thrive in high pressure scenarios and am able to quickly adapt to an ever-changing environment. I enjoy the thrill of competition and value integrity, hard work and learning new skills! Working with people collaboratively and contributing to my team’s success is always on my to-do list!</p>
        </section>`,
    'skills-link': `<section id="skills">
            <h2>Skills</h2>
            <ol id="skills-list">
                <li>
                    <img class="skills-imgs "id="JavaScript-img" src="./images/javascript.png" alt="JavaScript">
                    <h3>JavaScript</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="HTML-img" src="./images/HTML.png" alt="HTML">
                    <h3>HTML</h3>
                </li>
                <li>
                    <img class="skills-imgs "id=CSS-img" src="./images/CSS3_logo.svg.png" alt="CSS">
                    <h3>CSS</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="node-img" src="./images/node.png" alt="Node">
                    <h3>Node</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="ec2-img" src="./images/ec2.png" alt="EC2">
                    <h3>EC2</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="express-img" src="./images/expressjs.png" alt="Express">
                    <h3>Express</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="cors-img" src="./images/cors.png" alt="CORS">
                    <h3>Cors</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="github-img" src="./images/github-mark.png" alt="GitHub">    
                    <h3>GitHub</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="postman-img" src="./images/postman.png" alt="postman">
                    <h3>Postman</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="sql-img" src="./images/sql.png" alt="SQL">
                    <h3>SQL</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="Axios" src="./images/axios.png" alt="Axios">
                    <h3>Axios</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="Pipe-img" src="./images/pipe.png" alt="Steal Pipe">
                    <h3>Natual Gas Installer</h3>
                </li>
                <li>
                    <img class="skills-imgs "id="Tall-img" src="./images/tall.png" alt="Tall">
                    <h3>Being Tall</h3>
                </li>
            </ol>
        </section>`,
    'projects-link': `<section id="projects">
            <h2>Projects</h2>
            <ol id="project-list">
                <li id="project1">
                        <h3>Pokemon Battle Simulator</h3>
                        <p class="hovering" onclick="sendToWeb('PokeDemo')">Watch the 3 minute demo video</p>    
                        <p class="hovering" onclick="sendToWeb('PokeBattles')">Go to the Website</p>
                </li>

                <li id="project2">
                    <h3>Project 2</h3>
                    <p>This project is under construction</p>
                </li>

            </ol>
    </section>`,
    'contact-link': `<section id="contact">
            <h2>Contact Me</h2>
            <ol id="contact-list">
                <li onclick="sendToWeb('GitHub')">
                    <div class="hovering">
                        <img id="GitHub" src="./images/github-mark.png" alt="GitHub Logo"> 
                        <h3>GitHub</h3>
                    </div>
                </li>
                <li onclick="sendToWeb('LinkedIn')">
                    <div class="hovering">
                        <img src="./images/LI-In-Bug.png" alt="LinkedIn Logo" id="LinkedIn">
                        <h3>LinkedIn</h3>
                    </div>
                </li>
                <li>
                    <div id="phone"></div>
                    <h3>(385) 448-0319</h3>
                </li>
            </ol>
        </section>`
}

const links = document.querySelectorAll('a')
const main  = document.querySelector('main')

const changeWindow = evt => {
    main.innerHTML = ''
    let section = evt.target.id
    main.innerHTML = windows[section]
}

let sites = {
    'GitHub': `https://github.com/adstarfox`,
    'LinkedIn': `https://www.linkedin.com/in/alex-durrant-b48707207`,
    'PokeBattles': `http://3.144.92.77`,
    'PokeDemo': `https://share.vidyard.com/watch/T6Y1xUwuLKNda1GyEzojhb?`

}

const sendToWeb = webName => {
    open(sites[webName],'_blank')
}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', changeWindow)
}


const pageLoad = () => {
    main.innerHTML = windows['about-link']
}

pageLoad()


