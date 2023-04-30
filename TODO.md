# TODO.md

## Signin / Login

- [ ] Create Login tests
- [ ] Complete /auth
- [x] Fix the issue with the CSS not loading (CORS issue??) on /login
- [ ] Complete the reset password functionality

## Signup / Register

- [ ] Decide which signup.js file we are using and/or refactor it. Delete the duplicate and make sure it is linked correctly

## Dashboard

- [ ] Fix Card layout to have 2 rows of 4 or 5 cards each per row with 5-15px between the cards and between the rows
- [ ] The Cards are 260px from the left edge of the view to leave room for the drawer
- [ ] Add missing `<i class="fa-solid fa-bars"></i>` to the left of [LOGO].
- [ ] Fix the overflows in the body tag
- [ ] Fix button links so they route to the right html file(s)
- [ ] Fix the responsive bars in a reduced viewport.  The responsive bars move down when you reduce the size of the view.

## Database

Need some more models, we only have User model

## Structure


## Server

- [ ] Add missing routes
- [x] Wire up winston and morgan server and http logging to /server/logs/

## Components

- [ ] Move to using layout based web-components like navbar.html which would contain anything between `<nav>` and `</nav>`
- [ ] Make the Navbar/TopNav/TopBar an individual component
- [ ] Add icons to the User Icon dropdown menu, including fa-gear and fa-user
- [ ] Add missing `<i class="fa-solid fa-bars"></i>` to the left of [LOGO]
- [ ] Wire up the Theme toggle switch to use /src/client/public/js/theme.js
- [ ] Create a Off-Canvas Drawer that slides out from the left of the view on desktop when the user clicks on the fa-bars icon.
      This will be a SideNav.

## Documentation

- [ ] Document the Mocha & Chai testing process

## Bundling

- [ ] Wire up Babel and Webpack

## Styling

- [ ] Move to SCSS (install SASS, etc. suggest sass-loader and doing it with Webpack with just a module export scss)
- [ ] Add global styling to app.css, index.css
- [ ] Fix some minor issues with webkits and Firefox.
- [ ] Build the theme controller theme.css so that the moon toggle icon in the navbar toggles the theme to light or dark mode.
- [ ] Dark mode: Black, gray with white text Light mode: Blue navbar, white or gray background

## Accessibility (A11y) & PWA

- [ ] Google PageSpeed and Lighthouse testing
- [ ] Make sure that buttons have accessible names
- [ ] Does not register a service worker that controls page and start_url
- [ ] Does not set a theme color for the address bar.Failures: No `<meta name="theme-color">` tag found.
- [ ] Does not provide a valid apple-touch-icon
- [ ] Does not have a maskable icon
- [ ] Eliminate render blocking JavaScript resources

## Testing

- [ ] Use Mocha and Chai to test the login and all of the user stuff like register, reset password, etc. 
