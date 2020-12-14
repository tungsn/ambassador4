"use strict";

var Ambassador = function (countryCode, lastName,
    firstName, course, country, city,
    languages, testimonial, email, socialNetwork, pictureName, studyStart, studyEnd) {
    this.countryCode = countryCode;
    this.lastName = lastName;
    this.firstName = firstName;
    this.course = course;
    this.country = country;
    this.city = city;
    this.languages = languages;
    this.testimonial = testimonial;
    this.email = email;
    this.socialNetwork = socialNetwork;
    this.pictureName = pictureName;
    this.studyStart = studyStart;
    this.studyEnd = studyEnd;
};