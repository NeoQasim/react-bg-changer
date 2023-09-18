**React Background Image Changer**
This is a simple React application that allows you to change the background image of a webpage by selecting from a list of predefined images. The application uses the useState hook to manage the currently displayed background image.
**Usage**
Clone this repository to your local machine.
Install the required dependencies using npm install.
Start the development server with npm run dev.
Open your web browser and navigate to http://localhost:5173.

**How it works**
The application starts with a default background image and presents a list of alternative images you can choose from. Click on one of the buttons with the image names to change the background.

**Code Structure**
The App component is the main component that renders the application.
It uses the useState hook to manage the urlLink state variable, which represents the currently displayed background image URL.
The pictures array contains predefined image objects with names and URLs.
The handleLink function is used to update the urlLink state when a new background image is selected.
The background image is displayed in a <div> with a class of center-div.
Feel free to customize this code and add more images to the pictures array to suit your needs.

Enjoy changing the background images of your webpage!
