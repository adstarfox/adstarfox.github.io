let windows = {
    'skills-link': `<section id="skills">
            <ol id="skills-list">
                <li>
                    <img class="skills-imgs "id="React" src="./images/React-icon.svg.png" alt="Axios">
                    <h3>Axios</h3>
                </li>
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
            </ol>
        </section>`,
    'projects-link': `<section id="projects">

            <ol id="project-list">
                <li id="project1">
                    <div class='poke-container'>
                        <div class="poke-links-container">
                            <p class="hovering" onclick="sendToWeb('PokeDemo')">Watch the 3 minute demo video</p>    
                            <p class="hovering" onclick="sendToWeb('PokeBattles')">See The Repo</p>
                        </div>
                    </div>
                </li>

                <li id="project2">
                    <div class='closet-container'>
                        <h3>The Closet Guy</h3>
                        <div class="links-container">
                            <p class="hovering" onclick="sendToWeb('TheClosetGuy')">Watch the 3 minute demo video</p>    
                            <p class="hovering" onclick="sendToWeb('TheClosetGuyRepo')">See The Repo</p>
                        </div>
                    </div>
                </li>

            </ol>
    </section>`,
    'contact-link': `<section id="contact">
            <ol id="contact-list">
                <li onclick="sendToWeb('GitHub')">
                    <div class="GitHub">
                        <img id="GitHub" src="./images/github-mark.png" alt="GitHub Logo"> 
                        <h3>GitHub</h3>
                    </div>
                </li>
                <li onclick="sendToWeb('LinkedIn')">
                    <div class="LinkedIn">
                        <img src="./images/LI-In-Bug.png" alt="LinkedIn Logo" id="LinkedIn">
                        <h3>LinkedIn</h3>
                    </div>
                </li>
                <li class="number">
                    <div id="phone"></div>
                    <h3>(385) 448-0319</h3>
                </li>
            </ol>
        </section>`
}

const links = document.querySelectorAll('a')
const main  = document.querySelector('main')
const projects  = document.getElementById('projects-link')
const skills  = document.querySelector('#skills-link')
const contact  = document.querySelector('#contact-link')

const changeWindow = evt => {
    projects.classList.remove('active')
    skills.classList.remove('active')
    contact.classList.remove('active')
    main.innerHTML = ''
    let section = evt.target.id
    main.innerHTML = windows[section]
    console.log(evt.target.id)
    evt.target.id === 'projects-link' &&  projects.classList.add('active')
    evt.target.id === 'skills-link' &&  skills.classList.add('active')
    evt.target.id === 'contact-link' &&  contact.classList.add('active')
    // links.classlist.add('active')
}

let sites = {
    'GitHub': `https://github.com/adstarfox`,
    'LinkedIn': `https://www.linkedin.com/in/alex-durrant-b48707207`,
    'PokeBattles': `https://github.com/adstarfox/PokeTeamBattle`,
    'PokeDemo': `https://share.vidyard.com/watch/T6Y1xUwuLKNda1GyEzojhb?`,
    'TheClosetGuy' : 'https://share.vidyard.com/watch/K9TYeed6De81QKuxGnbFo4?',
    'TheClosetGuyRepo' : 'https://github.com/adstarfox/TheClosetGuy'

}

const sendToWeb = webName => {
    open(sites[webName],'_blank')
}

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', changeWindow)
}


const pageLoad = () => {
    //hello
    projects.classList.add('active')
    main.innerHTML = windows['projects-link']
}

pageLoad()


