# [Add Vector](https://github.com/KMurphs/math-calculators)



## Overview

-  Project was designed to solve a math problems that my niece had. The idea was to allow her to quickly verify her solution and get a visual representation for what vector addition, substraction and scalar multiplication do. 
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

![UI Draft Wireframe](https://raw.githubusercontent.com/KMurphs/math-calculators/main/add-vectors/imgs/add-vector-w500.png "Early wireframe draft")

1. The initial question was to establish an *information hierarchy*. The most important pieces of information were to be accessed quickly. The canvas was one such piece of information, the current operands and resultant were also quite important. Finally, the current vector representation setting for the app also had to be prominent.

2. The UI was to be kept simple. Colors were researched and settled on the blue-ish color ``#00617f`` as a seondary color and the dark pink ``b1289a`` for accents.


### MathJax Nodes

The Mathjax nodes need a special treatment. When the library is first loaded on the page, it processes all the tex nodes, and remembers all of them as being processed. It does not re-process them again.

To force a re-rendering (because the content of the node is changed by the application, e.g. changing vector representation), some things need to happen.

The logic to do this was confined to a svelte component that is re-used for all mathjax/tex nodes.





## Results

![Final UI](https://raw.githubusercontent.com/KMurphs/math-calculators/main/add-vectors/imgs/finished-product.png "Final UI")



## Links

-  The Github repository is at [https://github.com/KMurphs/math-calculators](https://github.com/KMurphs/math-calculators).
-  The Application is live at [https://kmurphs.github.io/math-calculators/](https://kmurphs.github.io/math-calculators/)
-  This documentation also lives along side the application at [https://kmurphs.github.io/math-calculators/docs](https://kmurphs.github.io/math-calculators/docs)

## Known Issues

- **UI Lag**: When more than 10 operands are present on the UI, changing between cartesian and polar representation for example, exposes a lag in the UI. This is exacerbated as the number of operands increase. <br><br>
The issue is believed to be cause by a combination of factor: Under the hood only the cartesian representation of the vector is kept in memory. Whenever, the polar representation is needed it is calculated. Moreover, when this happens, all the mathjax node on the DOM must be updated, reprocessed and re-rendered. <br><br>
One possible solution would be to keep both representation in memory and have mathjax process both types of DOM nodes (for the cartesian and polar representation). A CSS class could then be used to hide one representation and show the other.

- **No Space For Vector Editor on Mobile**: On a mobile phone, the vector editor is shrank when the phone keyboard is displayed. This has a negative effect on the UX of the App. <br><br>
The solution would be to have the editor displayed in a modal window, for mobile phones. There would then be enough space, it would also make for a better user experience.

## References
1. https://svelte.dev/tutorial/
2. http://docs.mathjax.org/en/latest/web/typeset.html
3. https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
4. https://blog.bloomca.me/2017/12/15/how-to-push-folder-to-github-pages.html



