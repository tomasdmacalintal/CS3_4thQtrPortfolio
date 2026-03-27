# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="Tomas Macalintal, Phipa Libunao" />
  <meta name="revised" content="27 March 2026" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

The sidebar shifted 20 px downward and 20 px right because of top and left respectively. It shifted starting from its original position, NOT from the very top left of the page because of its position being relative. If it were absolute or fixed, it would go to the very top and left and shift from there.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

When you scroll, it does not scroll with the other elements. It is removed from the flow and sticks to where it was coded to be, relative to the page.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

Position absolute removes the element from the flow (just like fixed) and uses top left bottom and right to position itself. It is different from fixed because it can scroll with the other elements.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

First, the element is added last and is placed on top of all other elements. Its z-index doesn't really do anything different, because there is no element above notice to need a z-index. If you swap it with content, the z-index now works. It layers itself above the element above it in the screen, notice.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    .notice {
        position: absolute;
        right: 0;
        top: 0;
        background: orange;
        padding: 10px;
        z-index: 2;
    }   
    <div class="content">Main Content
        <div class="notice">Notice!</div>
    </div>

    No need to change content.

    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    In relative, it is still in flow, and shifts from its original position. In fixed, it is removed from flow, shifts starting from the top and left of the page, and it doesn't scroll.


    * What do you observe on about the effect of z-index on .notice and .content boxes?
    If the z-index of something defaults depending on the stackflow. If the z index of an element is greater than the other, it is placed above it.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 
    Static - In flow, default, no top right left bottom.
    Relative - in flow, top right left bottom, shifts from original position.
    Absolute - not in flow, top right left bottom, starts from any corner of its parent depending on top right left bottom, then shifts. 
    Fixed - not in flow, top right left bottom, starts from any corner of the whole page then shifts.

    b. How does absolute positioning depend on its parent element?
    It is positioned relative to its nearest parent.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    It acts like relative until you scroll too much then sticks.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    Fixed for things that a user needs in any scroll position, like header.
    Relative if I want the information's position to shift starting from the flow.
    Absolute if I want the information's position to be somewhere very specific, not in the flow. (School image)
    Static if it is just normal information that is with the normal flow and doesn't need further positioning.
    Sticky if I want information to stay visible so users don't scroll back up. (Dates)