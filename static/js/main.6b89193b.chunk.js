(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{58:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(1),i=t.n(n),o=t(6),c=t.n(o),l=t(2),r=t.n(l);var m=function(){return Object(n.useEffect)((function(){var e=r()("nav").outerHeight();r()(".navbar-toggler").on("click",(function(){r()("#mainNav").hasClass("navbar-reduce")||r()("#mainNav").addClass("navbar-reduce")})),r()("body").scrollspy({target:"#mainNav",offset:e}),r()(".js-scroll").on("click",(function(){r()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans")):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"))})),r()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var a=r()(this.hash);if((a=a.length?a:r()("[name="+this.hash.slice(1)+"]")).length)return r()("html, body").animate({scrollTop:a.offset().top-e+25},1e3,"easeInOutExpo"),!1}})),r()(".js-scroll").on("click",(function(){r()(".navbar-collapse").collapse("hide")}))}),[]),Object(s.jsx)("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(s.jsx)("span",{}),Object(s.jsx)("span",{}),Object(s.jsx)("span",{})]}),Object(s.jsx)("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",children:Object(s.jsxs)("ul",{className:"navbar-nav",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll active",href:"./#home",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"./#about",children:"About"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"./#testimonials",children:"Testimonials"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"./#portfolio",children:"Portfolio"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"./#skills",children:"Skills"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link js-scroll",href:"./#contact",children:"Contact"})})]})})]})})},d=t(19),h=t.n(d);var b=function(){return Object(s.jsxs)("div",{id:"home",className:"intro route bg-image background",children:[Object(s.jsx)("div",{id:"stars"}),Object(s.jsx)("div",{id:"stars2"}),Object(s.jsx)("div",{id:"stars3"}),Object(s.jsx)("div",{className:"intro-content display-table",children:Object(s.jsx)("div",{className:"table-cell",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{className:"intro-title mb-4",children:"Hello, I am Anjali Pant"}),Object(s.jsxs)("p",{className:"intro-subtitle",children:[Object(s.jsx)("span",{className:"text-slider-items"}),Object(s.jsx)("strong",{className:"text-slider",children:Object(s.jsx)(h.a,{strings:["Front End Developer","Back End Developer","Fullstack Developer","Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0})})]}),Object(s.jsx)("p",{className:"pt-3",children:Object(s.jsx)("a",{className:"btn btn-primary btn js-scroll px-4",href:"./#portfolio",role:"button",children:"View My Work"})})]})})})]})},j=t(5),p=[{id:"first-p-about",content:"Hi! my name is Anjali Pant. I am a creative and dependable entry level web developer with a stellar customer service record and superb work ethic.I am knowledgeable in a wide variety of computer languages as well as the principles and techniques of website construction and maintenance. I consider myself highly adept at conveying complex technical information to a variety of professional and lay audiences in a clear and understandable manner."},{id:"second-p-about",content:"I finished my undergraduate degree in Bachelors of electronics and communication engineering and my post graduate in Embedded Systems Developement, where I learned some low level/bare metal programming.Prior to learning coding, I had a fulfilling carrer as a customer success manager for a fleet management company where I honed my organizational,leadership and communication skills."},{id:"third-p-about",content:"I look forward to being part of a team where I can merge my knowledge in web developement with my customer success skills"}];var u=function(){var e=Object(n.useState)(p),a=Object(j.a)(e,1)[0];return Object(s.jsx)("section",{id:"about",className:"about-mf sect-pt4 route",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"box-shadow-full",children:[Object(s.jsx)("div",{className:"title-box-2",children:Object(s.jsx)("h5",{className:"title-left",children:"About Me"})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(s.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(s.jsx)("img",{src:"img/mypic.JPG",className:"img-fluid rounded b-shadow-a",alt:"Mypic"})})}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"about-me pt-4 pt-md-0",children:a.map((function(e){return Object(s.jsx)("p",{className:"lead",style:{margin:"0 px"},children:e.content},e.id)}))})})]})]})})})})})},g=t(14),v=[{id:"HTML5",image:"./img/icons/html.png"},{id:"CSS3",image:"./img/icons/css.png"},{id:"JavaScript",image:"./img/icons/js.png"},{id:"React",image:"./img/icons/react.png"},{id:"Node",image:"./img/icons/node.png"},{id:"Express",image:"./img/icons/express.png"},{id:"MySQL",image:"./img/icons/mysql.png"},{id:"Mongodb",image:"./img/icons/mongo.png"},{id:"graphql",image:"./img/icons/graphql.png"}];var x=function(){var e=Object(n.useState)(v),a=Object(j.a)(e,1)[0];return Object(s.jsxs)("section",{id:"skills",className:"skills-mf sect-pt4 route bg-image background-skills",children:[Object(s.jsx)(g.a,{fill:"#4a9efc",paused:!1,style:{transform:"rotate(180deg)"},options:{height:20,amplitude:40,speed:.1,points:3}}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{style:{textAlign:"center"},children:"Skills"}),Object(s.jsx)("div",{className:"line-mf"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"row",children:a.map((function(e){return Object(s.jsx)("div",{className:"col-4",children:Object(s.jsx)("img",{src:e.image,title:e.id,style:{align:"center",padding:"20px"},className:"skills center-block",alt:e.id})},e.id)}))})]}),Object(s.jsx)(g.a,{fill:"#4a9efc",paused:!1,options:{height:20,amplitude:40,speed:.1,points:3}})]})},f=t(73),O=(t(37),["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"]),w=[{title:"Drastic Measurements",description:"An app for costume designers to easily access a specific actor's measurements for an upcoming movie,television show,theatre /dance performance etc.",github:"https://github.com/Anjali9293/Project3",demo:"https://vast-taiga-98028.herokuapp.com/",mainImage:{src:"img/drastic.PNG",caption:"Main Image Caption 1"},images:[{src:"img/drastic2.PNG",caption:"Sub Image Caption 1"},{src:"img/drastic3.PNG",caption:"Sub Image Caption 1"},{src:"img/drastic4.PNG",caption:"Sub Image Caption 2"},{src:"img/drastic5.PNG",caption:"Sub Image Caption 3"}],technologies:[{name:"Javascript",color:"yellow",textcolor:"hsla(200,0%,0%,.7)"},{name:"React",color:"cyan"},{name:"Axios",color:"purple"},{name:"Material UI",color:"blue"},{name:"GraphQL",color:"DeepPink"},{name:"Firebase",color:"Orange"}]},{title:"Flame Game",description:"An online e-commerce website with features to add/remove items from the cart and checkout features.",github:"https://github.com/Anjali9293/Project-2-Flame-Game",demo:"https://tranquil-temple-78360.herokuapp.com/",mainImage:{src:"img/flamegame.PNG",caption:"Main Image Caption 1"},images:[{src:"img/flamegame0.PNG",caption:"Sub Image Caption 1"},{src:"img/flamegame1.PNG",caption:"Sub Image Caption 1"},{src:"img/flamegame2.PNG",caption:"Sub Image Caption 2"},{src:"img/flamegame3.PNG",caption:"Sub Image Caption 3"}],technologies:[{name:"Javascript",color:"yellow",textcolor:"hsla(200,0%,0%,.7)"},{name:"HTML",color:"OrangeRed"},{name:"CSS",color:"RoyalBlue"},{name:"Bootstrap",color:"RebeccaPurple"},{name:"NodeJs",color:"YellowGreen"},{name:"MySQL",color:"Orange"}]},{title:"Travel Bug",description:"A travel app that helps travelers plan their trip according to weather, hotels, and attractions within a searched city.",github:"https://github.com/Anjali9293/TravelBug",demo:"https://klsybthrst.github.io/TravelBug/",mainImage:{src:"img/travelbug.PNG",caption:"Main Image Caption 1"},images:[{src:"img/travelbug0.PNG",caption:"Sub Image Caption 1"},{src:"img/travelbug1.PNG",caption:"Sub Image Caption 1"},{src:"img/travelbug2.PNG",caption:"Sub Image Caption 2"}],technologies:[{name:"Javascript",color:"yellow",textcolor:"hsla(200,0%,0%,.7)"},{name:"HTML",color:"OrangeRed"},{name:"CSS",color:"RoyalBlue"},{name:"Bootstrap",color:"RebeccaPurple"},{name:"jQuery",color:"SteelBlue"},{name:"Moment.js",color:"MediumAquaMarine"}]},{title:"Burger Logger",description:"A Burger logger application that follows the MVC design pattern and uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.",github:"https://github.com/Anjali9293/burger-Node-express-handlebars",demo:"https://stormy-falls-15404.herokuapp.com/",mainImage:{src:"img/burger.PNG",caption:"Main Image Caption 1"},images:[{src:"img/burger1.PNG",caption:"Sub Image Caption 1"},{src:"img/burger2.PNG",caption:"Sub Image Caption 2"},{src:"img/burger3.PNG",caption:"Sub Image Caption 3"}],technologies:[{name:"HTML",color:"OrangeRed"},{name:"CSS",color:"RoyalBlue"},{name:"Javascript",color:"yellow",textcolor:"hsla(200,0%,0%,.7)"},{name:"NodeJs",color:"YellowGreen"},{name:"Handlebars",color:"GoldenRod"},{name:"MySQL",color:"Orange"}]},{title:"Employee Directory",description:"An employee directory app that allows users to sort employees by their name age and email address as well as filter employees by their first name",github:"https://github.com/Anjali9293/Employee-Directory",demo:"https://anjali9293.github.io/Employee-Directory/",mainImage:{src:"img/directory.PNG",caption:"Main Image Caption 1"},images:[{src:"img/directory0.PNG",caption:"Sub Image Caption 1"},{src:"img/directory1.PNG",caption:"Sub Image Caption 1"},{src:"img/directory2.PNG",caption:"Sub Image Caption 2"},{src:"img/directory3.PNG",caption:"Sub Image Caption 3"},{src:"img/directory4.PNG",caption:"Sub Image Caption 4"}],technologies:[{name:"HTML",color:"OrangeRed"},{name:"CSS",color:"RoyalBlue"},{name:"Javascript",color:"yellow",textcolor:"hsla(200,0%,0%,.7)"},{name:"React",color:"cyan"},{name:"Axios",color:"purple"}]},{title:"Workout Tracker",description:"An application that allows users to be able to view, create and track daily workouts.",github:"https://github.com/Anjali9293/Workout-Tracker",demo:"https://fast-temple-47625.herokuapp.com/?id=5fa9f8a586131b09dc2b8075",mainImage:{src:"img/employee.PNG",caption:"Main Image Caption 1"},images:[{src:"img/employee 1.PNG",caption:"Sub Image Caption 1"},{src:"img/employee 2.PNG",caption:"Sub Image Caption 1"},{src:"img/employee 3.PNG",caption:"Sub Image Caption 2"}],technologies:[{name:"Javascript",color:"yellow",textcolor:"hsla(200,0%,0%,.7)"},{name:"NodeJs",color:"YellowGreen"},{name:"Express",color:"Black"},{name:"mongoDB",color:"ForestGreen"},{name:"mongoose",color:"Tomato"}]}];var N=function(){var e=Object(n.useState)(w),a=Object(j.a)(e,1)[0];return Object(s.jsx)("section",{id:"portfolio",className:"portfolio-mf sect-pt4 route",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsxs)("div",{className:"title-box text-center",children:[Object(s.jsx)("h3",{className:"title-a",children:"Portfolio"}),Object(s.jsx)("p",{className:"subtitle-a",children:"Here are a few projects that I've worked on recently.If you would like to see more of my work,contact me via email."}),Object(s.jsx)("div",{className:"line-mf"})]})})}),Object(s.jsx)("div",{className:"row",children:a.map((function(e,a){return Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsxs)("div",{className:"work-box box-shadow-card",children:[Object(s.jsx)("div",{className:"work-img",children:Object(s.jsx)("a",{href:e.mainImage.src,"data-title":e.mainImage.caption,"data-lightbox":"gallery-vmarine",children:Object(s.jsx)("img",{src:e.mainImage.src,alt:e.mainImage.caption,className:"img-fluid"})})}),Object(s.jsx)("div",{className:"work-content",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-sm-12   ",children:[Object(s.jsx)("h2",{className:"w-title",children:e.title}),Object(s.jsx)("div",{className:"w-more pb-2",children:Object(s.jsx)("span",{className:"w-ctegory",children:e.description})}),Object(s.jsx)("div",{className:"w-more pb-2",children:Object(s.jsx)("div",{className:"row pl-3",children:e.technologies.map((function(e,a){return Object(s.jsx)("div",{className:"col-auto p-1",children:Object(s.jsx)("span",{children:Object(s.jsx)(f.a,{as:"a",style:{backgroundColor:e.color,color:e.textcolor||"white"},color:O[e.color.toLowerCase()]&&e.color.toLowerCase(),image:!0,children:Object(s.jsx)(f.a.Detail,{children:e.name})})})},"tech-".concat(a))}))})}),Object(s.jsxs)("div",{className:"w-links",children:[Object(s.jsx)("a",{href:e.github,className:"btn btn-outline-secondary",target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab fa-github fa-md"})}),Object(s.jsx)("a",{href:e.demo,className:"btn btn-outline-secondary",target:"_blank",rel:"noreferrer",children:"Demo"})]})]})})}),e.images.map((function(e,t){return Object(s.jsx)("a",{href:e.src,"data-lightbox":"gallery-vmarine",style:{display:"none"},children:"\xa0"},"portfolio-".concat(a,"-image-").concat(t))}))]})},"portfolio-".concat(a))}))})]})})},y=t(10),k=t(13),S=t(22),I=t.n(S);var A=function(){var e=Object(n.useState)({name:"",email:"",subject:"",message:""}),a=Object(j.a)(e,2),t=a[0],i=a[1];function o(e){var a=e.target,s=a.name,n=a.value;i(Object(k.a)(Object(k.a)({},t),{},Object(y.a)({},s,n))),console.log(t)}return Object(s.jsxs)("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url(/img/earth.jpg)"},children:[Object(s.jsx)("div",{className:"overlay-mf"}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("div",{className:"contact-mf",children:Object(s.jsx)("div",{id:"contact",className:"box-shadow-full",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("div",{className:"title-box-2",children:Object(s.jsx)("h5",{className:"title-left",children:"Send A Message"})}),Object(s.jsx)("div",{children:Object(s.jsxs)("form",{action:"https://formspree.io/xdoeonlo",method:"POST",className:"contactForm",children:[Object(s.jsx)("div",{id:"sendmessage",children:"Your message has been sent. Thank you!"}),Object(s.jsx)("div",{id:"errormessage"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-12 mb-3",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{onChange:o,type:"text",name:"name",className:"form-control",id:"name",value:t.name,placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(s.jsx)("div",{className:"validation"})]})}),Object(s.jsx)("div",{className:"col-md-12 mb-3",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{onChange:o,type:"email",className:"form-control",name:"email",id:"email",value:t.email,placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(s.jsx)("div",{className:"validation"})]})}),Object(s.jsx)("div",{className:"col-md-12 mb-3",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{onChange:o,type:"text",className:"form-control",name:"subject",id:"subject",value:t.subject,placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(s.jsx)("div",{className:"validation"})]})}),Object(s.jsx)("div",{className:"col-md-12 mb-3",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("textarea",{onChange:o,className:"form-control",name:"message",value:t.message,rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(s.jsx)("div",{className:"validation"})]})}),Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsx)("button",{type:"submit",className:"button button-a button-big button-rouded",onClick:function(e){e.preventDefault(),I.a.send("service_qk857q2","template_9at01uw",t,"user_2hYW73M0nGd1UZCYpzh1y").then((function(e){console.log("SUCCESS!",e.status,e.text),i({name:"",email:"",subject:"",message:""})}),(function(e){console.log("FAILED...",e)}))},children:"Send Message"})})]})]})})]}),Object(s.jsxs)("div",{className:"col-md-6",children:[Object(s.jsx)("div",{className:"title-box-2 pt-4 pt-md-0",children:Object(s.jsx)("h5",{className:"title-left",children:"Get in Touch"})}),Object(s.jsx)("div",{className:"more-info",children:Object(s.jsxs)("p",{className:"lead",children:["Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",Object(s.jsx)("br",{}),"Simply fill the from or send me an email."]})}),Object(s.jsx)("div",{className:"socials",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsxs)("a",{href:"mailto:pantanjali7@gmail.com",target:"_blank",rel:"noopener noreferrer",children:[Object(s.jsx)("span",{className:"ico-circle d-inline-block",children:Object(s.jsx)("i",{className:"ion ion-mail"})}),Object(s.jsx)("span",{className:"d-inline-block",children:"pantanjali7@gmail.com"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("a",{href:"https://github.com/Anjali9293",target:"_blank",rel:"noopener noreferrer",children:[Object(s.jsx)("span",{className:"ico-circle d-inline-block",children:Object(s.jsx)("i",{className:"ion ion-logo-github"})}),Object(s.jsx)("span",{className:"d-inline-block",children:"Anjali9293"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("a",{href:"https://www.linkedin.com/in/anjali-pant/",target:"_blank",rel:"noopener noreferrer",children:[Object(s.jsx)("span",{className:"ico-circle d-inline-block",children:Object(s.jsx)("i",{className:"ion ion-logo-linkedin"})}),Object(s.jsx)("span",{className:"d-inline-block",children:"anjali-pant"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("a",{href:"https://twitter.com/pantanjali7",target:"_blank",rel:"noopener noreferrer",children:[Object(s.jsx)("span",{className:"ico-circle d-inline-block",children:Object(s.jsx)("i",{className:"ion ion-logo-twitter"})}),Object(s.jsx)("span",{className:"d-inline-block",children:"pantanjali7"})]})})]})})]})]})})})})})}),Object(s.jsx)("footer",{children:Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-sm-12",children:Object(s.jsx)("div",{className:"copyright-box"})})})})})]})};var C=function(){return Object(n.useEffect)((function(){r()(".back-to-top").click((function(){return r()("html, body").animate({scrollTop:0},1500,"easeInSine"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}),[]),Object(s.jsx)("a",{href:"!#home",className:"back-to-top animated",children:Object(s.jsx)("i",{className:"fa fa-chevron-up"})})},P=[{content:"It was such a pleasure working with, and getting to know, Anjali during out Full Stack Web Development Bootcamp. I worked with Anjali on a variety of projects, from short in class activities to a week long project. Anjali is incredibly helpful. She is incredibly knowledgeable and is always willing to go through things and break them down to help everyone understand. Anjali has an amazing work ethic. She never gives up when working through a problem. Working with her on our final project for the course was amazing. Anjali was a driving force in us using programs like Firebase and GraphQL (neither of which were taught during our course). Whenever we hit a wall during this project Anjali was always there with excellent problem solving abilities and her amazing work ethic. She would be an incredible asset to any team.",image:"img/leah.PNG ",name:"Leah O'Gorman",position:"Full Stack Web Developer"},{content:"As a member of Anjali's learning group, I was lucky to work with her on a daily basis as well as two of our 3 major projects. Anj quickly became a huge asset for us as her ability to grasp and explain new concepts led her to be like our own personal instructor in the camp. In working with Anj on our major projects she would easily take on a leadership role and take on the most difficult tasks with ease often working extremely late hours to bring our group a nearly finished product on her own. Her amazing personality and teacher's spirit made for a truly amazing experience and I already miss having her around to listen to and learn from. Anj will be an amazing asset to any company that is smart enough and lucky enough to have her.",image:"img/shaun.PNG",name:"Shaun Samoridny",position:"Full Stack Web Developer"},{content:"Working with Anj was an amazing experience. Her resourcefulness and work ethic were unmatched. Often during the program we'd come up against seemingly unsolvable problems. Anj would never give up. She'd demonstrate extraordinary problem solving abilities, and was always happy to share her knowledge and insights. She'll be a great asset on any team.",image:"img/victor.PNG",name:"Victor Scherman",position:"Full Stack Web Developer"},{content:"I worked with Anjali in customer Success in goFleet, she was responsible of some of our major accounts where she was responsible of providing technical advises and solutions for their overall business problems. in addition she was responsible of vertically growing the accounts, she was a crucial success manager showing excellent Technical skills understanding the overall customer business and come up with solutions that solves customer needs and yet fits their budgetary requirements.Anjali was a star within the organization where everybody was reaching out to her because of her willingness to help and knowledge depth, and was admired by her customers being always on top of the issues and proactive in providing advises and solutions",image:"img/ahmed.PNG",name:"Ahmed Mostafa",position:"IT Director"},{content:"I worked with Anjali at GoFleet as her manager in the Technical Support department. Anjali was a vital part of our day to day operations, constantly excelling in her duties. She was always willing and able to take on special projects and executed them efficiently and expertly.Anjali was an integral part of the organization and could always be counted on to deliver on time and above expectations. Everyone in the organization knew that if there was a problem or question they didn't have the answer to that they could rely on Anjali to provide a solution.",image:"img/adrian.PNG",name:"Adrian Aymont",position:"Account Manager at ZenduIT"},{content:"When I worked with Anjali, she never hesitated to lend a helping hand with complex problems and constantly managed to deliver outcomes beyond expectations. She championed all services provided by GoFleet/ZenduIT, contributing significantly to the acceptance and execution of large-scale government and private sector projects. Her success was primarily motivated by her calculated approach, expert communication skills, and effective delegation methods.I have been fortunate enough to have worked with Anjali and learned tremendously from her. She was a crucial force for me to grow professionally as a customer success manager. Above all, she genuinely cared about the products and every team member.No matter how difficult the challenge, inviting someone like Anjali to your team will be a vital asset. Her skills and leadership will constantly direct the team up the right path.",image:"img/asad.PNG",name:"Asad Khan",position:"Team Lead - Customer Success at GoFleet"}];var G=function(){var e=Object(n.useState)(P),a=Object(j.a)(e,1)[0];return Object(n.useEffect)((function(){r()(".testi5").owlCarousel({loop:!0,margin:10,stagePadding:10,nav:!1,dots:!0,autoplayTimeout:1e4,autoplayHoverPause:!0,center:!0,responsiveClass:!0,responsive:{0:{items:1},1024:{items:1.15}}})})),Object(s.jsxs)("section",{id:"testimonials",className:"testimonials-mf sect-pt4 route bg-image background-testimonial",children:[Object(s.jsx)("div",{id:"stars"}),Object(s.jsx)("div",{id:"stars2"}),Object(s.jsx)("div",{id:"stars3"}),Object(s.jsxs)("div",{className:"testimonial5 py-5 bg-inverse ",children:[Object(s.jsx)("div",{className:"row justify-content-center",children:Object(s.jsx)("div",{className:"col-md-7 text-center",children:Object(s.jsx)("h3",{className:"mb-3 text-white",children:"A Few Words From My Teamates/Co-workers"})})}),Object(s.jsx)("div",{className:"owl-carousel owl-theme testi5 mt-4 text-center",children:a.map((function(e,a){return Object(s.jsxs)("div",{className:"item",children:[Object(s.jsxs)("div",{className:"content",children:['"',e.content,'"']}),Object(s.jsxs)("div",{className:"customer-thumb",children:[Object(s.jsx)("img",{src:e.image,alt:e.name,className:"rounded-circle"}),Object(s.jsx)("h6",{className:"text-white mb-0",children:e.name}),Object(s.jsx)("p",{children:e.position})]})]},"testimonial-".concat(a))}))})]})]})},M=i.a.createContext({}),L=function(){return Object(s.jsxs)(M.Provider,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(b,{}),Object(s.jsx)(u,{}),Object(s.jsx)(G,{}),Object(s.jsx)(N,{}),Object(s.jsx)(x,{}),Object(s.jsx)(A,{}),Object(s.jsx)(C,{})]})};t(45),t(46),t(47),t(48),t(49),t(50),t(51),t(52),t(54),t(55),t(56),t(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(s.jsx)(L,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.6b89193b.chunk.js.map