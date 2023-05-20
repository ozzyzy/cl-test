Climony - Coding Challenge

Prerequisites
What things you need to install the software and how to install them


Software	          Version
expo					>=47
Android studio (IDE)	>= 2.2.3
Android Sdk	        >= 25.0.2
Java	                >= 1.8.0_121
Node Js	                >= 8.0
NPM	                >= 6.0.0
React native cli        2.0.1
XCode                   >= 11.0
Any Editor of your      Latest Version
Choice

What all is there in this Project?




Getting Started

Installing
Step 1:-
Clone the GitHub Repo either by using HTTPS or SSH onto your local machine using the command "git clone". The master branch will be cloned to your project.

Step 2:-
Checkout the branch main using the command git checkout <branch-name>.

Step 3:-
cd into the root directory of the project and do npm install.

Step 4:-
run Android or iOS emulator - do npm expo start and choose platform.

Troubleshooting
If the Android emulator doesn't detect the server, make sure your emulator is properly configured: 
go to the emulator settings -> Proxy -> set the Port number to 3001.
If that doesn't help, try running "adb reverse tcp:3001 tcp:3011" in the terminal.

