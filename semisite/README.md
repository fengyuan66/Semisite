# SEMISite README

# What is this?
This is my personal website. I will continue to update it and probably expand its features, but that heavily depends on how much I use it. Other than that, it serves like a portfolio, a hub that I can attach to resumes and applications for others to interact and learn about my projects.

# Background
As I become more and more involved in the tech community, it is becoming increasingly important that I have a medium which I can showcase myself and my works. A personal website is fitting because it itself a display of my coding skills.

Also, because the idea of documenting and publishing my journey involves many platforms, it may be more professional and organized to have a central hub connecting every future outlet I create than to remain disjointed across many services. Having a website means that people can see my newsletter, project, and repos all in one place.

# What the heck is SEMI?
SEMI is a LARP company started by me when I joined in on the trend among my friends to make mini-apps and crude HTML websites when I was in grade 5. "We" "launched" a "product" named SCW (Semi Cecure Workspace, I don't know what I thought it spelled "Secure"), which was basically a batchfile-locked folder with the password hidden in the code that we copied off a YouTube tutorial.

Anyways, today, SEMI has become a symbolic representation of my presence, activity, and work in all fields related to tech.

# Features

**1. Home page**

1) There are some pretty cool videos. Due to the free hosting I believe the videos lag upon first load but once its cached it should be alright. I really like the designs.

**2. About Harry page**

1) List of some superb achievements I've got so far, maintenance accessible by adding new <li> items in the list.
2) List of things I like
3) What is SEMI when this is your personal site?!!
4) "100% hand-coded" sign to show that I didn't just vibe code my personal website because I may want some people to see how good I am at coding by hand even though I enjoy vibe coding.

**3. Projects page**

Okay this one I like a lot

**Object-based cards**

Each project gets its own card object. I can easily add, modify, and remove projects

 I customise modifying the fields in each element of the project array in projects.jsx. For graphics, I have to fill in with the appropriate variable I assigned to that graphic in import In projects.jsx. 

For the buttons, I can customise the hyperlink destination in projects.jsx's fields but I have to match it up with a "button ID" that I have to pre-define in Projectbox.jsx, again with graphics I need to link each "button ID" up with its corresponding graphics import in Projectbox.jsx.

If I want 3 buttons, I get 3 buttons, if I want none, I can have none. The amount of buttons is controlled by the amount of elements in the sub-array for buttons.

Anyways, point is, this makes it easy for me to maintain and update site in long term.

You can click on buttons to see the demo, latest iteration, or Github repo of projects I have so far.

**4. Newsletter**

This will be a hub for my future newsletters. I have to develop the habit of writing them monthly, however. The newsletters will be hosted on Notion, so an organized list of links with dates will suffice.

**5. Employees**

This one is a LARP joke page. Joke is that this SEMI is no company at all. I do everything for SEMI and I am the start employee and boss because I am the only employee.

**6. Connect**

1) There are links to my Github and Linkedin
2) I used Formspree, a third party form-filling platform to create this email form on the right. If you fill in the form with your info and content, Formspree will send your message right to my email. There is a not-very-generous cap on the amount of emails though but I do not anticipate 10 people to visit my site anytime soon.

Alternatively, my email is also displayed on the left sidebar beside the Linkedin and Github. If you click on it, it will open a dialogue to open an app to send an email to me.

# How this could be used

I can put it on any type of resume, applications, online forms, or showing to people, especially professionals or others who I want to collaborate with in professional fields in the future.

I'd imagine though that by the time I graduate uni, this whole SEMI thing will become an actual company and I will have to find another cute graphic to represent me on the website.

# AI Declaration

I attached Claude Code to my repo because web dev involves context across many fields and it was hard to communicate with Chatgpt, which likes to assume stuff if you don't tell it what it needs.

Because this was my 2nd time using React (first time with Voyago), there were a lot of concepts I've yet to learn. Claude taught me the firsts of every concept, but after a few iterations I could do it on my own (ex: The title and subtitle setup I relied a lot on AI, but for later pages like "Employees" and "About Harry" they needed almost no help from Claude)

In addition, Claude was used to help me debug, particularly with CSS issues. For example, to represent the <div> with the main content, I used the CSS class "maincontent" in both the "About Harry" and "Employees" page. This caused the latter-developed "About Harry" page's "maincontent" elements to use settings from the "Employees" page's "maincontent" CSS. Claude explained that when we import a CSS it is merely to ensure that the CSS is properly loaded, but the CSS is global.

However, because this is a *personal* website and can serve the function of showcasing my frontend skill, I decided to make this completely hand-coded. This means that everything beyond the "set up react project" stage was coded by me in the code editor, under my own design choice. Of course, I had to learn from Claude as it was simply right and better than me at times, but this means that everything that is in this site was intentionally included by me.