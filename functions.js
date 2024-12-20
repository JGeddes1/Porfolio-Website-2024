// Get references to elements
const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');

// Get all project images
const projectImages = document.querySelectorAll('.project-image');

// Add click event listener to each project image
projectImages.forEach(image => {
    image.addEventListener('click', () => {
        // Get the target modal ID
        const modalTarget = image.getAttribute('data-modal-target');
        
        // Get the content for the specific modal
        const projectDetails = getProjectDetails(modalTarget);

        // Set the modal content
        modalContent.innerHTML = projectDetails;

        // Display the modal
        modalContainer.style.display = 'block';
    });
});

// Function to close the modal
function closeModal() {
    modalContainer.style.display = 'none';
}

// Function to get the content for a specific project modal
function getProjectDetails(modalTarget) {
    switch (modalTarget) {
        case 'modal1':
            return `
            <span class="close-btn" onclick="closeModal()">&times;</span>
                <h4>Unemployment rate in uk 2023 regions Folium Leaflet Map Project</h4>
                  <p>This choropleth map was created from the open government csv data (May 2023) and grabbing a geojson file that has the UK region geometry data. The geojson and region unemployment data is joined
                   and the map is created. The Folium Python package allowed me to create this cool visual leaflet map, then to display it on this website I used Flask. Some other packages involved in the creation of map were:<br>
                    
                    <ul>
                    <li>pandas</li>
                    <li>geopandas</li>
                    <li>numpy</li>
                    
                    </ul>
                    
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Unemployment-Rate-Folium-Leaflet-Map-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub</a>
                    </p>                    

                    </p> 
                <iframe class="map" , src="map.html" width="100%" height="85%"></iframe>
                
            `;
        case 'modal2':
            return `
              <span class="close-btn" onclick="closeModal()">&times;</span>
                <h4>Topographic Ruggedness Index (Riley) Mesolithic Sites in Iron Gates</h4>
                                                    <h5>Introduction</h5>
                                                    <p>In this project I was focusing on the main burial sites within the Iron gate, from the mesolithic
                                                        period and wanted to use see using geospatial data analysis if there was a correlation between landscape and mortuary rights. These sites include Vlasac, Lepenski Vir, Climente II, Kula, and Schela Cladovei.
                                                        The rationale for choosing this project is that the sites all have different burial practises
                                                        within the small terrain. This is thought to be due to the landscape being hard to navigate
                                                        and pass, therefore leading to a spread of tribes and lack of interaction between tribes
                                                        leading to the use of different mortuary rights taking place.
                                                        In the download there are a few maps developed aim to demonstrate if this theory is correct and to provide evidence
                                                        that helps to provide an understanding of why there are varying burial practises across the
                                                        sites.</p>
                                                   
                                                    <div id="image_container">
                                                    
                                                        <img src="GIS_map_images/terrain_roughness_riley.png" alt="terrain roughness" style="width:100%" float:left;>
                                                </div>
                                               
                                                <div id="floated">
                                                <p></p>
                                                
                                                                        <button class="w3-button w3-light-grey w3-padding-large w3-section">
                                                                            <i class="fa fa-download"></i><a href="PDF Files/Spatial Analysis in GIS.pdf" download> Download PDF </a>
                                                                        </button>
                                                </div>
                                              
            `;
        case 'modal3':
            return `
            <span class="close-btn" onclick="closeModal()">&times;</span>
                  <h4>Site Suitability for a new Hospital in York</h4>
                        <h5>Introduction</h5>
                                                    <p>This project I wanted to figure out where abouts the best place for a new hospital in York if there was tobe a
                                                     new hospital located. This is because York has very high waiting times for the hospitals it currently has and the wait time
                                                      could be lowered by opening a new hospital. To produce this map which demonstrates the best suitable zones I used ArcGIS Pro.
                                                      
                                                    </p>

                                                    <p>To create this map I decided upon 5 key factors that input to where the new hospital should go:<br>
                                                    1. Population Density<br>
                                                    2. Land Cover <br>
                                                    3. Proximity to major roads <br>
                                                    4. Location to other hospitals <br>
                                                    5. Slope <br>
                                                    <br> I had to use GIS tool and techniques to make the map, such as feature to raster etc, but the main statistical output to produce the map was using a weighted overlay.
                                                    </p>
                                                    <p> Resources used:
                                                    <ul>
                                                    <li><a href="https://developer.api.nhs.uk/" target="_blank">NHS Hospital Location Data</a></li>
                                                    <li><a href="https://www.data.gov.uk/dataset/65bf62c8-eae0-4475-9c16-a2e81afcbdb0/os-open-roads" target="_blank">OS Open Roads Data</a></li>
                                                    <li><a href="https://spacedata.copernicus.eu/collections/copernicus-digital-elevation-model" target="_blank">EU DEM COPERNICUS</a></li>
                                                    <li><a href="https://catalogue.ceh.ac.uk/documents/c0078881-7d5a-4641-91e2-c271426bc8a1" target="_blank">Land Cover Map UK CEH</a></li>
                                                    <li><a href="https://www.nomisweb.co.uk/census/2011/QS102EW/view/1946157112?rows=rural_urban&cols=cell" target="_blank">Population Density</a></li>
                                                    </ul>

                                                    </p>
                                                   
                                                    <div id="image_container">
                                                    
                                                        <img src="GIS_map_images\\Site Suitability Layout.jpg" alt="terrain roughness" style="width:100%" float:left;>
                                                </div>
                       
            `;
       case 'modal4':
            return `
              <span class="close-btn" onclick="closeModal()">&times;</span>
                  <h4>Strava React Javascript API project</h4>
                        <p>This API project uses the open Strava API to display my workouts on a map for me to view. It displays some API features such as the average heartrate and Date of the run that can be found
                         through the API call. I built the map using React Leaflet to display the data. The main purpose of the map was view my running workouts and to gain experience using an API and learning a bit about how to use React javascript library. </p>
                        <p>
                    Skills demonstrated from this project:
                    <ul>
                    <li>API usage</li>
                    <li>React</li>
                    <li>Javascript</li>
                    </p>
                                            <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Unemployment-Rate-Folium-Leaflet-Map-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
                    

            `;
       case 'modal5':
            return `
              <span class="close-btn" onclick="closeModal()">&times;</span>
                  <h4>Flood Risk Analysis Of Yorkshire</h4>
                        <p>The city York is notorious for flooding and had recently flooded when I came up with the idea of seeing the level of flood risk in relation to where you live in York/Yorkshire.
                        To build the map I looked and tried to do some flood risk/succesptibnility mapping, but ended up following primarily a flood risk analysis tutorial that you can find the <a href="https://mapscaping.com/flood-risk-modelling/"> link to here</a>. The workflow of how the process is down is shown below:
                        </p>
                        <img src="general\\method-flood-mapping-arcgis.png" alt="terrain roughness" style="width:100%" float:left;>
                        <p> Resources used:
                            <ul>
                            
                            <li><a href="https://chrsdata.eng.uci.edu/" target="_blank">PERSIANN Rainfall Data </a></li>
                            <li><a href="https://spacedata.copernicus.eu/collections/copernicus-digital-elevation-model" target="_blank">EU DEM COPERNICUS</a></li>
                            <li><a href="https://catalogue.ceh.ac.uk/documents/c0078881-7d5a-4641-91e2-c271426bc8a1" target="_blank">Land Cover Map UK CEH</a></li>
                           
                            </ul>

                        <button class="w3-button w3-light-grey w3-padding-large w3-section">
                          <i class="fa fa-download"></i><a href="/GIS_map_images/Flood RIsk Yorkshire.jpg" download> Download Map</a>
                        </button>
                   
            `;
       case 'modal6':
            return `
              <span class="close-btn" onclick="closeModal()">&times;</span>
                  <h4>Flood Risk Analysis Of Yorkshire</h4>
                        <p>Modal 4 </p>
                        <iframe class="map" , src="/GIS_map_images/Flood RIsk Yorkshire.jpg" width="100%" height="85%"></iframe>
                   
            `;
        default:
            return ''; // Return an empty string for unknown modal targets
    }
}



