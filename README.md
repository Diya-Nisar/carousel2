# Carousel Project

A responsive carousel that allows you to switch between cards with dynamic background changes. This project is fully customizable, and you can easily update the pictures and background colors to suit yourpreferences.



## Table of Contents
- [How to Use](#how-to-use)
- [Changing Pictures](#changing-pictures)
- [Changing Background Colors](#changing-background-colors)
- [Demo](#demo)
- [Technologies Used](#technologies-used)

---

## How to Use
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Diya-Nisar/carousel2.git
   ```
2. Open the project folder:
   ```bash
   cd carousel2
   ```
3. Open the `index.html` file in your browser to view the project.

---

## Changing Pictures
You can update the images displayed in the carousel by modifying the `img` tags in the HTML file.

1. Locate the Images Section
   In the `index.html` file, locate the following code block under the `cards` div:
   ```html
   <label class="card" for="item-1" id="song-1">
       <img src="URL_OF_IMAGE_1" alt="song">
   </label>
   <label class="card" for="item-2" id="song-2">
       <img src="URL_OF_IMAGE_2" alt="song">
   </label>
   <label class="card" for="item-3" id="song-3">
       <img src="URL_OF_IMAGE_3" alt="song">
   </label>
   ```

2. Replace Image URLs
   Replace the `src` attribute of each `<img>` tag with the URL of the desired image. For example:
   ```html
   <img src="https://example.com/new-image.jpg" alt="New Song">
   ```

3. Save the changes and refresh the browser to see the new images.

---

##Changing Background Colors
The background color for each card is controlled by the CSS classes in the `styles.css` file.

1. Locate the Background Classes
   In `styles.css`, find the following classes:
   ```css
   body.bg-1 {
       background-color: #c394f8; /* Background for card 1 */
   }

   body.bg-2 {
       background-color: #172A3A; /* Background for card 2 */
   }

   body.bg-3 {
       background-color: #428aa6; /* Background for card 3 */
   }
   ```

2. Update Background Colors
   Replace the `background-color` property value with your desired color. For example:
   ```css
   body.bg-1 {
       background-color: #FF5733; /* New background color for card 1 */
   }
   ```

3. Save the changes and refresh the browser to see the updated background colors.

---

Demo
To see a live demo, follow these steps:
1. Clone the repository and open the `index.html` file in your browser.
2. Click on the cards to switch between them and observe the background changes.

---

Technologies Used
- HTML: Structure of the carousel.
- CSS: Styling and background color transitions.
- JavaScript: Dynamic functionality for background changes.


For further assistance, feel free to open an issue or contribute to this repository. Happy customizing! 😊
