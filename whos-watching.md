# Who's watching you and how?

This page aims to provide a hands-on introduction to figuring out who's watching you, how they're doing it, and how they might be trying to influence or record your actions digitally.

## Surveillance infrastructure walking tour in downtown Seattle

Here's the itinerary.

Visit Amazon Go, [a surveillance-powered convenience store](https://techcrunch.com/2018/01/21/inside-amazons-surveillance-powered-no-checkout-convenience-store/) at 2131 7th Ave, as well as the Seattle Spheres.

Discussion
* Try buying an item (need to install Amazon Go app first)
* Talk about relationship between convenience and surveillance
* Talk about Amazon's Rekognition system
* Talk about this store: Facial recognition used at a [convenience store in Seattle](https://www.seattletimes.com/business/technology/when-convenience-meets-surveillance-ai-at-the-corner-store/) (another [story](https://www.kiro7.com/news/south-sound-news/tacoma-convenience-store-uses-facial-recognition-technology/950979811))

Visit the [Westin Carrier Hotel](https://www.westinbldg.com/AboutUs), an internet exchange in downtown Seattle.

Discussion
* TODO: Can we get a tour inside the building?
* Look at this guide to [spotting internet infrastructure](http://seeingnetworks.in/nyc/)
* Look at the [Seattle data center map](https://www.datacentermap.com/)
* Look at map of [wireless networks](https://wigle.net/) in Seattle (found via wardriving)

Visit the Acylica installations + Skywave antennas at 7th Ave & Lenora St and at 2901 Western Ave.

Discussion
* [Map of Acyclica locations](https://www.seattle.gov/Documents/Departments/Tech/Privacy/SDOT%20Acyclica%20SIR%20DRAFT%20-%20for%20Working%20Group.pdf) (page 8)
  * [this is basically how they work](https://arstechnica.com/information-technology/2013/08/no-this-isnt-a-scene-from-minority-report-this-trash-can-is-stalking-you/)
  * Look for [Skywave antennas](https://crosscut.com/2015/09/seattles-new-technology-tracks-how-we-drive)
* Take a wifi data safari in Seattle: see Branger Briz's [introduction](https://brangerbriz.com/blog/exploring-our-surrounding-wifi-landscape), [technical writeup](https://brangerbriz.com/blog/notes-from-our-wifi-data-safari), and [code](https://github.com/brangerbriz/wifi-data-safari)
  * More on [wifi security vulnerabilities](https://reallifemag.com/silent-shout/), [disrupting them with noise](https://davidrueter.com/projects/2014-09-shenanigans.html)
  * [Analyze network traffic with Wireshark](http://www.soc.napier.ac.uk/~40001507/CSN11102/Lab5.pdf) or see what devices are connected with a network with the Network Analyzer app (note: do not do this if portscans are illegal where you live), [another tutorial](https://www.vice.com/en_us/article/jpgmxp/how-to-go-from-0-to-sniffing-packets-in-10-minutes), more on [probe+beacon requests](https://blog.samcater.com/capturing-beacons-and-probe-requests-of-public-wifi-access-points-the-why-how-and-stats/)

Visit the traffic camera at 2nd Ave and Blanchard St.
  
Discussion
* [Look at the Seattle live traffic camera map](https://web6.seattle.gov/travelers/)
* See yourself on camera

Pick one block in downtown and try to find, photograph, and map all surveillance cameras on that block.

Discussion
* Look at live [CCTV IP camera feeds](https://www.insecam.org/en/bycity/Seattle/) in Seattle
* Read [James Bridle's experience](http://shorttermmemoryloss.com/nor/2014/11/07/all-cameras-are-police-cameras/) photographing all surveillance cameras in London
* Be aware of coveillance via Amazon's [Ring doorbells](https://www.cnet.com/news/how-rings-neighbors-app-is-making-home-security-a-social-thing/)
* Read about a [Skywatch unit deployed at Safeway in Rainier Valley](https://crosscut.com/2019/04/police-tower-casts-shadow-over-south-seattle-safeway)

Discuss other SSO technologies or common surveillance technologies from ACLU's  [They Are Watching](https://theyarewatching.org).
* [Gunshot detectors](https://theyarewatching.org/technology/gunshot-detector) not in [Seattle](https://www.thestranger.com/slog/2016/06/02/24158530/mayor-council-and-police-try-again-with-shotspotter-gunshot-detection-system) but in Chicago, New York, and Oakland (CA)
* [Seattle Stingray tracking](https://www.wired.com/2017/06/researchers-use-rideshares-sniff-stingray-locations/)
* TODO: what are those burgundy boxes/antennas installed on utility poles downtown? Are they wifi antennas?

## Online

Here are some things you can do to prevent platforms and individuals from watching you online, and to figure out who's been watching you:

* Go through the EFF [surveillance self-defense guide](https://ssd.eff.org/en)
* Go through the [Ghostery introduction to online trackers](https://www.ghostery.com/) (and if you want, install Ghostery or the EFF's [Privacy Badger](https://www.eff.org/privacybadger))
* To check how safe your browser is against online tracking, try the EFF's [Panopticlick](https://panopticlick.eff.org/)
* [Go through the Google privacy checkup](https://myaccount.google.com/data-and-personalization)
* [Go through the iPhone privacy checkup](https://www.fastcompany.com/90254589/use-these-9-critical-iphone-privacy-and-security-settings-right-now)
* [Who does Google think you are? Check your Ads Preferences](https://mashable.com/2012/01/25/google-cookies/)
* Check your app permissions on your phone because [apps might be storing your location data](https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html)
* [Alexa is listening: disable voice recording on Alexa](https://www.bloomberg.com/news/articles/2019-04-10/is-anyone-listening-to-you-on-alexa-a-global-team-reviews-audio)
* [Check if you're in a facial recognition dataset](https://www.nbcnews.com/tech/internet/facial-recognition-s-dirty-little-secret-millions-online-photos-scraped-n981921)
  * "If you’re an adult in America, there’s more than a 50 percent chance that you’re already in a law enforcement facial recognition database, according to researchers at Georgetown." (Source: NYT [Facial Recognition Machine](https://www.nytimes.com/interactive/2019/04/16/opinion/facial-recognition-new-york-city.html))
* Look at [satellite imagery](https://www.technologyreview.com/s/613748/satellites-threaten-privacy/)
* [Be aware of fingerprinting](https://www.nytimes.com/2019/07/03/technology/personaltech/fingerprinting-track-devices-what-to-do.html?action=click&module=Well&pgtype=Homepage&section=Technology) (used to uniquely identify users) and install blocking software, as well as delete unused apps
* [Request your telemetry data from Spotify](https://twitter.com/mikarv/status/1012386696934182912?lang=en) or other companies
* [Look at your browser cookies to see what information websites store about you](https://www.howtogeek.com/119458/htg-explains-whats-a-browser-cookie/): go to chrome://settings/siteData?search=cookies
  * [Learn about tracking cookies and block them](https://privacy.net/stop-cookies-tracking/)
* Explore search engines for Internet-connected devices, such as [Shodan](https://www.shodan.io/) and [Insecam](https://www.insecam.org/)
* Use [HTTPS Everywhere](https://www.eff.org/https-everywhere) and/or a VPN
* Be aware of [email spying ("read receipts" via tracking cookies)](https://www.theverge.com/2019/7/3/20681508/tracking-pixel-email-spying-superhuman-web-beacon-open-tracking-read-receipts-location) and block them

<!-- TODO: ways to take social, legal, collective action? -->
