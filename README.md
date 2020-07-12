# Atlassian Confluence Build Connect Open-Source Online Learning Platform 

# Problem
Since the global COVID-19 pandemic, a lot of people have lost their jobs or have pay cuts, hours reduced etc. and need to upskill and retrain in areas where it is high in demand but is accessible and affordable in a different learning style from traditional learning platforms using VR. Since the COVID-19 pandemic, there are a lot of free courses on demand but many apart from large corporations are scams so we want to have verified instructors with qualifications.


# Overview
The purpose of the application is to give jobseekers a chance to have a well qualified and verified instructors who know how to teach students remotely and with flexibility and accessibility available. We do not strive to be another traditonal university but rather a hybrid of community college and university, where students are coddled to a certain extent but take their own responsibility for their work by reminding them about assignments and due dates in emails weekly and what questions can be asked. There is also a live webinar weekly with web accessibility for different abilities. 

# How it works 

A trainer can upload his/her video by creating an account and quote the price for his training videos.A student will search the course he wants to learn and can enroll.
The payment will be done through Paypal or credit card and the payment will go directly to the trainer's account. The previe of each course will also be provided so that student can see the preview before buying.


# Tech used 

Atlassian Cloud
Front-End part is built with native JavaScript and using Atlassian Connect add-on library atlassian-connect-express.
This Back-end API is built with .NET Core 3.1, C#, Docker and AWS platform (ECS, Fargate, EC2, Route53 etc.).

External API's used:
GeoNames API for geocoding and timezones
IpInfoDb service for finding IP address of the client
mapbox API for working with maps
