# NEXTJS Task 2

User avatar
Across The Globe @ATG · May 15, 2023 · edited: Mar 21, 2024
Create a simple webpage having the following details:

## Users list

User details of the selected user
The candidate may take reference from the following figma design. The UI need not be the same, but there should be only a single page where the above points are displayed.
Design: [https://www.figma.com/file/L6fBLuaToOzimvKukrx5zM/Untitled?type=design&node-id=0-1&mode=design&t=ubIX2l5jSAnX1hlL-0]

Use the following API to get the data and map the response as per requirement.

API URL: [https://602e7c2c4410730017c50b9d.mockapi.io/users]

## TASK

The candidate needs to develop a web page using NextJS, where the list of users is displayed, each list item containing the user's profile picture and name.

When any of the users is selected the details of that user should be displayed on the right-hand side column.

Use of loaders is a must when data is being fetched from the api.
API handling should be properly done. In case of server error or empty response, there should not be any breakages, instead a proper message like “No data to show” should be displayed.

## NOTE

The candidates may use their own creativity to improvise the UI
Material UI or react bootstrap can be used.
Axios can be used for API calls.
Browser window should not reload at any point of time.
There should not be a blank screen when the data is being loaded. Use loaders or spinners instead.
