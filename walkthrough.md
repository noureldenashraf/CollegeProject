# Wireframe HTML - Creation Walkthrough

## Overview
Created a complete wireframe version of **The Wellness Journey** application as a standalone HTML file with embedded CSS and JavaScript.

## What Was Built

### Wireframe Characteristics

✅ **Black and White Design** - Classic wireframe aesthetic with borders and dashed boxes
✅ **Component Annotations** - Each section includes explanatory text
✅ **Interactive Navigation** - Fully functional screen switching
✅ **All 5 Screens** - Complete representation of the application
✅ **Standalone File** - Single HTML file with embedded styles and scripts

---

## Screens Included

### 1. Home Screen
- Greeting header ("Good morning")
- Mood tracker with 3 buttons (Energized, Neutral, Sluggish)
- Floating Action Button (FAB)

### 2. Food Journal Screen
- Food input form (food name and calories)
- Sample food list with delete buttons
- Shows 3 example entries

### 3. Hydration Screen
- Water bottle visualization (with hatched pattern)
- Current water amount display
- Water increment controls (+250ml, +1 Glass)

### 4. Journey Screen
- Chart visualization placeholder
- Statistics display (Day Streak, Logged items)

### 5. Profile Screen
- **Login Form** - Email and password inputs
- **Sign Up Form** - Full name, email, password, confirm password
- **Toggle Between Forms** - Interactive link to switch views
- **Profile View** (shown in wireframe but not active by default):
  - User avatar circle
  - Settings toggles (Notifications, Dark Mode)
  - Goals display

---

## Wireframe Screenshots

### Home Screen
![Home Screen Wireframe](file:///C:/Users/peter/.gemini/antigravity/brain/e46984d3-338a-46f5-b013-71ba8e4601a5/home_screen_wireframe_1766173275077.png)

### Food Journal Screen
![Journal Screen Wireframe](file:///C:/Users/peter/.gemini/antigravity/brain/e46984d3-338a-46f5-b013-71ba8e4601a5/journal_screen_wireframe_1766173294941.png)

### Hydration Screen
![Hydration Screen Wireframe](file:///C:/Users/peter/.gemini/antigravity/brain/e46984d3-338a-46f5-b013-71ba8e4601a5/hydration_screen_wireframe_1766173309150.png)

### Journey Screen
![Journey Screen Wireframe](file:///C:/Users/peter/.gemini/antigravity/brain/e46984d3-338a-46f5-b013-71ba8e4601a5/journey_screen_wireframe_1766173326416.png)

### Profile Screen - Login
![Profile Login Wireframe](file:///C:/Users/peter/.gemini/antigravity/brain/e46984d3-338a-46f5-b013-71ba8e4601a5/profile_login_wireframe_1766173345530.png)

### Profile Screen - Sign Up
![Profile Signup Wireframe](file:///C:/Users/peter/.gemini/antigravity/brain/e46984d3-338a-46f5-b013-71ba8e4601a5/profile_signup_wireframe_1766173366388.png)

---

## Interactive Demo

![Wireframe Navigation Demo](file:///C:/Users/peter/.gemini/antigravity/brain/e46984d3-338a-46f5-b013-71ba8e4601a5/wireframe_demo_1766173261713.webp)

---

## Design Features

### Visual Elements

**Borders & Boxes**
- 3px solid black border for main container
- 2px dashed borders for component boxes
- 2px solid borders for interactive elements

**Typography**
- Arial font family (standard wireframe font)
- Clear hierarchy with different font sizes
- Annotations in italic gray text

**Layout**
- Mobile-first design (480px max width)
- Fixed bottom navigation (70px height)
- Flexible content area with scrolling

**Interactive Elements**
- Buttons with hover states
- Navigation with active state highlighting
- Form toggle functionality

---

## Technical Implementation

### File Structure
```
wireframe.html (Single file containing):
├── HTML Structure
│   ├── 5 Screen Sections
│   └── Bottom Navigation
├── Embedded CSS
│   ├── Wireframe Styling
│   ├── Component Styles
│   └── Interactive States
└── Embedded JavaScript
    ├── Screen Switching
    └── Form Toggle
```

### Key CSS Classes
- `.wireframe-container` - Main app container
- `.wireframe-screen` - Screen sections
- `.wireframe-box` - Component containers
- `.wireframe-btn` - Buttons
- `.wireframe-input` - Form inputs
- `.wireframe-nav` - Bottom navigation
- `.wireframe-annotation` - Explanatory text

### JavaScript Functions
- `switchScreen(screenName)` - Navigate between screens
- `toggleAuthForm()` - Switch between login and signup

---

## Use Cases

This wireframe is perfect for:

📋 **Documentation** - Visual reference for the application structure
🎨 **Design Reviews** - Discuss layout before implementing styles
👥 **Team Communication** - Share structure with stakeholders
📚 **Educational** - Teaching UI/UX concepts
🔧 **Planning** - Blueprint for development

---

## File Location

[wireframe.html](file:///e:/CS3/Semester1/Software_Engineering/project/nour/CollegeProject/wireframe.html)

Located in the same directory as the main application files.

---

## Verification

✅ All 5 screens display correctly
✅ Navigation works between all screens
✅ Form toggle functions properly
✅ Annotations are visible on all components
✅ Responsive layout maintains structure
✅ Standalone file requires no external dependencies

---

## Comparison with Original

| Feature | Original App | Wireframe |
|---------|-------------|-----------|
| **Styling** | Neumorphic, colorful | Black & white, minimal |
| **Interactivity** | Full functionality | Navigation only |
| **Purpose** | Production app | Design documentation |
| **Dependencies** | Separate CSS/JS files | Single HTML file |
| **Data** | localStorage | Static placeholders |
| **Animations** | Smooth transitions | Basic state changes |

---

## Summary

The wireframe HTML successfully represents the complete structure of The Wellness Journey application in a clean, documentation-friendly format. All screens, components, and navigation elements are included with clear annotations for easy understanding.
