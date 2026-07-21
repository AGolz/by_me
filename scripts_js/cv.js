document.addEventListener("DOMContentLoaded", function () {
  const cvContents = document.querySelectorAll('.content-container');
  cvContents.forEach((content) => {
    content.classList.remove('active');
  });
  document.getElementById('mainContent').classList.add('active');
  toggleProfessionalMenu(false);
  loadProfessionalContent(false);
});

function showCVContent(section) {
  const cvContents = document.querySelectorAll('.content-container');
  cvContents.forEach((content) => {
    content.style.marginTop = '0';
    content.classList.remove('active');
  });
  
  const selectedContent = document.getElementById(section);
  selectedContent.classList.add('active');
  if (section === 'professionalContent') {
    toggleProfessionalMenu(true);
    toggleContentContainer(false);
    loadProfessionalContent('Telegram Bot');
  } else {
    toggleProfessionalMenu(false);
    toggleContentContainer(true);
    document.getElementById('professionalText').innerHTML = '';
  }
}

function toggleProfessionalMenu(show) {
  const professionalContainer = document.getElementById('professionalContent');
  if (show) {
    professionalContainer.classList.add('active');
  } else {
    professionalContainer.classList.remove('active');
  }
}

function toggleContentContainer(show) {
  const contentContainers = document.querySelectorAll('.content-container');
  if (!show) {
    contentContainers.forEach((container) => {
      if (show) {
        container.classList.add('active');
      } else {
        container.classList.remove('active');
      }
    });
  }
}

