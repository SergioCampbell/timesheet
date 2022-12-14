# 🚀 Timesheet project!
[![Screenshot-2022-11-15-at-19-59-44-React-with-Webpack.png](https://i.postimg.cc/d3v6LNzM/Screenshot-2022-11-15-at-19-59-44-React-with-Webpack.png)](https://postimg.cc/34Smq189)


This project has been created using **webpack-cli**, **typescript** and **react**.

Before start you have to run this commnad to install all dev dependencies ``npm install`` 

it's important to validate because there are some loader to convert typescript code to javascript code.

Once installed run this command to start locally:

now you can run ``npm run dev``

and to bundle the application run ``npm run build`` or ``yarn build``


## Notes

The company offers their employees the flexibility to work the hours they want. They will pay for the hours worked based on the day of the week and time of day, according to the following table:

```
Monday - Friday

00:01 - 09:00 25 USD

09:01 - 18:00 15 USD

18:01 - 00:00 20 USD

Saturday and Sunday

00:01 - 09:00 30 USD

09:01 - 18:00 20 USD

18:01 - 00:00 25 USD
```

The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times during which they worked. The following abbreviations will be used for entering data:

```
MO: Monday

TU: Tuesday

WE: Wednesday

TH: Thursday

FR: Friday

SA: Saturday

SU: Sunday
```

Input: the name of an employee and the schedule they worked, indicating the time and hours.

Output: indicate how much the employee has to be paid

For example:

Case 1:

INPUT

```RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00```

OUTPUT:

``The amount to pay RENE is: 215 USD``

Case 2:

INPUT

``ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00``

OUTPUT:

``The amount to pay ASTRID is: 85 USD``


