Reacting to Routing
We're gonna be building pretty much the same application we made in the Reacting to APIs lab. This time we'll be using routing and multiple components instead of a bunch of conditional renders. Instead of an anchor that leads to the API resource page we're gonna be building a route and component designed to use a route parameter and display the detail's of that resource in that component directly. Fancy!

Instructions
Configure React Router in your application. You may use the same structure as the walkthrough video, or (if you have a better idea) you may decide on your own structure. Just make sure that it works!

You should create three Links that look like buttons in your application. The first says "Go Home", the second says "View Films", and the last one says "View People" (or another endpoint of your choosing). Clicking these links will navigate you to the respective pages for each of these things. You can code them directly in the App.jsx or make your own <Navbar /> component instead.

Start by only configuring ONE route. Say, for /films. After navigating to localhost:3000/films, you should see your list of films that you rendered to the browser in the previous lab. The caveat? You shouldn't need any if/else if/else logic in your render methods. The data should only be loaded and displayed when you navigate to /films. You should use useEffect() and fetch() to make this request.

Once you have that route working, configure another one for /films/:filmid. With this route, you should be able to craft a Link for any film you have displayed on /films to navigate to /films/<id>, where you will list out all of the information pertaining to only that film.

Now that you have /films and /films/:filmid working, repeat tasks 3 and 4 with another two endpoints (like People) in the Studio Ghibli API.

 
Closing Remarks
At the end of this lab, you should have a Studio Ghibli "wiki" based on the data available through the API. You can extend this as much as you want - style it as much as you want - but at the end of the day you should realize that what you've just done is create your first real application using only data provided by a third-party API! This is what web developers do all the time so give yourself a pat on the back, and keep coding!