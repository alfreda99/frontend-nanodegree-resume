/********************************
*  bio object
********************************/
var bio = 
{
	"name" : "Alfreda Downie",
	"role" : "Application Architect",		
	"bioPic" : "images/profile.jpg",
	"welcomeMessage" : "I assist businesses gain a competitive advantage by using internet technologies to grow their businesses. Effectively implemented solutions that automated business processes and integrated heterogeneous environments.",
	"skills" : ["One with the Force",  "Artistic", "Can add numbers", "I program computers"],

	"contacts" : 
	{
		"email" : "alfreda@gmail.com",
		"mobile" : "815-515-9636",
		"homePhone" : "875-383-9576",
		"location" : "New York, NY"
	}
};

// Display bio structure and data
bio.display = function() {
	formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedbioPic);

	formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}		
	}

	$("#header").append(internationalizeButton);
};


/********************************
*  work object
********************************/
var work = 
{
	"jobs" : [
		{
			"employer" : "AT&T",
			"title" : "Application Architect",
			"datesWorked" : "July 2004 -",
			"location" : "Atlanta, GA",
			"description" : "Current responsibilities include analyzing and creating technical solutions to meet the needs of the business as well as analyzing and approving application and solution design creating by various developers. Also, assisted with implementing a common middleware platform that is implemented enterprise-wide at ATT"
		},
		{
			"employer" : "Cingular Wireless",
			"title" : "Computer Programmer",
			"datesWorked" : "June 2002 - July 2004",
			"location" : "Los Angeles, CA",
			"description" : "Responsibilites include developing Web-Service APIs using UML, XML, Java and graphical process modeling technologies to implement business logic."
		},
		{
			"employer" : "Apple",
			"title" : "Application Developer",
			"datesWorked" : "February 2000 - May 2002",
			"location" : "Las Vegas, NV",
			"description" : "Re-engineered an application that provided a common framework used by all of BellSouth.Net's development. Application was implemented using EJB's and iPlanet Application server. Responsibilities included the prototyping of OrbixWeb to iPlanet communication, design of database access tiers, the design and development of EJBs and the configuration/administration of iPlanet. Team consisted of 20 with 11 developers using NT."
		},
		{
			"employer" : "Sun Microsystems",
			"title" : "Application Developer",
			"datesWorked" : "July 1999 - January 2000",
			"location" : "Miami, FL",
			"description" : "Implemented an OFX (Open Financial Exchange) compliant server application to provide users access to various banking services. Responsible for programming logic in Java to validate and process request and then update an Oracle database using JDBC. This application was developed with a team of 5 on Solaris platform."
		},
		{
			"employer" : "IBM Global Services",
			"title" : "Computer Consultant",
			"datesWorked" : "January 1997 - July 1999",
			"location" : "Houston, TX",
			"description" : "Assisted in the design and development of a 3-tier Web Application that allowed users to maintain core customer and business partner data. As one of 7 members on this team, my responsibilities included the configuration of Websphere and Apache, and the development of a Java servlet that processed HTTP request and updated an LDAP directory server using JNDI. Also assisted in the design and development of the front end using JavaScript and DHTML. All application logic executed by Websphere and Apache on a Windows NT platform."
		}
	]
};
 
// Display work structure and data
work.display = function() {
	if (work !== null && work.jobs.length > 0) {
		for (jobCounter in work.jobs) {
			var job = work.jobs[jobCounter];

			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", job.datesWorked);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedDescription);
		}		
	};
};


/********************************
*  projects object
********************************/
var projects =
{
	"projects" : [

		{
			"title" : "Blue Sky Solutions",
			"datesWorked" : "November 2014",
			"description" : "Built responsive website for Blue Sky. Took a long walk in the partk.  The sun felt warm. There was a nice breeze that lightly dusted my skin.  The day was good.",
			"images" : ["images/dog2.jpg"]
		},
		{
			"title" : "Sunset Valley",
			"datesWorked" : "October 2013",
			"description" : "Redesigned webite to be follow MobileFirst paradigm.  Balloons are pretty mobile.  I like balloons.",
			"images" : ["images/apple.jpg", "images/balloons.jpg"]
		}
	]
};

// Display projects structure and data
projects.display = function() {
	if (projects !== null && projects.projects.length > 0) {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].datesWorked);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	};
};


/********************************
*  education object
********************************/
var education =
{
	"schools" : [
		{
			"name" : "Timbucktu Academy",
			"location" : "Seattle, WA",
			"datesAttended" : "August 1989 - June 1992",
			"majors" : ["Basket Weaving"],
			"degree" : "Bachelor of Science",
			"schoolUrl" : "http://www.harvard.edu"
		},
		{
			"name" : "University of Kalamazoo",
			"location" : "Clevland, OH",
			"datesAttended" : "August 1992 - December 1996",
			"majors" : ["Business Management", "Computer Science"],
			"degree" : "Masters",
			"schoolUrl" : "http://www.sc.edu"
		}
	],
	"onlineCources" : [
		{
			"school" : "Udacity",
			"title" : "Frontend Web Developer",
			"datesAttended" : "November 2014 - present",
			"url" : "http://www.udacity.com"
		},
		{
			"school" : "Phoenix",
			"title" : "Office Interior Design",
			"datesAttended" : "January 2011 - October 2013",
			"url" : "http://www.phoenix.edu"
		},

	]
};

// Display education structure and data
education.display = function() {
	if(education !== null && education.length > 0){
		for (schoolCount in education.schools) {
			var school = education.schools[schoolCount];

			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
			var formattedSchoolDegee = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegee;
			$(".education-entry:last").append(formattedSchoolNameDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.datesAttended);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formattedSchoolLocation);

			if (school.majors.length > 0) {
				for (major in school.majors) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}
		}


		if (education.onlineCources.length > 0) {
			$(".education-entry:last").append(HTMLonlineClasses);

			for (courseCount in education.onlineCources) {
				var course = education.onlineCources[courseCount]

				var formattedCoursetitle = HTMLonlineTitle.replace("%data%", course.title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
				var formattedTitleSchool = formattedCoursetitle + formattedOnlineSchool;
				$(".education-entry:last").append(formattedTitleSchool);

				var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.datesAttended);
				$(".education-entry:last").append(formattedOnlineDates);

				var formattedCourseURL = HTMLonlineURL.replace("%data%", course.url);
				$(".education-entry:last").append(formattedCourseURL);
			}
		}
	}
};


/********************************
*  mapLocations object
********************************/
var mapLocations = {};

// display map
mapLocations.display = function() {
	$("#mapDiv").append(googleMap);
};


/********************************
*  Helper functions
********************************/

// parse input name into an internationalized format
function inName(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

// hide sections with no content
function hideEmptySections(){
    if( $(".flex-item").length === 0) {
    	$("#topContacts").css("display","none");
    }

    if($("h1").length === 0) {
    	$("#header").css("display","none");
    }

    if($(".work-entry").length === 0) {
    	$("#workExperience").css("display","none");
    }

    if($(".project-entry").length === 0) {
    	$("#projects").css("display","none");
   }

    if($(".education-entry").length === 0) {
    	$("#education").css("display","none");
    }

    if($(".flex-item").length === 0) {
    	$("#letsConnect").css("display","none");
    }

    if($("#map") == null) {
    	$("#mapDiv").css("display","none");
    }
 }



/********************************
*
*  Begin execution
*
********************************/

bio.display();
work.display();
projects.display();
education.display();
mapLocations.display();
hideEmptySections();


