# WanderFruit Internal Docs

This repository contains the source code for the WanderFruit internal documentation and property management dashboard. It serves as a central knowledge base for brand strategy, marketing assets, and property registry.

## Features

-   **Knowledge Base**: Comprehensive documentation for Brand, Marketing, and Strategy.
-   **Property Registry**: Dense data table view of all properties in the network.
-   **Feedback Log**: Centralized log of guest reviews and feedback.
-   **Internal Dashboard**: Quick access to operational SOPs and assets.

## Tech Stack

-   **Astro**: Static site generator utilizing the [Starlight](https://starlight.astro.build/) documentation theme.
-   **Custom Components**: `PropertyTable` and `ReviewTable` for data visualization.
-   **Styling**: Custom CSS overrides for a clean, utilitarian internal tool aesthetic.

## Usage

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Project Structure

-   `src/content/docs/`: Markdown and MDX content files.
-   `src/components/`: Reusable Astro components (Tables, Grids).
-   `src/data/`: JSON data sources for Properties and Reviews.
-   `src/styles/`: Custom CSS themes.
