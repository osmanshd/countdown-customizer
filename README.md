# Countdown Customizer
## Overview
This React application offers a customizable, interactive countdown timer. Users can set a custom date and time, upload a video or image background, adjust text styling, and move the timer around the screen. The goal is to provide a simple yet efficient tool for creating personalized countdowns.

## Table of Contents
+ [Tier 1: Core Features](#tier-1)
+ [Tier 2: Extended Features](#tier-2)
+ [Tier 3: Optional Enhancements](#tier-3)
+ [Scaling & Optimization Considerations](#considerations)
+ [Installation](#installation)
  
## Tier 1: Core Features
#### Live Countdown Timer ✅
> The Live Countdown Timer is the most crucial feature of the app, so I prioritized getting the timer functionality working first. Initially, I implemented the countdown using a default time value (2 hours), which allowed me to test the core timer logic and ensure it updated in real-time.

> To achieve this, I used JavaScript’s setInterval() function to update the timer every second (or, 1000 milliseconds), making sure that it reflected the time difference between the current time and the target date. At this stage, I used a hardcoded target time to test if the timer was working correctly.

> **Challenges:** The primary challenge here was ensuring the timer updated smoothly and handling accurate time remaining (down to the second).

#### Date Selection ✅
> Initially, I used a combination of `<input type="date">` and `<input type="time">` elements to allow users to select both the date and the time for the countdown. While these native inputs seemed like an appropriate solution, I found them difficult to work with due to limitations in handling both date and time together.

> After some research, I discovered the `<input type="datetime-local">` element, which allows users to select both the date and the time in a single input field. This solution was much more seamless, as it provided a unified experience for the user and was much easier to work with programmatically.

> I also made sure to validate the input to ensure that if the user selected a past date and time, the “Countdown ended” alert appeared, which helped avoid invalid countdowns.
#### Video Upload ✅
> The Video Upload feature allows users to be able to upload and display a video or image as a background to the countdown timer. To keep things simple and efficient, I used the native `<input type="file">` element, which provides an easy way for users to select and upload video files.

> I implemented basic validation to check the file type (e.g., MP4 or PNG). Once a video was uploaded, I rendered it using the `<video>` tag for seamless playback. If an image was uploaded instead, I set it as the background of the application’s body. 

> **Challenges:** The primary challenge I faced was ensuring that the uploaded video displayed behind the timer and other elements on the screen, which required z-index management and positioning. I had to adjust the CSS to ensure that the video element was correctly layered beneath the countdown timer while still being responsive and filling the background area. Balancing the layout and maintaining the visibility of the timer and other UI elements on top of the image uploads required directly modifying the application body.

#### Basic Styling Controls ✅
> Users can adjust the font size and color of the countdown text using number inputs and color pickers.

> Changes are applied in real-time using React state.
#### ⏳ Timeline
Rough breakdown of time spent on Tier 1 features: 
* Project Setup & Breakdown of Requirements: 1 hour
* Live Countdown Timer: 1 hour
* Date Selection: 0.5 hours
* Video Upload: 2 hours
* Basic Styling Controls: 1.5 hours
  
**Total: ~6 hours**

## Tier 2: Extended Features
#### Individual Styling Controls
> The Individual Styling Controls would have allowed users to customize the styling for each of the text elements of the countdown timer (Day, Hour, Minute, and Second) by adjusting the font, size, color, and position.

> To implement this, I would have created a set of controls for each text element which would adjust the respective style in real-time, updating the text appearance immediately.

> The implementation would involve React state to manage each text element's style, which would then be applied dynamically through inline CSS styles. Additionally, I would have used CSS positioning (e.g., absolute or relative) to allow users to move the text around the screen.

> While this feature was planned, it was not implemented within the scope of Tier 2 due to time constraints.
#### Draggable Text ✅
> The Draggable Text feature enables users to manually position the countdown text anywhere over the video. I implemented this using React's state management to track the mouse events when the user clicks and drags the component.

> To achieve this, I used mouse events to manage the dragging functionality. When the user clicks on the timer component, I store the current mouse position and set a flag indicating that the user is dragging. During the dragging process (as the mouse moves), I track the cursor’s position, updating the position of the timer accordingly. When the user releases the mouse button, the drag operation is completed.

> This implementation allows the text to be moved smoothly across the screen, and I ensured that the position was updated in real-time by managing the state for the top and left CSS properties dynamically.

> **Enhancements:** I would implement conditional logic inside the drag handler to prevent the timer component from being dragged beyond the edges of the screen. For example, when updating the position, I would ensure the left position of the text doesn't exceed the width of the viewport, and the top position doesn’t exceed the height of the viewport.

#### Live Preview ✅
> As users adjust the styling controls (e.g. font size, color), they would immediately see the changes reflected on the video (or image background) in real-time, without needing to refresh or submit anything.

> To implement this, I used React state to manage the styles of the text and other elements. By using state and conditional rendering, I could ensure that any changes made by the user would trigger an immediate update on the page. This feature is key to improving user experience, as it provides immediate feedback on their adjustments.

#### ⏳ Timeline
Rough breakdown of time spent on Tier 2 features: 
* Draggable Text: 1 hour
* Styling Components: 0.5 hours
* Live Preview: 0 hours (already implemented in Tier 1!)
  
**Total: ~1.5 hours**

## Tier 3: Optional Enhancements
Although I didn’t get around to implementing the features in Tier 3, they represent valuable opportunities for further enhancing the application. These features would be great practice with React and would provide a more personalized and interactive user experience.
#### Font Upload
> It would involve creating a file input to allow users to upload their own .ttf or .otf font files, and applying them dynamically to the text.
#### Save & Reload Settings
> This feature would require using localStorage to store user preferences and styling settings, allowing users to save and reload their custom countdown configurations across sessions.
#### Animation Options
> This could be achieved using CSS animations or JavaScript to dynamically update the text’s animation properties based on user input.

## Scaling & Optimization Considerations
If this project was to be scaled into a real production website, the following should be considered: 
* **State management** with a more robust system, such as Redux.
* **Mobile-First Design** and touch friendly interfaces
* Image and video **compression** to modern formats (like `.webm`) which are more efficient in terms of file size and quality

## Installation
1. Clone the repository to your local machine: 
`https://github.com/osmanshd/countdown-customizer.git`
2. Navigate to the project directory: `cd countdown-customizer`
3. Install dependencies: `npm install`
4. Start the app: `npm start`
