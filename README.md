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
- **Styling**: Improve the UI with better styling.
- **State Management**: Enhance the app by using state management libraries for storing data globally and data fetching with libraries such as Tanstack React Query, Redux, RTK Query.

## Collaboration Note

To improve or expand this task, I would collaborate with a teammate by:
1. **Code Reviews**: Regularly reviewing each other's code to ensure quality and consistency.
2. **Pair Programming**: Working together on complex features to leverage our combined knowledge and skills.
3. **Task Breakdown**: Dividing larger tasks into smaller, manageable pieces and assigning them based on each team member's strengths.
4. **Communication**: Keeping open lines of communication through regular stand-ups, meetings, and using collaboration tools like Slack or Microsoft Teams.
5. **Documentation**: Ensuring all changes are well-documented and updating the README and other relevant documentation as needed.

## If I had more time

If I had more time, I would:
1. **Improve UI/UX**: Enhance the user interface and user experience by adding animations, better error handling, and more responsive design.
3. **Optimize Performance**: Look into optimizing the performance of the application, especially for larger datasets.
4. **Explore New Features**: Add new features such as filtering, sorting, and searching heroes.
7. **Continuous Integration**: Set up continuous integration and continuous deployment (CI/CD) pipelines to automate testing and deployment processes.
8. **Pagination**: Implement pagination to handle large lists of superheroes efficiently.