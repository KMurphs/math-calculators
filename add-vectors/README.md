# [Add Vector](https://github.com/KMurphs/math-calculators)



## Overview

-  Project was designed to solve math problems that my niece had. The idea was to allow her to quickly verify her solution and get a visual representation for what vector addition, substraction and scalar multiplication do. 
-  The UI framework used to build the application is **Svelte**. 
-  The Math equations and notations are processed and rendered by a Javascript library **MathJax**. The library processes **tex** strings on a page and convert these DOM elements into good looking math equations.
-  The visual display for the vector is done on the **HTML5 Canvas** element.
-  The application can be used **[here](https://kmurphs.github.io/math-calculators/)**. 




## Definition

The application allows the user to enter vectors in either **cartesian** or **polar** representation, swithing between the two. The user can then decide whether a vector must be added or substracted to the previous one. There is also a scalar multiplier for the vector before it is added or sibstracted. 
The current visual representation for the all these operands (i.e. the vectors that must be added) and the current resultant (i.e. the sum of the operand) is updated in real time on the canvas.

**Duration**: 3 days 

**Tools, Technologies, Skills**: Svelte, Typescript, HTML5 Canvas, MathJAX

**Languages**: Batch Files, Javascript/Typescript, Tex



## Context

My niece wanted me to review some of her homeworks on vector addition. Altough I could help with the homework. I did a quick search on Google to get to a tool that could help her build confidence in her skill by verifying her calculations. The search did not provide me with what I was looking for. I therefore set myself to build one. 


## The Process


### Putting together Requirements for the Application

Some of these original requirements are listed below:

- Real Time Visual Representation of the operations
- The capability to add, remove vector entries
- Change representation between cartesian and polar at the application level
- Compute resultant
- Reset UI
- Display resultant

### UX/UI Design, UI Wireframe

![UI Draft Wireframe](https://raw.githubusercontent.com/KMurphs/math-calculators/main/add-vectors/imgs/add-vector-w700.png "Early wireframe draft")

1. The initial question was how to retrieve the top (50) most frequent in a body of text. There are many solution to a problem like this: 
    - The initial inclination was to use a dictionary where each word would become a key associated to the number of times that word occured.

    <br>Then an extra requirement was added to make the problem a little bit more interesting: 
    - The algorithm should be able to look at words with lengths in a certain range (say between 10 and 20).

    The initial algorithm would still inventory the whole text in ``O(N)``, where ***N is the number of words in the text***. The dictionary would call for a space complexity of ``O(M)``, where  ***M is the number of unique words in the text***. 

2. From thereon, to retrieve the top 50, a sorting algorithm could be used and the solution would take ``O(MlogM)``. 
<br>A *modified bubble sort* could bring down the time complexity to ``O(kM)`` by only considering the top K most frequent words - As long as, K is way smaller than logM (``K << logM``), the modified bubble sort is a better alternative. 
<br>On top of this, this modified bubble would handle the length requirement of the query without trouble at all.

3. Another requirement was to be able to reuse the processing of this huge text to run different queries at a later point. This meant that the text processing algorithm and the query processing happened at different point in time.
    - So the dictionary algorithm in ``O(N)`` and ``O(M)`` could still be used for the text processing. The query processing would use the modified bubble sorting in ``O(M)`` and ``O(k)``.

    A step further was to investigate whether this last time complexity of ``O(M)`` could be reduced. 
    <br>For that, an extra data structure was created during the text processing. 
    - This data structure is also a dictionary where keys are words lengths in the text, and values are linkedlist of words whose lengths ave the value specified by the key they are associated to. This extra structure adds another ``O(M + d)`` to the space complexity of the text processing phase - ***d (the number of possible word lengths within the text)*** is bounded by the longest word in the english dictionary ***pneumonoultramicroscopicsilicovolcanoconiosis - Length = 45***.
    <br>``d <= 45`` therefore ``d << M``. 
    
    This data structure will bring down the time complexity of the query processing by allowing the algorithm to only process ***words that have length within a specified range***. If there are ***V*** such words, the new time complexity is ``O(V)``. <br>In some instances V can be way smaller than M.

In summary, 
- Text Processing: ``O(N) Time Complexity, O(M) space complexity``
- Query Processing: ``O(V) Time Complexity, O(k) space complexity``

where,
- N: number of words in text
- M: number of unique words in text
- V: number of unique words with length within the specified range
- k: number of words of interest (the top k most frequent words)

The dictionary of frequencies ``IDictionary<string, int>`` and the dictionary of lengths ``IDictionary<int, LinkedList<string>>`` can easily be serialized and deserialized.



## MVP and Unit Testing

See ``<Current Repository>/text-inventorier/Inventorier/``

The first step was to implement the core service that would process the text and run the query. Tests were developed to ensure functionality and corner cases (See ``<Current Repository>/text-inventorier/Inventorier.NUnitTests/``)

A range of utility classes are used to fetch the text when a URL is provided, preprocess the text (Handle special characters, lower case all the text, ...), serialize and deserialize the data structures, hashing the text into an ID that can be used later to skip re-processing the text if the processing result is stored in our database.

``<Current Repository>/text-inventorier/scripts/misc.bat`` describes some of the commands used to configure the C# project in Visual Studio Code (VSCode).

## API and Productionization

See ``<Current Repository>/text-inventorier/WebApp/``
Now that we have functional code, we can wrap it into an API.

First step was to set up a ASP.NET server locally, and integrate with our core service at endpoint ``<Site URL>/api/corpusinventory``. Then integrate with MongoDB to store and retrieve serialized data structures.

A docker image for ``aspnet:3.1`` is available (See ``<Current Repository>/text-inventorier/WebApp/DockerFile``). The image was built, pushed to a remote repo, and Heroku was configured to retrieve and run the docker image.

``<Current Repository>/text-inventorier/scripts/push-app-to-backend.bat`` describes some of the commands used to perform this.



## UI Solution Research and Ideation

To show how the API could be consumed, a React Client was to be written that would demonstrate this.

Sites like Dribble, Behance, and Google were surveyed to generate ideas for a suitable UI/UX concepts related to our word inventorier application.

Information Architecture was first established as the most important aspect of the UI/UX considerations. Once related questions were answered, wireframes were drafted.

![Wireframes](https://raw.githubusercontent.com/KMurphs/word-inventorier/master/docs/Process.png "Wireframes")

## UI Design and Prototyping

See ``<Current Repository>/ui-design/``

Figma was used to design the UI.


### The Mobile first Version of the front end client

![Mobile First Version](https://raw.githubusercontent.com/KMurphs/word-inventorier/master/docs/ui-mobile-lg.png "Mobile First Version of UI")

### The Desktop Version of the front end client

![Mobile First Version](https://raw.githubusercontent.com/KMurphs/word-inventorier/master/docs/ui-desktop-lg.png "Desktop Version of UI")




## UI Implementation and Tests

See ``<Current Repository>/ui/``

Setting up ``tailwindcss`` with ``create-react-app`` was quite the mission.

``<Current Repository>/text-inventorier/scripts/setup-ui.bat`` describes some of the commands used to setup ``tailwindcss`` with ``create-react-app``.




## UI Productionization

See ``<Current Repository>/ui/``

The build files from ``npm react build`` were copied to ``<Current Repository>/text-inventorier/WebApp/wwwroot``

Then, the webapp was recompiled, the docker image rebuilt, retagged and pushed to the remote repo.

Heroku redeployed the new image. The application is live at [Heroku](https://corpus-inventory.herokuapp.com/) 



## Iteration

Although the process is described sequentially, there are times were things happen through iteration.


## Github Page

Some files were added to expose the project repo as github pages
- ``<Current Repository>/assets/``
- ``<Current Repository>/_config.yml``

## References
1. https://stackoverflow.com/questions/4495241/given-a-file-find-the-ten-most-frequently-occurring-words-as-efficiently-as-pos
2. https://www.geeksforgeeks.org/python-count-occurrences-of-each-word-in-given-text-file-using-dictionary/
3. https://tailwindcss.com/docs/guides/create-react-app
4. https://tailwindcss.com/docs/installation
5. https://tailwindcss.com/docs/installation#post-css-7-compatibility-build
6. Some docs are available as pdfs under ``<Current Repository>/docs/``