## **Climony - Coding Challenge**

**Prerequisites**

* expo					>=47
* Android studio 			>= 2.2.3
* Android Sdk	        	>= 25.0.2
* Java	                >= 1.8.0_121
* NodeJs	                >= 8.0
* NPM	                	>= 6.0.0
* React Native CLI        2.0.1
* XCode                   >= 11.0
* Any editor		       

**Getting Started**

1. Clone the GitHub Repo either by using HTTPS or SSH onto your local machine using the command "git clone". The master branch will be cloned to your project.
2. Checkout the branch main using the command git checkout <branch-name>.
3. cd into the root directory of the project and run "npm install".
4. Run Android or iOS emulator - run "npm expo start" and choose platform.
5. To run server on your local machine go to the Server folder and run "npm install" -> "node index"

**Troubleshooting**

If the Android emulator doesn't detect the server, make sure your emulator is properly configured: 
go to the emulator settings -> Proxy -> set the Port number to 3001.
If that doesn't help, try running "adb reverse tcp:3001 tcp:3001" in the terminal.

**What all is there in this project?**

The goal of the project is to retrieve data from the server and implement the interface for iOS and Android platforms.
React Native was used for the project. Additional packages were installed for specific tasks:
* react-native-shadow-2 was used to implement border-box, as it is the easiest way to handle shadows in Android.
* react-navigation was used as a method for managing routing within the application.
* react-native-svg was used for working with icons and custom SVGs.

**What's next**

* It is necessary to expand the server request handlers to include loading and error screens. For this purpose, react-query can be used, for example.
* It is possible to write an extensible function for box-shadow that works on both iOS and Android (this is a separate task).
* Add specific mock images.
* Change the fonts.
* If the design and technical specifications reveal that the pages of other parts of the application resemble 
* those already implemented, it is necessary to create a common scalable component that will serve as the base 
* for all pages. If not, develop the remaining pages separately.
 
