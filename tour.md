# Surveillance infrastructure walking tour

## Itinerary

* [Opening conversation](#opening-conversation)
* [Amazon Go](#amazon-go)
* [The Westin Building Exchange](#the-westin-building-exchange)
* [AT&T peering site (NSA wiretap site)](#att-peering-site-nsa-wiretap-site)
* [Small cell antenna](#small-cell-antenna)
* [Acyclica installation](#acyclica-installation)
* [Traffic camera](#traffic-camera)
* [Automated license plate reader](#automated-license-plate-reader)
* [Surveillance camera safari](#surveillance-camera-safari)
* [Other infrastructure](#other-infrastructure)
* [Closing conversation](#closing-conversation)

As we walk around downtown Seattle, we'll refer to this [field guide](https://www.figma.com/file/C15vnW0gtZybtY24eXREfy/Field-Guide-Prototype?node-id=0%3A1). Map and photos coming soon.

## Opening conversation

* How has surveillance affected you?
* What messages about surveillance are you hearing from the media and your friends?
* How do you think you're being watched, if at all?
* How would you want your data to be used, if at all?
* How do you want things to change?

### Themes

* Layers of surveillance (private, local, state, public, federal)
* How civil liberties are affected
* How data is fused, correlated, and collated

## Amazon Go

Visit Amazon Go, [a surveillance-powered convenience store](https://techcrunch.com/2018/01/21/inside-amazons-surveillance-powered-no-checkout-convenience-store/) at 2131 7th Ave, as well as the Seattle Spheres.

### Discussion

* Try buying an item (need to install Amazon Go app first)
* Talk about relationship between convenience and surveillance
* Quote from article: "It’s a bit overkill, I think, to replace a checker or self-checkout stand with a hundred cameras that unblinkingly record every tiny movement. What’s to gain? 20 or 30 seconds of your time back?"
* Talk about Amazon's Rekognition system
* Talk about this store: Facial recognition used at a [convenience store in Seattle](https://www.seattletimes.com/business/technology/when-convenience-meets-surveillance-ai-at-the-corner-store/) (another [story](https://www.kiro7.com/news/south-sound-news/tacoma-convenience-store-uses-facial-recognition-technology/950979811))

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

Visit an automated license plate reader (ALPR). Location TBD.

### Discussion

* There are 99 static LPRs installed throughout the city. They are [PIPS P372 cameras](http://www.pipstechnology.com/fixedalpr/).
* Note: they can be both mounted on police cars (mobile) and on public infrastructure (static)
* Discuss the relationship between convenience and surveillance again, and less-invasive alternative technologies for achieving the same goals
* Discuss the dragnet nature of surveillance (e.g. license plate numbers used to track members of Muslim and immigrant communities) and insecurity (e.g. cameras accessible online)
* Resources: [Seattle oversight](https://www.seattletimes.com/business/technology/seattles-oversight-of-surveillance-technology-is-moving-forward-slowly/), [SSO doc](http://www.seattle.gov/Documents/Departments/Tech/Privacy/License%20Plate%20Readers_Final%20SIR.pdf), [EFF doc](https://www.eff.org/pages/automated-license-plate-readers-alpr), [use by ICE](https://www.aclunc.org/blog/documents-reveal-ice-using-driver-location-data-local-police-deportations), [vulnerable ALPR systems](https://techcrunch.com/2019/01/22/police-alpr-license-plate-readers-accessible-internet/)
* Activity: do a [Shodan search](https://techcrunch.com/2019/01/21/shodan-safari/)

## Surveillance camera safari

Activity: we'll pick one block in downtown and try to find, photograph, and map all surveillance cameras on that block.

### Discussion

* Who placed those cameras there, how, and why?
* Discuss the relationship between architecture and watching (the panopticon)
* Use the [field guide to spotting surveillance cameras](field-guide.md)
* Look at live [CCTV IP camera feeds](https://www.insecam.org/en/bycity/Seattle/) in Seattle
* Read [James Bridle's experience](http://shorttermmemoryloss.com/nor/2014/11/07/all-cameras-are-police-cameras/) photographing all surveillance cameras in London
* Be aware of coveillance via Amazon's [Ring doorbells](https://www.cnet.com/news/how-rings-neighbors-app-is-making-home-security-a-social-thing/)
* Read about a [Skywatch unit deployed at Safeway in Rainier Valley](https://crosscut.com/2019/04/police-tower-casts-shadow-over-south-seattle-safeway)

## Other infrastructure

* [Gunshot detectors](https://theyarewatching.org/technology/gunshot-detector), not in [Seattle](https://www.thestranger.com/slog/2016/06/02/24158530/mayor-council-and-police-try-again-with-shotspotter-gunshot-detection-system) but in Chicago, New York, and Oakland (CA)
* [Seattle Stingray tracking](https://www.wired.com/2017/06/researchers-use-rideshares-sniff-stingray-locations/)

## Closing conversation

* Discuss surveillance capitalism (the relationship between knowing and predicting and how corporations profit from influencing people's behavior)
* Discuss opportunities to provide public comment on the [Seattle Surveillance Ordinance](http://www.seattle.gov/tech/initiatives/privacy/surveillance-technologies/about-surveillance-ordinance) and take action with the ACLU WA
* Discuss other SSO technologies or common surveillance technologies from ACLU's  [They Are Watching](https://theyarewatching.org).
* How would you want your data to be used, if at all?
* How do you want things to change?
