$(document).ready(function(){

	var study, coop = 0;
	var td, agf, veeva, ecobee = 0;

		$("#messages").append("<li class='message-li'><div class='bot-message container'>Hi! I'm Rachelyn :)</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I'm a third-year student studying Systems Design Engineering at the University of Waterloo.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>I am currently searching for a position for my 5th co-op term!</div></li>");
		$("#options").append("<li class='option' id='o-1a'><span>How's studying going?</span></li>");
		$("#options").append("<li class='option' id='o-1b'><span>How's co-op going?</span></li>");

	$(document).on('click', '#o-1a', function(){ /*How's studying going?*/
		study = 1;
		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How's studying going?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Having completed 4 school terms,  here are some of my favourite courses so far:</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>Digital Systems (combinational logic and microcomputer interfacing),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>Graphics (3D CAD and technical drawings),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-4 container'>Data Structures and Algorithms (algorithm analysis and design),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-5 container'>...and Human Factors in Design (human-machine interfaces and ergonomic design).</div></li>");
		if (coop != 1){
			$("#options").append("<li class='option' id='o-2a'><span>Tell me about co-op.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2c'><span>But...what is Systems?</span></li>");
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
	});

 	$(document).on('click', '#o-1b', function(){ /*How's co-op going?*/
 		coop = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How's co-op going?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I love it! I've had four (vastly different) work terms so far.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I've worked as a UX/UI designer at TD Labs, a Web Developer at AGF Management, a Product Manager at Veeva Systems and a Product Manager at ecobee.</div></li>");
		$("#options").append("<li class='option' id='o-3a'><span>How was TD Bank?</span></li>");
		$("#options").append("<li class='option' id='o-3b'><span>What was AGF all about?</span></li>");
		$("#options").append("<li class='option' id='o-3c'><span>What did you do at Veeva?</span></li>");
		$("#options").append("<li class='option' id='o-4e'><span>What was ecobee like?</span></li>");
 	});

 	$(document).on('click', '#o-2a', function(){ /*Tell me about co-op.*/
 		coop = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Tell me about co-op.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I love it! I've had four (vastly different) work terms so far.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I've worked as a UX/UI designer at TD Labs, a Web Developer at AGF Management, a Product Manager at Veeva Systems and a Product Manager at ecobee.</div></li>");
		if (td != 1){
			$("#options").append("<li class='option' id='o-3a'><span>How was TD Bank?</span></li>");
		}
		if (agf !=1){
			$("#options").append("<li class='option' id='o-3b'><span>What was AGF all about?</span></li>");
		}
		if (veeva !=1){
			$("#options").append("<li class='option' id='o-3c'><span>What did you do at Veeva?</span></li>");
		}
		if (ecobee !=1){
			$("#options").append("<li class='option' id='o-3d'><span>What was ecobee like?</span></li>");
		}
	}); 

 	$(document).on('click', '#o-2b', function(){ /*Outside of school and work?*/
 		coop = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Outside of school and work?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I'm a competitive dancer and hockey player!</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I love psychology (thank goodness for electives!) which lends itself well to design thinking.</div></li>");
		$("#options").append("<li class='option' id='o-5a'><span>Let's chat</span></li>");
		$("#options").append("<li class='option' id='o-5b'><span>Thanks, bye!</span></li>");
 	});

  	$(document).on('click', '#o-2c', function(){ /*But...what is Systems?*/
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>But...what is Systems?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Well, it seems to be a little hard to define.'</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I like to think of it as an <em>engineering</em> degree with a focus on optimizing the <em>design</em> process and how complex parts can work together in a <em>system</em>.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>If you're still curious, here's <a href='https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering' target='_blank'>UW's attempt</a> at explaining it.</div></li>");
		if (coop != 1){
			$("#options").append("<li class='option' id='o-2a'><span>Tell me about co-op.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-3a', function(){ /*How was TD Bank?*/
 		td = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How was TD Bank?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I was a UX designer at <a href='https://www.communitech.ca/how-we-help/innovation/corporate-innovation/td-bank-group/' target='_blank'>TD Labs</a>, where my team designed a new app to teach kids about financial literacy.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I loved creating the UI and conducting user testing where I got to chat with adorable little kids and figure out how I could modify my designs to optimize their user experience.</div></li>");
		if (agf != 1){
			$("#options").append("<li class='option' id='o-4a'><span>How about AGF?</span></li>");
		}
		if (veeva != 1){
			$("#options").append("<li class='option' id='o-4d'><span>What did you do at Veeva?</span></li>");
		}
		if (ecobee != 1){
			$("#options").append("<li class='option' id='o-3d'><span>What was ecobee like?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-4d', function(){ /*What did you do at Veeva?*/
 		veeva = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>What did you do at Veeva?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I was a Product Manager at <a href='https://www.veeva.com/' target='_blank'>Veeva Systems</a>, where I defined the functions of 5 features over the course of the co-op term.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I pitched each of my completed designs to the rest of the product management team, then led a development team to take the feature to production.</div></li>");
		if (agf != 1){
			$("#options").append("<li class='option' id='o-4a'><span>How about AGF?</span></li>");
		}
		if (td != 1){
			$("#options").append("<li class='option' id='o-4c'><span>How about TD?</span></li>");
		}
		if (td != 1){
			$("#options").append("<li class='option' id='o-4e'><span>What was ecobee like?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});


 	$(document).on('click', '#o-3c', function(){ /*What did you do at Veeva?*/
 		veeva = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>What did you do at Veeva?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I was a Product Manager at <a href='https://www.veeva.com/' target='_blank'>Veeva Systems</a>, where I defined the functions of 5 features over the course of the co-op term.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I pitched each of my completed designs to the rest of the product management team, then led a development team to take the feature to production.</div></li>");
		if (agf != 1){
			$("#options").append("<li class='option' id='o-4a'><span>How about AGF?</span></li>");
		}
		if (td != 1){
			$("#options").append("<li class='option' id='o-4c'><span>How about TD?</span></li>");
		}
		if (td != 1){
			$("#options").append("<li class='option' id='o-4e'><span>What was ecobee like?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-3b', function(){ /*What was AGF all about?*/
 		agf = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>What was AGF all about?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>At <a href='https://www.agf.com/ca/en/index.jsp' target='_blank'>AGF</a>, I was a Junior Front End Web Developer, where I developed new tools and components to be used in multiple AGF sites throughout Canada and the US.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I was lucky to be a part of a major brand redesign! I also learned a lot about the complex workings of content management systems.</div></li>");
		if (td != 1){
			$("#options").append("<li class='option' id='o-4c'><span>How about TD?</span></li>");
		}
		if (veeva != 1){
			$("#options").append("<li class='option' id='o-4d'><span>What did you do at Veeva?</span></li>");
		}
		if (td != 1){
			$("#options").append("<li class='option' id='o-3d'><span>What was ecobee like?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-4a', function(){ /*How about AGF?*/
 		agf = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How about AGF?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>At <a href='https://www.agf.com/ca/en/index.jsp' target='_blank'>AGF</a>, I was a Junior Front End Web Developer, where I developed new tools and components to be used in multiple AGF sites throughout Canada and the US.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I was lucky to be a part of a major brand redesign! I also learned a lot about the complex workings of content management systems.</div></li>");
		if (td != 1){
			$("#options").append("<li class='option' id='o-4c'><span>How about TD?</span></li>");
		}
		if (veeva != 1){
			$("#options").append("<li class='option' id='o-4d'><span>What did you do at Veeva?</span></li>");
		}
		if (td != 1){
			$("#options").append("<li class='option' id='o-4e'><span>What was ecobee like?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-4e', function(){ /*What was ecobee like?*/
 		ecobee = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>What was ecobee like?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I was a Product Manager at <a href='https://www.ecobee.com/' target='_blank'>ecobee</a>, where I iterated on the design of a new ecobee hardware product through rapid 3D print prototyping, user testing and employee field trials.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>My favourite project of the term was designing a Product Analytics Dashboard to be used internally for data-driven product decisions. I was given the opportunity to completely own the project: outlining user stories, success benchmarks and a plan for implementation.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>I also organized and executed several customer field trials for unreleased products, ensuring reliable FUSS and Net Promotor Scores of >65%.</div></li>");
		if (agf != 1){
			$("#options").append("<li class='option' id='o-4a'><span>How about AGF?</span></li>");
		}
		if (td != 1){
			$("#options").append("<li class='option' id='o-4c'><span>How about TD?</span></li>");
		}
		if (veeva != 1){
			$("#options").append("<li class='option' id='o-4d'><span>What did you do at Veeva?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});


 	$(document).on('click', '#o-3d', function(){ /*What was ecobee like?*/
 		ecobee = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>What was ecobee like?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I was a Product Manager at <a href='https://www.ecobee.com/' target='_blank'>ecobee</a>, where I iterated on the design of a new ecobee hardware product through rapid 3D print prototyping, user testing and employee field trials.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>My favourite project of the term was designing a Product Analytics Dashboard to be used internally for data-driven product decisions. I was given the opportunity to completely own the project: outlining user stories, success benchmarks and a plan for implementation .</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>I also organized and executed several customer field trials for unreleased products, ensuring reliable FUSS and Net Promotor Scores of >65%.</div></li>");
		if (agf != 1){
			$("#options").append("<li class='option' id='o-4a'><span>How about AGF?</span></li>");
		}
		if (td != 1){
			$("#options").append("<li class='option' id='o-4c'><span>How about TD?</span></li>");
		}
		if (veeva != 1){
			$("#options").append("<li class='option' id='o-4d'><span>What did you do at Veeva?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-4b', function(){ /*Tell me about your courses.*/
  		study = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How's studying going?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Having completed 4 school terms, I've got some favourite courses already:</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>Digital Systems (combinational logic and microcomputer interfacing),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>Graphics (3D CAD and technical drawings),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-4 container'>...Human Factors in Design (human-machine interfaces and ergonomic design).</div></li>");
		if (coop != 1){
			$("#options").append("<li class='option' id='o-2a'><span>Tell me about co-op.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2c'><span>But...what is Systems?</span></li>");
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-4c', function(){ /*How about TD?*/
 		td = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How about TD?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I was a UX designer at <a href='https://www.communitech.ca/how-we-help/innovation/corporate-innovation/td-bank-group/' target='_blank'>TD Labs</a>, where my team designed a new app to teach kids about financial literacy.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I like to think of it as an <em>engineering</em> degree with a focus on optimizing the <em>design</em> process and how complex parts can work together in a <em>system</em>.</div></li>");
		if (agf != 1){
			$("#options").append("<li class='option' id='o-4a'><span>How about AGF?</span></li>");
		}
		if (veeva != 1){
			$("#options").append("<li class='option' id='o-4d'><span>What did you do at Veeva?</span></li>");
		}
		if (ecobee != 1){
			$("#options").append("<li class='option' id='o-4e'><span>What was ecobee like?</span></li>");
		}
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-5a', function(){ /*Let's chat*/
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Let's chat!</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Cool! I'd love to hear from you or meet up for a coffee sometime! <a href='https://www.linkedin.com/in/rachelyncollins/'>Linkedin</a> is probably the best place to reach me.</div></li>");
		/*ADD INPUT FOR CONTACT INFO HERE*/
 	});

 	$(document).on('click', '#o-5b', function(){ /*Thanks, bye!*/
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Thanks, bye!</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Go ahead, keep scrolling...</div></li>");
 	});



/*rainbow background effect*/
    $(".header").hover(function () {
        $("body").addClass("rainbow");
    });
    $(".header").mouseleave(function () {
        $("body").removeClass("rainbow");
    });



/*project tilt on hover*/
$(".project-thumbnail").hover(
  function () {
    $(this).addClass('tilt-main');
    $(this).find(".project-title").addClass('tilt-title');
  },
  function () {
    $(this).removeClass('tilt-main');
    $(this).find(".project-title").removeClass('tilt-title');
  },
);








$("#name").click(
  function () {
    $(".tree-left").toggleClass('hide-trees');
    $(".tree-right").toggleClass('hide-trees');
  },
);








});

function removeOptions(){
	$("#o-1a, #o-1b, #o-2a, #o-2b, #o-2c, #o-3a, #o-3b, #o-3c, #o-3d, #o-4a, #o-4b, #o-4c, #o-4d, #o-4e, #o-5a, #o-5b").remove();
}

function closeProjects(){
	$("#project-details-1, #project-details-2, #project-details-3, #project-details-4").removeClass("show-project");
}

/* Add gif to end of message convo? (like messenger stickers) */