# REMify

Tired of manually converting CSS units?  Say goodbye to pixel fatigue with REMify!

This handy extension takes the sting out of unit conversions, letting you focus on what matters: beautiful, pixel-perfect code. Simply select your pixel values, choose your target unit (rem or em), and voilà! REMify instantly transforms them, saving you precious time and mental energy.

No more juggling calculators or memorizing conversion rates. REMify does the heavy lifting for you, so you can keep your workflow flowing smoothly. Whether you're a seasoned pro or just starting out, REMify makes CSS unit conversion a breeze.

Give your fingers a break and let REMify take charge of your unit conversions. Download it today and experience the joy of effortless CSS!

[Download for Visual Studio Code](https://marketplace.visualstudio.com/items/kushagra-aa.remify)

## How to Use It

* Select one or more values(px,rem,em).
* Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> for Mac.
* Select the desired unit from dropdown

## Commands

* *Quick Convert: Expression*: Convert the selected value in the editor to a chosen unit using a dropdown menu.
* *Quick Convert: Selected Value*: Enter a value and unit conversion expression (e.g., "16px to rem") and receive the converted value automatically copied to your clipboard.

## Settings

You can change the default behavior of remify with the following settings.

To open VS Code settings, click the "gear" icon > then "Settings"
or
Press <kbd>Ctrl/Cmd</kbd>+<kbd>,</kbd>

### Available settings

* `remify.baseFontSize` -  The base font size of the project.

### Defaults

 ```json
 {
    "remify.baseFontSize": "16px",
 }
 ```

## Contributing

Please create an issue on GitHub if you experience a bug.
I also welcome pull requests.

Read [Contribution Guide](./contribution.md)

## Repository & Feedback

Please report issues related to this extension on the repository page.

[GitHub Repository](https://github.com/kushagra-aa/remify)

## Developer Information

Kushagra Agnihotri

Please Visit [Here](https://kushagra-aa.vercel.app/) for additional information
