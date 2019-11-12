# React 1 Pairing Exercise

This example app is a Github repo bookmark app. You can search github repositories by language and "star" them so they're stored locally. You have to implement the following behavior:

- Searching for a language should show github repositories by language.
- User should be able to star a repository from the results list.
  > _**Note**: The state should live on the browser and not on github._
- User should be able to un-star a repository from the results list.
- User should be able to see their starred repositories in a list at the side.
- User should be able to remove an item from the starred list, effectively un-starring it.

See this video of the expected final behavior: https://cl.ly/ac69563a8750

# Some Resources:

1. We'll use the Github API to fetch repositories. Documentation is available here: https://developer.github.com/v3/search/#search-repositories. Also, you can use something similar to this snippet to fetch the data:

   ```js
   // with promises:
   fetch("https://api.github.com/search/repositories?q=language:javascript")
     .then(response => response.json())
     .then(results => {
       // do something with results
     });

   // with async-await
   const response = await fetch(
     "https://api.github.com/search/repositories?q=language:javascript"
   );
   const results = await response.json();
   // do something with results
   ```

2. For the combobox/select component, we're using `react-select`. Documentation is available here: https://github.com/jedwatson/react-select#installation-and-usage
