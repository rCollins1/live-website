$(document).ready(function(){

	var study, coop = 0;
	var td, agf = 0;

		$("#messages").append("<li class='message-li'><div class='bot-message container'>Hi! I'm Rachelyn :)</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I'm a second-year student studying Systems Design Engineering at the University of Waterloo.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>I alternate between study and co-op / work terms.</div></li>");
		$("#options").append("<li class='option' id='o-1a'><span>How's studying going?</span></li>");
		$("#options").append("<li class='option' id='o-1b'><span>How's co-op going?</span></li>");

	$(document).on('click', '#o-1a', function(){ /*How's studying going?*/
		study = 1;
		removeOptions();
		$("#messages").append("<li class='message-li right-msg'><div class='user-message container'>How's studying going?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Having completed 2 school terms, I've got some favourite courses already:</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>Digital Systems (combinational logic and microcomputer interfacing),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>Graphics (3D CAD and technical drawings),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-4 container'>...and of course, Human Factors in Design (human-machine environments, ergonomic design and information processing).</div></li>");
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
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I love it! I've had two (vastly different) work terms so far.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>For my first work term I was with TD Labs in Waterloo, and for my second term I was with AGF Management in downtown Toronto.</div></li>");
		$("#options").append("<li class='option' id='o-3a'><span>How was TD Bank?</span></li>");
		$("#options").append("<li class='option' id='o-3b'><span>What was AGF all about?</span></li>");
 	});

 	$(document).on('click', '#o-2a', function(){ /*Tell me about co-op.*/
 		coop = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Tell me about co-op.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I love it! I've had two (vastly different) work terms so far.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>For my first work term I was with TD Labs in Waterloo, and for my second term I was with AGF Management in downtown Toronto.</div></li>");
		if (td != 1){
			$("#options").append("<li class='option' id='o-3a'><span>How was TD Bank?</span></li>");
		}
		if (agf !=1){
			$("#options").append("<li class='option' id='o-3b'><span>What was AGF all about?</span></li>");
		}
	}); 

 	$(document).on('click', '#o-2b', function(){ /*Outside of school and work?*/
 		coop = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Outside of school and work?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>I'm a competitive dancer and hockey player!</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I love psychology (thank goodness for electives!) which lends itself well to design thinking.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>I'm also constantly reading, and Harry Potter will always have a place in my heart.</div></li>");
		$("#options").append("<li class='option' id='o-5a'><span>Let's chat</span></li>");
		$("#options").append("<li class='option' id='o-5b'><span>Brb</span></li>");
 	});

  	$(document).on('click', '#o-2c', function(){ /*But...what is Systems?*/
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>But...what is Systems?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>It seems like noone has a great definition...</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>I like to think of it as an <em>engineering</em> degree with a focus on optimizing the <em>design</em> process and how complex parts can work together in a <em>system</em>.</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>If you're still curious, here's <a href='https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering' target='_blank'>UW's best attempt</a> at explaining it.</div></li>");
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
		if (study != 1){
			$("#options").append("<li class='option' id='o-4b'><span>Tell me about your courses.</span></li>");
		}
		$("#options").append("<li class='option' id='o-2b'><span>Outside of school and work?</span></li>");
 	});

 	$(document).on('click', '#o-4b', function(){ /*Tell me about your courses.*/
  		study = 1;
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>How's studying going?</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Having completed 2 school terms, I've got some favourite courses already:</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-2 container'>Digital Systems (combinational logic and microcomputer interfacing),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-3 container'>Graphics (3D CAD and technical drawings),</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message-4 container'>...and of course, Human Factors in Design (human-machine environments, ergonomic design and information processing).</div></li>");
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

 	$(document).on('click', '#o-5b', function(){ /*Brb*/
 		removeOptions();
		$("#messages").append("<li class='message-li'><div class='user-message container'>Brb</div></li>");
		$("#messages").append("<li class='message-li'><div class='bot-message container'>Okay :) In that case, keep scrolling...</div></li>");
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





});

function removeOptions(){
	$("#o-1a, #o-1b, #o-2a, #o-2b, #o-2c, #o-3a, #o-3b, #o-4a, #o-4b, #o-4c, #o-5a, #o-5b").remove();
}

function closeProjects(){
	$("#project-details-1, #project-details-2, #project-details-3, #project-details-4").removeClass("show-project");
}

/* Add gif to end of message convo? (like messenger stickers) */