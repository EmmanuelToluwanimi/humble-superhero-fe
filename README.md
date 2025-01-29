# Humble Superhero API - Frontend (React)

## Project Overview
The frontend of the **Humble Superhero API** is built with **React** and allows users to interact with the superhero data provided by the backend. Users can add new superheroes and view a sorted list based on humility score in real-time.

## Tech Stack
- **Frontend**: React (with TypeScript)
- **State Management**: React's built-in hooks (useState, useEffect)
- **Validation**: Zod (for input validation)
- **API Communication**: Fetch API

## Deployment
This project is deployed on Render. You can access the API at the following URL:

[https://humble-superhero-fe.onrender.com](https://humble-superhero-fe.onrender.com)

## How to Run the App Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/emmanueltoluwanimi/humble-superhero-fe.git
   cd humble-superhero-fe
   ```

2. Install the dependencies:
   ```bash
   yarn
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```
   This will start the backend API server at `http://localhost:5173`.

## Features
- **Add Superhero**: A form allows users to add a new superhero by entering their name, superpower, and humility score.
- **View Superheroes**: The list of superheroes is displayed, sorted by humility score in descending order.
  
## Future Improvements
- **Error Handling**: Implement better error handling for API responses.
- **Styling**: Improve the UI with better styling, possibly using a CSS framework like Tailwind CSS or Material-UI.
- **Persistent Storage**: Enhance the app with persistence by saving the superhero data to a backend API or local storage.
