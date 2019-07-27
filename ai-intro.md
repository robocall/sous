# Introduction to large-scale surveillance systems and how they work

In Guiyang, the police found a reporter using the city's facial-recognition-powered surveillance system in seven minutes. What technical, social, and legal infrastructure made this achievement possible?

First, physical infrastructure manifests itself as the familiar "eyes of big brother": surveillance cameras.

Second, everything that can be turned into data will be turned into data: Google Street View, the government's "multiple encounter deceased" dataset for facial recognition, scraping millions of Flickr photos online. "If you’re an adult in America, there’s more than a 50 percent chance that you’re already in a law enforcement facial recognition database, according to researchers at Georgetown." (Source: NYT [Facial Recognition Machine](https://www.nytimes.com/interactive/2019/04/16/opinion/facial-recognition-new-york-city.html))

Third, large-scale AI works by humans encoding community knowledge and norms. When you do a captcha or submit a Google form, you are helping train, say, a self-driving car to recognize what's a car and what's a road sign. Dataset labeling factories are becoming increasingly common (again, Guiyang, China is the frontier); they use people for their "minimum viable humanity" to extract and capture their value for the profit of the very few.

What happens after dataset labeling? Since humans label data, it encodes community knowledge and biases. For example, in facial recognition, datasets are labeled with one of few emotions. Modern models learn to map an input (a picture of a face) to an output (an emotion label) by a process of learning from their mistakes over and over on a dataset spanning millions or billions of examples. Then a trained emotion detection model might be deployed in, say, a surveillance camera to recognize anomalies in public space, for example if a person looks fearful or angry, it might make a decision to call police. Again, note that your ML algorithm is limited by your dataset! The result is that old instruments for looking and capture become lenses augmented by massive data and compute to encode certain ways of looking, and to enforce these norms on public space, like Esther Hovers' series "False Positives.

Who's being looked at? People and their faces and bodies are constantly being analyzed and dissected by algorithms. Your faceprint is everywhere. Facebook image labeling, unlocking your phone.

Who's looking? Other people. Often not the people you expect. Voyeurs in the NYPD; your neighbors; hackers in another country; and you. The gaze becomes a part of you, something you carry around inside you.

Lastly: follow the money! Surveillance is big business. China's biggest facial recognition startups, Dahua and Hikvision, are worth billions.

Now that we've dissected how the police were able to find a reporter in Guiyang in just seven minutes, let's look at how people are looking back. What can we, as individuals, do against these large institutional forces?

First, surveillance technologies are generally made by members of more privileged communities and targeted at members of more marginalized communities. Take ICE and immigrants, or NYPD and the city's Muslim community, as two examples.

Activists have proposed the idea of sousveillance to reverse the gaze, notably Simone Weil's "Dark Matters." Artists and academica have made attempts at mapping surveillance networks, controlling them with legislation or agreements, jamming them with individual actions. 

We propose to stage an intervention, inspired by these, but employing the same tactics of capture + control at scale that large-scale surveillance does. The next exercise will help us understand very concretely how people make datasets for ML models. It will also help us practice a critical way of seeing public space, work together to encode community knowledge, and help us hold surveillance technologies accountable.

---

Possible topics for people interested in diving more into the ML aspect:

* How does machine learning work
* How does computer vision work
* How does facial recognition work
* The lifecycle of building a model: dataset gathering, human annotation, training, testing, and deployment
* Issues of ethics/fairness/transparency/bias in AI creation and deployment
* How automated decision systems show up in real life (e.g. recommender systems, insurance, law, "predictive policing")
* What is an AI system? How are AI systems regulated?
* How ML/AI research is funded and where it's conducted
