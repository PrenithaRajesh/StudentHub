CREATE DATABASE MockProjects
GO

USE [MockProjects]
GO

CREATE SCHEMA [StudentHub];
GO

CREATE TABLE StudentHub.Users(
    [StudentId] INT IDENTITY(1,1) PRIMARY KEY,
    [FirstName] NVARCHAR(50) NOT NULL,
    [LastName] NVARCHAR(50) NOT NULL,
    [Profile] NVARCHAR(1000) NOT NULL,
    [Description] NVARCHAR(MAX) NOT NULL,
    [Email] NVARCHAR(255) UNIQUE NOT NULL,
    [Address] NVARCHAR(500),
    [Physics] DECIMAL(5,2),
    [Chemistry] DECIMAL(5,2),
    [Maths] DECIMAL(5,2),
    [CreatedAt] DATETIME2 DEFAULT GETDATE(),
    [UpdatedAt] DATETIME2 DEFAULT GETDATE()
);
GO


-- Inserting Dummy Records
INSERT INTO StudentHub.Users (FirstName, LastName, Profile, Description, Email, Address, Physics, Chemistry, Maths)
VALUES
('John', 'Doe', 'https://avatar.iran.liara.run/public/18', 'Enthusiastic about quantum mechanics.', 'john.doe@example.com', '40.7128° N, 74.0060° W', 85.50, 78.25, 90.00),
('Jane', 'Smith', 'https://avatar.iran.liara.run/public/57', 'Loves organic chemistry.', 'jane.smith@example.com', '34.0522° N, 118.2437° W', 80.00, 88.50, 92.75),
('Michael', 'Brown', 'https://avatar.iran.liara.run/public/3', 'Passionate about number theory.', 'michael.brown@example.com', '41.8781° N, 87.6298° W', 70.25, 75.00, 98.50),
('Emily', 'Johnson', 'https://avatar.iran.liara.run/public/60', 'Enjoys physics and chemistry.', 'emily.johnson@example.com', '37.7749° N, 122.4194° W', 92.00, 86.75, 89.25),
('David', 'Lee', 'https://avatar.iran.liara.run/public/49', 'Studying particle physics.', 'david.lee@example.com', '51.5074° N, 0.1278° W', 88.25, 91.50, 85.00),
('Sarah', 'Miller', 'https://avatar.iran.liara.run/public/55', 'Interested in applied mathematics.', 'sarah.miller@example.com', '48.8566° N, 2.3522° E', 75.00, 82.25, 95.75),
('Robert', 'Wilson', 'https://avatar.iran.liara.run/public/30', 'Enjoys exploring all science fields.', 'robert.wilson@example.com', '35.6895° N, 139.6917° E', 89.50, 79.00, 84.50),
('Laura', 'Anderson', 'https://avatar.iran.liara.run/public/94', 'Specializing in analytical chemistry.', 'laura.anderson@example.com', '55.7558° N, 37.6173° E', 76.75, 89.00, 78.25),
('Daniel', 'Thomas', 'https://avatar.iran.liara.run/public/32', 'Interested in astrophysics.', 'daniel.thomas@example.com', '28.7041° N, 77.1025° E', 94.50, 85.25, 91.00),
('Olivia', 'Martinez', 'https://avatar.iran.liara.run/public/92', 'Loves solving complex problems.', 'olivia.martinez@example.com', '13.0827° N, 80.2707° E', 80.00, 88.75, 97.50);

