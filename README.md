# Rick and Morty API Integration - Angular v18

This project is an Angular v18 application that uses the zoneless mode for improved performance. It fetches data from the Rick and Morty API and displays a list of characters in responsive cards. When a user clicks on a character, a modal opens with detailed information about that character.

## Features ✨

- **API Integration:** The app integrates with the **[Rick and Morty API](https://rickandmortyapi.com/)** to fetch character data.
- **Responsive Design:** The character list is displayed in responsive cards that adjust to different screen sizes.
- **Character Details Modal:** Clicking on a character opens a modal with detailed information about that character.
>[!NOTE]
>- provideExperimentalZonelessChangeDetection
>- ChangeDetectionStrategy.OnPush
>- Images optimized with NgOptimizedImage
>- Modal realized without libraries
>- Font by **[Rick and Morty API](https://www.dafontfree.co/rick-and-morty-font/)** 
## Installation ⚙️
Clone the repository:

git clone [https://github.com/lxgonzalez/rickandmorty-angular18] 
cd rick-and-morty-angular

### Install the dependencies

npm install

### Run the development server

ng serve

Open your browser and navigate to _http://localhost:4200_.

## Usage 🛠️
- The main page displays a grid of characters fetched from the Rick and Morty API.
- Click on any character card to open a modal with more detailed information about that character.
## Technologies Used 💻
- **Angular v18:** The latest version of Angular.
- **Zoneless Mode:** Enhances performance by removing Angular's reliance on zones.
- **Rick and Morty API:** The public API used to fetch character data.
## Folder Structure 📂
- **adapters/:** Contains the character adapter for transforming data as CharacterInfo into Character.
- **components/:** Contains reusable UI components, such as character cards and pagination controls.
- **models/:** Contains TypeScript class and models, for characters API.
- **pages/:** Holds the main page components and the character information page.
- **service/:** Contains services responsible for handling API requests.
