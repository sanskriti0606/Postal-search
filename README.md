# Postal Search App

A simple application to search Indian postal (PIN) codes and view location details. The app allows users to search for a location by code or name, mark results as favorites, and view saved favorites.

## Features

- **Search Page**: 
  - Search by PIN code or location name.
  - Displays search results in a table with details: Name, BranchType, DeliveryStatus, District, Region, and State.
  - Option to mark a result as a favorite.
  - On marking as favorite, relevant information is saved to the database.

- **Favourites Page**:
  - Displays all the saved favorite locations from the database.
  - Does not fetch data from the API.

## Technologies

- **Backend**: Node.js
- **Database**: MySQL/MariaDB/PostgreSQL
- **Frontend**: HTML, Bootstrap 5 (can be used with any frontend framework)
- **API**: [Postal Pincode API](http://www.postalpincode.in/Api-Details)
- **Version Control**: Git

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/postal-search-app.git
cd postal-search-app