-- Inserting Actual Records
INSERT INTO StudentHub.Users (FirstName, LastName, Profile, Description, Email, Address, Physics, Chemistry, Maths)
VALUES
('Anish', 'Joshi', 'https://avatar.iran.liara.run/public/6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius tincidunt turpis, a luctus odio sagittis sed. Nam auctor rutrum sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam luctus, ante a tincidunt dictum, est est tempus sapien, in malesuada enim sapien vitae orci. Duis vel maximus libero, sed gravida lectus. Duis faucibus sollicitudin diam, vitae lacinia nulla iaculis congue. Ut eget nisl mattis, interdum augue vitae, consequat augue. Maecenas non nulla vel nisl mattis bibendum. Mauris lacinia eros vel dui congue, convallis egestas nisi fringilla.' + CHAR(13) + CHAR(10) +
'Quisque cursus, eros eu rhoncus efficitur, mi ex lacinia orci, quis tempor enim diam quis lacus. Integer blandit tristique elit, quis dignissim lorem. Sed quis elementum mauris. Fusce sapien risus, egestas id purus quis, posuere scelerisque nulla. Sed venenatis placerat tincidunt. Fusce molestie in nisl sed lacinia. Nulla turpis dui, ullamcorper in interdum nec, vehicula a lectus. Praesent ligula elit, blandit a iaculis a, ornare ac quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum elementum scelerisque feugiat. Donec nec eleifend nulla. Suspendisse a condimentum orci. Sed euismod eros at urna porttitor, vel egestas lacus suscipit. Aliquam tincidunt elit id urna facilisis cursus.', 
'annishjosh@gmail.com', 
'31.1050° N, 77.1640° E',
95.60, 95.50, 93.90),
('Baibhav', 'Kumar', 'https://avatar.iran.liara.run/public/44', 'I am Kumar Baibhav. I''m from Patna. I am a final year Computer Science student at Vellore Institute of Technology.' + CHAR(13) + CHAR(10) +
'I have a passion for crafting user-friendly applications. Possessing experience in Android development in Java, Flutter development (Dart), and the MERN stack development . Eager to leverage these skills and enhance my problem solving skills to contribute to a team environment and build innovative applications that enhance user experience.', 
'baibhavk6@gmail.com', 
'25.5941° N, 85.1376° E',
94.50, 92.50, 99.00),
('Jyotsna', 'Bhatia', 'https://avatar.iran.liara.run/public/58', 'Jyotsna Bhatia | Building sleek, high-performance web apps while automating the boring stuff. When I’m not coding, I’m busy doing crazy stuff on PC, traveling to new places, or taking on cool freelance projects!' + CHAR(13) + CHAR(10) + 
'I like to talk, so ping me up for any cool ideas and stuff', 
'work.jyotsna01@gmail.com', 
'28.7041° N, 77.1025° E',
99.90, 93.50, 97.90),
('Paridhi', 'Kumar', 'https://avatar.iran.liara.run/public/64', 'Paridhi Kumar is a Computer Science undergraduate at Vellore Institute of Technology. She has demonstrated expertise in AI/ML through internships, including her work at Samsung PRISM, where she developed a method to estimate full 3D hand shape from a single RGB image using Graph CNN and weakly supervised learning. At Capgemini, she implemented sentiment analysis using NLP and tested multiple ML models to optimize performance. She has also undertaken technical projects such as DigitGen, a GAN-based handwritten digit generator, and XSSGuard, a machine learning model for detecting Cross-Site Scripting (XSS) attacks. Her skill set includes proficiency in Java, Python, C/C++, MySQL, and deep learning frameworks like TensorFlow and Scikit-Learn. Additionally, she holds a Microsoft Azure AI Fundamentals certification.' + CHAR(13) + CHAR(10) +
'Beyond academics, Paridhi along with her team, won the Best Female Team award at DEVSOC Hackathon and securing a spot among the Top 125 teams in the Campus Beats Case Challenge by ZS Associates. She has also taken on leadership roles, serving as Events Head for SPIC MACAY at VIT Vellore and contributing to clubs like the Dramatics Club, CSED, E-Cell, and Film Society.', 
'paridhi502@gmail.com', 
'18.5204° N, 73.8567° E', 
98.90, 97.50, 99.90),
('Prenitha', 'Rajesh', 'https://avatar.iran.liara.run/public/85', 'Prenitha Rajesh is a software developer with expertise in AI/ML, web development, cloud computing, and containerization technologies such as Docker and Kubernetes. She also has a background in applied research and has worked on projects in vehicle re-identification, crisis detection and key point detection.' + CHAR(13) + CHAR(10) +
'She has been a finalist in multiple hackathons, including DePondFi' + '24, The Amazon ML Challenge and the Bengaluru Mobility Challenge. With a passion for solving real-world problems through technology, she continuously explores new domains to enhance her skills.', 
'prenitharajesh04@gmail.com', 
'11.4102° N, 76.6950° E',
97.00, 95.50, 98.80),
('Radhika', 'Sardeshpande', 'https://avatar.iran.liara.run/public/100', 
'Radhika Arvind Sardeshpande is a Computer Science and Engineering student at Vellore Institute of Technology, Chennai. She has experience in multiple programming languages, including Python, C++, Java, and Solidity, along with proficiency in tools like AWS, Git, and SQL. She was a SWE Intern at Google India last Summer, where she developed a data processing pipeline to enhance ad performance. Additionally, she has certifications in MERN Full-Stack Development and AWS Cloud. She was ranked 9th in her branch in the year 2021-2022.' + CHAR(13) + CHAR(10) +
'Radhika has worked on projects, such as an online bike showroom using the MERN stack and a blockchain-based medical records system using Solidity and Web3.js. She has also been actively involved in various extracurricular activities, including serving as a Writer and an organizing committee member of her college''s dramatics club. Recognized as a Women Engineers (WE) Scholar, she has also attended specialized boot camps.', 
'radhika.sardeshpande258@gmail.com', 
'16.9902° N, 73.3120° E', 
96.00, 97.50, 99.80);