function loadProfessionalContent(defaultProject) {
  const projects = {
    'Arctic_UAV': '<p><strong>Arctic UAV with Buoy Deployment System</strong><br><br>As part of the COEX (Copter Express) engineering team, I participated in the development and hardware validation of a specialized unmanned aerial vehicle designed for Arctic environmental monitoring. The platform was created to deliver scientific buoys onto icebergs for long-term glacier melting research and successfully completed field testing on the Arctic shelf in September 2018.<br><br><strong>Tools and Technologies:</strong><ol><li><strong>PX4 / COEX Pix Flight Controller:</strong> Flight control and UAV management.</li><li><strong>Raspberry Pi:</strong> Onboard embedded computer for payload integration.</li><li><strong>MAVLink:</strong> Communication between flight controller and onboard systems.</li><li><strong>Embedded Linux:</strong> System configuration, diagnostics, and testing.</li><li><strong>Hardware Integration:</strong> Validation of onboard electronics and payload systems.</li><li><strong>Technical Documentation:</strong> Preparation of engineering documentation and test reports.</li></ol><strong>Measurable Achievements:</strong><ol><li>Successfully validated a UAV platform for Arctic scientific missions.</li><li>Contributed to successful field testing on the Arctic shelf.</li><li>Improved system reliability through structured hardware integration and validation.</li></ol><br><br></p>',
    'UAV_Gas_Monitoring_System': '<p><strong>UAV Gas Monitoring System</strong><br><br>Participated in the development and validation of an industrial UAV for Rosneft equipped with a gas analyzer for remote monitoring of oil and gas infrastructure. The project focused on integrating industrial sensing equipment with autonomous flight systems and validating reliable operation before deployment. The system was successfully completed in October 2018.<br><br><strong>Tools and Technologies:</strong><ol><li><strong>PX4 / COEX Pix Flight Controller:</strong> Flight control and autonomous navigation.</li><li><strong>Raspberry Pi:</strong> Onboard embedded computing platform.</li><li><strong>MAVLink:</strong> Communication between onboard modules.</li><li><strong>Embedded Linux:</strong> Configuration, diagnostics, and testing.</li><li><strong>Gas Analyzer Integration:</strong> Validation of industrial sensing equipment.</li><li><strong>Hardware & System Integration:</strong> Functional and integration testing of UAV components.</li></ol><strong>Measurable Achievements:</strong><ol><li>Successfully integrated and validated a gas analysis payload for an industrial UAV platform.</li><li>Contributed to stable operation of onboard systems during testing.</li><li>Supported successful delivery of the project for Rosneft.</li></ol><br><br></p>',
    'Telegram Bot': '<p><strong>Telegram Bot</strong><br><br>In 2020, I accomplished a pivotal milestone in my professional development by completing an advanced Python course and subsequently developing an interactive Telegram bot. This multifaceted bot not only executed a diverse array of commands but also showcased language recognition capabilities in both Russian and English. Notably, the bot provided comprehensive instructions for assembling quadrocopters, supplemented by relevant GitBook links. The project leveraged the pyTelegramBotAPI library for Telegram bot functionality and was seamlessly hosted on the Heroku platform. Robust data storage and management were achieved through MySQL 5.7, utilizing Datagrip for efficient handling.<br><br><strong>Tools and Technologies:</strong><br><ol><li><strong>pyTelegramBotAPI:</strong> Leveraged for Telegram bot functionality.</li><li><strong>Heroku:</strong> Platform for seamless deployment.</li><li><strong>MySQL 5.7 and Datagrip:</strong> Ensured robust data storage and management.</li><li><strong>Natural Language Processing (NLP) Libraries:</strong> Utilized for language recognition capabilities.</li><li><strong>GitBook:</strong> Integrated for linking and sharing detailed assembly instructions.</li></ol><strong>Measurable Achievements:</strong><ol><li>Successfully integrated multiple technologies, showcasing versatility in project implementation.</li></ol><br><br></p>',
    'Libft (C Library)': '<p><strong>Libft (C Library)</strong><br><br>As part of the Ecole 42 curriculum, the creation of Libft involved developing an essential C library, serving as the foundation for subsequent projects. The project showcased mastery over C standard library functions, data structures, and algorithms.<br><br><strong>Tools and Technologies:</strong><ol><li><strong>Makefile:</strong> Efficient project compilation and organization.</li><li><strong>gcc:</strong> Used for compilation and linking.</li><li><strong>Valgrind:</strong> Employed for memory debugging and profiling.</li><li><strong>Doxygen:</strong> Utilized for automatic documentation generation.</li></ol><strong>Measurable Achievements:</strong><ol><li>Demonstrated creativity and depth of understanding in C programming.</li><li>Data Structures Proficiency:<br>Successfully implemented various data structures and algorithms, showcasing a strong grasp of foundational concepts.</li></ol><br><br></p>',
    'ft_printf': '<p><strong>ft_printf</strong><br><br>This project delved into the intricacies of C programming by implementing a custom printf function, showcasing expertise in variadic functions and string manipulation.<br><br><strong>Tools and Technologies:</strong><ol><li><strong>Makefile:</strong> Efficient project compilation and organization.</li><li><strong>gcc:</strong> Used for compilation and linking.</li><li><strong>Regular Expressions (RegEx):</strong> Employed for pattern matching and string manipulation.</li><li><strong>GDB (GNU Debugger):</strong> Utilized for debugging and analyzing code execution.</li></ol><strong>Measurable Achievements:</strong><ol><li>Achieved 100% functionality compliance with the standard printf function.</li><li>Demonstrated a deep understanding of complex algorithms and string formatting.</li></ol><br><br></p>',
    'Born2beRoot - Server Setup on Rocky Linux': '<p><strong>Born2beRoot - Server Setup on Rocky Linux</strong><br><br>Born 2 be Root involved practical server setup using VirtualBox, Anaconda, LVM, LOOKS, fdisk, ssh, sshd, Bash language, WordPress with Lighttpd, MariaDB, and PHP, complemented by comprehensive documentation on GitHub.<br><br><strong>Tools and Technologies:</strong><ol><li><strong>VirtualBox:</strong> Used for virtualization and testing.</li><li><strong>Anaconda:</strong> Facilitated package management and environment setup.</li><li><strong>Lighttpd:</strong> Deployed as the web server for WordPress.</li><li><strong>MariaDB:</strong> Employed as the relational database management system.</li><li><strong>Bash Scripting:</strong> Utilized for automation and server configuration.</li><li><strong>Security Tools (Fail2Ban):</strong> Implemented for server protection.</li></ol><br><strong>Measurable Achievements:</strong><ol><li>Contributed to the community knowledge base with a detailed guide.</li><li>Received positive feedback for the clarity and effectiveness of the guide.</li></ol><br><br></p>',
    'get_next_line': '<p><strong>get_next_line</strong><br><br>Addressing the need for versatile file descriptor handling, the get_next_line project provided a robust solution for reading lines from various file descriptors.<br><br><strong>Tools and Technologies:</strong><ol><li><strong>Makefile:</strong> Efficient project compilation and organization.</li><li><strong>gcc:</strong> Used for compilation and linking.</li><li><strong>Memory Leak Detection Tools (Valgrind):</strong> Utilized for ensuring memory efficiency.</li><li><strong>Unit Testing Frameworks (Criterion):</strong> Applied for systematic code testing.</li></ol><br><strong>Measurable Achievements:</strong><ol><li>Achieved high project scores for efficiency and code structure.</li><li>Demonstrated proficiency in handling file descriptors and memory allocation.</li></ol><br><br></p>',
    'push_swap': '<p><strong>push_swap</strong><br><br>The push_swap project showcased algorithmic efficiency with the implementation of an optimal sorting algorithm for integer stacks.<br><br><strong>Tools and Technologies:</strong><ol><li><strong>Makefile:</strong> Efficient project compilation and organization.</li><li><strong>gcc:</strong> Used for compilation and linking.</li><li><strong>Algorithm Visualization Tools (GraphViz):</strong> Applied for illustrating sorting processes.</li><li><strong>Code Profiling Tools (gprof):</strong> Utilized for analyzing algorithmic performance.</li></ol><br><strong>Measurable Achievements:</strong><ol><li>Achieved optimal sorting performance with minimal instructions.</li><li>Received commendations for code optimization and algorithmic efficiency.</li></ol><br><br></p>',
    'minitalk': '<p><strong>minitalk</strong><br><br>Minitalk, a minimalistic interprocess communication project utilizing signals, delved into the intricacies of Unix signals and process communication.<br><br><strong>Tools and Technologies:</strong><ol><li><strong>Makefile:</strong> Efficient project compilation and organization.</li><li><strong>gcc:</strong> Used for compilation and linking.</li><li><strong>Signal Handling Techniques:</strong> Implemented for ensuring reliable communication.</li></ol><br><strong>Measurable Achievements:</strong><ol><li>Demonstrated a deep understanding of interprocess communication.</li><li>Achieved high project scores for reliability and signal handling.</li></ol><br><br><br><br></p>',
  };
  const professionalText = document.getElementById('professionalText');
  const menuItems = document.querySelectorAll('.menu-item a');
  menuItems.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      professionalText.innerHTML = projects[link.textContent] || '';
    });
  });
  professionalText.innerHTML = projects[defaultProject] || '';
}
