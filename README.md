# React Modular Dialog Component

## React Task Description

- Create a dialog window component according to the following requirements:
- Separate individual components into their own files; the main dialog window component should act as a "Lego" assembly of these components.
- The dialog window component consists of 7 subcomponents:  
  **Button, ButtonGroup, IconAndText, Header, Content, Footer, and Dialog (main container).**
- The number of buttons in both the header and footer is variable and may differ between dialogs.
- An additional description/info in the footer is optional.
- The visual look-and-feel (colors, dimensions, styles) is not important.
- The dialog window should be statically centered on the screen with no possibility of movement.
- A demo application should be developed to showcase multiple dialog variations, e.g., dialogs with different numbers of header/footer buttons or footer info.

### Dialog Window Structure

1. **Main Dialog Window (Container)**
   - Statically centered on the screen
   - Cannot be moved

2. **Header**
   - Contains an icon and title
   - Contains a variable number of buttons

3. **Content**
   - Main area for dialog messages or interactive elements

4. **Footer**
   - Contains a variable number of buttons
   - Optional additional description/info

---

## Summary

A reusable, modular React dialog window composed of 7 subcomponents:

- **Button**  
- **ButtonGroup**  
- **IconAndText**  
- **Header**  
- **Content**  
- **Footer**  
- **Dialog** (main wrapper)  

Features include flexible composition, variable buttons in header/footer, optional footer info, and static center positioning.  

The demo app demonstrates basic, info, and complex dialogs with various configurations.

## Usage

Control the dialog visibility with React state and pass appropriate props for header, content, and footer.

---

## Test Cases Summary

Here are the unit test coverage highlights for all components using Testing Library and Vitest:

| Component      | Tested Aspects                                     |
| -------------- | ------------------------------------------------- |
| **Button**     | Renders children, handles `onClick`, passes extra props |
| **ButtonGroup**| Wraps children inside a div with `button-group` class |
| **IconAndText**| Renders text and optionally icon elements         |
| **Header**     | Renders title, icon, and a variable number of buttons |
| **Content**    | Renders children inside content container          |
| **Footer**     | Renders optional info and variable buttons          |
| **Dialog**     | Conditionally renders based on `isOpen`, composes header, content, footer |

These tests ensure component behavior, rendering logic, and composition integrity, making the dialog system robust and maintainable.

---

