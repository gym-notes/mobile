<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
![MIT License][license-shield]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/gym-notes">
    <img src="https://socialify.git.ci/gym-notes/mobile/image?description=1&descriptionEditable=&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark">
  </a>

  <p align="center">
    <br />
    <br />
    <a href="https://github.com/gym-notes/mobile/issues">Report Bug</a>
    ·
    <a href="https://github.com/gym-notes/mobile/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#about-uxui">About UX/UI</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Gym notes is designed to replace your paper workout journal. With this application you will be able track
your workouts and gains in the gym (application was created for educational purposes).

<img src="https://i.imgur.com/4G5jh7Z.png" alt="Logo" width="560" height="260">

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React Native](https://reactnative.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [React Native Elements](https://reactnativeelements.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- expo
  ```sh
  npm install --global expo-cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/gym-notes/mobile.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your API in `helpers/AxiosInterceptors.ts`
   ```js
   const BASE_URL = 'ENTER YOUR API';
   ```
4. Start the project
   ```sh
   expo start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] User authentication & authorization
- [x] Create plan
  - [x] Add exercise to the plan
  - [x] Remove exercise from the plan
- [x] Delete plan
- [x] Create workout
  - [x] Add exercise to the workout
  - [x] Remove exercise from the workout
- [x] Workouts history
- [x] Edit user profile
- [x] User BMI
- [ ] Records

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- About -->

## About UX/UI

Fima project: <a href="https://www.figma.com/file/tRgrxMM6VpePHbGgyy4J66/gym-notes?node-id=2%3A156">click here</a>

<img src="https://i.imgur.com/vP5Cix2.gif" alt="this slowpoke moves"  width="250" />
<img src="https://i.imgur.com/1hzApsH.gif" alt="this slowpoke moves"  width="250" />
<br>
<img src="https://i.imgur.com/YlGgJe1.gif" alt="this slowpoke moves"  width="250" />
<img src="https://i.imgur.com/YSlDzHQ.gif" alt="this slowpoke moves"  width="250" />


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Kamil Nahotko - email: kamilnahotko@gmail.com

Project Link: [https://github.com/gym-notes](https://github.com/gym-notes)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/gym-notes/mobile.svg?style=for-the-badge
[contributors-url]: https://github.com/gym-notes/mobile/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/gym-notes/mobile.svg?style=for-the-badge
[issues-url]: https://github.com/gym-notes/mobile/issues
[license-shield]: https://img.shields.io/github/license/gym-notes/mobile.svg?style=for-the-badge
