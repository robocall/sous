<link rel="icon" type="image/png" href="http://www.coveillance.org/eyes.png">
<title>surveillance walking tour</title>

<!-- <link rel="stylesheet" href="https://acdlite.github.io/jquery.sidenotes/css/main.css"> -->

<!-- https://tscanlin.github.io/tocbot/ -->
<!-- <link rel="stylesheet" href="https://tscanlin.github.io/tocbot/static/css/styles.css" class="next-head"> -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.4.2/tocbot.css">

<link rel="stylesheet" href="styles/toolkit-styles.css" class="next-head">

<div class="mw7 center dark-gray lh-copy all-content">

<nav class="toc toc-right js-toc relative z-1 transition--300 absolute pa4 is-position-fixed">
</nav>

<div class="content js-toc-content pa4">

# Surveillance infrastructure walking tour

**Note: this material is a work in progress.**

## Introduction

As we walk around downtown Seattle, we'll refer to this [field guide](https://www.figma.com/file/C15vnW0gtZybtY24eXREfy/Field-Guide-Prototype?node-id=0%3A1). Map and photos coming soon.

## Amazon Go

Visit Amazon Go, [a surveillance-powered convenience store](https://techcrunch.com/2018/01/21/inside-amazons-surveillance-powered-no-checkout-convenience-store/) at 2131 7th Ave, as well as the Seattle Spheres.

### Overview

Amazon Go is a convenience store without cashiers. Instead, cameras track your every move inside the store to determine what objects you’ve taken from the shelf, as well as your browsing habits, such as how long you hesitated before taking an item or whether you put an item back.

Is it a big deal if Amazon knows that you like bagels over waffles? Well, maybe not in and of itself. But be aware of a few things. First, Amazon is probably combining your data from the physical Amazon Go store with data about your online purchases. Say you’ve bought an item that reveals your political or religious beliefs---Hillary Clinton’s book, a Hanukkah decoration---and you also get a coffee every day at 8am. Now Amazon knows about your beliefs and where to reliably find you. What happens if those beliefs become persecuted? [e.g., raids on Muslim-Americans].

Second, once Amazon has your data, you’ve implicitly consented to whatever they want to do with that data. One way data is often used is to draw conclusions for advertisements. Ads have the power to shape individual beliefs and behavior---think about how teenage girls are affected by ads depicting impossible beauty standards. Targeted ads, which show ads based on your purchases and behavior, has an echo chamber effect, where the things you see reinforce your beliefs, which reinforces what Amazon shows you.

We don’t necessarily know how else data is being used, because there is little legal oversight. Can Amazon sell this data to the government? Can Amazon track your location, based on what stores you go to? What if Amazon is accidentally storing your data insecurely, and an employee can access it? Can Amazon use the photo of your face to generate other face photos? All of these situations have happened in the past.

Amazon Go is a tradeoff between convenience and surveillance. Day-to-day, surveillance is a mostly invisible price to pay, but it has the power to shape individual behavior as well as society. 

### Discussion

* Facilitator demonstrates buying an item
* How have advertisements affected you or shaped your beliefs?
* What are the societal effects of targeting ads based on [race, gender]?
* When you go into Amazon Go, what do you imagine you are consenting to? How does this differ from the reality? How could this be changed?
* If you were Amazon, what would you do with the data you collect? 
* Quote from article: "It’s a bit overkill, I think, to replace a checker or self-checkout stand with a hundred cameras that unblinkingly record every tiny movement. What’s to gain? 20 or 30 seconds of your time back?"
* Talk about Amazon's Rekognition system

### Further reading

* Facial recognition used at a [convenience store in Seattle](https://www.seattletimes.com/business/technology/when-convenience-meets-surveillance-ai-at-the-corner-store/) (another [story](https://www.kiro7.com/news/south-sound-news/tacoma-convenience-store-uses-facial-recognition-technology/950979811))
* How much is your data worth? ["No cash needed at this cafe. Students pay the tab with their personal data."](https://www.npr.org/sections/thesalt/2018/09/29/643386327/no-cash-needed-at-this-cafe-students-pay-the-tab-with-their-personal-data) 

## The Westin Building Exchange

Visit the [Westin Building Exchange](https://www.westinbldg.com/AboutUs), a carrier hotel in downtown Seattle that also houses a meet-me room and the Seattle Internet Exchange.

### Discussion

* What does it mean to see, hear, and feel the internet? 
* Is there a distinction between surveillance infrastructure and internet infrastructure? 
* Look at this guide to [spotting internet infrastructure](http://seeingnetworks.in/nyc/)
* Look at the [Seattle data center map](https://www.datacentermap.com/)
* Look at map of [wireless networks](https://wigle.net/) in Seattle (found via wardriving)

## AT&T peering site (NSA wiretap site)

Visit *1122 3rd Avenue*, a site for AT&T peering and one of the NSA's eight wiretap rooms in the FAIRVIEW surveillance program.

### Overview

This stop on the tour highlights surveillance at the federal level, how surveillance relies on cooperation between the private and public sectors, and the dragnet quality of digital surveillance.

AT&T handles a lot of data. According to _The Intercept_, "As of March 2018, some 197 petabytes of data – the equivalent of more than 49 trillion pages of text, or 60 billion average-sized mp3 files – traveled across [AT&T]'s networks every business day." Because AT&T's so big, it's called a Tier 1 provider, so other networks exchange their network capacity with AT&T (called "peering") or pay AT&T to transmit traffic on its network (called "transit"). The way that two networks peer is that their infrastructure physically meets in a building, often via an Ethernet switch in a carrier hotel or a "meet-me room," so data can be exchanged between the networks. That's what's happening in this building and in the Westin Exchange.

So, even if your Internet service provider isn't AT&T and you don't live in the US, if your provider peers with AT&T anywhere in the chain, your emails and Facebook messages might enter AT&T's network, onto US soil, into one of the AT&T peering hubs, where NSA equipment can siphon it off to Maryland to be stored, processed, collated against your profile and that of people you know. 

The NSA is able to spy on massive amounts of Internet traffic passing through the US because of its partnership with AT&T, even lauding AT&T's "extreme willingness to help." The NSA can read non-US citizens' communications with impunity. For example, the NSA has used its wiretap hub in NYC (called Titanpointe) to eavesdrop on the phone communications of the United Nations, the World Bank, and at least 38 countries, including allies like Germany, Japan, and France. However, there are regulations against reading US citizens' communications.

The eight NSA hubs, or AT&T peering rooms, for FAIRVIEW are in Seattle, San Francisco, New York, Chicago, Dallas, Los Angeles, Dallas, DC, and Atlanta. Is NSA equipment still in this building, intercepting communications that pass through Seattle and funneling it to Maryland for NSA analysts to look at? Yeah, probably. Incidentally, this location is very close to both the FBI Seattle office and the Pacific-1 intercontinental undersea cable.

### Discussion

* If you were in AT&T's role, or you worked at AT&T, what would you do if the NSA came knocking and asked you to install its wiretapping equipment? 
* In the apparatus of surveillance, should it make a difference whether someone is a US citizen?
* How does it feel to be physically close to a central portion of federal/international internet/surveillance infrastructure through which a massive amount of information is flowing?

### Further reading

* ["THE WIRETAP ROOMS: The NSA’s Hidden Spy Hubs in Eight U.S. Cities"](https://theintercept.com/2018/06/25/att-internet-nsa-spy-hubs/) (_The Intercept_) (See map of FAIRVIEW locations)
* ["TITANPOINTE: The NSA’s Spy Hub in New York, Hidden in Plain Sight](https://theintercept.com/2016/11/16/the-nsas-spy-hub-in-new-york-hidden-in-plain-sight/) (_The Intercept_)
* ["XKEYSCORE: NSA’s Google for the World’s Private Communications"](https://theintercept.com/2015/07/01/nsas-google-worlds-private-communications/) (_The Intercept_)
* [AT&T Helped U.S. Spy on Internet on a Vast Scale](https://www.nytimes.com/2015/08/16/us/politics/att-helped-nsa-spy-on-an-array-of-internet-traffic.html) (_NYT_)
* [AT&T Global IP Network Peering Policy](http://www.corp.att.com/peering/)
* [What is peering?](https://www.netnod.se/ix/what-is-peering)

## Small cell antenna

Along the way, we will have passed many burgundy antennas installed on utility poles. Those are small cell installations for 5G. 

### Discussion

* Discuss relationship between networks and surveillance, as well as private companies and public data
* see Seattle City Light construction standard for [pole top cellular antennas](http://www.seattle.gov/light/engstd/docs2/0095.20.pdf) and [identifying owners](http://www.seattle.gov/light/engstd/docs2/0093.12.pdf)
* see history of [small cells in Seattle](http://wsama.org/vertical/sites/%7B8ED61B30-6B44-4E1C-8894-9FFBA9264BFB%7D/uploads/18_Small_Cell_Tech.pdf) and [Seattle City Light](https://www.aglmediagroup.com/how-seattle-city-light-places-small-cells-on-wooden-electric-distribution-poles/)
* Fun fact: their color is mandated by Seattle City Light ("The antenna and conduits shall be painted Sherwin Williams Fairfax Brown SW2856"). 

## Acyclica installation

Visit the Acylica installations + Skywave antennas at 7th Ave & Lenora St and at 2901 Western Ave.

### Discussion

* [Map of Acyclica locations](https://www.seattle.gov/Documents/Departments/Tech/Privacy/SDOT%20Acyclica%20SIR%20DRAFT%20-%20for%20Working%20Group.pdf) (page 8)
  * [this is basically how they work](https://arstechnica.com/information-technology/2013/08/no-this-isnt-a-scene-from-minority-report-this-trash-can-is-stalking-you/)
  * Look for [Skywave antennas](https://crosscut.com/2015/09/seattles-new-technology-tracks-how-we-drive)
* Take a wifi data safari in Seattle: see Branger Briz's [introduction](https://brangerbriz.com/blog/exploring-our-surrounding-wifi-landscape), [technical writeup](https://brangerbriz.com/blog/notes-from-our-wifi-data-safari), and [code](https://github.com/brangerbriz/wifi-data-safari)
  * More on [wifi security vulnerabilities](https://reallifemag.com/silent-shout/), [disrupting them with noise](https://davidrueter.com/projects/2014-09-shenanigans.html)
  * [Analyze network traffic with Wireshark](http://www.soc.napier.ac.uk/~40001507/CSN11102/Lab5.pdf) or see what devices are connected with a network with the Network Analyzer app (note: do not do this if portscans are illegal where you live), [another tutorial](https://www.vice.com/en_us/article/jpgmxp/how-to-go-from-0-to-sniffing-packets-in-10-minutes), more on [probe+beacon requests](https://blog.samcater.com/capturing-beacons-and-probe-requests-of-public-wifi-access-points-the-why-how-and-stats/)

## Traffic camera

Visit the traffic camera at 2nd Ave and Blanchard St.
  
### Discussion

* [Look at the Seattle live traffic camera map](https://web6.seattle.gov/travelers/)
* See yourself on camera and take a surveillance selfie

## Automated license plate reader

Visit an automated license plate reader (ALPR). Location TBD. There are 99 static LPRs installed throughout the city. They are [PIPS P372 cameras](http://www.pipstechnology.com/fixedalpr/).

### Overview

Automatic License Plate Readers (ALPR), unsurprisingly, capture the license plates of cars that drive by. License plates are important because they uniquely identify a person---the government can look up who a license plate belongs to at a DMV. They are posted in street corners around Seattle. There is no public map, since the city doesn’t want to lose money from people evading speeding tickets.

Well, if you’re not speeding, so what? First, ALPRs take pictures of your license plate even when there are no traffic violations. According to the city of Seattle, this is to keep track of traffic congestion. Second, with ALPRs located in many places around the city, the government could conceivably track your location, or the location history of any given person. Where you go can reveal a lot about you and can be used against you---for example, the NYPD collected license plates of people parked at mosques, in an "unapologetic approach to protecting the city from terrorism." Third, who gets access to this data, and how is it stored? Although Dept. of Transportation employees receive "training" to use the system, what prevents a malicious user from tracking their ex-partner, and is there any oversight? Currently, there is no legal requirement to audit or delete this data. 

### Discussion

* What legal requirements, if any, should there be around use and retention of this data?
  * View Insecam where [license plates can be seen](https://www.insecam.org/en/view/793365/). 
* What analog solutions exist to measure congestion on roads and give out speeding tickets, that don’t involve privacy violations?
  * For example, weight plates or magnetic coils on roads.
* Say we banned ALPRs and have worse traffic/congestion. What do you think of the tradeoff?
* How do license plate readers compare to cameras that take pictures of faces in terms of privacy?
* What motivates governments to surveill; in this case, to install ALPRs?
  * Possible talking point: economic incentives at odds with citizens’ best interests
* Note: they can be both mounted on police cars (mobile) and on public infrastructure (static)
* Discuss the relationship between convenience and surveillance again, and less-invasive alternative technologies for achieving the same goals
* Discuss the dragnet nature of surveillance (e.g. license plate numbers used to track members of Muslim and immigrant communities) and insecurity (e.g. cameras accessible online)

### Further reading

* Resources: [Seattle oversight](https://www.seattletimes.com/business/technology/seattles-oversight-of-surveillance-technology-is-moving-forward-slowly/), [SSO doc](http://www.seattle.gov/Documents/Departments/Tech/Privacy/License%20Plate%20Readers_Final%20SIR.pdf), [EFF doc](https://www.eff.org/pages/automated-license-plate-readers-alpr), [use by ICE](https://www.aclunc.org/blog/documents-reveal-ice-using-driver-location-data-local-police-deportations), [vulnerable ALPR systems](https://techcrunch.com/2019/01/22/police-alpr-license-plate-readers-accessible-internet/)
* Activity: do a [Shodan search](https://techcrunch.com/2019/01/21/shodan-safari/)

## Surveillance cameras

As we walk around downtown, we'll see many surveillance cameras—and they'll see us.

### Overview

When you talk to a person, you get a sense of how that person sees you. What they think of you, 

Do you ever wonder how a camera sees you?

> Prototypical whiteness is the cultural logic that informs much of biometric information technology. It sees whiteness, or lightness, as privileged in enrollment, measurement, and recognition processes, and, as I argued in that chapter, prototypical whiteness is reliant upon dark matter for its own meaning. Dark matter being those bodies and body parts that trouble some biometric technology, like dark irises or cameras that "can’t see black people" or that ask some Asian users, "Did someone blink?" When particular surveillance technologies, in their development and design, leave out some subjects and communities for optimum usage, this leaves open the possibility of reproducing existing inequalities. (Browne 163)

Why use cameras? control.
History of seeing, sight and light

> "I use the term 'black luminosity' to refer to a form of boundary maintenance occurring at the site of the black body, whether by candlelight, flaming torch, or the camera flashbulb that documents the ritualized terror of a lynch mob. (...)
> 
> Perhaps, however, [black luminosity] is a **light that shines more brightly on some than on others.** Here boundary maintenance is intricately tied to knowing the black body, subjecting some to a high visibility (...) by way of technologies of seeing that sought to render the subject outside of the category of the human, _un_-visible." (Browne 68)

And also what cameras can see

Openings for conversation: personal experience and in Seattle

Seattle-specific: SkyWatch tower; convenience store; Ring network

> Stanley Shikuma, a board member of the Japanese American Citizens League’s Seattle chapter, says the tower at Safeway sends a clear message: “You are being watched. We have you in our sights. And like [at] the camps, the intent is to intimidate rather than protect.”
> 
> The Silver Fork was a place to get hot links, grits, a middling cup of coffee and the company, mostly Black, of your neighbors and community leaders. It made the space feel activated, vibrant and safe, the kind of place you wouldn’t mess with because it was familial.
> 
> But Safeway replaced the restaurant with a gas station and convenience kiosk. 

Surveillance and control substitutes for _community fabric_. Resist the mentality of "this or nothing" but imagine a different future

Just walking around, we've been spotted by many surveillance cameras watching us. What if every surveillance camera we saw was replaced by a _person_ staring at us? There might be five people looking at us and taking notes right now. How would that change the way you felt about public space? _(opening for conversation)_

Street-level video surveillance systems differ in several important ways from a single person or a crowd watching you. Let's talk about several things that are different.

_Why is a surveillance camera not an eye?_ 

_(opening for conversation; several answers included below)_

* The camera has a memory. It can record video or other data and add it to a store of records over all time. That data can be analyzed for patterns and shared with other entities, both private (your neighbors) and public (the local police).
* The camera can be controlled remotely: it can swivel, zoom, or change height.
* It might be connected to a network (via Internet or radio frequency), which lets it send video to anywhere, receive instructions from anywhere, and lets other people, who might be anywhere, watch the video stream.
* The camera can see things an eye can't, such as temperature and infrared frequencies.
* There might be many cameras connected to the same network in a city or building, sharing information (e.g. tracking the same person).
* The camera can have different ways of seeing encoded in it, including kinds of gazes that enforce social agreements about what kinds of behavior and people are considered "normal"--and these gazes can be propagated all at once to the whole network of enforcement that the camera hooks into.
* There are many more cameras in public space than one might expect: 500,000 in London, 30,000 in Chicago, 9,000 in New York, 46,000 in Beijing (and growing very fast in China to 600 million+ by 2020).

Now that we've broken down why a camera is not an eye, do you all think is a better way to understand a street-level video surveillance system? _(opening for conversation)_

So far, we've been watched, but to understand surveillance, we also need to play the part of the watcher. Let's try and get a sense of that. Who's watching? What's it like on the other side? Has anyone here worked as a security guard? Can you tell us about your experience? What can a camera see, and what did *you* see? The people who are watching can see a lot.

> "The biggest thing I’ve come across over the years working security is how much people think they can get away with things, or operate under the assumption that there aren’t cameras in an area, or the cameras aren’t recording. Which, to be fair, that’s sometimes the case. But 99 percent of the time, if they’ve done something stupid, it’s probably on camera. A control center operator has probably seen it or has been asked to look into it and found it."

You're the voyeur
Real-time crime centers
Insecam

> Churches, restaurants, farms, streets, bars, private gardens, beaches, barber shops—they’re all there, streaming 24 hours a day within neatly organized categories such as "farm" and "traffic" and "interesting." Because the owners of these security cameras probably don't know this footage is being streamed online, you're basically an invisible observer. If that sounds creepy and unethical, welcome to 2018—someone is probably watching you reading this.
> 
> After watching 24-hour surveillance footage from around the world almost constantly for one week, my main takeaway is this: nothing is happening, most of the time. I'm serious. We think of the world as this screaming, disastrous thing—a nonstop miasma of events and movement. Whereas, actually, when our backs are turned, when we are asleep or elsewhere, what sits behind and around us are endless empty spaces and motionless objects.

Threat to privacy, anonymity, freedom of movement.
Chilling effect
Abused by institutions and individuals
Do they work? Expensive, and not really.
A sense of security
The bottom line: a lack of proportion between benefits and risks.
Fight back: Activist attempts at mapping or requesting maps

<!-- TODO: more social history discussion; also legal status -->

### Activities

_Spy v. Spy_: Using the [field guide to spotting surveillance cameras](http://www.coveillance.org/camera-spotting), we'll split up into pairs. Each pair will compete to try to find, photograph, and map the most surveillance cameras in downtown. (Of course, be aware of your surroundings, be safe, be prepared for questions, and only photograph cameras in outdoor public space. Yes, what we're doing is legal.)

Discussion

* Did it feel subversive? Why?
* Citizen accountability

_You're the voyeur_: Look at [unsecured security cameras](https://www.insecam.org/en/bycity/Seattle/) in Seattle on Insecam. Do any places look familiar? How does it feel to perform watching?

Discussion

* TODO

### Discussion

* Assumption: public space is data that's ripe for the capture
* Question the need to have cameras at all (the ways of thinking that prop it up)
* Community experiences of surveillance (more Skywave-type stories)
* What if each camera were replaced by a _person_? How would that change how you feel?
* Are you okay with being surveilled by cameras in public space?
* The relationship between architecture and watching (the panopticon is canceled)
* Your cameras (citizen cameras)
* exercises

### Further reading

Seattle-specific

* [$150K to remove Seattle’s unused public surveillance cameras](https://mynorthwest.com/887570/150k-remove-seattle-surveillance-cameras/?)
* Read about a [Skywatch unit deployed at Safeway in Rainier Valley](https://crosscut.com/2019/04/police-tower-casts-shadow-over-south-seattle-safeway)
* Facial recognition used at a [convenience store in Seattle](https://www.seattletimes.com/business/technology/when-convenience-meets-surveillance-ai-at-the-corner-store/) (another [story](https://www.kiro7.com/news/south-sound-news/tacoma-convenience-store-uses-facial-recognition-technology/950979811))

Overviews

* [Street-level surveillance overview](https://www.eff.org/pages/surveillance-cameras) (EFF)
* [Video surveillance system overview](https://theyarewatching.org/technology/video-surveillance-systems) (ACLU)
* [What's wrong with public video surveillance?](https://www.aclu.org/other/whats-wrong-public-video-surveillance) (ACLU)

Other references

* [Breakdown of surveillance cameras in NYC](http://seeingnetworks.in/nyc/#cameras)
* [Interview with an anonymous security camera operator](https://logicmag.io/bodies/interview-with-an-anonymous-security-operator/) (Logic)
* [Feeling safe in the surveillance state](https://www.nytimes.com/2019/04/10/opinion/china-internet-surveillance.html) (NYT)
* [What I Learned After Watching 24-Hour Surveillance Footage for a Week](https://www.vice.com/en_us/article/neknmx/what-i-learned-by-watching-24-hour-surveillance-footage-for-a-week) (Vice)
* [Surveillance camera players](http://www.notbored.org/the-scp.html)
* [NYC Surveillance Camera Project](http://www.mediaeater.com/cameras/)
* ["Facial Recognition Tech Is Growing Stronger, Thanks to Your Face"](https://www.nytimes.com/2019/07/13/technology/databases-faces-facial-recognition-technology.html) (Brainwash cafe)
* [James Bridle's experience](http://shorttermmemoryloss.com/nor/2014/11/07/all-cameras-are-police-cameras/) photographing all surveillance cameras in London
* Amazon's [Ring doorbells](https://www.cnet.com/news/how-rings-neighbors-app-is-making-home-security-a-social-thing/) make home security a "social network"
* [Wi-Fi RF spectrum, baby monitors, wireless cameras, interference and noise](https://www.acrylicwifi.com/en/blog/wi-fi-rf-spectrum-baby-monitor-and-wireless-camera-interference-and-noise/)
* [What Is the Frequency of Wireless Spy Cameras?](https://itstillworks.com/frequency-wireless-spy-cameras-6515002.html)
* Number of surveillance cameras in [London](https://en.wikipedia.org/wiki/Mass_surveillance_in_the_United_Kingdom#Number_of_cameras), [Chicago](https://www.nytimes.com/2018/05/26/us/chicago-police-surveillance.html), [NYC](https://www.cityandstateny.com/articles/policy/technology/how-new-york-city-is-watching-you.html), [Beijing and China](https://www.theatlantic.com/international/archive/2018/02/china-surveillance/552203/)

## Other infrastructure

* [Gunshot detectors](https://theyarewatching.org/technology/gunshot-detector), not in [Seattle](https://www.thestranger.com/slog/2016/06/02/24158530/mayor-council-and-police-try-again-with-shotspotter-gunshot-detection-system) but in Chicago, New York, and Oakland (CA)
* [Seattle Stingray tracking](https://www.wired.com/2017/06/researchers-use-rideshares-sniff-stingray-locations/)
* GPS satellites

## Discussion

Themes

* Layers of surveillance (private, local, state, public, federal)
* How civil liberties are affected
* How data is fused, correlated, and collated

</div>

</div>

<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.4.2/tocbot.min.js"></script>
<script src="lib/jquery.sidenotes.js"></script>

<script>
 $(() => {
     console.log("ready");

     tocbot.init({
	 // Where to render the table of contents.
	 tocSelector: '.js-toc',
	 // Where to grab the headings to build the table of contents.
	 contentSelector: '.js-toc-content',
	 // Which headings to grab inside of the contentSelector element.
	 headingSelector: 'h1, h2, h3',
	 // For headings inside relative or absolute positioned containers within content.
	 hasInnerContainers: true,
     });

     $(".footnotes").appendTo(".all-content");

     /*      $('.all-content').sidenotes();*/
 });
</script>
