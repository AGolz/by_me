<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap">
    <style>
        body {
            font-family: 'Indie Flower';
            margin: 0;
            padding: 0;
            background-image: url('https://raw.githubusercontent.com/AGolz/by_me/main/arsh_2_paper.jpg');
            background-size: cover;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            overflow: hidden;
        }

        nav {
            padding: 15px;
            text-align: left;
            font-family: 'Indie Flower';
            font-weight: bold; 
        }

        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        nav li {
            display: block;
            margin-bottom: 15px;
            font-size: 1.2em;
            position: relative;
            animation: githubAnimation 2s infinite alternate;
        }

        a {
            text-decoration: none;
            color: inherit;
            font-family: 'Indie Flower';
            font-weight: bold; 
        }
        @keyframes githubAnimation {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(-10px);
            }
        }
    </style>
</head>
<body>

    <nav>
        <ul>
            <li><a href="#mygithub">GitHub</a></li>
            <li><a href="#myprojects">Projects</a></li>
            <li><a href="#myresume">Curriculum Vitae</a></li>
            <li><a href="#telegram">Telegram</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
        </ul>
    </nav>
</body>
</html>