// General Coding Projects Modals:



// Get references to elements
const modalContainer2 = document.getElementById('modal-container2');
const modalContent2 = document.getElementById('modal-content2');

// Get all project images
const projectImages2 = document.querySelectorAll('.project-image2');

// Add click event listener to each project image
projectImages2.forEach(image => {
    image.addEventListener('click', () => {
        // Get the target modal ID
        const modalTarget2 = image.getAttribute('data-modal-target');
        
        // Get the content for the specific modal
        const projectDetails2 = getProjectDetails2(modalTarget2);

        // Set the modal content
        modalContent2.innerHTML = projectDetails2;

        // Display the modal
        modalContainer2.style.display = 'block';
    });
});

// Function to close the modal
function closeModal2() {
    modalContainer2.style.display = 'none';
}

// Function to get the content for a specific project modal
function getProjectDetails2(modalTarget2) {
    switch (modalTarget2) {
        case 'modal18':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>Elliott Young Design Website</h4>
                <p>This project was my first commissioned piece, created for Elliott Young Design, a Chartered Institute of Architectural Technologists registered practice based in the North East of England.</p>
                <p>The website showcases the company’s expertise in remodelling and extending homes, highlighting their use of the latest AutoCAD, 3D modelling, and rendering software to bring residential projects to life.</p>
                
                <p>Key technologies used in this project:</p>
                <ul>
                    <li>React for dynamic and interactive UI</li>
                    <li>Tailwind CSS for modern and responsive styling</li>
                    <li>Vite for fast development and bundling</li>
                    <li>GitHub Pages for free domain hosting</li>
                </ul>
                
               
                
                <p>Skills demonstrated in this project:</p>
                <ul>
                    <li>Frontend development with React</li>
                    <li>Responsive design using Tailwind CSS</li>
                    <li>Deploying and hosting static websites with GitHub Pages</li>
                </ul>
                 <p>Check out the live website here: 
                    <a href="https://elliottyoungdesign.github.io/EYD/" target="_blank">
                        https://elliottyoungdesign.github.io/EYD/
                    </a>

                    <img src="coding project_images/EYD_Homepage.PNG" alt="3dmodel demo" style="width:50%;height:auto;">
                </p>    
            `;
        case 'modal17':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>Bash Scripts Examples</h4>
                  <p>This project includes some bash scripts that I have developed for personal and professional usage. These include primarily backup scripts, such as backing up my coding work on windows using robocopy, running GIS image conversions or backing up apache server on ubuntu.</p>

                  <p>

                  <p> A video recording of me demonstrating the bash script to backup an apache server config is below: </p>
    
                  Skills demonstrated from this project:
                    <ul>
                    <li>Coding in Bash</li>
                    <li>Streamline services</li>
                    <li>Automate Procedures</li>

                    
                    </ul>
                    

                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/HHL6CQndvjw" title="Apache bash backup script" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>          
                    
                    </p>
                                        <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Batch-Scripts" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>  
                    
            `;
        case 'modal16':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>Apache Install Live Demo Guide (Ubuntu)</h4>
                  <p>I developed the Apache installation guide as part of my ongoing journey to deepen my understanding of web server management and networking principles. My goal was to solidify key concepts, such as how servers handle HTTP requests, and to gain hands-on experience in setting up and configuring essential services like Apache. 
                  </p>
                  <p>

                  Additionally, I wanted to create a resource that could help me and others navigate the installation and configuration process with clarity in the future. Documenting this step-by-step guide helped me to not only improve my technical skills but also to communicate these concepts in a clear and accessible manner, which is critical when troubleshooting or working with a team.
                   </p>
                  <p>
    
                  Skills demonstrated from this project:
                    <ul>
                    <li>Apache Installation</li>
                    <li>Troubleshooting and Problem-Solving</li>
                    <li>Understanding Web Server Architecture</li>
                    <li>Video Processing and Subtitles</li>
                    <li>Security Best Practices</li>
                    
                    </ul>

                    <div style="padding:56.35% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1016091143?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Apache Install Live Demo Guide (Ubunutu)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                                     
                    
                    </p>
                    
            `;
        case 'modal15':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>AI Auto Captions Generator For Videos</h4>
                  <p>The purpose for this project was that during my time as a VSO (VLE Support Officer), I and other team members would make video tutorials on how to use aspects of the VLE. Given accesibility reasons the videos would need captions associated with them.<br>

                  It was noted that some staff members (including me) would record sometimes videos without a script and this makes captions a little time consuming to create post recording.
                  This inspired me to look into if there was any way to automatically get captions from recordings or create live captions as I speak. This led me to Whisper AI and the creation of this script.
                  
                  </p>
                  <p>

                  This repository has one script, which takes a video (local or on youtube) and creates timestamped captions for you automatically.
                  The video script works the best (main.py), 
                   </p>
                  <p>
                  There is another script, but not uploaded as it proved less effective, but it automatically translates your voice as you speak into captions for live captioning.
                  This was not added to this repository, due to the first approach working better.
        
                  Skills demonstrated from this project:
                    <ul>
                    <li>AI/ML Model Integration</li>
                    <li>Setting Specific Package Versioning</li>
                    <li>Audio Processing</li>
                    <li>Video Processing and Subtitles</li>
                    <li>Programming & Scripting</li>
                    <li>Setting up Virtual Environments</li>
                    
                    </ul>

                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/zSB74uAi_Pc" title="Whisper AI Automatic Video Captions Maker Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Auto-Caption-With-Whisper-AI-for-video-and-audio-files-" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                    
                    
                    </p>
                    
            `;
        case 'modal14':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>Shapefile GIS Checking Tool (ADS)</h4>
                  <p>This appplication built in python uses geopandas and pandas to read shapefile and excel data, which is then used to compare against eachother and check that the metadata supplied includes all the attributes in the shapefile data.<br>
                 
                  The application provides an easy visual way to compare GIS shp data against the excel file in the application, without having to manually compare and load software taking a long time. The app also allows you to copy all non-matching attribute headers for ease of pasting into emails.
                
                  Skills demonstrated from this project:
                    <ul>
                    <li>Python</li>
                    <li>Working with Geospatial data</li>
                    <li>Geopandas library</li>
                    <li>PyQt5 GUI library</li>
                    
                    </ul>

                    <iframe width="100%" height="500px"  src="https://www.youtube.com/embed/PGKNHmu5Syc" title="GIS Application Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/GIS-Wizard-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                    
                    
                    </p>
                    
            `;
        case 'modal13':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>Raster Metadata Auto Checker (ADS Tool)</h4>
                  <p>This is a simple python application built recently to help archivists quickly check if there are any missing images deposited for an archive.
                  </p>
                  <p>
                    It scans a chosen directory that the images deposited are stored and a related excel image metadata sheet for the archive, this then looks at all the image files in the directory
                    against all filenames listed in the metadata. If there are any missing files it will appear in either the missing from directory list box or the missing from metadata list box given the situation.
                </p>
                <p>
                    There is a final list box called "subject keywords". This is where a list of unique subject keywords found in the image metadata sheet are collated and listed for the user. This provides extra support
                     when filling in the coverage tab in the collections management system for an archivist.
                <br>
                The application uses pyQt5, os, sys and openpyxl libraries to run.
                <br>
                </p>
                <p>
                Skills demonstrated from this project:
                    <ul>
                    <li>Python</li>
                    <li>System Directory Coding Knowledge</li>
                    <li>Process Optimisation</li>
                    
                    </ul>
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/GIsdi8t8Yq8" title="raster auto checker demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/raster_metadata_checker" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                    
                    
                    </p>
                    
            `;
        case 'modal12':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>OverTheWire Bandit SSH War Games Level 0-3 Guide Tutorial</h4>
                  <p>The Bandit Wargame is a popular beginner-level challenge hosted by OverTheWire, a website offering a series of "wargames" designed to teach and improve cybersecurity and hacking skills. It focuses on Linux command-line basics.
                </p>
                <p>In Bandit, each level presents a task that must be solved using Linux commands. Upon completing the task, players are given a password to move on to the next level.
                </p>
                <p>
                This tutorial covers the first three levels of the war games and how to complete each task.
                <br>
                Skills demonstrated from this project:
                    <ul>
                    <li>Navigating directories and files in Linux</li>
                    <li>Command-line tools like grep, cat, ls</li>
                    <li>SSH usage for remote access</li>
                    <li>Understanding hidden files and special file types</li>
                    
                    </ul>

                    <iframe width="100%" height="500px;" src="https://www.youtube.com/embed/9ciYXcDb0NU" title="Bandit Over The Wire Level 0 - 3 Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                    
                    
                    </p>
                    
            `;
        case 'modal10':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>Change Audio Device C# Project</h4>
                  <p>A simple change audio script that runs in the background of my pc. This was my first major project using c# and had to understand importing libraries and the different style of coding
                  that c# involves compared to python.<br>
                Skills demonstrated from this project:
                    <ul>
                    <li>Visual Studio 2022</li>
                    <li>AudioSwitcher.AudioApi</li>
                    <li>WindowsInput</li>
                    
                    </ul>
                    
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/ChangeAudioDevice" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                    
                    
                    </p>
                    
            `;
        case 'modal1':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>Battleships Project </h4>
                  <p>I developed a Battleships game in Java, utilizing the Java.util.swing packages. This project allowed me to explore and gain knowledge on object-oriented programming, during the creation of the game it prompted me to explore and begin to ponder about the key principles and practices of OOP. It really made me understand more about encapsulation with static, private and public fields. I did begin to think about more complex areas such as inheritance, although I admit this began mid way through project creation. The game also showcases my ability to write in Java programming.<br>
                Skills demonstrated from this project:
                    <ul>
                    <li>Object-orientated programming</li>
                    <li>Beginner UX/UI design</li>
                    <li>Math random logic</li>
                    <li>CRC card design</li>
                    
                    
                    </ul>
                    
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Battleships-Game-Project" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                    
                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/bY1i_FN9dww" title="Battleships Project Working" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </p>
                    
            `;
        case 'modal2':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                <h4>Task Manager</h4>
                                                    <p>I recently completed a task reminder application using Python, designed to streamline daily productivity. This application leverages
                                                    JSON for storing and organizing task reminders efficiently. The key functionality revolves around notifying me of impending tasks.
                                                    At the start of each day, I set the application to load automatically upon PC startup using windows task scheduler, ensuring that I am promptly reminded of pending tasks.
                                                    The seamless integration with the operating system enhances ensures that reminders are not overlooked. Each task is stored as a
                                                    JSON entry, facilitating easy management and retrieval. The application employs a notification system to alert users when it's time to initiate a particular
                                                     task, providing a proactive approach to time management. Moreover, the system is designed to remind users of uncompleted tasks until they are
                                                      deliberately deleted. Through this project, I not only strengthened my Python programming skills but also gained valuable experience
                                                      in utilizing JSON for data storage, integrating with operating systems for automatic startup, and implementing a notification feature to enhance task
                                                      management efficiency. The project's focus on practical utility reflects my commitment to developing solutions that positively impact daily
                                                      routines and foster a more organized and productive workflow.</p>
                                                    <p>You can download the data here</p>

                                                    Skills demonstrated from this project:
                                                    <ul>
                                                    <li>Python Programming</li>
                                                    <li>Data Storage and Retrieval with JSON</li>
                                                    <li>User Interface (UI) Design</li>
                                                    
                                                    </ul>
                                                   
                                                                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Task-Reminder-App" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>   
                                                <div id="floated">
                                                
                                                <p></p>
                                                

                                                </div>
                                               
            `;
        case 'modal11':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                  <h4>Professional Website for Architect Client</h4>
                        <p>This was a paid project that involved me making a website for a client. The client was a school friend that wanted a professional portfolio website to be built.
                         It was decided that the website would be built using React as the main framework.</p>

                         <p>I used vite, as a local deplement server and to help setup the project, and tailwind to help make styling easier.</p>

                         <p>The website itself uses many libraries but primarily I wanted to use three.js to display 3D architecture style models on the main loading screen section of the page.
                         This was to give the webpage a modern and unique styling that fitted with teh clients brief. I also used other packages such as React-Vertical-Timeline and Tilt to make the page even more engaging.
                        </p>
                         
                        <p> I hosted the website on a personal github account for the user as they did not want to pay domain hosting costs.

                        </p>
                        <p>Skills demonstrated from this project:
                    <ul>
                    <li>React libraries</li>
                    <li>Three.js</li>
                    <li>React</li>
                    <li>Tailwind</li>
                    <li>Vite</li>
                    <li>Blender</li>
                    <li>Github/ Git</li>
                    </ul>
                    <p>

                    <img src="coding project_images/giphy.gif" alt="3dmodel demo" style="width:50%;height:auto;">
                   
                    <p class="w3-text-light-white">
                        <a href="https://elliottyoung1.github.io/Portfolio-Website/" target="_blank">
                        <i class=" fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> Link to clients website </a>
                    </p>                       
                    
                    </p>
                    
            `;
        case 'modal3':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                  <h4>Tic Tac Toe Project </h4>
                        <p>This project was done as part of my reading from the book C# Players Guide by RB Whitaker. The task was to create tic tac toe the game
                        using knowledge from the book to test my understanding of object orientated design. It made me begin by creating CRC card before developing the game. The project allowed me to understand how we can use multi dimensional arrays and
                        how to apply fundamental principles of object orientated design. It also made me think and personally see how having OOP can make my code more organised and easier to understand.
                        </p>
                        <p>Skills demonstrated from this project:
                    <ul>
                    <li>C# programming</li>
                    <li>Command Line Interface Development</li>
                    <li>Problem-Solving</li>
                    <li>Multi-dimensional arrays </li>
                    <li>OOP</li>


                    <iframe width="100%" height="500px" src="https://www.youtube.com/embed/4nyu6axG_3c" title="tic tac toe video demonstration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                   
                    <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/C--Players-Guide-Book-Tasks/tree/main/tic-tac-toe" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white  w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>                       
                    </ul>
                    </p>
                    
            `;
       case 'modal4':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                  <h4>Python Renaming File Tool (Developed for ADS) </h4>
                        <p>I lead and sole-developed a file renaming tool in python to support staff to convert thousands of file types, in order to meet the company filename policy guidelines for archiving. During the project lifetime, the software was released to staff who provided feedback, which was enacted upon in updated iterations trying to bring concepts such as continuous integration and continuous delivery which are found in agile framework ideologies to my development of the software. </p>
                       <p>Skills demonstrated from this project:
                    <ul>
                    <li>Python programming</li>
                    <li>CI/CD</li>
                    <li>Time Management</li>
                    <li>Independant working</li>
                    </ul>
                                        <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Rename-Tool-V2-Onwards" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
                    
                    <iframe width="100%" height="500vh" src="https://www.youtube.com/embed/OVMa97eSxFg" title="File renaming tool demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   
                    `;
       case 'modal5':
            return `
            <span class="close-btn" onclick="closeModal2()">&times;</span>
                  <h4>Python ship collecting game</h4>
                        <p>I recently completed a dynamic and engaging project inspired by a tutorial from Cameron Astor on Mammoth Interactive. This project involved the development of a simple spaceship collector game using Python and the Pygame package. While following the tutorial, I expanded the scope by incorporating shooting mechanics, asteroid elements, and a lives system, enhancing the overall gameplay experience. This experience not only deepened my understanding of Python programming but also allowed me to explore the creative aspects of game development. The use of Pygame proved to be instrumental in bringing the project to life, showcasing the versatility and power of Python in the context of game design.</p>
                         <p>Skills demonstrated from this project:
                    <ul>
                    <li>Python programming</li>
                    <li>Game Development</li>
                    <li>Understanding Object classes</li>
                    <li>Pygame Framework</li>
                    <li>Problem Solving</li>
                    </ul>
                                                            <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Simple-Spaceship-Collecting-Points-Game" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
                
            `;
       case 'modal6':
            return `
            <span class="close-btn" onclick="closeModal2()">&times; </span>
                  <h4>Sudoku</h4>
                        <p>
As part of my early undergraduate coursework, I developed a Sudoku game in Java, utilizing the Swing library for the graphical user interface. The JFrame displays a 3x3 grid layout, with each cell containing a panel representing a mini 3x3 Sudoku grid. The numbers in each panel are generated and shuffled, creating a visually dynamic representation. While the current implementation lacks the full game logic and user interaction expected in a Sudoku game, it serves as a foundational step in understanding GUI programming in Java.</p>
                                                               <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Sudoku" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
                  
            `;
       case 'modal7':
            return `
            <span class="close-btn" onclick="closeModal2()">&times; </span>
                  <h4>Basic Javascript Projects From Course</h4>
                        <p>As part of a beginner-level JavaScript course on Udemy, I completed several simple yet foundational projects that enriched my understanding of web development. The course, titled "JavaScript Tutorial for Beginners," guided me through hands-on exercises in creating interactive web applications. I crafted projects that ranged from basic interactive web pages to more dynamic elements like form validation and simple games later on. These exercises honed my skills in JavaScript, emphasizing concepts such as DOM manipulation and event handling. Through practical applications, I gained confidence in leveraging JavaScript to enhance user interactivity and responsiveness on web platforms. This course served as a valuable introduction, setting the stage for further exploration into the world of JavaScript development.</p>


                                                        <p class="w3-text-light-white">
                        <a href="https://github.com/JGeddes1/Vanilla-Javascript-Projects" target="_blank">
                        <i class="fa fa-github fa-fw w3-text-white w3-xxlarge w3-hover-opacity"></i> GitHub Repository Download</a>
                    </p>
                   
                       
            `;
       case 'modal8':
            return `
            <span class="close-btn" onclick="closeModal2()">&times; </span>
                  <h4>Simple Excel to CSV converter</h4>
                        <p>
I engineered a tool streamlining data processes at ADS by automatically converting Excel sheets into individual CSV files. This application, inspired by the efficiency of a file rename tool, significantly accelerates file conversion tasks. Its implementation reflects a commitment to enhancing workflow efficiency and simplifying data management procedures at ADS.</p>
                      
            `;
        default:
            return ''; // Return an empty string for unknown modal targets
    }
}




// const btn = document.querySelector('.switch-btn');
// const video = document.querySelector('.video-container');


// btn.addEventListener('click',function trigger(e) {
//    if (!btn.classList.contains('slide')) {
//        btn.classList.add('slide');
//        video.play();
//    }
//    else{
//        btn.classList.remove('slide');
//        video.pause();
//    }
// });

// const btn2 = document.querySelector('.switch-btn2');
// const video2 = document.querySelector('.video-container2');


// btn2.addEventListener('click',function trigger(e) {
//    if (!btn2.classList.contains('slide2')) {
//        btn2.classList.add('slide2');
//        video2.play();
//    }
//    else{
//        btn2.classList.remove('slide2');
//        video2.pause();
//    }
// });



const sideBar = document.querySelector('.sidebar');
const togglBtn = document.querySelector('.sidebar-toggle');
const closeBtnSidebar = document.querySelector('.close-btn-nav');

togglBtn.addEventListener('click', function(){
    sideBar.classList.toggle('show-sidebar');
    togglBtn.classList.toggle('hide-icon');
   
});


closeBtnSidebar.addEventListener('click', function(){
    sideBar.classList.remove('show-sidebar');
    togglBtn.classList.toggle('hide-icon');
});


var barsAnimated = false;
 

        function animateBarsIfVisible() {
            if (!barsAnimated && isElementInViewport(document.querySelector('.blue'))) {
                var bars = document.querySelectorAll('.blue');
                bars.forEach(function(bar) {
                    var width = bar.style.width; // Get the desired width from inline style
                    bar.style.width = width;
                    bar.classList.add("animation"); // Reset width to trigger animation
                });
                barsAnimated = true; // Mark bars as animated to prevent animation on subsequent scrolls
            }
        }

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', animateBarsIfVisible);
