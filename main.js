let windows = {
    'about-link': `<section id="about">
            <h2>About</h2>
            <p>I thrive in high pressure scenarios and am able to quickly adapt to an ever-changing environment. I enjoy the thrill of competition and value integrity, hard work and learning new skills! Working with people collaboratively and contributing to my team’s success is always on my to-do list!</p>
        </section>`,
    'skills-link': `<section id="skills">
            <h2>Skills</h2>
            <ol>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>EC2</li>
                <li>Express</li>
                <li>Cors</li>
                <li>Postman</li>
                <li>SQL</li>
                <li>Axios</li>
                <li>Run Natural Gas</li>
                <li>Being Tall</li>
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


