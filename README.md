# movWave - A Movie Database Web Applcation

This repository contains the source code for a Movie Database Web Application, a project that interacts with The Movie Database (TMDb) API to display upcoming movies, top-rated movies, and detailed information about selected movies.

## Live Demo

Check put the live demo <a href="https://next-mov-wave.vercel.app/">here</a>

## Features

- Homepage: Incliudes a slider showcasing currently running movies, upcomming movies and top-rated movies / TV Shows.
- Authpage: Used Next-Auth for oAuth and Credentials login with reset password and email verification feature.
- Navbar: Implemented with a search bar and filter options.
- Details Page: Displays comprehensive details about selected movies / TV Shows.
- Movie /TV Shows Page: Displays a list of movie /TV Shows with different filter options.

## Installation

To run this project locally, follow these steps:

1. Clone the repository

```
git clone https://github.com/aayussraut/next-movWave
```

2. Navigate to the project directory:

```
cd movWave
```

3. Create a .env file in the root directory:

```

API_KEY = TMDB_API_KEY


DATABASE_URL = YOUR_DATABASE_URL
AUTH_SECRET = ANY_SECRET_KEY

NEXT_PUBLIC_URL = "http://localhost:3000"

GMAIL_PASSWORD = YOUR_GMAIL_PASSWORD
GMAIL_EMAIL = YOUR_GMAIL_EMAIL

GOOGLE_CLIENT_ID = YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET = YOUR_GOOGLE_CLIENT_SECRET

GITHUB_CLIENT_ID = YOUR_GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET = YOUR_GITHUB_CLIENT_SECRET

FACEBOOK_CLIENT_ID = YOUR_FACEBOOK_CLIENT_ID
FACEBOOK_CLIENT_SECRET = YOUR_FACEBOOK_CLIENT_SECRET
```

4. Start the development server:

```
npm run dev
```

5. Open your browser and visit http://localhost:3000 to view the application.

## Tech Stack

- Next.JS
- Next-Auth
- Tailwind CSS
- Shadcn

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Create a new Pull Request.
