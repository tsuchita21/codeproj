# Atlassian Confluence Build Connect Open-Source Online Learning Platform 

# Problem
Given the recent global COVID-19 pandemic, unemployment is at an all time high. A lot of people have either lost their jobs or are working with reduced works hours and pay cuts etc. Many students too around the world will have to defer their admission by a year or have to complete majority of their coursework virtually. This problem has lead to an opportunity to completely transform how people learn. There is an urgent and high demand to upskill and retrain in new job areas where it is high in demand. There is a need for unconventional, accessible and affordable learning platforms using VR.
But this learning transformation faces a challenge to safeguard the learners from scammers. A lot of new users who have never previously been active learners online will change their style of learning and are more prone to getting scammed and have a bad experience. Since the COVID-19 pandemic, there are a lot of free courses on demand but many apart from large corporations are scams. We propose to build a platform to only onboard verified instructors with qualifications.


# Overview
The goal of the platform is to give jobseekers a chance to have access to a well qualified and verified instructors who is competent to train them remotely, with flexibility and accessibility available. We do not strive to be another traditonal university but rather a hybrid of community college and university, where students are coddled to a certain extent but take their own responsibility for their work by reminding them about assignments and due dates in emails weekly and what questions can be asked. There is also a live webinar weekly with web accessibility for different abilities. 

# How it works 

A trainer can upload his/her video by creating an account and quote the price for his training videos. A student will search the course he wants to learn and can enroll. The payment will be done through Paypal or credit card and the payment will go directly to the trainer's account. The previe of each course will also be provided so that student can see the preview before buying.


# Tech used 

Atlassian Cloud
Front-End part is built with native JavaScript and using Atlassian Connect add-on library atlassian-connect-express.
This Back-end API is built with .NET Core 3.1, C#, Docker and AWS platform (ECS, Fargate, EC2, Route53 etc.).

External API's used:
GeoNames API for geocoding and timezones
IpInfoDb service for finding IP address of the client
mapbox API for working with maps
